# Hackathon PPT Submit Website

This Hackathon PPT Submission Website enables participants to submit their Round 1 PPT along with their Name, Email, Team Name, and Mobile Number. The uploaded PPTs are securely stored in an admin's Google Drive, with the drive link recorded in a MongoDB database. Admins can access and manage all submissions, convert the stored data into an Excel sheet, and easily filter and shortlist teams for the next round. Additionally, the platform provides an option to send email notifications to shortlisted teams, inviting them to proceed further in the hackathon.

## Prerequisites

- Knowladge of Next.js
- Knowladge of MongoDB
- Knowladge of Google Cloud Console

## How to use

- Open [Google Cloud Console](https://console.cloud.google.com/) and create a new project.
- Enable the Google Drive API and create a new service account.
- Create a google drive and share it with the service account email as editor.
- Download the service account key and fill data in the `env.template` file.
- Rename the `env.template` file to `env.local` and fill data in the file.
- In the drive link `drive.google.com/drive/u/1/folders/abc` abc is your `GDRIVE_SHARED_DRIVE_ID`
- Create a mongodb database.
- Get the mongodb uri and fill it in the `env.local` file.
- Run `yarn ; yarn dev` to install dependencies and run.

## Preview

![Home](/public/preview/Home.png)

![About](/public/preview/About.png)

![Themes](/public/preview/Themes.png)

![Submit](/public/preview/Submit.png)

## License:

This project is licensed under the GPL-3.0 License.
