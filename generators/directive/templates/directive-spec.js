/* jshint -W117, -W109 */
/* ignore not defined and single quotes */

describe('<%= name %>', function () {

  beforeEach(module('<%= module %>'));

  var scope, compile;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('should ...', function () {

    /*
     To test your directive, you need to create some html that would use your directive,
     send that through compile() then compare the results.

     var element = compile('<div mydirective name="name">hi</div>')(scope);
     expect(element.text()).toBe('hello, world');
     */
    expect(1).toBe(1);

  });
});
