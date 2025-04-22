import mongoose, { Types } from "mongoose";

const ScholsModel = new mongoose.Schema({
    firstName:  { type: String, required: true },
    CUE: { type: String, required: true, unique: true },
    Address: { type: String, required: true },
    City: { type: String, required: true },
    Province: { type: String, required: true },
    Phones: { type: [String], required: true }, 
    Emails: { type: [String], required: true, unique: true },  
    Creation_Date: { type: Date, required: true },  
    Level: { type: String, required: true },  
    Type: { type: String, required: true }  
  }, {
    versionKey: false 
  })

export const ScholModel = mongoose.model('Schols', ScholsModel)
