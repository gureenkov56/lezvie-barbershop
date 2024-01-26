<template>
  <div id="CosmeticsShop">
    <div class="content">
      <h2>Косметика</h2>
      <p class="description">
        У нас вы можете купить профессиональную уходовую косметику. Ваш барбер
        поможет подобрать то что подойдет именно Вам!
      </p>
      <div class="goods">
        <div
          v-for="(goods, key) in apiGoodsSortByCategories"
          :key="key"
          class="category"
        >
          <h3>{{ key }}</h3>
          <div class="category__goods">
            <div 
              v-for="{ title, cost, good_id } in goods" 
              :key="good_id"
              class="good"
            >
              <div class="image">
                <img :src="getImage(good_id)" alt="картинка товара" />
              </div>
              <div class="info">
                <h4 class="title">{{ title }}</h4>
                <div class="price">{{ cost }} ₽</div>
                <div class="in-stock">✓ В наличии</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ApiGoodsDataResponse } from "~/server/api/yclients-goods";
import { GOODS_ART_IMG_MAP } from "~/constants/GOODS_ART_IMG_MAP";

export default defineComponent({
  name: "CosmeticsShop",
  async setup() {
    const { data: apiGoodsSortByCategories } =
      await useFetch<ApiGoodsDataResponse[]>("/api/yclients-goods");

    function getImage(goodId: keyof typeof GOODS_ART_IMG_MAP) {
      const image = GOODS_ART_IMG_MAP[goodId] || "default.png";
      return "/images/goods/" + image;
    }

    return {
      apiGoodsSortByCategories,
      getImage,
    };
  },
});
</script>

<style lang="scss">
#CosmeticsShop {
  background-color: #181a1b;
  padding: 3rem 1rem 3rem 1rem;

  .content {
    max-width: 900px;
    margin: 0 auto;

    .description {
      margin: 1rem 0;
    }

    .goods {
      padding: 1rem 10px;
      max-width: 100%;
      overflow-x: scroll;
      display: flex;
      gap: 2rem;

      .category {
        //box-shadow: 0 0 10px 0 #545454;
        border-radius: 1rem;
        position: relative;
        //padding: 1rem;
        h3 {
          margin-bottom: 1rem;
          display: block;
          width: 250px;
          position: sticky;
          left: 0;
        }
        &__goods {
          display: flex;
          gap: 1rem;
        }

        .good {
          border-radius: 1rem;
          min-width: 250px;
          min-height: 250px;
          background-color: #0b0d0e;

          .image {
            > img {
              width: 100%;
              height: 200px;
              object-fit: cover;
              border-radius: 1rem 1rem 0 0;
            }
          }

          .info {
            padding: 1rem;

            .title {
              height: 40px;
            }

            .price {
              color: #cd9323;
              padding: 1rem 0 0.5rem;
            }

            .in-stock {
              color: #00dc82;
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
}
</style>
