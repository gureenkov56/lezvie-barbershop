<template>
    <div class="header">
        <h3>lezvie</h3>
        <img src="/icon40.png" alt="Discover Nuxt 3" />
        <h3>barbershop</h3>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    name: "Header",
    
});
</script>

<style scoped>
.header {
    background-color: #00000058;
    padding: 10px 5px;
    text-transform: uppercase;
    backdrop-filter: blur(5px);
    color: rgb(232, 232, 232);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
}

h3 {
    font-family: "Copperplate Gothic Bold";
}
</style>