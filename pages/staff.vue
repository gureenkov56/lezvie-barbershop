<script setup lang="ts">
import { BranchCode } from "~/constants/enums/branch.enum";

const selectedBranch = ref<BranchCode>(BranchCode.Berezka);

</script>

<template>
  <div class="wrapper">
    <CommonHeader />
    <section class="team-list">
      <div class="header">
        <h1>Наша команда</h1>
      </div>
      <NuxtImg src="/images/staff/staff.webp" class="main-photo" />
      <div class="selector-group">
        Филиал: 
        <select name="branch" id="branch" v-model="selectedBranch">
          <option :value="BranchCode.Berezka">ул. Березка</option>
          <option :value="BranchCode.Raduga">ТЦ Радуга</option>
        </select>
        <img src="/svg/arrow.svg" alt="arrow" width="10px" class="arrow" />
      </div>
      <StaffList :selectedBranch="selectedBranch" />
    </section>
    <section class="description">
      <div class="content">
      <h2>Барбер? Топ? Шеф?</h2>
      <p class="subheader">Помогаем вам выбрать идеального мастера...</p>
      <ul>
        <li><b>Барбер.</b> Прошел обучение и доказал свои навыки на практике, чтобы попасть в нашу команду. Это начальный уровень мастера, он только начинает путь к совершенству и потому старается больше всех!</li>
        <li><b>Топ-барбер.</b> Опыт работы от года. Не головорез, но головостриг. Работает четко, быстро и уверенно</li>
        <li><b>Шеф-барбер.</b> Зевс, Посейдон и Аид в одном флаконе. Он не работает руками, он манипулирует инструментами посредством телекинеза. К нему сложно записаться, но нет ничего невозможного.</li>
      </ul>
    </div>
    </section>
    <CommonFooter />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #181a1b !important;
  .header {
    text-align: center;
    
  }
  .team-list {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 200px;
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
      padding-top: 1rem;
    }
    .main-photo {
      max-width: 600px;
      width: 100%;
      display: block;
      margin: 2rem auto;
    }
  }

  .selector-group {
    max-width: 460px;
    margin: 0 auto;
    padding-left: 1rem;

    select {
      all: unset;
      margin-left: .3rem;
      color: #f4b63d;
    }

    .arrow {
      margin-left: .3rem;
    }
  }

  .description{
    background-color: rgb(11, 12, 13);
    color: rgb(207, 207, 207);
    .content {
      max-width: 500px;
      padding: 2rem;
      margin: 0 auto;

      .subheader {
        margin-top: .5rem;
        font-size: .8rem;
      }

      ul {
        margin-top: 1rem;
        li { 
          margin-top: 1rem;
          color: rgb(193, 193, 193);

          b {
            color: #f4b63d;
          }
        }
      }
    }
  }
}
</style>
