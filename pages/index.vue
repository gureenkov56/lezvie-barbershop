<template>
  <Head>
    <Title>LEZVIE BARBERSHOP — стрижки в Оренбурге</Title>
    <Meta
      name="description"
      content="Мужские стрижки в Оренбурге. Профессиональная косметика, лучшие мастера, индивидуальный стиль в барбершопе Лезвие"
    />
    <Meta name="theme-color" content="#0f0f0f" />
  </Head>
  <CommonHeader />
  <HomeFirstScreen />
  <HomeFeaturesSection />
  <HomePriceSection />
  <HomeWhyUs />
  <HomeReviewsSection />
  <HomeHaircutExamplesSection />
  <HomeCosmeticsShop />
  <HomeContactsSection />
  <HomeInstagramSection />
  <CommonFooter />
  <CommonModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "index",
});
</script>
