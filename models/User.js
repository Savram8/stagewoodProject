const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  fName: String,
  lName: String,
  username: String,
  password: String,
  email: String,
  createdAt: String,

  user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users'
}
});



module.exports = model('User', userSchema);
