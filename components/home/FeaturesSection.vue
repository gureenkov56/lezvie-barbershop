<template>
  <div class="features">
    <div class="features__content">
      <slot>
        <div class="features__scroll-block">
          <div>
            <img src="/images/features/123.jpg" alt="стиль" />
            <h3>ИНДИВИДУАЛЬНЫЙ СТИЛЬ</h3>
            <p>Наши барберы помогут подобрать подходящую именно вам стрижку</p>
          </div>
          <div>
            <img src="/images/features/time.jpg" alt="стиль" />
            <h3>ВАШЕ ВРЕМЯ</h3>
            <p>Кофе, чай, виски - проводите время у нас с удовольствием</p>
          </div>
          <div>
            <img src="/images/features/cosmetics.jpg" alt="стиль" />
            <h3>КОСМЕТИКА ОТ ПРОФИ</h3>
            <p>В работе используем проверенную косметику</p>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeaturesSection",
});
</script>

<style lang="scss">
.features {
  background-color: #0f0f0f;
  color: #ffffff;
  padding: 3rem 1rem 5rem 1rem;

  &__content {
    max-width: 1000px;
    margin: 0 auto;
  }

  &__scroll-block {
    display: flex;
    justify-content: left;
    gap: 2.5rem;
    overflow-x: scroll;

    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }

    > div {
      margin-top: 1rem;

      img {
        width: 305px;
        height: 180px;
        object-fit: cover;
      }

      h3 {
        letter-spacing: 1px;
        margin-top: 0.6rem;
        margin-bottom: 0.3rem;
        text-transform: uppercase;
        font-weight: lighter;
      }

      p {
        color: #c7c7c7;
        font-weight: lighter;
        font-size: 0.9rem;
        width: 280px;
      }
    }
  }
}
</style>
