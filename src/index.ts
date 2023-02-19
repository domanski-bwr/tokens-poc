import('./bootstrap').then(({ mount }) => {
  mount({
    routingStrategy: 'browser',
  })
})

export {}
