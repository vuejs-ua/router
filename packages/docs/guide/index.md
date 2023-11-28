# Початок роботи

<VueSchoolLink
  href="https://vueschool.io/courses/vue-router-4-for-everyone"
  title="Learn how to build powerful Single Page Applications with the Vue Router on Vue School"
>Переглянути безкоштовний відеокурс про Vue Router</VueSchoolLink>

Створення односторінкового застосунку за допомогою Vue + Vue Router здається природним: за допомогою Vue.js ми вже складаємо наш застосунок з компонентів. Додаючи Vue Router, все, що нам потрібно зробити, це прив'язати наші компоненти до маршрутів і вказати Vue Router, де їх рендерити. Ось базовий приклад:

## HTML

```html
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>

<div id="app">
  <h1>Привіт!</h1>
  <p>
    <!-- використовуйте компонент router-link для навігації. -->
    <!-- вкажіть посилання, передавши властивість `to`. -->
    <!-- `<router-link>` відрендерить тег `<a>` з відповідним атрибутом `href` -->
    <router-link to="/">Повернутися на головну сторінку</router-link>
    <router-link to="/about">Перейти до розділу Про нас</router-link>
  </p>
  <!-- вихід з маршруту -->
  <!-- компонент, якому відповідає маршрут, буде відрендерено тут -->
  <router-view></router-view>
</div>
```

### `router-link`

Зверніть увагу, що замість звичайних тегів `a` ми використовуємо кастомний компонент `router-link` для створення посилань. Це дозволяє Vue Router змінювати URL-адресу без перезавантаження сторінки, обробляти генерацію URL-адреси, а також її кодування. Пізніше ми побачимо, як скористатися цими можливостями.

### `router-view`

`router-view` відобразить компонент, який відповідає URL-адресі. Ви можете розмістити його де завгодно, щоб адаптувати до вашого макету.

<VueMasteryLogoLink></VueMasteryLogoLink>

## JavaScript

```js
// 1. Визначення компонента маршруту.
// Вони можуть бути імпортовані з інших файлів
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. Визначення деяких маршрутів
// Кожен маршрут має бути прив'язаний до компонента.
// Про вкладені маршрути ми поговоримо пізніше.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. Створення екземпляра маршрутизатора, передавши параметр `routes`.
// Ви можете передати додаткові опції тут, але нехай наразі буде спрощено.
const router = VueRouter.createRouter({
  // 4. Реалізація історії для подальшого використання. Для простоти використовується хеш-історія.
  history: VueRouter.createWebHashHistory(),
  routes, // скорочено від `routes: routes`
})

// 5. Створення і монтування кореневого екземпляра.
const app = Vue.createApp({})
// Переконайтеся, що ви _використовуєте_ екземпляр маршрутизатора,
// щоб весь додаток знав про маршрутизатор.
app.use(router)

app.mount('#app')

// Тепер застосунок запущено!
```

Викликаючи `app.use(router)`, ми запускаємо початкову навігацію і надаємо доступ до `this.$router`, а також до поточного маршруту як `this.$route` всередині будь-якого компонента:

```js
// Home.vue
export default {
  computed: {
    username() {
      // Незабаром ми побачимо, що таке "параметри маршруту"
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
```

Щоб отримати доступ до маршрутизатора або маршруту всередині функції `setup`, викличте функції `useRouter` або `useRoute`. Ми дізнаємося більше про це у [композиційного АРІ](./advanced/composition-api.md#accessing-the-router-and-current-route-inside-setup)

У цій документації ми часто будемо використовувати екземпляр `router`. Майте на увазі, що `is.$router` - це те саме, що безпосередньо використовувати екземпляр `router`, створений за допомогою `createRouter`. Причина використання `this.$router` полягає у тому, що ми не хочемо імпортувати маршрутизатор у кожен окремий компонент, який потребує маніпуляцій з маршрутизацією.
