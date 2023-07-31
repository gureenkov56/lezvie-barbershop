<template>
    <div class="bg">
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Bg',
})
</script>

<style>
.bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: #1e1e1e url("/bg.jpeg") no-repeat right 10%;
    background-size: cover;
    filter: brightness(0.2);

    color: #ffffff;
}
</style>