angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newPersona = {};
	$scope.personas = {};

	$scope.newMovil = {};
	$scope.moviles = {};
	
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/persona').success(function(data) {
		$scope.personas = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});
	
	// Obtenemos todos los datos de la base de datos
	$http.get('/api/movil').success(function(data) {
		$scope.moviles = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Función para registrar a una persona
	$scope.registrarPersona = function() {
		$http.post('/api/persona', $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario una vez que registramos a la persona.
				$scope.personas = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
	
	// Función para registrar un Movil
	$scope.registrarMovil = function() {
		$http.post('/api/movil', $scope.newMovil)
		.success(function(data) {
				$scope.newMovil = {}; // Borramos los datos del formulario una vez que registramos al movil.
				$scope.moviles = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una persona
	$scope.modificarPersona = function(newPersona) {
		$http.put('/api/persona/' + $scope.newPersona._id, $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario una vez que registramos a la persona.
				$scope.personas = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
	
	// Función para editar los datos de un Movil
	$scope.modificarMovil = function(newMovil) {
		$http.put('/api/movil/' + $scope.newMovil._id, $scope.newMovil)
		.success(function(data) {
				$scope.newMovil = {}; // Borramos los datos del formulario una vez que registramos al movil.
				$scope.moviles = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto persona conocido su id
	$scope.borrarPersona = function(newPersona) {
		$http.delete('/api/persona/' + $scope.newPersona._id)
		.success(function(data) {
			$scope.newPersona = {};
			$scope.personas = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
	
	// Función que borra un objeto Movil conocido su id
	$scope.borrarMovil = function(newMovil) {
		$http.delete('/api/movil/' + $scope.newMovil._id)
		.success(function(data) {
			$scope.newMovil = {};
			$scope.moviles = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para tomar el objeto seleccionado en la tabla (Persona)
	$scope.selectPerson = function(persona) {
		$scope.newPersona = persona;
		$scope.selected = true;
		console.log($scope.newPersona, $scope.selected);
	};
	
	// Función para tomar el objeto seleccionado en la tabla (MOVIL)
	$scope.selectMovils = function(movil) {
		$scope.newMovil = movil;
		$scope.selected = true;
		console.log($scope.newMovil, $scope.selected);
	};
}