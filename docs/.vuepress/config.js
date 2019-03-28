module.exports = {
  title: 'Monster Manual',
  description: 'The Dragon Quest Monsters inofficial Monster Manual',
  themeConfig: {
    nav: [
      { 
        text: 'Arten', 
        items: [
          { text: 'Slime', link: '/types/slime/'},
          { text: 'Drache', link: '/types/dragon/'},
          { text: 'Biest', link: '/types/beast/'},
          { text: 'Vogel', link: '/types/bird/'},
          { text: 'Pflanze', link: '/types/plant/'},
          { text: 'Insekt', link: '/types/insect/'},
          { text: 'Teufel', link: '/types/demon/'},
          { text: 'Zombie', link: '/types/undead/'},
          { text: 'Materie', link: '/types/elemental/'},
          { text: '?', link: '/types/unknown/'}
        ] 
      },
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