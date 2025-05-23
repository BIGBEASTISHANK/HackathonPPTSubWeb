import { NextResponse } from "next/server";
import { google } from "googleapis";
import mime from "mime";
import { Readable } from "stream";
import dbConnect from "@/lib/db/mongoose";
import Submission from "@/lib/models/Submission";
import mongoose from "mongoose";

// const privateKey = process.env.GDRIVE_PRIVATE_KEY?.replace(/\\n/g, '\n');
// const clientEmail = process.env.GDRIVE_CLIENT_EMAIL;
// const serviceAccountClientId = process.env.GDRIVE_SERVICE_ACCOUNT_CLIENT_ID;

const privateKey = "";
const clientEmail = "";
const serviceAccountClientId = "";

const authenticateGoogle = () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: "service_account",
      private_key: privateKey,
      client_email: clientEmail,
      client_id: serviceAccountClientId,
    },
    scopes: "https://www.googleapis.com/auth/drive",
  });

  return auth;
};

// upload function
const uploadFileToDrive = async (
  folderId: string,
  file: any,
  driveId: string
) => {
  const auth = authenticateGoogle();
  const drive = google.drive({ version: "v3", auth });

  const mimeType = mime.getType(file.name);

  const fileMetadata = {
    name: file.name,
    parents: [folderId],
    driveId: driveId,
    mimeType: mimeType,
  };

  const fileBuffer = file.stream();

  const response = await drive.files.create({
    requestBody: fileMetadata,
    media: {
      mimeType: mimeType!,
      body: Readable.from(fileBuffer),
    },
    fields: "id",
    supportsAllDrives: true,
  });

  // get file link
  const fileLink = await drive.files.get({
    fileId: response.data.id!,
    fields: "webViewLink",
    supportsAllDrives: true,
  });

  return fileLink.data;
};

// POST request handler
export async function POST(req: Request) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Log the current connection info for debugging (with null check)
    console.log("Connected to database:", mongoose.connection?.db?.databaseName || "unknown");

    const formData = await req.formData();

    const folderId = process.env.GDRIVE_SHARED_DRIVE_ID;
    const driveId = formData.get("driveId") as string;
    const file = formData.get("file") as File;

    // Get user data from form
    const name = formData.get("name") as string;
    const team = formData.get("team") as string;
    const email = formData.get("email") as string;
    const mobile = formData.get("mobile") as string;
    const theme = formData.get("theme") as string;

    if (
      !folderId ||
      !driveId ||
      !file ||
      !name ||
      !team ||
      !email ||
      !mobile ||
      !theme
    ) {
      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    const fileLink = await uploadFileToDrive(folderId, file, driveId);

    // Create data object to save
    const submissionData = {
      name,
      team,
      email,
      mobile,
      theme,
      fileLink: fileLink.webViewLink,
    };

    console.log("Attempting to save data:", submissionData);

    // Create new submission record in MongoDB using a more direct approach
    const submission = new Submission(submissionData);
    await submission.save();

    // Use optional chaining for accessing mongoose.connection.db
    const databaseName = mongoose.connection?.db?.databaseName || "unknown";
    const collectionNamespace = mongoose.connection?.db?.collection("Submissions")?.namespace || "unknown";

    console.log("Saved submission with ID:", submission._id);
    console.log("In collection:", collectionNamespace);

    return NextResponse.json({
      status: 200,
      message: "Submission saved successfully",
      fileLink: fileLink.webViewLink,
      submissionId: submission._id,
      databaseName: databaseName,
      collectionName: "Submissions",
    });
  } catch (error) {
    console.error("Error processing submission:", error);
    return NextResponse.json(
      {
        error: "Failed to process submission",
        details: error instanceof Error ? error.message : String(error),
      },
      {
        status: 500,
      }
    );
  }
}