import { useState } from "react";
import { ChevronRight, Upload, ArrowRight } from "lucide-react";

export default function ApplyService() {
  // Local state
  const [justification, setJustification] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      {/* Breadcrumb Navigation */}
      <div className="lg:pt-32 pt-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center py-4 text-sm text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="hover:text-gray-900 cursor-pointer">Services</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Service details</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 ">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Apply service</h1>
        <form className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Basic Information
            </h2>

            <div className="pb-6">
              <label
                htmlFor="justification"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Justification
              </label>
              <div className="relative max-w-md">
                <textarea
                  id="justification"
                  rows={4}
                  placeholder="Enter your reason ..."
                  value={justification}
                  onChange={(e) => setJustification(e.target.value)}
                  maxLength={120}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6200ee] focus:border-[#6200ee] resize-none"
                />
                <div className="absolute bottom-2 left-2 text-xs text-gray-500 pb-2 px-2">
                  {justification.length}/120
                </div>
              </div>
            </div>
            <hr className="border-gray-200" />

            {/* Attachments */}
            <div className="bg-white py-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Attachments
              </h2>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-4">
                  Upload supporting document
                </p>

                {/* File Upload Area */}
                <div className="w-fit max-w-md border-2 border-dashed border-gray-300 rounded-lg px-8 py-4  hover:border-gray-400 transition-colors ">
                  <div className="  flex items-center gap-4">
                    <Upload className="w-8 h-8 mx-auto  text-gray-400" />
                    <div className="">
                      <p className="text-sm font-medium text-[#6200ee] hover:text-[#6200ee] cursor-pointer">
                        Drop file here or click to browse
                      </p>
                      <p className="text-xs text-gray-500 ">
                        Supports PDF, PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Terms and Submit */}
      <div className="my-6 bg-white rounded-lg p-6 ">
        <div className="max-w-[1280px] mx-auto flex items-start justify-between lg:flex-nowrap flex-wrap px-5">
          <div className="w-full lg:max-w-4xl flex items-start space-x-3 mb-6">
            <input
              type="checkbox"
              id="acknowledge"
              checked={acknowledged}
              onChange={(e) => setAcknowledged(e.target.checked)}
              className="mt-1 h-4 w-4 text-[#6200ee] focus:ring-[#6200ee] border-gray-300 rounded"
            />
            <label htmlFor="acknowledge" className="text-sm text-gray-700">
              I acknowledge that all the information which is submitted to Dubai
              Municipality is correct and declare that I have read and agreed to
              the terms and conditions.
            </label>
          </div>

          <div className="flex flex-row gap-3 ">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6200ee] focus:ring-offset-2"
            >
              Save as draft
            </button>
            <button
              type="submit"
              disabled={!acknowledged}
              className="px-6 py-2 bg-[#6200ee] text-white text-sm font-medium rounded-md hover:bg-[#6200ee] focus:outline-none focus:ring-2 focus:ring-[#6200ee] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Submit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
