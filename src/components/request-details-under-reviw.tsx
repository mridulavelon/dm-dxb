import {
  ChevronRight,
  FileText,
  CheckCircle,
  ArrowDownToLine,
  Check,
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

        <div className="lg:grid lg:grid-cols-4 lg:gap-6">
          {/* Main Content */}
          <div className="col-span-4 lg:col-span-3 space-y-8 pt-0">
            {/* Planning Data Section */}
            <div className="bg-white rounded-lg  p-6 pb-8">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-gray-700 pb-2">
                  Planning Data of Construction Projects
                </h2>
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-1 rounded-full">
                  Under review
                </span>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-base font-semibold text-gray-600 mt-2">
                    Master Plan Ref. UPS-202407120004
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-5 pb-5">
                  <div className="w-[300px]">
                    <p className="text-sm text-gray-500 mb-2">
                      Community Name or Number
                    </p>
                    <p className="font-medium text-gray-900 ">
                      Hospitality, Food Operations and Safety
                    </p>
                  </div>
                  <div className="w-auto lg:ml-18">
                    <p className="text-sm text-gray-500 mb-2">
                      Submission Date
                    </p>
                    <p className="font-medium text-gray-900 whitespace-nowrap">
                      26 Nov 2024
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Request type</p>
                    <p className="font-medium text-gray-900 whitespace-nowrap">
                      Copy of master plan
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Project description
                  </p>
                  <p className="font-medium text-gray-900">description.....</p>
                </div>
              </div>
            </div>

            {/* Applicant Info Section */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-700 pb-12">
                Applicant Info
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Name</p>
                  <p className="font-medium  text-gray-900">
                    Abdullah Mohamed Ahmed
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">License number</p>
                  <p className="font-medium text-gray-900">654219926254</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Mobile Number</p>
                  <p className="font-medium text-gray-900">+971543395506</p>
                </div>
              </div>
              <hr className="border-gray-200" />

              {/* Trade License Details Section */}
              <div className="pt-9">
                <h2 className="text-xl font-bold text-gray-700 pb-12">
                  Trade License Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 pb-8">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Licensing Authority
                    </p>
                    <p className="font-medium text-gray-900">
                      Dubai Economy & Tourism
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Trade Name</p>
                    <p className="font-medium text-gray-900">
                      ABC Vending Machine
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Trade License Number
                    </p>
                    <p className="font-medium text-gray-900">654219926242</p>
                  </div>
                </div>

                <div className="pb-4">
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
            <div className="bg-white rounded-lg p-6 pb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Timeline
              </h3>

              <div className="space-y-4 relative after:content-['']  after:absolute after:top-[22px] after:left-[8px] after:h-full after:border-l after:border-dotted after:border-gray">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  </div>
                  <div className="flex-1 ">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-900">Application</p>
                      <span className="text-xs text-gray-500">1 day ago</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2 ml-5 ">
                  <div className="flex-shrink-0">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
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
                <button className="lg:w-[115px] w-[147px]  py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700">
                  Outcome
                </button>
                <button className="lg:w-[122px] w-[147px] py-2 text-sm font-medium text-[#6200ee] border-b-1 border-[#6200ee]">
                  Uploads
                </button>
              </div>

              {/* Document List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg pb-2">
                  <div className="flex items-start space-x-2">
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
                  <button className=" hover:bg-gray-200 rounded">
                    <ArrowDownToLine className="w-4 h-4 text-[#6200ee]" />
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-lg">
                  <div className="flex items-start space-x-2">
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
                  <button className=" hover:bg-gray-200 rounded">
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
