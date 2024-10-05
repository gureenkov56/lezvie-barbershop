<template>
  <div>
    Profile
    <!-- <h2>{{profile.name}}</h2> -->
    <!-- <div>{{profile.description}}</div> -->
    <!-- <div>{{profile.portfolioImages}}</div> -->
    <!-- <div>{{profile.profileImages}}</div> -->
    <!-- <div>{{profile.workStartTime}}</div> -->

  </div>
</template>

<script setup lang="ts">
import type { BarberProfile } from './types';

defineProps({
    profile: {
      type: Object as PropType<BarberProfile>,
      required: true,
    }
})
</script>

<style></style>
