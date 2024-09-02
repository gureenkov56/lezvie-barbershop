<template>
  <CommonButton>
    <div class="button-inner">
      <slot>
        <span>Подробнее</span>
      </slot>
      <NuxtImg
        src="/svg/down-icon.svg"
        alt="icon"
        width="24px"
        :class="arrowClass"
      />
    </div>
  </CommonButton>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Arrow",
  props: {
    arrowToRight: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const arrowClass = computed(() => {
      if (props.arrowToRight) {
        return "arrow-to-right";
      }
      return "arrow-to-down";
    });

    return {
      arrowClass,
    };
  },
});
</script>

<style scoped>
button {
  .button-inner {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    &.gap {
      gap: 1rem;
    }

    .arrow-to-down {
      animation: move-down 3s infinite linear;
    }

    .arrow-to-right {
      animation: move-right 3s infinite linear;
    }
  }
}

@keyframes move-down {
  0% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(-3px);
  }
}

@keyframes move-right {
  0% {
    transform: translateX(-3px) rotate(270deg);
  }
  50% {
    transform: translateX(2px) rotate(270deg);
  }
  100% {
    transform: translateX(-3px) rotate(270deg);
  }
}
</style>
