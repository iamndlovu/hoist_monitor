const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
	{
		username: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		level: { type: Number, required: true, default: 1 },
	},
	{ timestamps: true }
);

const User = model('User', UserSchema);

module.exports = User;