<template>
  <div id="whyus">
    <div class="content">
      <div class="image">
        <img src="/images/whyus/0041.jpg" alt="Почему мы?" />
      </div>
      <div class="text">
        <h2>Почему выбирают нас?</h2>
        <p>
          Идея создать что-то стильное, где каждый посетитель будет чувствовать
          себя в кругу хороших друзей, привела нас к открытию барбершопа Лезвие.
        </p>
        <p>
          Мы не только про стрижки. В первую очередь мы дарим настроение и
          позитивный заряд. Поэтому многие гости заходят к нам по дороге
          поздороваться с барбером и обменяться новостями. Заходи и ты, будем
          рады!
        </p>
        <CommonButton class="btn-tel" @click="showModal">
          Записаться
        </CommonButton>
        <!-- <NuxtLink -->
        <!--   href="https://b941152.yclients.com/select-city/116/select-branch/" -->
        <!--   target="_blank" -->
        <!-- > -->
        <!--   <CommonButton class="btn-tel" @click="showModal"> -->
        <!--     Записаться -->
        <!--   </CommonButton> -->
        <!-- </NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "~/store/useModalStore";

const store = useModalStore();
const { showModal } = store;
</script>

<style lang="scss">
#whyus {
  background-color: #0f0f0f;
  padding: 3rem 1rem;

  .content {
    max-width: 900px;
    margin: 0 auto;

    display: flex;
    gap: 4rem;

    .text {
      > p {
        margin: 2rem 0;
        max-width: 500px;
        color: #c7c7c7;
        line-height: 1.5rem;
      }
    }

    .image {
      @media screen and (max-width: 750px) {
        display: none;
        visibility: hidden;
      }

      > img {
        width: 305px;
        height: 445px;
        object-fit: cover;
      }
    }
  }
}
</style>
