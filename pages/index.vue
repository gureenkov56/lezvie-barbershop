<template>
    <div class="wrapper">
        <Bg />
        <div class="content">
            <Header />
            <Content />
            <Footer />
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    name: "index",
});
</script>

<style scoped>
.wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    color: white;

    display: flex;
    flex-direction: column;
    
}
</style>