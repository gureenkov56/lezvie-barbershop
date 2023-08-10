<template>
  <div class="contacts">
    <div class="content">
      <div class="map">
        <div class="map-iframe">
          <a
            href="https://yandex.ru/maps/org/lezviye/10932414914/?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 0"
            >Лезвие</a
          ><a
            href="https://yandex.ru/maps/48/orenburg/category/barber_shop/239628851835/?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 14px"
            >Барбершоп в Оренбурге</a
          >
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=55.135349%2C51.825035&mode=search&oid=10932414914&ol=biz&z=16.85"
            frameborder="1"
            allowfullscreen="true"
            style="position: relative"
          >
          </iframe>
        </div>
      </div>
      <div class="text">
        <h2>Контакты</h2>
        <div>
          <span class="title">Телефон: </span>
          <a href="tel:+79953482605" target="_blank"> +7 (995) 348-26-05 </a>
        </div>
        <div>
          <span class="title">Почта: </span>
          <a href="mailto:lezvie.barbershop56@gmail.com" target="_blank">
            lezvie.barbershop56@gmail.com
          </a>
        </div>
        <div class="adressAndTime">
          <div>
            <div class="title">Адрес:</div>
            <a href="https://yandex.ru/maps/-/CXcvBnt" target="_blank">
              Оренбург, ул. Березка 2/5
            </a>
          </div>
          <div>
            <div class="title">Время работы:</div>
            <div class="time">10:00 - 20:00 каждый день</div>
          </div>
        </div>
        <a href="https://b941152.yclients.com/" target="_blank">
          <CommonButton />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactsSections",
});
</script>

<style lang="scss" scoped>
.contacts {
  background-image: url("/images/contacts-bg.jpg");
  background-size: cover;
  background-position: center;

  padding: 3rem 1rem;

  .content {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    gap: 2rem;

    @media screen and (max-width: 700px) {
      max-width: 400px;
    }

    .map {
      flex: 5;
      background-color: #ccc;
      position: relative;

      @media screen and (max-width: 700px) {
        display: none;
      }

      .map-iframe {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;

        > iframe {
          width: 100%;
          height: 100%;
        }
      }
    }

    .text {
      flex: 4;
      color: #c7c7c7;
      line-height: 1.5rem;

      > * {
        font-weight: 100;
      }

      a,
      .time {
        color: #e3e3e3;
        font-weight: 400;
      }

      h2 {
        font-weight: 800;
        letter-spacing: 3px;
        margin-bottom: 1rem;
        color: white;
      }

      .title {
        font-weight: 500;
        color: white;
      }

      .adressAndTime {
        margin-top: 3rem;
        margin-bottom: 2rem;

        > * {
          font-weight: 100;
        }

        > div {
          margin-top: 1rem;
        }
        .title {
          letter-spacing: 3px;
        }
      }
    }
  }
}
</style>
