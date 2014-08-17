/* jshint -W117, -W109 */
/* ignore not defined and single quotes */
describe('uppercase', function () {

  beforeEach(module('engularTests'));

  it('should return text in upper-case', inject(function ($filter) {

    var filter = $filter('uppercase');

    expect(filter('input')).toEqual('INPUT');

  }));

});
