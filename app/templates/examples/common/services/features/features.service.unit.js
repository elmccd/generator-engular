/* jshint -W117, -W109 */
/* ignore not defined and single quotes */

describe('features', function () {

  beforeEach(module('<%= appName %>'));

  it('should get All features', inject(function (features) {

    expect(features.getAll().length).toEqual(3);

  }));

  it('should get one feature', inject(function (features) {

    expect(features.getOne(0)).toEqual('Modular');

  }));

});
