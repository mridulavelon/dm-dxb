import { ChevronRight, FileText } from "lucide-react";

const RequestDetails = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-6  lg:pt-36 pt-10">
      <div className="max-w-[1280px] mx-auto px-4">
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
              <div className="p-5 pb-12 ">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h2 className="text-2xl font-bold text-gray-700 pb-3">
                    Planned Unit Development Request
                  </h2>
                  <span className="inline-flex items-center px-3 py-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 w-fit">
                    Pending Review
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
                    <p className="text-gray-600 mb-2">Category</p>
                    <p className="font-medium text-sm text-gray-900">
                      Hospitality, Food Operations and Safety
                    </p>
                  </div>

                  {/* Last updated - spans 1 column */}
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-gray-600 mb-2">Last updated</p>
                    <p className="font-medium text-sm text-gray-900">
                      26 Oct 2024 <span className="pl-2">4:35pm</span>
                    </p>
                  </div>

                  {/* Submission Date - spans 1 column */}
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-gray-600 mb-2">Submission Date</p>
                    <p className="font-medium text-sm  text-gray-900">26 Nov 2024</p>
                  </div>
                </div>

                {/* <hr className="border-gray-200" /> */}
                <div className="bg-white rounded-lg ">
                    <p className="font-medium text-sm text-gray-600 mb-2">Reject reason</p>
                    <p className="font-medium text-sm  text-gray-900">
                    This request has been rejected. To proceed, please submit a
                    new application.
                    </p>
                </div>
              </div>
            </div>

            {/* Applicant Details Card */}
            <div className="bg-white rounded-lg">
              <div className="p-5 pb-5">
                <h2 className="text-2xl font-bold text-gray-700 pb-3">
                  Applicant Details
                </h2>
              </div>
              <div className="p-5 pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm pb-11">
                  <div>
                    <p className="text-gray-600 mb-2">Customer Type</p>
                    <p className="font-medium text-sm text-gray-900">Company</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Name</p>
                    <p className="font-medium text-sm text-gray-900">
                      Abdullah Mohamed Ahmed
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Mobile Number</p>
                    <p className="font-medium text-sm text-gray-900">+971543395506</p>
                  </div>
                </div>
                <hr className="border-gray-200" />
              </div>
            </div>

            {/* Trade License Details Card */}
            <div className="bg-white rounded-lg pb-0 pt-5">
              <div className="p-5 pb-5">
                <h2 className="text-2xl font-bold text-gray-700 pb-3">
                  Trade License Details
                </h2>
              </div>
              <div className="p-5 pb-0  space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm pb-6 ">
                  <div>
                    <p className="text-gray-600 mb-2">Licensing Authority</p>
                    <p className="font-medium text-sm text-gray-900">
                      Dubai Economy & Tourism
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Trade Name</p>
                    <p className="font-medium text-sm text-gray-900">
                      ABC Vending Machine
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Trade License Number</p>
                    <p className="font-medium text-sm text-gray-900">65421992642</p>
                  </div>
                </div>
                <div className="pb-7">
                  <p className="text-gray-600 mb-2 text-sm">Activity Type</p>
                  <p className="font-medium text-sm text-gray-900">
                    4799002 Selling Products & Services by Automatic Vending
                    Machines
                  </p>
                </div>
                <hr className="border-gray-200" />
              </div>
            </div>

            {/* Additional Details Card */}
            <div className="bg-white rounded-lg pt-5">
              <div className="p-5 pb-4 ">
                <h2 className="text-2xl font-bold text-gray-700 pb-3">
                  Additional Details
                </h2>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 mb-2">Activities</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                        Tea
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                        Coffee
                      </span>
                    </div>
                  </div>
                  <div className="w-fit ">
                    <p className="text-gray-600 mb-2">Location</p>
                    <p className="font-medium text-sm text-gray-900">
                      Sheikh Mohamed Bin Rashid Boulevard, Downtown, Dubai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Related Services */}
          <div className="lg:col-span-1 ">
            <div className="bg-white rounded-lg ">
              <div className="p-6 ">
                <h2 className="text-lg font-semibold text-gray-900">
                  Related Services
                </h2>
              </div>
              <div className="px-6 ">
                <button className="w-full flex items-center gap-3 px-2 py-1 text-center border border-[#6200ee] rounded-lg hover:bg-white transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-[#6200ee]" />
                  </div>
                  <span className="text-sm font-medium text-[#6200ee]">
                    Request for Planning Data
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RequestDetails;
