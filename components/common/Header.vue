<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink href="/">Главная</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/#price"> Цены </NuxtLink>
        </li>
        <li class="space"></li>
        <li>
          <NuxtLink href="/barber-course">Обучение</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/#contacts"> Контакты </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="label">
      <div class="triangle"></div>
      <div class="triangle right"></div>
      <div class="content">
        <NuxtImg src="/svg/lezvie.svg" alt="lezvie" />
        <div>
          <div class="lezvie gothic-font">LEZVIE</div>
          <div class="barbershop gothic-font">BARBERSHOP</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  head() {
    // `head` receives the nuxt app but cannot access the component instance
    return {
      meta: [
        {
          name: "description",
          content: "This is my page description.",
        },
      ],
    };
  },
  setup() {
    const headerLinks = [
      {
        text: "Главная",
        link: "",
      },
    ];

    return {
      headerLinks,
    };
  },
});
</script>

<style lang="scss">
header {
  background-color: #0f0f0f;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  &.hide {
    display: none;
  }

  @media screen and (max-width: 700px), screen and (max-height: 500px) {
    display: none;
  }

  nav {
    margin: 0 auto;
    letter-spacing: 0.08rem;
    font-size: 14px;
    max-width: 900px;
    padding: 0.5rem 0;

    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-around;
      text-align: center;
    }

    li {
      margin: 1rem;
      width: 100px;
    }

    .space {
      display: block;
      width: 130px;
      background-color: #fac;
    }
  }

  .label {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 130px;
    background: #f4b63d;

    text-align: center;

    .content {
      position: relative;
      margin-bottom: 1rem;
      img {
        width: 35px;
        margin-top: 0.3rem;
        font-weight: 600;
      }

      .lezvie {
        font-size: 32px;
        letter-spacing: 0.23rem;
      }

      .barbershop {
        font-size: 20px;
        letter-spacing: 0.05rem;
      }
    }

    .triangle {
      position: absolute;
      top: 97px;
      border-width: 25px 65px;

      border-style: solid;
      border-color: transparent transparent transparent #f4b63d;
    }

    .right {
      border-color: transparent #f4b63d transparent transparent;
    }
  }
}
</style>
