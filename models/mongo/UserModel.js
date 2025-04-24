import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:     { type: String, required: true },
    lastName:      { type: String, required: true },
    gender:        { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    photo:         { type: String },
    birthDate:     { type: Date, required: true },
    dni:           { type: String, required: true, unique: true },
    email:         { type: String, required: true, unique: true },
    address:       { type: String },
    phone:         { type: String },
    password:      { type: String, required: true },
    createdAt:     { type: Date, default: Date.now },
    lastLogin:     { type: Date },
    active:        { type: Boolean, default: true },
    role:          { type: String, enum: ['pending', 'student', 'parent', 'teacher', 'director'], default: 'pending' }
  }, {
    versionKey: false 
  })

export const UserModel = mongoose.model('User', userSchema)