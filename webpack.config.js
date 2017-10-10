const path = require('path');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
 
module.exports = {
  entry: [
    './built/bootstrap.js',
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bootstrap.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new ClosureCompilerPlugin({
      compiler: {
        jar: 'node_modules/google-closure-compiler/compiler.jar',
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
        language_out: 'ES5',

        warning_level: 'QUIET',
        // dependency_mode: 'STRICT',
        rewrite_polyfills: 'false',
        module_resolution: 'NODE',
        jscomp_off: 'checkVars',

        package_json_entry_names: 'es2015',
        process_common_js_modules: true,
      },
    }),
  ]
};