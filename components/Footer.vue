<template>
    <div>
        <a href="tel:89953482605">
            📲 +7 (995) 348-26-05</a>
        <a
            target="_blank"
            href="https://2gis.ru/orenburg/geo/70030076134425629/55.134086%2C51.82487?m=55.136435%2C51.823893%2F15.88"
        >
            <p>📍 Оренбург, ул. Березка 2/5</p>
        </a>
        
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    name: "Footer",
});
</script>

<style scoped>
div {
    display: block;
    margin: 1rem auto;
    text-align: center;
}


a {
    color: white;
    text-decoration: none;
    line-height: 2rem;
}
</style>