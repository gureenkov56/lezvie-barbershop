<template>
  <section>
    <div class="wrapper">
      <h2>Не упусти возможность освоить новую профессию</h2>
      <p>и попасть в дружный коллектив</p>

      <p>
        Мы всегда в поиске новых людей с горящими глазами. Мы проводим обучение
        мастеров с нуля, а также с базовыми навыками. После успешного обучения
        вы получаете сертификат, и мы будем рады видеть вас в нашей команде.
      </p>
      <NuxtLink href="/barber-course">
        <CommonButtonArrow arrow-to-right />
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Course",
});
</script>

<style scoped>
section {
  background-image: url("/images/lezvie-first-blur.jpg");
  background-size: cover;
  background-position: center;
  background-color: #ccc;

  p {
    max-width: 500px;
    margin-bottom: 2rem;
  }
}
</style>
