<template>
  <Head>
    <Title>Команда LEZVIE BARBERSHOP в Оренбурге</Title>
    <Meta
      name="description"
      content="Выберите идеального мастера для себя. Здесь вы можете посмотреть опыт, отзывы и работы каждого мастера в LEZVIE BARBERSHOP в Оренбурге"
    />
    <Meta name="theme-color" content="#0f0f0f" />
  </Head>
  <CommonHeader />

  <TeamList />
  <TeamsBranchButton />
</template>

<script setup lang="ts">
import type { BarberProfile } from "~/components/team/types";


const barbers: BarberProfile[] = [
  {
    name: "Name fio",
    profileImages: [],
    description: "loremipsum",
    workStartTime: 100000,
    portfolioImages: [],
  },
  {
    name: "Name fio",
    profileImages: [],
    description: "loremipsum",
    workStartTime: 100000,
    portfolioImages: [],
  },
];

</script>

<style lang="scss" scoped>
.content {
  background-color: black;
}
</style>
