import { YCLIENTS_BEARER_CODE, YCLIENTS_COMPANY_ID, YCLIENTS_LOGIN, YCLIENTS_PASSWORD, YCLIENTS_USER } from "~/constants/yclient-api";

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
      "Content-Type": "application/json",
      Authorization: `Bearer ${YCLIENTS_BEARER_CODE}, User ${user_token}`,
      Accept: "application/vnd.api.v2+json",
    },
  };

  return await $fetch(
    `https://api.yclients.com/api/v1/company/${YCLIENTS_COMPANY_ID}/staff`,
    fetchGoodsParams,
  ).then((res: { data: ApiGoodsDataResponse[] }) => res.data);


});
