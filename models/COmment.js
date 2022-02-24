const { Schema, model } = require("mongoose");

const CommentSchema = new Schema({
  writtenBy: {
    type: String
  },
  comentBody: {
    type: String
  },
  createdAt: {
    type: Date.now
  }
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;