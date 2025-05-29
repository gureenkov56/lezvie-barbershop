<template>
  <div>
    <div id="first">
      <slot>
        <div v-if="!isMobile"></div>
        <div class="center-block">
          <h1>
            <span class="lezvie gothic-font">LEZVIE</span>
            <span class="barbershop gothic-font">BARBERSHOP</span>
            <span class="since">с 2023 в Оренбурге</span>
          </h1>
          <span class="image-row">
            <NuxtImg src="/svg/nozhnici.svg" alt="nozhnici" class="nozhnici" />
            <NuxtImg src="/svg/lezvie.svg" alt="lezvie" />
            <NuxtImg src="/svg/britva.svg" alt="britva" />
          </span>
        </div>
        <div class="buttons">
          <div>
            <!-- <a -->
            <!--   href="https://b941152.yclients.com/select-city/116/select-branch/" -->
            <!--   target="_blank" -->
            <!-- > -->
            <!-- <CommonButton class="btn-online"> -->
            <!--   Записаться онлайн -->
            <!-- </CommonButton> -->
            <!-- </a> -->
          </div>
          <div>
            <CommonButton class="btn-tel" @click="showModal">
              Записаться
            </CommonButton>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "~/components/common/Header.vue";
import { useModalStore } from "~/store/useModalStore";

export default defineComponent({
  name: "index",
  components: { Header },
  setup() {
    const store = useModalStore();
    const { showModal } = store;

    const isMobile = computed(() => window.innerWidth <= 700);

    return {
      showModal,
      isMobile,
    };
  },
});
</script>

<style lang="scss" scoped>
#first {
  height: 100vh;
  background-image: url("/images/lezvie-first-blur.jpg");
  background-size: cover;
  background-position: center;
  background-color: #ccc;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;

  .center-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      text-transform: uppercase;
      color: #fac;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      > * {
        display: block;
      }

      .lezvie {
        letter-spacing: 5px;
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 1.8rem;

        &::before,
        &::after {
          content: "";
          display: block;
          width: 15px;
          height: 2px;
          background: white;
        }
      }

      .barbershop {
        font-size: 3rem;
        letter-spacing: 1rem;

        @media screen and (max-width: 400px) {
          font-size: 2.5rem;
          letter-spacing: 0.8rem;
        }

        &::before {
          content: "";
          display: block;
          height: 0.5px;
          background: white;
          margin: 5px 0;
        }
      }

      .since {
        font-size: 1.3rem;
        font-weight: 100;
        letter-spacing: 2px;

        @media screen and (max-width: 400px) {
          font-size: 1rem;
        }

        &::after {
          content: "";
          display: block;
          background-color: #fff;
          height: 0.5px;
          margin: 3px 0;
        }
      }
    }

    .image-row {
      margin: 0 auto;
      > * {
        width: 30px;
        margin: 10px 10px;
      }

      .nozhnici {
        transform: rotate(-90deg);
      }
    }
  }

  .buttons {
    > div {
      margin: 0 1rem;
    }
    button {
      display: block;
      width: 100%;
      padding: 10px 10px;
      margin-top: 1rem;
    }

    .btn-online {
      padding: 20px 10px;
    }

    .btn-tel {
      padding: 20px 10px;
      > div {
        font-size: 0.9rem;
        color: rgb(205, 203, 199);
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
