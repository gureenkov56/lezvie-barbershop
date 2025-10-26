<template>
  <header :class="isMenuOpen && 'active'">
    <div class="label">
      <div class="triangle"></div>
      <div class="triangle right"></div>
      <div class="content">
        <NuxtImg src="/svg/lezvie.svg" alt="lezvie" />
        <div>
          <div class="lezvie ru-font">ЛЕЗВИЕ</div>
          <div class="barbershop ru-font">БАРБЕРШОП</div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <ul>
        <li v-for="{ text, link } in mobileMenu">
          <span @click="handlerMobileMenuLink(link)">
            {{ text }}
          </span>
        </li>
        <li>
          <CommonButton class="special btn-tel" @click="showModal">
            Записаться
          </CommonButton>
        </li>
      </ul>
    </div>
    <div class="mobile-btn" @click="isMenuOpen = !isMenuOpen">
      <div class="wrapper">
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { useRouter } from "vue-router";
import { useModalStore } from "~/store/useModalStore";

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
    const mobileMenu = [
      {
        text: "Главная",
        link: "/#first",
      },
      {
        text: "Обучение",
        link: "/barber-course",
      },
      {
        text: "Контакты",
        link: "/#contacts",
      },
    ];

    const isMenuOpen = ref(false);

    const router = useRouter();
    const route = useRoute();
    function handlerMobileMenuLink(link: string) {
      console.log("link", link);
      console.log("route.name", route.name);
      if (route.name === "index" || link.includes(route.name)) {
        isMenuOpen.value = false;
      }

      router.push(link);
    }

    function removeScrollDisablingClass() {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("disable-page-scroll");

      document.body.classList.remove("disable-page-scroll");
    }

    watch(isMenuOpen, () => {
      console.log("WATCH");
      if (isMenuOpen.value) {
        document
          .getElementsByTagName("html")[0]
          .classList.add("disable-page-scroll");

        document.body.classList.add("disable-page-scroll");
      } else {
        removeScrollDisablingClass();
      }
    });

    const store = useModalStore();
    const { showModal } = store;
    onMounted(() => {
      removeScrollDisablingClass();
    });

    return {
      showModal,
      isMenuOpen,
      mobileMenu,
      handlerMobileMenuLink,
    };
  },
});
</script>

<style lang="scss">
.disable-page-scroll {
  // for html, body
  overflow: hidden;
}
header {
  background-color: #0f0f0f;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  &.hide {
    display: none;
  }

  .mobile,
  .mobile-btn {
    display: none;
  }

  @media screen and (max-width: 700px), screen and (max-height: 500px) {
    position: fixed;

    top: 90vh;
    right: 3rem;
    left: 100%;
    bottom: 2rem;
    text-align: center;

    overflow: hidden;

    transition: all 0.4s ease-in;
    transition-delay: 0.2s;

    border-radius: 10px;

    ul li {
      list-style-type: none;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      opacity: 0;
      margin-top: 1rem;

      transition:
        opacity 0.2s ease-in,
        margin-top 0.3s ease-in;

      .special {
        color: #cd9323;
      }

      span {
        cursor: pointer;
      }
    }

    nav,
    .label {
      display: none;
    }

    .mobile {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
    }

    .mobile-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0f0f0f;
      position: fixed;
      bottom: 3rem;
      right: 2rem;

      width: 70px;
      height: 70px;
      border: none;
      border-radius: 100px;

      .wrapper {
        height: 22px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        transition: all 0.4s ease-in;

        div {
          transition: all 0.4s ease-in;
          background-color: #fff;
          width: 22px;
          height: 2px;
        }
      }
    }

    &.active {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition-delay: 0s;

      li {
        opacity: 1;
        margin-top: 0;
        transition-delay: 0.4s;
      }

      .mobile-btn {
        .wrapper {
          gap: 0;

          div {
            transition-delay: 0.5s;
          }

          .top {
            transform: rotate(45deg);
          }

          .middle {
            transition-delay: 0s;
            opacity: 0;
          }

          .bottom {
            transform: rotate(-45deg);
            margin-top: -4px;
          }
        }
      }
    }
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
        font-size: 25px;
        letter-spacing: 0.23rem;
      }

      .barbershop {
        font-size: 20px;
        letter-spacing: 0.05rem;
      }
    }

    .triangle {
      position: absolute;
      top: 95px;
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
