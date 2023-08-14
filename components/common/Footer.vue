<template>
  <footer>
    <div class="content">
      <div>
        <a href="tel:+79953482605" target="_blank"> +7 (995) 348-26-05 </a>
      </div>
      <div class="logo">
        <span class="gothic-font">lezvie</span>
        <img src="/svg/lezvie.svg" alt="лезвие" width="30px" />
        <span class="gothic-font">barbershop</span>
      </div>
      <div>
        <a href="https://yandex.ru/maps/-/CXcvBnt" target="_blank">
          ул. Березка 2/5
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style lang="scss" scoped>
footer {
  background-color: #0f0f0f;
  padding: 2rem;

  .content {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-weight: 100;

      @media screen and (max-width: 700px) {
        display: none;
      }
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 2px;

      > span {
        &:first-child {
          text-align: right;
          width: 90px;
        }
      }
    }
  }
}
</style>
