import {
  YCLIENTS_BEARER_CODE,
  YCLIENTS_COMPANY_ID,
  YCLIENTS_LOGIN,
  YCLIENTS_PASSWORD,
  YCLIENTS_USER,
} from "~/constants/yclient-api";

export type ApiGoodsDataResponse = {
  title: string;
  value: string;
  label: string;
  article: string;
  category: string;
  category_id: number;
  salon_id: number;
  good_id: number;
  cost: number;
  unit_id: number;
  unit_short_title: string;
  service_unit_id: number;
  service_unit_short_title: string;
  actual_cost: number;
  unit_actual_cost: number;
  unit_actual_cost_format: string;
  unit_equals: 1;
  barcode: "";
  loyalty_abonement_type_id: number;
  loyalty_certificate_type_id: number;
  loyalty_allow_empty_code: number;
  actual_amounts: [
    {
      storage_id: number;
      amount: number;
    },
    {
      storage_id: number;
      amount: number;
    },
  ];
  critical_amount: number;
  desired_amount: number;
  last_change_date: string;
  is_goods_mark_enabled: boolean;
};

type ApiGoodsSortByCategories = Record<
  ApiGoodsDataResponse["category_id"],
  { goods: ApiGoodsDataResponse[]; category: string }
>;

export default defineEventHandler(async () => {
  const fetchAuthOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${YCLIENTS_BEARER_CODE}, User ${YCLIENTS_USER}`,
      Accept: "application/vnd.api.v2+json",
    },
    body: JSON.stringify({
      login: YCLIENTS_LOGIN,
      password: YCLIENTS_PASSWORD,
    }),
  };

  // auth - get user token
  const {
    data: { user_token },
  } = await $fetch("https://api.yclients.com/api/v1/auth", fetchAuthOptions);

  const fetchGoodsParams = {
    method: "GET",
    headers: {
      Authorization: `Bearer 4b3ejf6ra2ye6tfdnez5, User ${user_token}`,
      Accept: "application/vnd.api.v2+json",
    },
  };

  return await $fetch(
    `https://api.yclients.com/api/v1/goods/${YCLIENTS_COMPANY_ID}`,
    fetchGoodsParams,
  ).then((res: { data: ApiGoodsDataResponse[] }) => sortByCategories(res.data));
});

const orderCategories = [
  "Укладочные средства",
  "Уход за бородой",
  "Дополнительно",
];

function sortByCategories(
  data: ApiGoodsDataResponse[],
): ApiGoodsSortByCategories {
  const unsortedData = data.reduce((apiGoodsSortByCategories, good) => {
    if (good.category in apiGoodsSortByCategories) {
      apiGoodsSortByCategories[good.category].push(good);
    } else {
      apiGoodsSortByCategories[good.category] = [good];
    }

    return apiGoodsSortByCategories;
  }, {});

  const res = Object.keys(unsortedData)
    .sort((a, b) => sortF(a, b))
    .reduce((apiGoodsSortByCategories, key) => {
      apiGoodsSortByCategories[key] = unsortedData[key];
      return apiGoodsSortByCategories;
    }, {});

  console.log("RES", res);
  return res;
}

function sortF(a: string, b: string) {
  if (orderCategories.indexOf(a) > orderCategories.indexOf(b)) {
    return 1;
  }
  return -1;
}
