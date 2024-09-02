<template>
    <button>
        <slot>Записаться</slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Button",
});
</script>

<style lang='scss' scoped>
button {
    cursor: pointer;
    border: 2px solid #cd9323;
    padding: 10px 50px;
    color: white;
    background-color: transparent;
    font-size: 1.2rem;
    letter-spacing: 3px;
    font-weight: 100;
    transition: background-color .2s linear;
    &:hover {
        background-color: #cd9323;
    } 
}
</style>
