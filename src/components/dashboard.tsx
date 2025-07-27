import {
  ArrowRight,
  Calendar1,
  EqualApproximately,
  ExternalLink,
  FileMinus,
  MapPin,
  RectangleEllipsis,
  Search,
} from "lucide-react";
import { useState } from "react";
import { FaCalendarAlt, FaCreditCard, FaPlus } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
];

const companyOptions = [
  { value: "ABC General transding", label: "ABC General transding" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
];

const Dashboard = () => {
  // Local state
  const [activeTab, setActiveTab] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("Status");
  const [selectedCompany, setSelectedCompany] = useState<string>("ABC General transding");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState<boolean>(false);

  const handleSelect = (option: { value: string; label: string }) => {
    setSelectedStatus(option.label);
    setIsOpen(false);
  };

  const handleCompanySelect = (option: { value: string; label: string }) => {
    setSelectedCompany(option.label);
    setIsCompanyOpen(false);
  };

  // Tab List
  const tabs = [
    { label: "All", count: 6 },
    { label: "Requests", count: 4 },
    { label: "Payments", count: 2 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-sm text-gray-800 ">
      <div className="max-w-[1280px] px-4 mx-auto lg:pt-36 pt-10">
        <p className="text-base pb-2">Home</p>
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="grid grid-cols-4 gap-6">
          {/* Recent Updates Section */}
          <div className="col-span-4 lg:col-span-3 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5 pb-5 border-b border-gray-200">
              <div className="bg-white px-4 py-3 rounded-md shadow flex flex-col">
                <div className="flex items-center justify-between py-2">
                  <p className="text-sm text-black font-medium">
                    Services Requests
                  </p>
                  <FileMinus className="text-gray-400 text-2xl stroke-[#6200ee]" />
                </div>
                <p className="text-2xl font-bold pb-4 pt-2">9</p>
              </div>
              <div className="bg-white px-4 py-3 rounded-md shadow flex flex-col">
                <div className="flex items-center justify-between py-2">
                  <p className="text-sm text-black font-medium">
                    Total Appointments
                  </p>
                  <Calendar1 className="text-gray-400 text-2xl stroke-[#6200ee]" />
                </div>
                <p className="text-2xl font-bold pb-4 pt-2">3</p>
              </div>
              <div className="bg-white px-4 py-3 rounded-md shadow flex flex-col">
                <div className="flex items-center justify-between py-2">
                  <p className="text-sm text-black font-medium">
                    Pending Payments
                  </p>
                  <RectangleEllipsis className="text-gray-400 text-2xl stroke-[#6200ee]" />
                </div>
                <p className="text-2xl font-bold relative pb-4 pt-2">
                  600
                  <span className="text-xs font-normal absolute top-2 ml-1">
                    AED
                  </span>
                </p>
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-4">Recent Updates</h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-15">
              <div className="relative w-full lg:w-fit ">
                <Search className="absolute left-2 top-[49%] -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Request ID/ Transaction status"
                  className="w-full lg:sm:w-[470px] pl-8 pr-3 py-2 border border-[#e4e4e4] rounded-md text-sm bg-white focus:outline-none focus:ring"
                />
              </div>
              <input
                type="date"
                className="border border-[#e4e4e4] bg-white px-3 py-2 rounded-md w-full lg:sm:w-40"
                defaultValue="2025-06-27"
              />
              <div className="relative lg:w-fit w-full ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between lg:sm:w-43 w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none"
                >
                  <span className="text-gray-700">{selectedStatus}</span>
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {statusOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(option)}
                        className="w-full px-3 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Close dropdown */}
                {isOpen && (
                  <div
                    className="fixed inset-0 z-0"
                    onClick={() => setIsOpen(false)}
                  />
                )}
              </div>
              <button className="bg-[#6200EE] text-white px-4 py-2 rounded-lg w-full sm:w-20">
                Search
              </button>
            </div>

            {/* Tabs */}
            <div className="flex items-center justify-between gap-2 mb-4 ">
              <div className="flex items-center gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(tab.label)}
                    className={`lg:px-3 px-1 lg:py-1.5 py-1 sm:px-0 text-xs lg:rounded-full rounded-md lg:text-sm font-medium border ${
                      activeTab === tab.label
                        ? "bg-[#6200EE] text-white"
                        : "text-gray-700 border-gray-300"
                    }`}
                  >
                    {tab.label}
                    <span className="ml-1 text-xs">{tab.count}</span>
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 text-[#6200EE] border border-[#6200EE] px-3 py-1 rounded-lg text-sm">
                <ExternalLink className="w-4 h-4" /> Export
              </button>
            </div>

            {/* Card */}
            <div className="bg-white p-4 rounded shadow mb-4 border border-gray-100">
              <div className="flex lg:items-center items-start justify-between gap-4 flex-wrap md:flex-nowrap">
                {/* Left side */}
                <div className="flex items-start gap-4">
                  <EqualApproximately className="text-[#6200EE] text-2xl" />
                  <div>
                    <p className="font-medium">
                      Master Plan of Construction Projects
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                      <span>Ref. UPS-202407120004</span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-gray-400" /> 23 Nov 2024
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side: status + details */}
                <div className="flex items-center gap-4 w-full lg:w-fit">
                  <div className="w-[200px]">
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-[2px] rounded-full whitespace-nowrap font-semibold">
                      Completed
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-[#6200EE] font-semibold text-sm flex items-center gap-1 whitespace-nowrap"
                  >
                    Details <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4 lg:col-span-1 flex flex-col gap-7">
            {/* ABC Company Block */}
            <div className="bg-white p-4 py-6 rounded-md shadow">
              <h3 className="font-bold text-lg mb-2 pb-2">ABC General Trading</h3>
              <p className="text-xs text-gray-500 mb-2">
                Select user name / Company
              </p>

              <div className="relative w-full ">
                <button
                  onClick={() => setIsCompanyOpen(!isOpen)}
                  className="border px-3 py-2 rounded text-sm mb-4 flex items-center justify-between w-full  bg-white  border-gray-300 hover:bg-gray-50 focus:outline-none"
                >
                  <span className="text-gray-700">{selectedCompany}</span>
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isCompanyOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {companyOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleCompanySelect(option)}
                        className="w-full px-3 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Overlay to close dropdown when clicking outside */}
                {isCompanyOpen && (
                  <div
                    className="fixed inset-0 z-0"
                    onClick={() => setIsCompanyOpen(false)}
                  />
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-[#6200EE] font-medium text-sm pb-5 pt-2 ">
                  <FaPlus className="mt-1" /> Register Company & Admin
                </div>
                <div className="flex items-start gap-3 text-[#6200EE] font-medium text-sm pb-3">
                  <FaPlus className="mt-1" /> Link/Delink Account
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white p-4 py-7 rounded-md shadow">
              <h4 className="font-bold mb-2 pb-4 text-lg">Quick Links</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm pb-5">
                  <MapPin className="text-primary w-4 h-4" /> Urban planning services
                </div>
                <div className="flex items-center gap-2 text-sm pb-3">
                  <FaCreditCard className="text-primary w-4 h-4" /> My Payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
