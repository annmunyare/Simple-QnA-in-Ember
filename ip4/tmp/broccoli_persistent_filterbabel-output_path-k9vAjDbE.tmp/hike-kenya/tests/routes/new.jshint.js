define('hike-kenya/tests/routes/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new.js should pass jshint.');
  });
});