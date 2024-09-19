<template>
  <div>
    PROFILE
    <h2>NAME</h2>
    <div>years of experience</div>
    <div>reviews</div>
    <div>Portfolio</div>

  </div>
</template>

<script lang="ts">
import type { BarberProfile } from './types';

export default {
  name: "Profile",
  props: {
    profile: {
      type: Object as PropType<BarberProfile>,
      default: null
    }
  }
};
</script>

<style></style>
