<template>
  <div id="contacts">
    <div class="content">
      <div class="map">
        <div class="map-iframe">
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3A8ae73c39fc26d52134e3a8f850b2299cbca9523aa8438b66acbd8c1738fda1fb&amp;source=constructor"
            width="568" height="446" frameborder="0">
          </iframe>
        </div>
      </div>
      <div class="text">
        <h2>Контакты</h2>
        <div>
          <div class="title">Телефон: </div>
          <NuxtLink :href="`tel:+79953482605`" target="_blank">
            +7 (995) 348-26-05
          </NuxtLink>
        </div>
        <div>
          <div class="title">Почта: </div>
          <NuxtLink href="mailto:lezvie.barbershop56@gmail.com" target="_blank">
            lezvie.barbershop56@gmail.com
          </NuxtLink>
        </div>
        <div>
          <div class="title">Адрес:</div>
          <NuxtLink href="https://yandex.ru/maps/-/CDVQfU1f" target="_blank">
            Оренбург, пр. Гагарина, 48/1<br />Здание ТЦ "Радуга" (вход с торца)
          </NuxtLink>
        </div>
        <div>
          <div class="title">Время работы:</div>
          <div class="time">10:00 - 20:00 каждый день</div>
        </div>
        <div>
          <a href="https://n1110926.yclients.com/">
            <CommonButton class="btn-tel">
              Записаться
            </CommonButton>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactsSections",
  setup() {
    const addressId = ref(0);
    const contacts = [
      {
        tel: "+7 (995) 348-26-05",
        telHref: "79953482605",
        address: "Оренбург, ул. Березка 2/5",
        addressLink: "https://yandex.ru/maps/-/CXcvBnt",
      },
      {
        tel: "+7 (995) 928-45-26",
        telHref: "79959284526",
        address: "Оренбург, пр. Гагарина, 48/1",
        addressLink: "https://yandex.ru/maps/-/CDVQfU1f",
      },
    ];


    return {
      contacts,
      addressId,
    };
  },
});
</script>

<style lang="scss" scoped>
#contacts {
  background-color: #000;
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

        >iframe {
          width: 100%;
          height: 100%;
        }
      }
    }

    .text {
      flex: 4;
      color: #c7c7c7;
      line-height: 1.5rem;

      >* {
        font-weight: 100;
        margin-bottom: 1rem;
      }

      .address-radios {
        display: flex;

        label {
          padding: 5px 25px;
          border: 1px solid grey;
          margin-bottom: 1rem;
          cursor: pointer;
          transition:
            background-color 0.5s ease,
            color 0.5s ease;

          &.checked {
            background-color: rgb(255, 217, 0);
            color: black;
          }

          &:first-child {
            border-radius: 5px 0 0 5px;
          }

          &:last-child {
            border-radius: 0 5px 5px 0;
          }
        }
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
        margin-bottom: 2rem;

        >* {
          font-weight: 100;
        }


        .title {
          letter-spacing: 3px;
        }
      }
    }
  }
}
</style>
