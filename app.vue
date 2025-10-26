<template>
  <div class="app">
    <img
      src="https://mc.yandex.ru/watch/94499950"
      style="position: absolute; left: -9999px"
      alt=""
    />
    <NuxtPage />
    <CookieNotification />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CookieNotification from "./components/common/CookieNotification.vue";

export default defineComponent({
    components: { CookieNotification },
  name: "App",
  setup() {
    function metrika(m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
          return;
        }
      }
      (k = e.createElement(t)),
        (a = e.getElementsByTagName(t)[0]),
        (k.async = 1),
        (k.src = r),
        a.parentNode.insertBefore(k, a);
    }

    onMounted(() => {
      metrika(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js",
        "ym",
      );

      ym(94499950, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    });
  },
});
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>
