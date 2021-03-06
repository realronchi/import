'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var _History = new Schema({
	name: String,
	aliquot: String,
	importation: String, // 0 - Normal / 1 - NCM
  dateCreate: Date,
  processId: { type: Schema.Types.ObjectId, ref: 'Process' },
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('History', _History);