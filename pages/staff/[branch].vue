<script setup lang="ts">
import { BranchCode } from "~/constants/enums/branch.enum";
import { getBranchCode } from "~/handlers/getBranchCode";
import { navigateTo } from "#app";

definePageMeta({
  middleware: ["redirect-to-staff"],
});
const route = useRoute();
const branchCode = getBranchCode(route.params.branch as string);

const selectedBranch = ref(branchCode);
watch(selectedBranch, async () => {
  await navigateTo(`/staff/${selectedBranch.value}`, {
    external: true,
  });
});
</script>

<template>
  <div class="wrapper">
    <CommonHeader />
    <section class="team-list">
      <div class="header">
        <h1>Наша команда</h1>
        <select name="branch" id="branch" v-model="selectedBranch">
          <option :value="BranchCode.Berezka">ул. Березка</option>
          <option :value="BranchCode.Raduga">ТЦ Радуга</option>
        </select>
      </div>

      <NuxtImg src="/images/staff/staff.webp" class="main-photo" />
      <StaffList :branch-code="selectedBranch" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #181a1b !important;
  .header {
    text-align: center;
    select {
      background: transparent;
      border: none;

      &:focus {
        outline: none;
      }
    }
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
}
</style>
