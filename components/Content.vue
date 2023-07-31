<template>
    <div class="content__wrapper">
        <div class="inner">
            <h3>Добро пожаловать в семью!</h3>
            <p>💇‍♂️ Стильные стрижки</p>
            <p>☕️ Ароматный кофе или виски</p>
            <p>😎 Душевная компания</p>
            <a href="https://n941152.yclients.com/">
                <button>Записаться</button>
            </a>
            
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    name: "Content",
});
</script>

<style scoped>

.content__wrapper {
    flex: 1;
}
.inner {

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

h3 {
    margin-bottom: 2rem;
    text-align: center;
}

p {
    white-space: nowrap;
    margin-top: .2rem;
}


button {
    padding: 1rem 4rem;
    background-color: #efd10d;
    color: white;
    border: none;
    border-radius: 1rem;
    margin-top: 2rem;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
}
</style>