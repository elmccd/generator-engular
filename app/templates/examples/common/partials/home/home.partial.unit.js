/* global describe, beforeEach, it, expect, inject */

describe('Home controller', function () {

  beforeEach(module('<%= appName %>'));

  var scope, ctrl;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('Home', {$scope: scope});
  }));

  it('should ...', inject(function () {

    expect(1).toEqual(1);

  }));

});
