<template>
  <div id="instagram">
    <div class="content">
      <div class="text">
        <h2>Будь с нами в Instagram'e</h2>
        <p>🥳 Выигрывай подарки в регулярных розыгрышах</p>
        <p>✨ Полезные советы об уходовых средствах</p>
        <p>🤩 Будь в курсе новых акций</p>
        <NuxtLink
          href="https://instagram.com/barbershop.lezvie"
          class="instagram-login"
          target="_blank"
        >
          <button class="instagram-login-btn">@barbershop.lezvie</button>
        </NuxtLink>
        <NuxtLink
          href="https://instagram.com/barbershop.lezvie"
          target="_blank"
        >
          <button class="follow-btn">Подписаться</button>
        </NuxtLink>
      </div>
      <div class="image">
        <NuxtImg src="/images/instagram-in-iphone.png" alt="Instagram" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InstagramSection",
});
</script>

<style lang="scss">
#instagram {
  padding: 3rem 1rem 0 1rem;
  background-color: #181a1b;

  .content {
    max-width: 900px;
    margin: 0 auto;

    display: flex;
    justify-content: space-around;
    gap: 4rem;

    @media screen and (max-width: 750px) {
      flex-direction: column;
    }

    .text {
      flex: 1;
      margin-bottom: 2rem;
      p {
        margin: 1rem 0;
        max-width: 500px;
        color: #c7c7c7;
        line-height: 1.5rem;

        &:last-of-type {
          margin-bottom: 3rem;
        }
      }

      button {
        border: none;
        padding: 10px 40px;
        border-radius: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
      }

      .instagram-login {
        margin-bottom: 2rem;
        display: block;
        &-btn {
          background: rgb(86, 87, 202);
          background: linear-gradient(
            311deg,
            rgba(86, 87, 202, 1) 0%,
            rgba(246, 206, 118, 1) 43%,
            rgba(219, 68, 85, 1) 100%
          );
        }
      }

      .follow-btn {
        background-color: #0095f6;
      }
    }

    .image {
      object-fit: contain;
      max-height: 500px;
      overflow: hidden;
      text-align: center;

      img {
        width: 100%;
        max-width: 500px;
      }
    }
  }
}
</style>
