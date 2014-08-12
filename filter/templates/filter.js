angular.module('<%= module %>').filter('<%= name %>', function () {
  return function (input, arg) {
    return 'output';
  };
});
