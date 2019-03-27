module.exports = {
  title: 'Monster Manual',
  description: 'The Dragon Quest Monsters inofficial Monster Manual',
  themeConfig: {
    nav: [
      { text: 'Typen', link: '/types/' },
      { text: 'Tore', link: '/locations/' },
      { text: 'Fähigkeiten', link: '/abilities/' }
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    searchMaxSuggestions: 5
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-task-lists'))
    }
  }
}