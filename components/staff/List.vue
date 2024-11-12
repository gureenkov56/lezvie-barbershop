<script setup lang="ts">
import { Profile } from "~/adapters/Profile";
import type { BranchCode } from "~/constants/enums/branch.enum";
import type { StaffProfileRaw } from "~/constants/types/types";

const props = defineProps<{ branchCode: BranchCode }>();

const { data, error } = await useFetch<StaffProfileRaw[]>(
  "/api/yclients-staff",
  {
    params: { branchCode: props.branchCode },
  },
);

const profiles = computed(() => {
  if (!data.value?.length) {
    return [];
  }

  return data.value
    ?.map((staffProfileRaw) => new Profile(staffProfileRaw, props.branchCode))
    .filter((profile) => profile.isValid);
});
</script>

<template>
  <client-only>
    <div class="staff">
      <div class="staff__profiles">
        <div v-if="error">Ошибка! Попробуйте перезагрузить страницу</div>
        <div v-else-if="!profiles.length" class="skeleton">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          v-else
          v-for="{ name, level, avatar, linkToBooking, experience } in profiles"
          class="profile"
        >
          <NuxtImg :src="avatar" />
          <div>
            <div class="name">{{ name }}</div>
            <div class="level">{{ level }}</div>
            <div class="experience">Опыт работы: {{ experience }}</div>
            <NuxtLink :href="linkToBooking">
              <button>Записаться</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<style lang="scss">
.staff {
  &__profiles {
    max-width: 500px;
    margin: 0 auto;
    padding-bottom: 50px;
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
