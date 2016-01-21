var fourSquareService = angular.module('fourSquareService', ['ngResource']);
/* init */
var	clientId = "5A5HVQOJPRUBU0ALM55MBGELS2J1SJ20OIWT02CYC5N30TRJ";
var	clientSecret ="HJKIQ3CLGLQCG5HUUYSLQMVH0RODYWZPMKZSAH4TBKCSWAMY";
var fsqUrl = 'https://api.foursquare.com/v2/venues/explore';

fourSquareService.factory('search',
  function($resource){
    return $resource(fsqUrl,
    {client_id: clientId,
		client_secret: clientSecret,
		v: 20160101,
		intent: 'browse',
		limit: 10
		}
  )});
