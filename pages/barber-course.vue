<template>
  <Head>
    <Title>Обучение на барбера в Оренбурге - LEZVIE BARBERSHOP</Title>
    <Meta
      name="description"
      content="Пройди обучение и стань барбером в LEZVIE BARBERSHOP. Присоединяйся к нашему дружному коллективу"
    />
  </Head>
  <CommonHeader />
  <HomeFirstScreen>
    <div class="first">
      <h1>
        <span class="stan">СТАНЬ</span>
        <span class="barberom">БАРБЕРОМ</span>
        <span class="vmeste">вместе с</span>
        <span class="lezvie">LEZVIE BARBERSHOP</span>
      </h1>
      <ul>
        <li>Обучение у опытных барберов</li>
        <li>Последующее трудоустройство</li>
        <li>Доход от 30 тыс. руб</li>
      </ul>
      <NuxtLink href="#content">
        <CommonButtonArrow />
      </NuxtLink>
    </div>
  </HomeFirstScreen>
  <HomeFeaturesSection>
    <div id="content">
      <h2>Приглашаем на работу с обучением</h2>
      <div class="text">
        <p>
          Городу нужны крутые стрижки и нам не хватает рук! Поэтому мы всегда в
          поиске начинающих барберов с горящими глазами и большими амбициями.
        </p>
        <p>
          Мы обучаем будущих мастров с нуля. К каждому индивидуальный подход, но
          что-то неизменно:
        </p>
        <ul>
          <li>Срок и стоимость обучения зависит от стартовых навыков</li>
          <li>После успешного обучения вы получаете сертификат</li>
          <li>Предоставляем рабочее место в LEZVIE BARBERSHOP</li>
        </ul>
        <p class="call-us">Пишите нам в Телеграм или звоните:</p>
      </div>
      <NuxtLink href="https://t.me/barbershop_lezvie">
        <CommonButton class="padding">
          <div class="button-inner gap">
            <NuxtImg src="/svg/tg-icon.svg" alt="icon" width="20px" />
            <span> Telegram </span>
          </div>
        </CommonButton>
      </NuxtLink>
      <NuxtLink href="tel:+79953482605">
        <CommonButton class="padding small-font">
          <div class="button-inner gap">
            <span class="number">+7(995)3482605</span>
          </div>
        </CommonButton>
      </NuxtLink>
    </div>
  </HomeFeaturesSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "barber-course",
});
</script>

<style lang="scss" scoped>
.first {
  max-width: 800px;
  color: white;
  margin: 1rem;
  padding: 3rem 2rem;
  background-color: rgba(0, 0, 0, 0.47);

  h1 {
    margin-bottom: 2rem;

    span {
      display: block;
      line-height: 2.2rem;

      &.stan {
        font-size: 0.9rem;
      }

      &.barberom {
        font-size: 2rem;
        font-weight: 600;
      }

      &.vmeste {
        font-size: 1.5rem;
      }

      &.lezvie {
        font-size: 1.5rem;
      }
    }
  }

  ul {
    margin-left: 1rem;

    li {
      margin-bottom: 1rem;

      &:last-of-type {
        margin-bottom: 3rem;
      }
    }
  }
}

#content {
  max-width: 650px;
  margin: 0 auto;

  .text {
    p {
      margin-top: 2rem;
      max-width: 600px;
      line-height: 1.6rem;
    }

    ul {
      max-width: 500px;
      margin-left: 1rem;

      li {
        margin-top: 1rem;
      }
    }

    .call-us {
      margin-bottom: 1rem;
    }
  }

  button {
    margin-top: 0.5rem;
    display: block;
    width: 250px;

    .number {
      font-size: 1rem;
      text-wrap: none;
    }
  }
}
</style>
