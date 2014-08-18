/* jshint -W117, -W109 */
/* ignore not defined and single quotes */
describe('<%= appName %> - directive uppercase', function () {

  beforeEach(module('<%= appName %>'));

  it('should return text in upper-case', inject(function ($filter) {

    var filter = $filter('uppercase');

    expect(filter('input')).toEqual('INPUT');

    expect(filter('')).toEqual('');

    expect(filter(undefined)).toEqual('');

  }));

});
