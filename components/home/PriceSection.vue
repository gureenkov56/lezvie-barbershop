<template>
  <section id="price">
    <div class="wrapper">
      <h2>Делаем красиво</h2>
      <div class="price-list" :class="{ full: isShowFullList }">
        <transition-group name="list" tag="ul">
          <li v-for="{ name, price } in listComputed" :key="name">
            <span class="name">{{ name }}</span>
            <span class="dots">...........................</span>
            <span class="price">от {{ price }}₽*</span>
          </li>
        </transition-group>
        <p class="note">* Цены могут отличаться в зависимости от мастера</p>

        <button @click="isShowFullList = true" v-if="!isShowFullList">
          Показать все услуги
        </button>
        <button v-else @click="isShowFullList = false">Показать меньше</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PriceSection",
  setup() {
    const pricelist = [
      {
        name: "Стрижка мужская",
        price: 1000,
      },
      {
        name: "Стрижка под машинку",
        price: 500,
      },
      {
        name: "Моделирование бороды",
        price: 500,
      },
      {
        name: "Детская стрижка",
        price: 500,
      },
      {
        name: "Стрижка+борода",
        price: 1400,
      },
      {
        name: "Опасное бритье бороды",
        price: 1000,
      },
      {
        name: "Опасное бритье головы",
        price: 1000,
      },
      {
        name: "Тонирование седины (голова)",
        price: 800,
      },
      {
        name: "Тонирование седины (борода)",
        price: 500,
      },
      {
        name: "Удаление Воском (комплекс)",
        price: 400,
      },
    ];
    const isShowFullList = ref(false);
    const listComputed = computed(() =>
      isShowFullList.value ? pricelist : pricelist.slice(0, 3),
    );

    return {
      isShowFullList,
      listComputed,
    };
  },
});
</script>

<style lang="scss" scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

#price {
  background-color: #0f0f0f;
  background-image: url("/images/tools.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 3rem 1rem;

  .wrapper {
    max-width: 500px;
    margin: 0 auto;
    padding: 0;

    .price-list {
      background-color: rgba(0, 0, 0, 0.6);
      padding: 1rem;
      transition: all 1s;

      .note {
        font-size: 0.9rem;
        color: #bbbbbb;
        margin-top: 1rem;
      }
    }

    h2 {
      text-align: center;
      font-weight: 800;
      margin-bottom: 2rem;
      letter-spacing: 0.2rem;
    }

    ul {
      list-style-type: none;
      max-width: 500px;
      overflow: hidden;
      transition: max-height 1s ease;

      li {
        display: flex;
        gap: 1rem;
        width: 100%;
        margin-top: 0.7rem;
        letter-spacing: 0.1rem;

        .dots {
          letter-spacing: 0.5rem;
          overflow: hidden;
          width: 100%;
          flex: 1;
          color: #363636;
        }

        .price {
          text-align: right;
          font-weight: 900;
          color: #c7c7c7;
          white-space: nowrap;
        }
      }
    }

    button {
      width: 100%;
      margin-top: 2rem;
      background-color: transparent;
      border: none;
      color: #c7c7c7;
      letter-spacing: 0.1rem;
      font-size: 1rem;
      cursor: pointer;
    }
  }
}
</style>
