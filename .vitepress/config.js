module.exports = {
  title: "Blockchain Docs",
  description: "Just writing docs.",
  lang: "en-US",

  themeConfig: {
    repo: 'ANO-ID-AS-Center/ideadocs',
    editLinks: true,
    editLinkText: 'Edit this page on Github',
    lastUpdated: 'Last Updated',

    nav: [
      {
        text: 'Guide',
        link: '/',
        activeMatch: '^/$|^/guide/',
      },
      {
        text: 'ELK',
        link: '/elk/intro',
        activeMatch: '^/elk/',
      },
      {
        text: 'BFT',
        link: '/bft/intro',
        activeMatch: '^/bft/'
      },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/bft/': getBFTSidebar(),
      '/elk/': getELKSidebar(),
      '/': getGuideSidebar(),
    }
  }
}


function getGuideSidebar() {
  return [
    {
      text: 'Проекты',
      link: '/',
    },
    {
      text: 'Документация',
      children: [
        { text: 'С чего начать', link: '/guide/intro'},
        { text: 'Как добавить проект', link: '/guide/addproject'},
        { text: 'Как добавить страницу', link: '/guide/addpage'},
        { text: 'Глобальные настройки', link: '/guide/globals'},
      ]
    },
    {
      text: 'Документация внутри проекта', 
      children: [
        { text: 'Зачем это?', link: '/guide/doc-for-project'},
        { text: 'Первоначальная настройка', link: '/guide/project-first'},
        { text: 'Публикация сайта', link: '/guide/project-deploy'},
      ]
    }
  ]
}

function getELKSidebar() {
  return [
    {
      text: 'Введение',
      children: [
        { text: 'Что такое ELK', link: '/elk/intro'},
        { text: 'Установка', link: '/elk/setup'},
        { text: 'Отправка логов', link: '/elk/sendlogs'},
        { text: 'Анализ данных', link: '/elk/analysis'}
      ]
    }
  ]
}

function getBFTSidebar() {
  return [
    {
      text: 'Создание стенда с BFT',
      children: [
        { text: 'Введение', link: '/bft/intro'},
        { text: 'Разворачивание Fabric', link: '/bft/fabric'},
        { text: 'Нагрузочный инструмент', link: '/bft/load-test'},
        { text: 'Мониторинг', link: '/bft/monitoring'},
        { text: 'Флеймграфы', link: '/bft/flamegraphs'},
      ]
    }
  ]
}