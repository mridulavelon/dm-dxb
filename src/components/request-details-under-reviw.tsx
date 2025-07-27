import {
  ChevronRight,
  FileText,
  CheckCircle,
  ArrowDownToLine,
} from "lucide-react";

const RequestDetailsUnderReview = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Breadcrumb Navigation */}
      <div className="lg:pt-36 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4 text-sm text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="hover:text-gray-900 cursor-pointer">
              Dashboard
            </span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Request Details</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 mx-auto">
          Request Details
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Planning Data Section */}
            <div className="bg-white rounded-lg  p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-900">
                  Planning Data of Construction Projects
                </h2>
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-1 rounded-full">
                  Under review
                </span>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-600 mb-">
                    Master Plan Ref. UPS-202407120004
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Community Name or Number
                    </p>
                    <p className="font-medium text-gray-900">
                      Hospitality, Food Operations and Safety
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Submission Date
                    </p>
                    <p className="font-medium text-gray-900">26 Nov 2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Request type</p>
                    <p className="font-medium text-gray-900">
                      Copy of master plan
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Project description
                  </p>
                  <p className="font-medium text-gray-900">description.....</p>
                </div>
              </div>
            </div>

            {/* Applicant Info Section */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Applicant Info
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-7">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Name</p>
                  <p className="font-medium text-gray-900">
                    Abdullah Mohamed Ahmed
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">License number</p>
                  <p className="font-medium text-gray-900">654219926254</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Mobile Number</p>
                  <p className="font-medium text-gray-900">+971543395506</p>
                </div>
              </div>
              <hr className="border-gray-200" />

              {/* Trade License Details Section */}
              <div className="py-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Trade License Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Licensing Authority
                    </p>
                    <p className="font-medium text-gray-900">
                      Dubai Economy & Tourism
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Trade Name</p>
                    <p className="font-medium text-gray-900">
                      ABC Vending Machine
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Trade License Number
                    </p>
                    <p className="font-medium text-gray-900">654219926242</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Activity Type</p>
                  <p className="font-medium text-gray-900">
                    4799002 Selling Products & Services by Automatic Vending
                    Machines
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timeline Section */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Timeline
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-900">Application</p>
                      <span className="text-xs text-gray-500">1 day ago</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 ">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      Service request created
                    </p>
                    <p className="text-xs text-gray-500">15/8/2024, 10:52 am</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Under Review</p>
                    <p className="text-xs text-gray-500">15/8/2024, 11:35 am</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Documents
              </h3>

              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-4">
                <button className="px-4 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700">
                  Outcome
                </button>
                <button className="px-4 py-2 text-sm font-medium text-[#6200ee] border-b-2 border-[#6200ee]">
                  Uploads
                </button>
              </div>

              {/* Document List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3  rounded-lg">
                  <div className="flex items-start space-x-3">
                    <FileText className="w-4 h-4 text-[#6200ee]" />
                    <div>
                      <p className="text-xs  text-gray-500 pb-1">
                        Authorization Letter
                      </p>
                      <p className="text-sm text-gray-900 font-medium">
                        Authorization Letter.pdf
                      </p>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-gray-200 rounded">
                    <ArrowDownToLine className="w-4 h-4 text-[#6200ee]" />
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <FileText className="w-4 h-4 text-[#6200ee]" />
                    <div>
                      <p className="text-xs  text-gray-500 pb-1">
                        Supporting Documents
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        Supporting Documents.pdf
                      </p>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-gray-200 rounded">
                    <ArrowDownToLine className="w-4 h-4 text-[#6200ee]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RequestDetailsUnderReview;
