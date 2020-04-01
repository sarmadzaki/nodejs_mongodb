'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var errorRoute = exports.errorRoute = function errorRoute(req, res) {
	return res.send({ status: 400, message: 'No valid route found!' });
};