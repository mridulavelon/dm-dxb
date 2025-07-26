import { Menu, Search, Accessibility, User } from 'lucide-react';
import { useState } from "react";

import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram, FaLinkedinIn, FaApple,FaPlus,FaCreditCard, FaAndroid, FaDownload } from "react-icons/fa6";
import { FaFileAlt, FaCalendarAlt, FaMoneyBill } from "react-icons/fa";
// import { FiSearch, FiExport } from "react-icons/fi";

function App() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { label: "All", count: 6 },
    { label: "Requests", count: 4 },
    { label: "Payments", count: 2 },
  ];
  return (
    <>  
     <div  className="max-w-[1080px] mx-auto py-5">
      <div className="flex justify-between items-center">
      {/* Left: Shield + Government of Dubai */}
      <div className="flex items-center space-x-2">
        <img
          src="/images/company-logo.svg"
          alt="Dubai Government Emblem"
         className="w-[183px] h-[72px]"
        />
       
      </div>

      {/* Right: Dubai Municipality Logo */}
      <div>
         <img
          src="/images/dubai-logo.svg"
          alt="Government of Dubai"
          className="w-[249px] h-[44px]"
        />
      </div>
    </div>
       <header className="flex items-center justify-between pt-2 pb-2 mt-2">
      {/* Left side: Logo and Navigation */}
      <div className="flex items-center gap-4">
        <Menu className="w-5 h-5 cursor-pointer" />

      

        <nav className="hidden md:flex gap-[30px] text-sm font-medium text-gray-700">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About us</a>
          <a href="#">Easy Payment</a>
          <a href="#">Open Data</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>

      {/* Right side: Search, Accessibility, Language, Login */}
      <div className="flex items-center gap-[30px]">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-1.5 border rounded-full text-sm bg-gray-100 focus:outline-none focus:ring"
          />
        </div>

        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <Accessibility className="w-4 h-4" />
        </button>

        <button className="text-sm font-medium bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200">
          العربية
        </button>

        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <User className="w-4 h-4" />
        </button>
      </div>
    </header>
     </div>


 <div className="bg-gray-50 min-h-screen p-6 text-sm text-gray-800">
  <div className='max-w-[1080px] mx-auto py-5'> 
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>  

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Updates Section */}
        <div className="lg:col-span-2  pt-6">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5 pb-5 border-b border-gray-200">
        <div className="bg-white p-4 rounded shadow flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Services Requests</p>
            <p className="text-2xl font-semibold">9</p>
          </div>
          <FaFileAlt className="text-gray-400 text-2xl" />
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Total Appointments</p>
            <p className="text-2xl font-semibold">3</p>
          </div>
          <FaCalendarAlt className="text-gray-400 text-2xl" />
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Pending Payments</p>
            <p className="text-2xl font-semibold">600 <span className="text-xs font-normal">AED</span></p>
          </div>
          <FaMoneyBill className="text-gray-400 text-2xl" />
        </div>
      </div>


          <h2 className="text-lg font-semibold mb-4">Recent Updates</h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-15">
            <input
              type="text"
              placeholder="Request ID/ Transaction status"
              className="border px-3 py-2 rounded w-full sm:w-64"
            />
            <input
              type="date"
              className="border px-3 py-2 rounded w-full sm:w-40"
              defaultValue="2025-06-27"
            />
            <select className="border px-3 py-2 rounded w-full sm:w-40">
              <option>Status</option>
            </select>
            <button className="bg-[#6200EE] text-white px-4 py-2 rounded-lg w-full sm:w-20">Search</button>
          </div>

          {/* Tabs */}
              <div className="flex items-center justify-between gap-2 mb-4 ">
  <div className="flex items-center gap-2">
    {tabs.map((tab) => (
      <button
        key={tab.label}
        onClick={() => setActiveTab(tab.label)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium border ${
          activeTab === tab.label
            ? "bg-[#6200EE] text-white"
            : "text-gray-700 border-gray-300"
        }`}
      >
        {tab.label} <span className="ml-1 text-xs">{tab.count}</span>
      </button>
    ))}
  </div>
  <button className="flex items-center gap-2 text-[#6200EE] border border-[#6200EE] px-3 py-2 rounded text-sm">
    Export <FaDownload className="w-4 h-4" />
  </button>
</div>

          {/* Update Card Example */}
        <div className="bg-white p-4 rounded shadow mb-4 border border-gray-100">
  <div className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
    {/* Left side: icon + info */}
    <div className="flex items-center gap-4">
      <FaFileAlt className="text-[#6200EE] text-2xl" />
      <div>
        <p className="font-medium">Master Plan of Construction Projects</p>
        <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
          <span>Ref. UPS-202407120004</span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-gray-400" /> 23 Nov 2024
          </span>
        </div>
      </div>
    </div>

    {/* Right side: status + details */}
    <div className="flex items-center gap-4">
   <div className='w-[200px]'>
       <span className="bg-green-100 text-green-800 text-xs px-3 py-[2px] rounded-full whitespace-nowrap font-semibold">
  Completed
</span>
   </div>
      <a
        href="#"
        className="text-[#6200EE] font-semibold text-sm flex items-center gap-1 whitespace-nowrap"
      >
        Details <span>&rarr;</span>
      </a>
    </div>
  </div>
</div>

    
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col gap-6">
          {/* ABC Company Block */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-sm mb-1">ABC General Trading</h3>
            <p className="text-xs text-gray-500 mb-2">Select user name / Company</p>
            <select className="w-full border px-3 py-2 rounded text-sm mb-4">
              <option>ABC General transding</option>
            </select>

            <div className="space-y-3">
              <div className="flex items-start gap-2 text-[#6200EE] font-medium text-sm">
                <FaPlus className="mt-1" /> Register Company & Admin
              </div>
              <div className="flex items-start gap-2 text-[#6200EE] font-medium text-sm">
                <FaPlus className="mt-1" /> Link/Delink Account
              </div>
              <div className="flex items-start gap-2 text-[#6200EE] font-medium text-sm">
                <FaPlus className="mt-1" /> Assigned consultant
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <FaApple className="text-[#6200EE]" /> Urban planning services
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaCreditCard className="text-[#6200EE]" /> My Payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>






 <footer className="bg-white text-sm text-gray-700 border-b border-gray-200">
      <div className=" mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Left Section: Quick Links + Website T&Cs */}
          <div className="flex flex-col sm:flex-row gap-10 flex-1">
            {/* Quick Links */}
            <div className="min-w-[220px]">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <hr className="border-gray-300 mb-2 " />
              <ul className="space-y-[15px]">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            {/* Website T&Cs */}
            <div className="min-w-[220px]">
              <h4 className="font-semibold mb-2">Website T&Cs</h4>
              <hr className="border-gray-300 mb-2" />
              <ul className="space-y-[15px]">
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Security & Privacy</a></li>
                <li><a href="#">Information Security Awareness</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section: Download App + Follow Us */}
          <div className="flex flex-col sm:flex-row gap-10 flex-1 justify-start lg:justify-end">
            {/* Download App */}
            <div className="min-w-[200px]">
              <h4 className="font-semibold mb-2">Download App</h4>
              <hr className="border-gray-300 mb-2" />
              <div className="flex gap-3 mt-3">
                <div className="p-2 rounded-full bg-gray-100 text-[#3c3d53]">
                  <FaAndroid className="w-5 h-5" />
                </div>
                <div className="p-2 rounded-full bg-gray-100 text-[#3c3d53]">
                  <FaApple className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="min-w-[200px]">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <hr className="border-gray-300 mb-2 " />
              <div className="flex gap-2 mt-3 text-[#3c3d53] flex-wrap">
                <div className="p-2 rounded bg-gray-100"><FaFacebookF className="w-4 h-4" /></div>
                <div className="p-2 rounded bg-gray-100"><FaXTwitter className="w-4 h-4" /></div>
                <div className="p-2 rounded bg-gray-100"><FaYoutube className="w-4 h-4" /></div>
                <div className="p-2 rounded bg-gray-100"><FaInstagram className="w-4 h-4" /></div>
                <div className="p-2 rounded bg-gray-100"><FaLinkedinIn className="w-4 h-4" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
     </>
  )
}

export default App
