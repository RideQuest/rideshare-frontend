'use strict';

module.exports = (mongoose, models)=>{
  let Schema = mongoose.Schema;
  let UserSchema = new Schema({
    name: String,
    authentication: {
      email:{
        type: String,
        required: true;
      },
      password: {
        type: String,
        required: true;
    }
  },
    startLocation: {
      type: String,
      required: true;
    },
    endLocation: {
      type: String,
      required: true;
    },
    locationRadius: {
      type: String,
      required: true;
    },
    rideStartDate: {
      type: Date,
      required: true;
    },
    userBio: String,
    userCar: String,
    userReviews: [{
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ],
  userUpdated: {type: Date, default: dateFormat("dddd, mmmm dS, yyyy, h:MM:ss TT")},
});

userSchema.methods.hashPassword = function(password){
  var hash = this.authentication.password = bcrypt.hashSync(password, 8);
  return hash;
};

userSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.authentication.password);
};
userSchema.methods.generateToken = function(){
  return jwt.sign({id: this._id}, process.env.APP_SECRET || 'funtimes');
};

  let User = mongoose.model('User', UserSchema);
  models.User = User;
};
