import { useState } from "react";
import {
  ChevronRight,
  FileText,
  FolderOpen,
  Upload,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const PlanningDataRequest = () => {
  // Local state
  const [assignToConsultant, setAssignToConsultant] = useState(false);
  const [communityService, setCommunityService] = useState(true);
  const [selectedOutcome, setSelectedOutcome] = useState("copy");
  const [description, setDescription] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="lg:pt-32 pt-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center py-4 text-sm text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="hover:text-gray-900 cursor-pointer">Services</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">
              Planning Data Request
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <h1 className="text-2xl  text-gray-600 mb-8">
          Request for planning data
        </h1>

        <form className="space-y-5 pt-5">
          {/* Assign to Consultant Toggle */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-start gap-4 ">
              <button
                type="button"
                onClick={() => setAssignToConsultant(!assignToConsultant)}
                className={`relative inline-flex h-5 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#6200ee] focus:ring-offset-2 ${
                  assignToConsultant ? "bg-[#6200ee]" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    assignToConsultant ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className="text-sm font-medium text-gray-900">
                Assign request to consultant?
              </span>
            </div>
          </div>

          {/* Basic Information */}
          <div className="bg-white rounded-lg p-6 mb-5">
            <h2 className="text-xl font-bold text-gray-700 pb-4">
              Basic Information
            </h2>

            <div className="space-y-6">
              {/* Master Plan Ref */}
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  Master Plan Ref. UPS-202407120004
                </p>
              </div>

              {/* Community Service Toggle */}
              <div className="flex items-center justify-start gap-4 lg:pt-5">
                <button
                  type="button"
                  onClick={() => setCommunityService(!communityService)}
                  className={`relative inline-flex h-5 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#6200ee] focus:ring-offset-2 ${
                    communityService ? "bg-[#6200ee]" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      communityService ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className="text-sm font-medium text-gray-900">
                  Community Service
                </span>
              </div>

              {/* Community Name Input */}
              <div className="pt-5">
                <label
                  htmlFor="community-name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Community Name or Number
                </label>
                <input
                  type="text"
                  id="community-name"
                  placeholder="Please enter community name"
                  className="w-full max-w-xl px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6200ee] focus:border-[#6200ee]"
                />
              </div>

              {/* Project Description */}
              <div className="pt-5">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Description / Requirement *
                </label>
                <div className="relative">
                  <textarea
                    id="description"
                    rows={4}
                    placeholder="Enter a description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength={100}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6200ee] focus:border-[#6200ee] resize-none"
                  />
                  <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                    {description.length}/100
                  </div>
                </div>
              </div>
              <hr className="border-gray-200" />
            </div>

            {/* Outcome Type */}
            <div className="bg-white py-7">
              <h2 className="text-xl font-bold text-gray-700 pb-8   ">
                Outcome type
              </h2>

              <div className="grid lg:flex grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setSelectedOutcome("copy")}
                  className={`w-fit p-4 border-2 rounded-lg text-center transition-colors ${
                    selectedOutcome === "copy"
                      ? "border-[#6200ee]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <FileText className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <p className="text-sm font-medium text-gray-900">
                    Copy of master plan
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedOutcome("planning")}
                  className={`w-fit p-4 border-2 rounded-lg text-center transition-colors ${
                    selectedOutcome === "planning"
                      ? "border-[#6200ee] "
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <FolderOpen className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <p className="text-sm font-medium text-gray-900">
                    Planning Data
                  </p>
                </button>
              </div>

              {/* Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pt-3">
                <div className="">
                  <label
                    htmlFor="project-select"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Select project
                  </label>
                  <div className="relative">
                    <select
                      id="project-select"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6200ee] focus:border-[#6200ee] appearance-none bg-white"
                    >
                      <option value="">Project name</option>
                      <option value="project1">Project 1</option>
                      <option value="project2">Project 2</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="plot-number"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Plot number
                  </label>
                  <div className="relative">
                    <select
                      id="plot-number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6200ee] focus:border-[#6200ee] appearance-none bg-white"
                    >
                      <option value="">P-000-01</option>
                      <option value="p-000-02">P-000-02</option>
                      <option value="p-000-03">P-000-03</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-gray-200" />

            {/* Attachments */}
            <div className="bg-white pt-8">
              <h2 className="text-xl font-bold text-gray-700 pb-10">
                Attachments <span className="text-red-500">*</span>
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Upload Authorization Letter
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
};

export default PlanningDataRequest;
