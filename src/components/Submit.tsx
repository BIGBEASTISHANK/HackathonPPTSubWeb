"use client";
import React from "react";
import { useState } from "react";

const driveId = process.env.GDRIVE_SHARED_DRIVE_ID;

export default function Submit() {
  const [formData, setFormData] = useState({
    name: "",
    team: "",
    email: "",
    mobile: "",
    theme: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    // Check if file is selected
    if (!selectedFile) {
      setFile(null);
      return;
    }

    // Check file size (10MB = 10 * 1024 * 1024 bytes)
    const maxSizeInBytes = 10 * 1024 * 1024;
    if (selectedFile.size > maxSizeInBytes) {
      setUploadStatus(
        "File size exceeds 10MB limit. Please select a smaller file."
      );
      setFile(null);

      // Reset the file input
      const fileInput = document.getElementById("pptFile") as HTMLInputElement;
      if (fileInput) fileInput.value = "";

      return;
    }

    setFile(selectedFile);
    setUploadStatus("");
  };

  const uploadFile = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !file ||
      !formData.name ||
      !formData.team ||
      !formData.email ||
      !formData.theme
    ) {
      setUploadStatus("Please fill all required fields and select a file");
      return;
    }

    setLoading(true);
    setUploadStatus("Uploading.....");

    const formDataToSend = new FormData();

    // Add user data
    formDataToSend.append("name", formData.name);
    formDataToSend.append("team", formData.team);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("theme", formData.theme);

    // Add file data
    formDataToSend.append("file", file);
    formDataToSend.append("driveId", driveId!);

    try {
      const res = await fetch("/api/uploadFile", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();

      if (data.status === 200) {
        setUploadStatus(`Successfully submitted!`);
        // Reset form after successful submission
        setFormData({
          name: "",
          team: "",
          email: "",
          mobile: "",
          theme: "",
        });
        setFile(null);

        // Reset the file input
        const fileInput = document.getElementById(
          "pptFile"
        ) as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        setUploadStatus(`Failed to upload: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      setUploadStatus("Failed to upload. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[93vh] scroll-mt-20 flex flex-col" id="submit">
      {/* Title */}
      <h1 className="font-bold text-8xl mx-auto mt-10 mb-10 text-center">
        Submit Your PPT
      </h1>

      {/* Content container */}
      <div className="grid grid-cols-2 gap-20 w-[95%] mx-auto px-4 my-auto">
        {/* Form */}
        <div className="w-full max-w-[60rem]">
          <form className="flex flex-col gap-5" onSubmit={uploadFile}>
            {/* Name */}
            <div className="flex gap-2 border-2 border-white rounded-lg px-5 text-xl">
              <input
                type="text"
                id="name"
                className="outline-none w-full py-3"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Team Name */}
            <div className="flex gap-2 border-2 border-white rounded-lg px-5 text-xl">
              <input
                type="text"
                id="team"
                className="outline-none w-full py-3"
                placeholder="Team Name"
                value={formData.team}
                onChange={handleInputChange}
              />
            </div>

            {/* Email */}
            <div className="flex gap-2 border-2 border-white rounded-lg px-5 text-xl">
              <input
                type="email"
                id="email"
                className="outline-none w-full py-3"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Mobile Number */}
            <div className="flex gap-2 border-2 border-white rounded-lg px-5 text-xl">
              <input
                type="number"
                id="mobile"
                className="outline-none w-full py-3 no-spinner"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </div>

            {/* Themes */}
            <div className="flex gap-2 border-2 border-white rounded-lg px-5 text-xl">
              <select
                id="theme"
                className="outline-none w-full py-3"
                value={formData.theme}
                onChange={handleInputChange}
              >
                <option disabled value="" hidden>
                  Select a theme
                </option>
                <option
                  className="bg-[#5BADDB] text-black"
                  value="Sustainable Cities"
                >
                  Sustainable Cities
                </option>
                <option
                  className="bg-[#5BADDB] text-black"
                  value="AI for Social Good"
                >
                  AI for Social Good
                </option>
                <option
                  className="bg-[#5BADDB] text-black"
                  value="FinTech & Blockchain"
                >
                  FinTech & Blockchain
                </option>
                <option
                  className="bg-[#5BADDB] text-black"
                  value="Open Innovations"
                >
                  Open Innovations
                </option>
              </select>
            </div>

            {/* Attach your PPT file with size limitation notice */}
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 border-2 border-white rounded-lg px-5 text-xl">
                <input
                  type="file"
                  id="pptFile"
                  className="outline-none w-full py-3"
                  accept=".ppt,.pptx"
                  onChange={handleFileChange}
                />
              </div>
              <p className="text-sm text-gray-300 ml-2">
                Maximum file size: 10MB
              </p>
            </div>

            <div className="flex items-center gap-20">
              {/* Submit button */}
              <button
                type="submit"
                className="bg-[#010106] border-2 border-white text-white px-20 py-3 rounded-lg mt-2 font-bold text-xl w-auto self-start cursor-pointer"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {/* Display upload status */}
              {uploadStatus && (
                <p
                  className={`mt-2 text-lg ${
                    uploadStatus.includes("Failed") ||
                    uploadStatus.includes("exceeds")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {uploadStatus}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Notice */}
        <div className="mt-[5%]">
          {/* Note */}
          <h2 className="text-4xl font-bold">Note:</h2>

          {/* Paragraph */}
          <p className="text-xl mt-5">
            Please make sure to submit your PPT in the correct format (.ppt or
            .pptx), in the correct theme, and under 10MB in size. If you
            encounter any issues, please contact us at{" "}
            <a href="mailto:ishank@bigbeastishank.com" className="underline">
              ishank@bigbeastishank.com
            </a>
            .
          </p>

          <p className="text-xl mt-5">
            Ensure your presentation is clear, concise, and aligned with the
            selected theme. Submissions will be reviewed based on creativity,
            relevance, and impact. Late submissions may not be considered, so
            please submit your files before the deadline.
          </p>

          <p className="text-xl mt-5">
            Once submitted, you will receive a confirmation email. If you do not
            receive one, please check your spam folder or reach out to the
            provided email address.
          </p>
        </div>
      </div>
    </div>
  );
}
