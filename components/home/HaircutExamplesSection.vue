<template>
  <section class="haircut-examples">
    <h2>Наши работы</h2>
    <div class="flex" ref="flexContainer">
      <div
        v-for="src in images"
        :key="src"
        :style="{
          height: childWidth + 'px',
          backgroundImage: 'url(' + src + ')',
        }"
      ></div>
      <!-- <NuxtLink href="https://instagram.com/barbershop.lezvie"> -->
      <!--   <div -->
      <!--     :style="{ -->
      <!--       height: childWidth + 'px', -->
      <!--       backgroundImage: 'url(/images/haircuts/10.jpg)', -->
      <!--     }" -->
      <!--   ></div> -->
      <!-- </NuxtLink> -->
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="button-wrapper">
      <CommonButton class="btn-tel" @click="showModal">
        Записаться
      </CommonButton>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useModalStore } from "~/store/useModalStore";

export default defineComponent({
  name: "HaircutExamplesSection",
  setup() {
    const flexContainer = ref<HTMLElement | null>(null);
    const childWidth = computed(
      () => flexContainer.value?.children[0].clientWidth,
    );

    const images = [
      "/images/haircuts/1.jpg",
      "/images/haircuts/2.jpg",
      "/images/haircuts/3.jpg",
      "/images/haircuts/4.jpg",
      "/images/haircuts/5.jpg",
    ];

    const store = useModalStore();
    const { showModal } = store;
    return {
      showModal,
      flexContainer,
      childWidth,
      images,
    };
  },
});
</script>

<style lang="scss">
.haircut-examples {
  background-color: #313131;
  padding-top: 3rem;
  padding-bottom: 3rem;

  h2 {
    text-align: center;
    padding-bottom: 2rem;
    font-size: 1.5rem;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 830px;
    margin: 0 auto;
    padding: 0 30px;
    gap: 10px;

    div {
      display: block;
      width: 32%;
      min-width: 150px;
      margin-bottom: 10px;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      transition: transform ease-in 0.1s;
    }

    a {
      display: block;
      width: 32%;
      min-width: 150px;

      > div {
        width: 100%;
      }
    }

    .last-btn {
      cursor: pointer;
      color: white;
      font-size: 1.2rem;
      letter-spacing: 3px;
      font-weight: 100;
      padding-top: auto;
    }
  }

  .button-wrapper {
    margin-top: 2rem;
    text-align: center;
  }
}
</style>
