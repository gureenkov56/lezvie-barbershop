<template>
  <footer>
    <div class="content">
      <div>
        <NuxtLink href="tel:+79953482605" target="_blank">
          +7 (995) 348-26-05
        </NuxtLink>
      </div>
      <div>
        <NuxtLink href="https://yandex.ru/maps/-/CXcvBnt" target="_blank">
          пр. Гагарина, 48/1
        </NuxtLink>
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

      >span {
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
