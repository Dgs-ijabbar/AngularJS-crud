var multilingualModule = angular.module('multilingual', ['ngCookies', 'pascalprecht.translate','core','ngSanitize']);

multilingualModule.run(['$rootScope', function ($rootScope) {
  $rootScope.lang = 'en';

  $rootScope.default_float = 'left';
  $rootScope.opposite_float = 'right';

  $rootScope.default_direction = 'ltr';
  $rootScope.opposite_direction = 'rtl';
}]);


multilingualModule.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.preferredLanguage('en');
  $translateProvider.useLoader('languageAsyncLoader');
  $translateProvider.useLocalStorage();
  $translateProvider.useMissingTranslationHandlerLog();
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
}]);