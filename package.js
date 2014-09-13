Package.describe({
  summary: "Connect is a middleware framework for node",
  version: '2.22.0-2',
  name: 'peerlibrary:connect',
  git: 'https://github.com/peerlibrary/meteor-connect.git'
});

Npm.depends({
  connect: '2.22.0'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.export('connect');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['peerlibrary:connect', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});
