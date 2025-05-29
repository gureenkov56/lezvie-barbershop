<template>
  <Transition name="fade">
    <div class="back" v-show="isShow">
      <div class="modal">
        <div class="modal__header">
          <button @click="hideModal">×</button>
        </div>
        <div class="modal__content">
          <h2>Выберите филиал</h2>
          <div>
            <NuxtLink href="tel:+79959284526">
              <CommonButton class="btn-tel">
                <div class="text">пр. Гагарина, 48/1 (Радуге)</div>
                <div class="sub-tel">+7 (995) 928-45-26</div>
              </CommonButton>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink href="tel:+79953482605">
              <CommonButton class="btn-tel">
                <div class="text">ул. Березка 2/5</div>
                <div class="sub-tel">+7 (995) 348-26-05</div>
              </CommonButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useModalStore } from "~/store/useModalStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "Modal",
  setup() {
    const store = useModalStore();
    const { hideModal } = store;
    const { isShow } = storeToRefs(store);

    return {
      isShow,
      hideModal,
    };
  },
});
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.back {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background-color: #000;
    margin: 1rem;
    border: 2px solid #cd9323;

    h2 {
      margin-bottom: 3rem;
    }

    &__header {
      display: flex;
      justify-content: flex-end;
      button {
        background-color: transparent;
        border: none;
        font-size: 2rem;
        color: white;
        padding: 10px;
        margin: 0;
        cursor: pointer;
        line-height: 1rem;
      }
    }

    &__content {
      padding: 3rem;
    }

    .btn-tel {
      display: block;
      width: 100%;
      padding: 10px 10px;
      margin-top: 1rem;

      .sub-tel {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: lighter;
      }
    }
  }
}
</style>
