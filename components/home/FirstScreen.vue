<template>
  <div>
    <CommonHeader />
    <div class="first">
      <div></div>
      <div class="center-block">
        <h1>
          <span class="lezvie gothic-font">LEZVIE</span>
          <span class="barbershop gothic-font">BARBERSHOP</span>
          <span class="since">с 2023 в Оренбурге</span>
        </h1>
        <span class="image-row">
          <img src="/svg/nozhnici.svg" alt="nozhnici" class="nozhnici" />
          <img src="/svg/lezvie.svg" alt="lezvie" />
          <img src="/svg/britva.svg" alt="britva" />
        </span>
      </div>
      <a href="https://b941152.yclients.com/" target="_blank">
        <CommonButton />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "~/components/common/Header.vue";

export default defineComponent({
  name: "index",
  components: { Header },
});
</script>

<style lang="scss" scoped>
.first {
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
}
</style>
