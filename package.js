Package.describe({
  summary: "Connect is a middleware framework for node",
  version: '2.22.0-2',
  name: 'mrt:connect',
  git: 'https://github.com/peerlibrary/meteor-connect.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:connect@2.22.0-2');
});
