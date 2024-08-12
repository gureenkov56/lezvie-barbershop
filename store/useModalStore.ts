import { defineStore } from "pinia";

export const useModalStore = defineStore("modal-store", () => {
  const isShow = ref(false);

  function hideModal() {
    document.body.style.overflow = "auto";
    isShow.value = false;
  }
  function showModal() {
    document.body.style.overflow = "hidden";
    isShow.value = true;
  }

  return {
    isShow,
    hideModal,
    showModal,
  };
});
