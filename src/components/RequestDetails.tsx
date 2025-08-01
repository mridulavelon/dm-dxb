import {
  ArrowDownToLine,
  Check,
  ChevronRight,
  CircleCheck,
  FileText,
} from "lucide-react";
import { useState } from "react";

const RequestDetails = () => {
  // Local state
  const [activeTab, setActiveTab] = useState<"outcome" | "uploads">("uploads");

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6  lg:pt-34 pt-10">
      <div className="max-w-[1280px] mx-auto px-4 pb-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <span className="hover:text-gray-900 cursor-pointer">Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="hover:text-gray-900 cursor-pointer">Dashboard</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Request Details</span>
        </nav>

        {/* Main Content */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 pb-8">
          Request Details
        </h1>
        <div className="lg:grid lg:grid-cols-4 lg:gap-6">
          {/* Left Column - Main Details */}
          <div className="col-span-4 lg:col-span-3 pt-0">
            {/* Page Title */}

            {/* Request Information Card */}
            <div className="bg-white rounded-lg mb-7">
              <div className="p-5 pb-8 ">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h2 className="lg:text-2xl font-bold text-gray-700 lg:pb-3">
                    Master Plan of Construction Projects
                  </h2>
                  <span className="w-fit lg:w-auto bg-green-100 text-green-800 text-xs px-3 py-[2px] rounded-full whitespace-nowrap font-semibold">
                    Completed
                  </span>
                </div>
                <p className="text-base font-semibold text-gray-600 mt-2">
                  Ref. UPS-202407120004
                </p>
              </div>
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-4 sm:grid-cols-3 gap-5 mb-8 pb-5">
                  {/* Category - spans 2 columns */}
                  <div className=" col-span-3 sm:col-span-1">
                    <p className="text-gray-600 mb-2">Application type</p>
                    <p className="font-medium text-sm text-gray-900">
                      Hospitality, Food Operations and Safety
                    </p>
                  </div>

                  {/* Last updated - spans 1 column */}
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-gray-600 mb-2">Copy type</p>
                    <p className="font-medium text-sm text-gray-900">
                      26 Oct 2024 <span className="pl-2">4:35pm</span>
                    </p>
                  </div>

                  {/* Submission Date - spans 1 column */}
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-gray-600 mb-2">Date of approval</p>
                    <p className="font-medium text-sm  text-gray-900">
                      26 Nov 2024
                    </p>
                  </div>
                </div>

                {/* <hr className="border-gray-200" /> */}
                <div className="bg-white rounded-lg pb-3">
                  <p className="  text-gray-600 mb-2">Project name</p>
                  <p className="font-medium text-sm  text-gray-900">
                    This request has been rejected. To proceed, please submit a
                    new application.
                  </p>
                </div>
              <div className="bg-gray-50 rounded-lg p-4 ">
                <p className="text-sm font-medium text-gray-600 mb-3 pb-2">
                  Assigned consultant
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sultan Abdullah"
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 pb-2">
                      Sultan Abdullah
                    </p>
                    <p className="text-xs text-gray-600">Civil Engineer</p>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Applicant Details Card */}
            <div className="bg-white rounded-lg mb-7">
              <div className="p-5 pb-5">
                <h2 className="text-2xl font-bold text-gray-700 pb-3">
                  Applicant Details
                </h2>
              </div>
              <div className="p-5 pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm pb-6">
                  <div>
                    <p className="text-gray-600 mb-2">Customer Type</p>
                    <p className="font-medium text-sm text-gray-900">Company</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">User</p>
                    <p className="font-medium text-sm text-gray-900">
                      Abdullah Mohamed Ahmed
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Mobile Number</p>
                    <p className="font-medium text-sm text-gray-900">
                      +971543395506
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5 pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm pb-11">
                  <div>
                    <p className="text-gray-600 mb-2">Licensing Authority</p>
                    <p className="font-medium text-sm text-gray-900">
                      Dubai Economy & Tourism
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Trade Name</p>
                    <p className="font-medium text-sm text-gray-900">
                      ABC vending Machine
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Trade License Number</p>
                    <p className="font-medium text-sm text-gray-900">
                      65421992642
                    </p>
                  </div>
                </div>
                <div className="pb-7">
                  <p className="text-gray-600 mb-2 text-sm">Activity Type</p>
                  <p className="font-medium text-sm text-gray-900">
                    4799002 Selling Products & Services by Automatic Vending
                    Machines
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Details Card */}
            <div className="bg-white rounded-lg mb-7">
              <div className="p-5 pb-6 ">
                <div className="flex sm:items-center justify-between gap-4">
                  <h2 className="w-fit lg:w-full lg:text-2xl font-bold text-gray-700 lg:pb-3">
                    Payment Details
                  </h2>
                  <span className="w-fit lg:w-auto bg-green-100 text-green-800 text-xs px-3 py-[2px] rounded-full whitespace-nowrap font-semibold">
                    Paid
                  </span>
                </div>
              </div>
              <div className="p-5 pb-2 space-y-4">
                <div className="grid grid-cols-4 sm:grid-cols-3 gap-5 mb-8">
                  {/* Category - spans 2 columns */}
                  <div className=" col-span-3 sm:col-span-1">
                    <p className="text-gray-600 mb-2">Invoice Number</p>
                    <p className="font-medium text-sm text-gray-900">
                      164357316459
                    </p>
                  </div>

                  {/* Last updated - spans 1 column */}
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-gray-600 mb-2">Due Amount</p>
                    <p className="font-medium text-sm text-gray-900">AED 200</p>
                  </div>

                  {/* Submission Date - spans 1 column */}
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-gray-600 mb-2">Due Date</p>
                    <p className="font-medium text-sm  text-gray-900">
                      01 Dec 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Related Services */}

          <div className="space-y-6">
            <div className="bg-white rounded-lg">
              <div className="p-6 ">
                <h2 className="text-lg font-bold text-gray-900">
                  Related Services
                </h2>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full flex items-center gap-3 px-2 py-1 text-center border border-[#6200ee] rounded-lg hover:bg-white transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-[#6200ee]" />
                  </div>
                  <span className="lg:text-sm text-xs font-medium text-[#6200ee]">
                    Request for Planning Data
                  </span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Documents
              </h3>

              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-4">
                <button
                  className={`w-[200px] px-4 py-2 text-sm font-medium border-b-1 transition-colors duration-200 ${
                    activeTab === "outcome"
                      ? "text-[#6200ee] border-[#6200ee]"
                      : "text-gray-500 border-transparent hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("outcome")}
                >
                  Outcome
                </button>
                <button
                  className={`w-[200px] px-4 py-2 text-sm font-medium border-b-1 transition-colors duration-200 ${
                    activeTab === "uploads"
                      ? "text-[#6200ee] border-[#6200ee]"
                      : "text-gray-500 border-transparent hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("uploads")}
                >
                  Uploads
                </button>
              </div>

              {/* Document List */}
              {activeTab === "uploads" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg pb-2">
                    <div className="flex items-start space-x-2">
                      <FileText className="w-4 h-4 text-[#6200ee]" />
                      <div>
                        <p className="text-xs text-gray-500 pb-1">File</p>
                        <p className="text-sm text-gray-900 font-medium">
                          MasterPlan.pdf
                        </p>
                      </div>
                    </div>
                    <button className="hover:bg-gray-200 rounded">
                      <ArrowDownToLine className="w-4 h-4 text-[#6200ee]" />
                    </button>
                  </div>
                </div>
              )}

              {/* No outcome documents */}
              {activeTab === "outcome" && (
                <div className="text-sm text-gray-500">
                  No outcome documents.
                </div>
              )}
            </div>

            {/* Timeline Section */}
            <div className="bg-white rounded-lg px-6 py-8 pb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-7">Timeline</h3>

              <div className="space-y-4 relative after:content-['']  after:absolute after:top-[26px] after:left-[9px] after:h-full after:border-l after:border-dotted after:border-gray">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0">
                    <CircleCheck className="w-5 h-5 text-white fill-green-500 mt-1" />
                  </div>
                  <div className="flex-1 ">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-900">Application</p>
                      <span className="text-sm font-medium text-gray-500">
                        7 month ago
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2 ml-5 ">
                  <div className="flex-shrink-0">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 mb-2">
                      Service request created
                    </p>
                    <p className="text-xs text-gray-500">15/8/2024, 10:52 am</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 ml-5 pt-4">
                  <div className="flex-shrink-0">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 mb-2">Review</p>
                    <p className="text-xs text-gray-500">15/8/2024, 11:35 am</p>
                  </div>
                </div>
              </div>
              <div className="mt-7 space-y-4 relative after:content-['']  after:absolute after:top-[26px] after:left-[9px] after:h-full after:border-l after:border-dotted after:border-gray">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0">
                    <CircleCheck className="w-5 h-5 text-white fill-green-500 mt-1" />
                  </div>
                  <div className="flex-1 ">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-900">Invoice</p>
                      <span className="text-sm font-medium text-gray-500">
                        5 month ago
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2 ml-5 ">
                  <div className="flex-shrink-0">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 mb-2">
                      Invoice created
                    </p>
                    <p className="text-xs text-gray-500">15/8/2024, 10:52 am</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 ml-5 pt-4">
                  <div className="flex-shrink-0">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 mb-2">Under Review</p>
                    <p className="text-xs text-gray-500">15/8/2024, 11:35 am</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-2 mt-7">
                <div className="flex-shrink-0">
                  <CircleCheck className="w-5 h-5 text-white fill-green-500 mt-1" />
                </div>
                <div className="flex-1 ">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">Permit</p>
                    <span className="text-sm font-medium text-gray-500">
                      Complete
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RequestDetails;
