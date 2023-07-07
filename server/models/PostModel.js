const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    image: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    user: {
      type: Object,
    },
    replies: [
      {
        userName: {
          type: String,
        },
        userId: {
          type: String,
        },
        userAvatar: {
          type: String,
        },
        reply: {
          type: String,
        },
        likesNumber: {
          type: Number,
        },
        likes: [
          {
            userName: {
              type: String,
            },
            userId: {
              type: String,
            },
            userAvatar: {
              type: String,
            },
          },
        ],
      },
    ],
    likesNumber: {
      type: Number,
    },
    likes: [
      {
        userName: {
          type: String,
        },
        userId: {
          type: String,
        },
        userAvatar: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
