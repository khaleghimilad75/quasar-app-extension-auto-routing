module.exports = function (api) {
  /**
   * This supplies a default "layout" and
   * sets up the route-generator folder
   */
  api.render('templates')

  /**
   * Almost all users will likely want the same setup for
   * route-generator, so we simply setup the
   * defaults without prompting.
   */
  api.extendJsonFile('quasar.extensions.json', {
    'route-generator': {
      pagesDir: 'src/pages',
      routePrefix: '',
      layoutsDir: 'src/layouts',
      ignorePattern: "/(^|[\/\\])\../",
      outDir: 'src/router/route-generator',
      pagesImportPrefix: 'pages/',
      generatorConfig: {
        'nested': true
      }
    }
  })
}
