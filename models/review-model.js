module.exports = (mongoose, models)=>{
  let Schema = mongoose.Schema;
  let ReviewSchema = new Schema({
    name: String,
    tripDate: Date,

    reviewComment: {
      type: String,
      required: true;
    },
    reviewDate: {
      type: Date,
      default: dateFormat("mmmm dS, yyyy")
  }
});

  let Review = mongoose.model('Review', ReviewSchema);
  models.Review = Review;
};
