import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export default new SimpleSchema({
	title:{
		type: String
	},	
	date:{
		type: Date,
		defaultValue: new Date()
	},
	description:{
		type: String
	},
	content:{
		type:String
	}
});