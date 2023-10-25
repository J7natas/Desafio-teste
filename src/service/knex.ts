const knex = require('knex');
const knexConfig = require('../config/knex');

let conn: any;

function conectar() {
  if (conn) {
    return conn;
  }

  conn = knex(knexConfig);
  return conn;
}

module.exports = conectar();
