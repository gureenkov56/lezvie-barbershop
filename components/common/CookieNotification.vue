<template>
  <div :class="classes">
    <NuxtImg src="/images/cookies.png" />
    <div>
      Продолжая использовать сайт, Вы соглашаетесь с обработкой персональных
      данных, собираемых посредством метрический программы «Яндекс.Метрика». в
      целях аналитики посещаемости сайта.
      <a href="https://disk.yandex.ru/i/51W4F91OtzD00w">
        Политика конфиденциальности
      </a>
    </div>
    <div class="options">
      <CommonButton @click="acceptCookies">Ok</CommonButton>
      <a href="http://google.com">Не согласен — выйти</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const cookieAccepted = useCookie("cookie-accepted");

function acceptCookies() {
  cookieAccepted.value = "true";
}

const classes = computed(() => ({
  "cookie-notification": true,
  hide: !!cookieAccepted.value,
}));
</script>

<style lang="scss" scoped>
.cookie-notification {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px 20px;
  border-radius: 8px 8px 0 0;
  align-items: center;
  width: 90%;
  max-width: 600px;
  font-size: 12px;
  z-index: 1000;

  &.hide {
    display: none;
  }

  @media screen and (min-width: 600px) {
    display: flex;
    gap: 15px;
  }

  div {
    margin: 10px 0;

    a {
      color: #ffd700;
      text-decoration: underline;
    }
  }

  img {
    width: 24px;
    height: 24px;
  }

  .options {
    text-align: center;

    > * {
      display: block;
    }

    a {
      margin-top: 10px;
    }
  }
}
</style>

