var Persona = require('./modelo/persona');
var Persona = require('./modelo/movil');
var Controller = require ('./controller');

module.exports = function(app) {


//Aca tenemos los endpoint:

	// devolver todas las Personas
	app.get('/api/persona', Controller.getPersona);
	// Crear una nueva Persona
	app.post('/api/persona', Controller.setPersona);
	// Modificar los datos de una Persona
	app.put('/api/persona/:persona_id', Controller.updatePersona);
	// Borrar una Persona
	app.delete('/api/persona/:persona_id', Controller.removePersona);
	// application 
	
	// devolver todos los Moviles
	app.get('/api/movil', Controller.getMovil);
	// Crear un nuevo Movil
	app.post('/api/movil', Controller.setMovil);
	// Modificar los datos de un Movil
	app.put('/api/movil/:movil_id', Controller.updateMovil);
	// Borrar un Movil
	app.delete('/api/movil/:movil_id', Controller.removeMovil);
	// application
	
	
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};