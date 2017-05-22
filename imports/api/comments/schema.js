import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export default new SimpleSchema({
	text:{
		type: String
	},
	date:{
		type: Date,
		defaultValue: new Date()
	},
	articleId: {
		type: String,
		optional: true
	},
	userId: {
		type: String,
		optional: true
	}
})