Package.describe({
  name: 'universe:modules-for-coffee',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Nice way for importing universe modules in CoffeeScript',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'promise', 'universe:modules@0.6.1']);
  api.addFiles('modules-for-coffee.js');
  api.export('using');
});
