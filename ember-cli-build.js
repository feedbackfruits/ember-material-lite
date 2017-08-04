/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    sassOptions: {
      includePaths: ['node_modules/material-design-lite/src']
    }
  });
  app.options.snippetPaths = ['tests/dummy/app/templates/snippets'];
  app.options.snippetSearchPaths = ['tests/dummy', 'app', 'addon'];
  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import('vendor/highlight.pack.js');

  return app.toTree();
};
