<script setup lang="ts">
const props = defineProps({
  foo: String
})

const emit = defineEmits(['changeBranch'])

const braches = [
  {
    id: 1,
    name: 'Берёзка 2/5'
  },
  {
    id: 2,
    name: 'ТЦ Радуга'
  }
]
</script>

<template>
  <select>
    <option value="1">ул. Березка 2/5</option>
    <option value="2">Радуга</option>
  </select>
</template>
