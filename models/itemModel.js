const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imgUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const itemModel = model("item", itemSchema);

module.exports = itemModel;
