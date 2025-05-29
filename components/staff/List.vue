<script setup lang="ts">
import type { BranchCode } from "~/constants/enums/branch.enum";
import { STAFF } from "~/constants/staff";
import { getExperience } from "~/handlers/getExperience";

defineProps<{
  selectedBranch: BranchCode;
}>();

</script>

<template>
  <client-only>
    <div class="staff">
      <div class="staff__profiles">
        <template
          v-for="{
            name,
            level,
            avatar,
            linkToBooking,
            experience,
            branch,
          } in STAFF"
        >
          <div v-show="selectedBranch === branch" class="profile">
            <NuxtImg :src="avatar" />
            <div>
              <div class="name">{{ name }}</div>
              <div class="level">{{ level }}</div>
              <div class="experience">
                Опыт работы: {{ getExperience(experience) }}
              </div>
              <NuxtLink :href="linkToBooking">
                <button>Записаться</button>
              </NuxtLink>
            </div>
          </div>
        </template>
      </div>
    </div>
  </client-only>
</template>

<style lang="scss">
.staff {
  &__profiles {
    max-width: 500px;
    margin: 0 auto;
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
      margin-top: 0;
    }

    .skeleton {
      > div {
        height: 130px;
        background-color: #ccc;
        border-radius: 9px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        margin: 0.5rem;

        animation-name: skeleton-animation;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-direction: alternate;

        @keyframes skeleton-animation {
          from {
            background-color: #4f4f4f;
          }
          to {
            background-color: #2d2d2d;
          }
        }
      }
    }

    .profile {
      display: flex;
      gap: 1rem;
      padding: 10px;
      margin: 0.5rem;
      /* glass effect */
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(10px);
      border-radius: 9px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

      .name {
        font-weight: bold;
        font-size: 1.3rem;
      }

      .level {
        font-size: 0.8rem;
      }

      .experience {
        font-size: 0.8rem;
        color: #919191;
        margin-bottom: 0.5rem;
      }

      img {
        border-radius: 5px;
        width: 120px;
        height: 120px;
      }

      button {
        background-color: #f4b63d;
        border: none;
        padding: 5px 15px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
      }
    }
  }
}
</style>
