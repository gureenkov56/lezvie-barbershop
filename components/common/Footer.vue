<template>
  <footer>
    <div class="content">
      <div>
        <NuxtLink href="tel:+79953482605" target="_blank">
          +7 (995) 348-26-05
        </NuxtLink>
      </div>
      <div class="logo">
        <span class="ru-font">лезвие</span>
        <NuxtImg src="/svg/lezvie.svg" alt="лезвие" width="30px" />
        <span class="ru-font">барбершоп</span>
      </div>
      <div>
        <NuxtLink href="https://yandex.ru/maps/-/CXcvBnt" target="_blank">
          ул. Березка 2/5
        </NuxtLink>
      </div>
    </div>
    <div class="official-info">
      <div>
        ИП НЕКРАСОВА НАТАЛЬЯ ОЛЕГОВНА; 
        ИНН 561010370491; 
        ОГРНИП 325565800090376; 
        <a href="mailto:Nat.nakrasowa56@mail.ru">
          Nat.nakrasowa56@mail.ru
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

  .official-info {
    margin-top: 2rem;
    text-align: center;
    font-size: 10px;

    a {
      color: #cd9323;
      text-decoration: underline;
    }
  }
}
</style>
