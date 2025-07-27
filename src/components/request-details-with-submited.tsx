import {
  ChevronRight,
  FileText,
  CheckCircle,
  ArrowDownToLine,
} from "lucide-react";

const RequestDetailsWithSubmited = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="lg:pt-32 pt-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
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

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Request Details
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 lg:pb-8">
            {/* Planning Data Section */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Planning Data of Construction Projects
                </h2>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Submitted
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Master Plan Ref. UPS-202407120004
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Project name</p>
                    <p className="font-medium text-gray-900">
                      Cornish community
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Submission Date
                    </p>
                    <p className="font-medium text-gray-900">26 June 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Request type</p>
                    <p className="font-medium text-gray-900">New</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Plot no</p>
                    <p className="font-medium text-gray-900">123152</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Land area</p>
                    <p className="font-medium text-gray-900">Al Manaar</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Zone</p>
                    <p className="font-medium text-gray-900">-</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Location</p>
                  <p className="font-medium text-gray-900 mb-4">
                    N 25.2434035108179 / E 25.2434035108179
                  </p>

                  {/* Map Container */}
                  <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    {/* Map Controls */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col bg-white rounded shadow-sm border border-gray-200">
                      <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border-b border-gray-200">
                        Map
                      </button>
                      <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Satellite
                      </button>
                    </div>

                    {/* Simulated Map with Marker */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 relative">
                      {/* Street patterns */}
                      <div className="absolute inset-0">
                        <div className="absolute top-8 left-8 w-32 h-1 bg-gray-300"></div>
                        <div className="absolute top-16 left-16 w-24 h-1 bg-gray-300"></div>
                        <div className="absolute top-24 left-12 w-28 h-1 bg-gray-300"></div>
                        <div className="absolute top-12 left-20 w-1 h-20 bg-gray-300"></div>
                        <div className="absolute top-8 left-32 w-1 h-24 bg-gray-300"></div>
                      </div>

                      {/* Location Marker */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg relative">
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-red-500"></div>
                        </div>
                      </div>

                      {/* Area labels */}
                      <div className="absolute top-6 right-8 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow">
                        Al Manaar
                      </div>
                      <div className="absolute bottom-8 left-8 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow">
                        Cornish Area
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Applicant Info Section */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Applicant Info
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
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
              <div className="bg-white py-6">
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
                      <span className="text-xs text-gray-500">
                        2 minutes ago
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
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
export default RequestDetailsWithSubmited;
