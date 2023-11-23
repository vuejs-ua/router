import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const META_URL = 'https://vue-router-ua.netlify.app/'
export const META_TITLE = 'Vue Router'
export const META_DESCRIPTION = 'Офіційний роутер для Vue.js'

export const ukConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: META_DESCRIPTION,
  head: [
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
  ],

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/router/edit/main/packages/docs/:path',
      text: 'Запропонуйте зміни на цій сторінці',
    },

    nav: [
      // { text: 'Config', link: '/config/' },
      // { text: 'Plugins', link: '/plugins/' },
      {
        text: 'Гід',
        link: '/guide/',
        activeMatch: '^/guide/',
      },
      { text: 'API', link: '/api/', activeMatch: '^/api/' },
      {
        text: 'v4.x',
        items: [{ text: 'v3.x', link: 'https://v3.router.vuejs.org' }],
      },
      {
        text: 'Посилання',
        items: [
          {
            text: 'Дискусії',
            link: 'https://github.com/vuejs/router/discussions',
          },
          {
            text: 'Журнал змін',
            link: 'https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md',
          },
        ],
      },
    ],

    sidebar: {
      // catch-all fallback
      '/': [
        {
          text: 'Налаштування',
          items: [
            {
              text: 'Вступ',
              link: '/introduction.html',
            },
            {
              text: 'Встановлення',
              link: '/installation.html',
            },
          ],
        },
        {
          text: 'Необхідне',
          collapsible: false,
          items: [
            {
              text: 'Починаємо',
              link: '/guide/',
            },
            {
              text: 'Динамічне зіставлення шляхів',
              link: '/guide/essentials/dynamic-matching.html',
            },
            {
              text: "Синтаксис відповідності шляхів",
              link: '/guide/essentials/route-matching-syntax.html',
            },
            {
              text: 'Вкладені шляхи',
              link: '/guide/essentials/nested-routes.html',
            },
            {
              text: 'Програмна навігація',
              link: '/guide/essentials/navigation.html',
            },
            {
              text: 'Іменовані шляхи',
              link: '/guide/essentials/named-routes.html',
            },
            {
              text: 'Іменовані види',
              link: '/guide/essentials/named-views.html',
            },
            {
              text: 'Перенаправлення та псевдоніми',
              link: '/guide/essentials/redirect-and-alias.html',
            },
            {
              text: 'Передача реквізитів до компонентів маршруту',
              link: '/guide/essentials/passing-props.html',
            },
            {
              text: 'Різні режими історії',
              link: '/guide/essentials/history-mode.html',
            },
          ],
        },
        {
          text: 'Розширено',
          collapsible: false,
          items: [
            {
              text: 'Навігаційні охоронці',
              link: '/guide/advanced/navigation-guards.html',
            },
            {
              text: 'Мета-поля шляхів',
              link: '/guide/advanced/meta.html',
            },
            {
              text: 'Отримання даних',
              link: '/guide/advanced/data-fetching.html',
            },
            {
              text: 'Композиційний API',
              link: '/guide/advanced/composition-api.html',
            },
            {
              text: 'Переходи',
              link: '/guide/advanced/transitions.html',
            },
            {
              text: 'Поведінка прокручування',
              link: '/guide/advanced/scroll-behavior.html',
            },
            {
              text: 'Шляхи відкладеного завантаження',
              link: '/guide/advanced/lazy-loading.html',
            },
            {
              text: 'Типізовані маршрути',
              link: '/guide/advanced/typed-routes.html',
            },
            {
              text: 'Розширення RouterLink',
              link: '/guide/advanced/extending-router-link.html',
            },
            {
              text: 'Навігаційні збої',
              link: '/guide/advanced/navigation-failures.html',
            },
            {
              text: 'Динамічна маршрутизація',
              link: '/guide/advanced/dynamic-routing.html',
            },
          ],
        },
        {
          items: [
            {
              text: 'Міграція з Vue 2',
              link: '/guide/migration/index.html',
            },
          ],
        },
      ],

      '/api/': [
        {
          text: 'packages',
          items: [{ text: 'vue-router', link: '/api/' }],
        },
      ],
    },

    docFooter: {
        prev: 'Попередня сторінка',
        next: 'Наступна сторінка',
    }
  },
}
