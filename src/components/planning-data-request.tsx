import { useEffect, useState } from "react";
import {
  ChevronRight,
  FileText,
  FolderOpen,
  Upload,
  ChevronDown,
  Trash,
  ArrowRight,
  CircleCheck,
  X,
} from "lucide-react";

const RequestForPlanningData = () => {
  // Local state
  const [assignToConsultant, setAssignToConsultant] = useState(false);
  const [licenseNumber, setLicenseNumber] = useState("");
  const [selectedOutcome, setSelectedOutcome] = useState("copy");
  const [acknowledged, setAcknowledged] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [communitySelected, setShowCommunitySelected] = useState(false);

  // 👇 Reset validation when input is cleared
  useEffect(() => {
    if (licenseNumber.trim() === "") {
      setIsValidated(false);
    }
  }, [licenseNumber]);

  const handleValidate = () => {
    if (licenseNumber.trim() !== "") {
      setIsValidated(true);
    }
  };

  // event
  const handleClickCommunity = () => {
    setShowCommunitySelected(true);
    setSelectedOutcome("community");
  };

  // outcome click event
  const handleClickOutcome = () => {
    setShowCommunitySelected(false);
    setSelectedOutcome("copy");
  };

  // planning click event
  const handleClickPlanning = () => {
    setShowCommunitySelected(false);
    setSelectedOutcome("planning");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="lg:pt-20 pt-10">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="flex items-center py-4 text-sm text-gray-600">
              <span className="hover:text-gray-900 cursor-pointer">Home</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="hover:text-gray-900 cursor-pointer">
                Dashboard
              </span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 cursor-pointer">
                Request Details
              </span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 cursor-pointer">
                Request For Planning Data
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div>
            <h1 className="text-2xl  text-gray-600 py-2">Request Details</h1>
            <h2 className="text-2xl font-bold text-gray-600 py-2">
              Request for planning data
            </h2>
            <p className="text-md py-2">
              Initiates and fills out the PUD request form via the UPUP portal.
              The form includes basic project data, zoning information,
              application type, and PUD area coordinates. The system applies
              validation logic based on applicant type and request type.
            </p>
          </div>

          <form className="space-y-5 pt-5">
            {/* Assign to Consultant Toggle */}

            {/* Basic Information */}
            <div className="bg-white rounded-lg p-6 mb-5">
              <h2 className="text-xl font-bold text-gray-700 pb-3">
                Basic Information
              </h2>

              <div>
                {/* Master Plan Ref */}
                <div className="border-b border-gray-200 pb-5">
                  <p className="text-sm text-gray-600 mb-2">
                    Master Plan Ref. UPS-202407120004
                  </p>
                </div>

                {/* Outcome Type */}
                <div className="bg-white py-7">
                  <h2 className="text-xl font-bold text-gray-700 pb-8   ">
                    Outcome type
                  </h2>

                  <div className="grid lg:flex grid-cols-3 lg:grid-cols-1 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={handleClickOutcome}
                      className={`w-fit p-4 border-2 rounded-lg text-center transition-colors ${
                        selectedOutcome === "copy"
                          ? "border-[#6200ee]"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <FileText className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                      <p
                        className={`text-sm font-medium ${
                          selectedOutcome === "copy"
                            ? "text-[#6200ee]"
                            : "text-gray-900"
                        }`}
                      >
                        Copy of master plan
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={handleClickPlanning}
                      className={`w-fit p-4 border-2 rounded-lg text-center transition-colors ${
                        selectedOutcome === "planning"
                          ? "border-[#6200ee] "
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <FolderOpen className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                      <p
                        className={`text-sm font-medium ${
                          selectedOutcome === "planning"
                            ? "text-[#6200ee]"
                            : "text-gray-900"
                        }`}
                      >
                        Planning Data
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={handleClickCommunity}
                      className={`w-fit p-4 border-2 rounded-lg text-center transition-colors ${
                        selectedOutcome === "community"
                          ? "border-[#6200ee]"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <FolderOpen className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                      <p
                        className={`text-sm font-medium ${
                          selectedOutcome === "community"
                            ? "text-[#6200ee]"
                            : "text-gray-900"
                        }`}
                      >
                        Community Data
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

                    {communitySelected && (
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
                    )}
                  </div>
                </div>
                <hr className="border-gray-200" />

                {/* Attachments */}
                <div className="bg-white pt-8">
                  <h2 className="text-xl font-bold text-gray-700 pb-8">
                    Attachments <span className="text-red-500">*</span>
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Upload Authorization Letter
                  </p>

                  {/* File Upload Area */}
                  <div className="w-full max-w-[400px] border-2 border-dashed relative border-gray-300 rounded-lg px-7 py-5  hover:border-gray-400 transition-colors ">
                    <div className="flex items-center gap-4">
                      <Upload className="w-8 h-8  text-gray-400 m-0" />
                      <div className="">
                        <p className="text-sm font-medium text-gray-900">
                          AUTHO.pdf
                        </p>
                        <p className="mt-1 text-xs inline-flex gap-2 items-center px-2 py-1 bg-green-100 text-green-700 rounded-full">
                          <CircleCheck className="w-3 h-3" />
                          File uploaded successfully!
                        </p>
                      </div>
                    </div>

                    {/* Delete button */}
                    <button className="text-red-500 hover:text-red-600 absolute top-2 right-2">
                      <Trash className="w-5 h-5 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-start gap-4 ">
                <button
                  type="button"
                  onClick={() => {
                    setAssignToConsultant(!assignToConsultant);
                    setIsValidated(false); // reset on toggle change
                    setLicenseNumber(""); // reset input
                  }}
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
              {assignToConsultant && (
                <>
                  <p className="text-sm font-medium text-gray-500 pt-4 pb-8 ">
                    The assigned consultant will be able to view, make payment
                    and manage the whole request
                  </p>

                  {/* License Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      License number
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="number"
                        value={licenseNumber}
                        onChange={(e) => setLicenseNumber(e.target.value)}
                        placeholder="5489 654651 984"
                        className="w-96 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6200ee]"
                      />
                      <button
                        type="button"
                        disabled={licenseNumber.trim() === ""}
                        onClick={handleValidate}
                        className={`px-4 py-3 font-medium rounded-lg text-sm border ${
                          licenseNumber.trim() === ""
                            ? "bg-white text-gray-400 border-gray-200 cursor-not-allowed"
                            : "bg-[#6200ee] text-white border-[#6200ee] hover:bg-[#5300d6]"
                        }`}
                      >
                        Validate
                      </button>
                    </div>
                  </div>

                  {/* show validation after enter licenseNumber */}
                  {isValidated && (
                    <div className="mt-6 w-fit max-w-md flex items-center gap-2">
                      <img
                        src=""
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Muhamad jasim
                        </p>
                        <p className="text-sm text-gray-500">Civil Engineer</p>
                      </div>
                    </div>
                  )}
                </>
              )}
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
                I acknowledge that all the information which is submitted to
                Dubai Municipality is correct and declare that I have read and
                agreed to the terms and conditions.
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
                onClick={() => setShowModel(true)}
                className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6200ee] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Submit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModel && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative">
            {/* Close button */}
            <button
              onClick={() => setShowModel(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X />
            </button>

            {/* Modal content */}
            <div className="p-8 pt-12 text-start">
              {/* Success icon */}
              <div className="mx-auto mb-6 rounded-full flex items-center justify-center">
                <CircleCheck className="w-26 h-26 stroke-green-500" />
              </div>

              {/* Success message */}
              <h2 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
                Your Request for Planning Data has been submitted successfully
              </h2>

              {/* Reference number section */}
              <div className="mb-8 border-b border-b-[#E4E4E4] pb-8">
                <p className="text-gray-600 mb-2">
                  Application reference number :
                </p>
                <p className="text-primary font-semibold text-lg">
                  CRS-24625-00820
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowModel(false)}
                className="w-full bg-primary hover:bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestForPlanningData;
