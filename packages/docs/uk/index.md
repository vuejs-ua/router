---
layout: home

title: Vue Router
titleTemplate: Офіційний роутер для Vue.js

hero: 
  name: Vue Router
  text: Офіційний роутер для Vue.js
  tagline: Виразна, настроювана та зручна маршрутизація для Vue.js
  image:
    src: /logo.svg
    alt: Vue Router
  actions:
    - theme: brand
      text: Почати
      link: /installation
    - theme: cta vueschool
      text: Безкоштовний відеокурс
      link: https://vueschool.io/courses/vue-router-4-for-everyone?friend=vuerouter&utm_source=vuerouter&utm_medium=link&utm_campaign=homepage
    - theme: cta vue-mastery
      text: Отримайте шпаргалку Vue Router
      link: https://www.vuemastery.com/vue-router?coupon=ROUTER-DOCS&via=eduardo

features:
  - title: 🛣 Чіткий синтаксис маршруту
    details: Визначайте статичні та динамічні маршрути за допомогою інтуїтивно зрозумілого та потужного синтаксису.
  - title: 🛑 Точне керування навігацією
    details: Перехоплюйте будь-яку навігацію та точно контролюйте її результат.
  - title: 🧱 Конфігурація на основі компонентів
    details: Зіставте кожен маршрут із компонентом, який має відображатися.
  - title: 🔌 Режими історії
    details: Виберіть між режимами HTML5, Hash або Memory history.
  - title: 🎚 Керування прокруткою
    details: Точний контроль положення прокрутки на кожній сторінці.
  - title: 🌐 Автоматичне кодування
    details: Безпосередньо використовуйте символи Unicode (ї) у своєму коді.
---

<script setup>
import HomeSponsors from '../.vitepress/theme/components/HomeSponsors.vue'
import '../.vitepress/theme/styles/home-links.css'
</script>

<HomeSponsors />
