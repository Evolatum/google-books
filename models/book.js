const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subTitle:String,
  authors: [{
    type: String,
    required: true,
    default:"Unknown"
  }],
  description: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true,
    index:true,
    unique: true
  }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
