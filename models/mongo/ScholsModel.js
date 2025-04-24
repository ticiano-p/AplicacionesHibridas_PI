import mongoose, { Types } from "mongoose";

const ScholsModel = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true },
    firstName:  { type: String, required: true },
    CUE: { type: String, required: true, unique: true },
    Address: { type: String, required: true },
    City: { type: String, required: true },
    Province: { type: String, required: true },
    Phones: { type: [String], required: true }, 
    Emails: { type: [String], required: true, unique: true },  
    Creation_Date: { type: Date, default: Date.new },  
    Level: { type: String, required: true },  
    Type: { type: String, required: true }      
  }, {
    versionKey: false 
  })

export const ScholModel = mongoose.model('Schols', ScholsModel)
