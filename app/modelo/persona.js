var mongoose = require('mongoose');

module.exports = mongoose.model('Persona', {
	num_cliente: String,
	nombre: String,
	apellido: String,
	edad: String,
	dni: String,
	telefono: String,
	provincia: String,
	localidad: String,
	calle: String,
	numero: String
});