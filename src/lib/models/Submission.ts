// src/lib/models/Submission.ts
import mongoose from 'mongoose';

// Check if model already exists to prevent model overwrite errors
const SubmissionModel = mongoose.models.Submissions || 
  mongoose.model(
    'Submissions', 
    new mongoose.Schema({
      name: {
        type: String,
        required: [true, 'Name is required']
      },
      team: {
        type: String,
        required: [true, 'Team name is required']
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
      },
      mobile: {
        type: String,
        required: [true, 'Mobile Number is required'],
      },
      theme: {
        type: String,
        required: [true, 'Theme is required'],
      },
      fileLink: {
        type: String,
        required: [true, 'File link is required']
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }, {
      collection: 'Submissions',
      versionKey: false
    })
  );

export default SubmissionModel;