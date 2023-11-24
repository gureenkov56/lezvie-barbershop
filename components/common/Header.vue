<template>
  <header>
    <Head>
      <Title>LEZVIE BARBERSHOP — стрижки в Оренбурге</Title>
      <Meta
        name="description"
        content="Мужские стрижки в Оренбурге. Профессиональная косметика, лучшие мастера, индивидуальный стиль в барбершопе Лезвие"
      />
      <Meta name="theme-color" content="#0f0f0f" />
    </Head>
    <nav>
      <ul>
        <li>
          <a href="#first">Главная</a>
        </li>
        <li>
          <a href="#price"> Цены </a>
        </li>
        <li class="space"></li>
        <li>
          <a href="#contacts"> Контакты </a>
        </li>
        <li>
          <a href="#whyus"> О нас </a>
        </li>
      </ul>
    </nav>
    <div class="label">
      <div class="triangle"></div>
      <div class="triangle right"></div>
      <div class="content">
        <img src="/svg/lezvie.svg" alt="lezvie" />
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
});
</script>

<style lang="scss">
header {
  background-color: #0f0f0f;
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
