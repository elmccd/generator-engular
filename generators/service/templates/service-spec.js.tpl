/* jshint -W117, -W109 */
/* ignore not defined and single quotes */

describe('<%= name %>Factory', function() {

  beforeEach(module('<%= module %>'));

  it('should ...', inject(function(<%= name %>) {

    expect(<%= name %>Factory.getAll().count()).toEqual(3);

  }));

});
