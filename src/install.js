module.exports = function (api) {
  /**
   * This supplies a default "layout" and
   * sets up the auto-routing-windows folder
   */
  api.render('templates')

  /**
   * Almost all users will likely want the same setup for
   * auto-routing-windows, so we simply setup the
   * defaults without prompting.
   */
  api.extendJsonFile('quasar.extensions.json', {
    'auto-routing-windows': {
      pagesDir: 'src/pages',
      routePrefix: '',
      layoutsDir: 'src/layouts',
      ignorePattern: "/(^|[\/\\])\../",
      outDir: 'src/router/auto-routing-windows',
      pagesImportPrefix: 'pages/',
      generatorConfig: {
        'nested': true
      }
    }
  })
}
