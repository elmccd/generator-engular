/**
 * @ngdoc service
 * @name <%= appName %>.service:features
 * @description
 * Very important features methods.
 */

(function () {

  function featuresService() {
    var features = [
      'Modular',
      'Gulp',
      'NgDocs'
    ];

    return {
      /**
       * @ngdoc method
       * @name <%= appName %>.service:features#getAll
       * @methodOf <%= appName %>.service:features
       * @description
       * Get all available features
       *
       * @returns {Array} Array of features
       */
      getAll: function () {
        return features;
      },

      /**
       * @ngdoc method
       * @name <%= appName %>.service:features#getOne
       * @methodOf <%= appName %>.service:features
       * @description
       * Get feature by index
       *
       * @returns {string} Return selected feature
       */
      getOne: function (index) {
        return features[index];
      }
    };
  }

  angular.module('<%= appName %>').factory('features', featuresService);

})();
