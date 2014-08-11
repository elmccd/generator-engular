$stateProvider.state('<%= statename %>', {
  url: '<%= route %>',
  templateUrl: '<%= templateUrl %>',
  controller: '<%= ctrlname %>',
  resolve: {
    getMe: function () {
      return  {};
    }
  }
});
