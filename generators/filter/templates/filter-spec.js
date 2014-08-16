/* global describe, beforeEach, it, expect, inject */

describe('<%= name %>', function () {

  beforeEach(module('<%= module %>'));

  it('should ...', inject(function ($filter) {

    var filter = $filter('<%= name %>');

    expect(filter('input')).toEqual('output');

  }));

});
