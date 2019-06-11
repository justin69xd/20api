var pokemon= angular.module("pokemon",[])
	pokemon.controller("listadopokemon",function($scope,$rootScope,$http){
		$scope.Listado=[];
		for(var i = 1; i<4000;i++){
				$http({
				method:"GET",
				url:"https://pokeapi.co/api/v2/pokemon/"+i
			}).then(function success(y){
				$scope.Listado.push(y);
				console.log("p.data.sprites.front_default")
			})
		}
	})
	
	//https://pokeapi.co/api/v2/
