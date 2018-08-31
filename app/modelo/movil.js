var mongoose = require('mongoose');

module.exports = mongoose.model('Movil', {
	id_movil: String,
	marca: String,
	modelo: String,
	color: String,
	matricula: String
});