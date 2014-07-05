Package.describe({
  summary: "Connect is a middleware framework for node"
});

Npm.depends({
  connect: "2.22.0"
});

Package.on_use(function (api) {
  api.export('connect');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['connect', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});