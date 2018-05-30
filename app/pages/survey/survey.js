'use strict';

angular.module('survey', ['ngRoute', 'multilingual', 'pascalprecht.translate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/survey', {
            templateUrl: 'pages/survey/survey.html',
            controller: 'SurveyController as ctrl'
        });
    }])

    .controller('SurveyController', ['$translate', '$location', '$rootScope', function ($translate, $location, $rootScope) {
        var ctrl = this;
        ctrl.questions = [
            {
                question: 'q1',
                options: ['q1o1','q1o2','q1o3','q1o4']
            },
            {
                question: 'q2',
                options: ['q2o1','q2o2','q2o3','q2o4']
            },
            {
                question: 'q3',
                options: ['q3o1','q3o2','q3o3','q4o4']
            },
            {
                question: 'q4',
                options: ['q4o1','q4o2','q4o3','q4o4']
            }
        ]
        ctrl.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };
        $rootScope.$on('$translateChangeSuccess', function (event, data) {

            var language = data.language;

            $rootScope.lang = language;

            $rootScope.default_direction = language === 'ar' ? 'rtl' : 'ltr';
            $rootScope.opposite_direction = language === 'ar' ? 'ltr' : 'rtl';

            $rootScope.default_float = language === 'ar' ? 'right' : 'left';
            $rootScope.opposite_float = language === 'ar' ? 'left' : 'right';

        });
    }]);