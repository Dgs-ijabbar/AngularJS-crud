core.factory('languageAsyncLoader', function ($q, $timeout, $http) {

    return function (options) {
        var deferred = $q.defer();
          // Used http here directily to save time it also be written in http service
            $http({
                method: 'Get',
                url: "http://localhost:38108/api/translation?language="+options.key
              }).then(function (response) {
                    console.log(response);
                    deferred.resolve(response.data);
                }).catch(function (error) {
                    console.log(error);
                    deferred.reject(error);
                });
        return deferred.promise;
    };
});  