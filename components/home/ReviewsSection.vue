<template>
  <section>
    <div class="wrapper">
      <h2>Отзывы о нас</h2>
      <div class="scroller">
        <div class="review">
          <NuxtLink :href="getLink(review.source)" v-for="(review, idx) in data" :key="idx" target="_blank">
            <div class="card">
              <div class="stars">
                <NuxtImg src="/svg/star.svg" alt="star" width="20px" />
                <NuxtImg src="/svg/star.svg" alt="star" width="20px" />
                <NuxtImg src="/svg/star.svg" alt="star" width="20px" />
                <NuxtImg src="/svg/star.svg" alt="star" width="20px" />
                <NuxtImg src="/svg/star.svg" alt="star" width="20px" />
              </div>

              <div class="content">
                <p>{{ review.text }}</p>
                <div class="footer">
                  <p class="author">{{ review.author }}</p>
                  <p class="source" v-if="review.source === Yandex">
                    <NuxtImg src="/images/reviews/ya-map.png" alt="Яндекс карты" width="18px" />
                    <span>Яндекс</span>
                  </p>
                  <p class="source" v-else>
                    <NuxtImg src="/images/reviews/2gis.png" alt="2гис" width="18px" />
                    <span>2Гис</span>
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ReviewsSource } from "~/components/home/types/reviews";
import type { ReviewsData } from "~/components/home/types/reviews";
export default defineComponent({
  name: "ReviewsSection",
  setup() {
    function getLink(reviewsSource: ReviewsSource) {
      switch (reviewsSource) {
        case ReviewsSource.Yandex:
          return "https://yandex.ru/maps/48/orenburg/search/lezvie%20barbershop/?ll=55.156046%2C51.801215&sll=55.156046%2C51.801215&sspn=0.170339%2C0.084547&z=12.48";
        case ReviewsSource.DoubleGis:
          return "https://2gis.ru/orenburg/branches/70000001076934354?m=55.176322%2C51.787342%2F11.77";
      }
    }

    const data: ReviewsData[] = [
      {
        text: "Супер мастера. Рекомендую. Стараются угодить любому клиенту. Зайдя один раз будете возвращаться ни один раз.",
        author: "Марк Абрамов",
        source: ReviewsSource.DoubleGis,
      },
      {
        text: "Место отличное, сделали стрижку на высшем уровне, а что самое главное, быстро и качествнно. Теперь буду чаще стричься.",
        author: "Дмитрий З.",
        source: ReviewsSource.Yandex,
      },
      {
        text: "Все здорово! Поорал чаечкой в очередной раз с цирюльником, чуть не согласился впервые на покраску волос 😂. По итогу, я доволен! Хорошее Место - Хороший Человек!",
        author: "Кир Чудинов",
        source: ReviewsSource.DoubleGis,
      },
      {
        text: "Крутая атмосфера, хорошие мастера своего дела, отлично постригли обязательно приду еще раз! Приятная музыка и беседа.",
        author: "Дмитрий Влачнев",
        source: ReviewsSource.DoubleGis,
      },
      {
        text: "Отличное место, мастера знают и любят свое дело. Приятная атмосфера и высокое качество оказываемых услуг. Однозначно советую)",
        author: "Иван А.",
        source: ReviewsSource.Yandex,
      },
      {
        text: "Все супер, приятная атмосфера, вежливый персонал, был у ребят первый раз и буду приходить ещё",
        author: "Евгений Т.",
        source: ReviewsSource.Yandex,
      },
    ];

    return {
      data,
      Yandex: ReviewsSource.Yandex,
      getLink,
    };
  },
});
</script>

<style>
section {
  background-color: #181a1b;

  .wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 1rem;

    .scroller {
      overflow-x: scroll;
      padding: 1rem;
      margin-top: 2rem;

      .review {
        display: flex;
        flex-wrap: nowrap;
        gap: 1rem;

        .card {
          background-color: #000;
          border-radius: 1rem;
          max-width: 200px;
          min-width: 200px;
          padding: 1rem;
          box-shadow: 0 0 10px 10px rgb(34, 34, 34);

          .stars {
            margin-bottom: 0.5rem;
          }

          .author {
            padding-top: 2rem;
            color: rgb(186, 186, 186);
          }

          .source {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
