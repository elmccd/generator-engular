/* global describe, beforeEach, it, expect, inject */

describe('<%= name %>', function() {

  beforeEach(module('<%= module %>'));

  it('should ...', inject(function(<%= name %>) {

    //expect(<%= _.camelize(name) %>.doSomething()).toEqual('something');
    expect(1).toBe(1);

  }));

});
