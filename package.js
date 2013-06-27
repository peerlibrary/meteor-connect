Package.describe({
  summary: "Meteor smart package for connect node.js package"
});

Npm.depends({
  connect: "2.8.0"
});

Package.on_use(function (api) {
  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['connect', 'tinytest', 'test-helpers'], ['server']);
  api.add_files('tests.js', ['server']);
});