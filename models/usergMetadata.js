var mongoose = require('mongoose');
    //crypto = require('crypto');
    //merge = require('mongoose-merge-plugin');
    //timestamp = require('mongoose-timestamp');
    //bcrypt = require('bcryptjs');

//mongoose.plugin(merge);
/**
 * @TODO: To validate 'data' prop with child schema.
 */
var UserMetaSchema = new mongoose.Schema({
    category: {
        type: String,
        "required": true
    },
    data: {
        type:Array,
        "required":true
    }
});

//UserSchema.plugin(timestamp);
mongoose.model('userMetaData', UserMetaSchema,'userMetaData');