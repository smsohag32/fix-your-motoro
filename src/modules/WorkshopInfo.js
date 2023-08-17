import { Schema, model, models } from "mongoose";

const workshopSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required."],
  },
  image: {
    type: String,
    required: [true, "image is required."],
  },
  service_name: {
    type: String,
    required: [true, "Service name is required."],
  },
  service_category: {
    type: String,
    required: [true, "service_category is required."],
  },
  service_description: {
    type: String,
    required: [true, "service_description is required."],
  },
  service_description: {
    type: String,
    required: [true, "service_description is required."],
  },
  service_duration: {
    type: String,
    required: [true, "service_duration is required."],
  },
  service_price: {
    type: String,
    required: [true, "service_price is required."],
  },
  benefits: {
    type: String,
    required: [true, "benefits is required."],
  },
  customer_reviews: {
    type: [],
    required: [true, "customer_reviews is required."],
  },
  benefits: {
    type: String,
    required: [true, "service_price is required."],
  },
  workshop_image: {
    type: String,
    required: [true, "workshop_image is required."],
  },
  service_image: {
    type: String,
    required: [true, "service_image is required."],
  },
  warranty: {
    type: String,
    required: [true, "warranty is required."],
  },
});

const WorkshopInfo =
  models.WorkshopInfo || model("WorkshopInfo", workshopSchema);

export default WorkshopInfo;
