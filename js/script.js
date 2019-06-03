var p = angular.module("p"[])

p.controller("pokemongt",function ($scope,$rootscope,$http) {
	 }
	// body...
	$scope.listadopokemon = [];
	$http({
		method: "get";
		url:"https://pokeapi.co/api/v2/pokemongt/459" 
	}).then(function datos(x){
	console.log(x); 
	$scope.listadopokemon.push(x)
})
