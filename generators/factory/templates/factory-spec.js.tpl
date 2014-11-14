/* jshint -W117, -W109 */
/* ignore not defined and single quotes */

describe('<%= name %>', function() {

  beforeEach(module('<%= module %>'));

  it('should ...', inject(function(<%= name %>) {

    expect(<%= name %>.boo()).toEqual('boo!');

  }));

});
