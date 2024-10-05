<script setup lang="ts">

const {data} = await useFetch('/api/yclients-team')
console.log('data', data)
</script>

<template>
  <section>
    <div class="wrapper">
      TEST
      <pre>
        {{data}}
      </pre>
    </div>
  </section>
</template>
