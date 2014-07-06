Tinytest.add('connect', function (test) {
  var isDefined = false;
  try {
    connect;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "connect is not defined");
  test.isTrue(Package.connect.connect, "Package.connect.connect is not defined");
});
