'use strict'
const SassVarsExtractor = require('sass-vars-extractor')

module.exports = function (grunt) {
  grunt.registerTask('sass_vars_extractor', 'Extract sass variables', function () {
    const options = this.options()
    const done = this.async()

    SassVarsExtractor.extract(options.entryPoint, options.includedPaths)
      .then(function (parsedVars) {
        grunt.file.write(options.dest, JSON.stringify(parsedVars, true))
        done(true)
      }).catch(function (sassError) {
        console.error(sassError)
        done(false)
      })
  })
}
