// src/lib/db/mongoose.ts
import mongoose from 'mongoose';

// Force Database name in the URI and options
// const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_URI = "";

declare global {
  var mongoose: any;
}

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable');
// }

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('Connected to MongoDB database: HackathonPPTSubmit');
      return mongoose;
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;