<template>

  <Head>
    <Title>Команда LEZVIE BARBERSHOP в Оренбурге</Title>
    <Meta name="description"
      content="Выберите идеального мастера для себя. Здесь вы можете посмотреть опыт, отзывы и работы каждого мастера в LEZVIE BARBERSHOP в Оренбурге" />
    <Meta name="theme-color" content="#0f0f0f" />
  </Head>
  <CommonHeader />
  <CommonPageSlider :sliders="[1,2,3,4]">
    <div>test</div>
  </CommonPageSlider>
  <TeamsProfile />
</template>

<script lang="ts">
import type { BarberProfile } from '~/components/teams/types';

export default defineComponent({
  name: "team",
  setup() {
    const barbers: BarberProfile[] = [
      {
        name: "Name fio",
        profileImages: [],
        description: 'loremipsum',
        workStartTime: 100000,
        portfolioImages: []
      }
    ]

    return {
      barbers,
    }
  }
});
</script>

<style >
* {
  color: black;
  
}
</style>
