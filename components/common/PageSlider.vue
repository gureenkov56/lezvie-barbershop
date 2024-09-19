<script lang="ts">
export default {
  name: "PageSlider",
  props: {
    sliders: {
      type: Array as PropType<Number[]>,
      required: true,
    }
  },
  setup(props) {
    const activeSlider = ref(1);

    onMounted(() => {
      let time = Date.now();
      let windowScrollY = 0;

      const throttle = (fn: Function, delay: number) => {
        return () => {
          if (time + delay - Date.now() <= 0) {
            fn();
            time = Date.now();
          }
        };
      };

      function runOnScroll() {
        // TODO: use props length limit
        if (window.scrollY > windowScrollY && activeSlider.value < props.sliders.length) {
          console.log("scroll down");
          activeSlider.value += 1;
        } else if (activeSlider.value > 1) {
          activeSlider.value -= 1;
          console.log("scroll up");
        }
        windowScrollY = window.scrollY;
      }

      window.addEventListener("scroll", throttle(runOnScroll, 500));
    });
  },
};
</script>

<template>
  <div class="slider">
    <div class="pagination">O</div>
    <div class="items">
      <div
        v-for="(item, index) in [1, 2, 3, 4, 5]"
        :key="index"
        :id="`${index + 1}`"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  display: flex;
  .items {
    width: 100%;
    > * {
      &:first-child {
        height: calc(100vh - 65px);
      }
      flex: 1;
      width: 100%;
      margin-bottom: 1px;
      height: 100vh;
      background-color: grey;
    }
  }
}
</style>
