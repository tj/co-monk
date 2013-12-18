
/**
 * Module dependencies.
 */

var thunkify = require('thunkify');

/**
 * Methods to wrap.
 */

var methods = [
  'drop',
  'update',
  'updateById',
  'remove',
  'count',
  'find',
  'findOne',
  'findById',
  'findAndModify',
  'insert'
];

/**
 * Wrap `col`.
 *
 * @param {Collection} col
 * @return {Collection}
 * @api public
 */

module.exports = function(col){
  methods.forEach(function(method){
    col[method] = thunkify(col[method]);
  });

  return col;
};