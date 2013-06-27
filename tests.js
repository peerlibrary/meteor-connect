Tinytest.add('meteor-connect', function (test) {
  var isDefined = false;
  try {
    connect;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "connect is not defined");
});