import React from "react";


export default function Submit() {
  return (
    <div className="h-[93vh] scroll-mt-20 flex flex-col" id="submit">
      {/* Title */}
      <h1 className="font-bold text-8xl mx-auto  text-center lg:text-8xl md:text-7xl sm:text-6xl xs:text-5xl">
        Submit Your PPT
      </h1>

      {/* Content container */}
      <div className="grid grid-cols-2 gap-20 w-[95%] mx-auto px-4 my-auto">
        {/* Form */}
        <div className="w-full max-w-[60rem]">
          <form className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex gap-2 border-2 border-white rounded-lg px-5 text-xl">
              <input
                type="text"
                id="name"
                className="outline-none w-full my-3"
                placeholder="Name"
                required
              />
            </div>

            {/* Team Name */}
            <div className="flex gap-2 border-2 border-white rounded-lg px-5 text-xl">
              <input
                type="text"
                id="teamName"
                className="outline-none w-full my-3"
                placeholder="Team Name"
                required
              />
            </div>

            {/* Email */}
            <div className="flex gap-2 border-2 border-white rounded-lg px-5 text-xl">
              <input
                type="email"
                id="email"
                className="outline-none w-full my-3"
                placeholder="Email"
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="flex gap-2 border-2 border-white rounded-lg px-5 text-xl">
              <input
                type="number"
                id="mobileNumber"
                className="outline-none w-full my-3 no-spinner"
                placeholder="Mobile Number"
                required
              />
            </div>

            {/* Themes */}
            <div className="flex gap-2 border-2 border-white rounded-lg px-5 text-xl">
              <select
                id="themes"
                className="outline-none w-full my-3"
                required
                defaultValue=""
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

            {/* Attach your PPT file */}
            <div className="flex gap-2 border-2 border-white rounded-lg px-5 text-xl">
              <input
                type="file"
                id="pptFile"
                className="outline-none w-full my-3"
                accept=".ppt,.pptx"
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="bg-[#010106] border-2 border-white text-white px-20 py-3 rounded-lg mt-2 font-bold text-xl w-auto self-start cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Notice */}
        <div className="mt-[5%]">
          {/* Note */}
          <h2 className="text-4xl font-bold">Note:</h2>

          {/* Paragraph */}
          <p className="text-xl mt-5">
            Please make sure to submit your PPT in the correct format (.ppt or
            .pptx) and in the correct theme. If you encounter any issues, please
            contact us at{" "}
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
