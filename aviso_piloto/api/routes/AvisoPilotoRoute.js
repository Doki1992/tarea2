module.exports = function(app) {
	var solicitud_piloto = require('../controllers/AvisoPilotoController');
	app.route('/aviso')
	.get(solicitud_piloto.aviso_piloto);
}