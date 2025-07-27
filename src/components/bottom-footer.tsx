import {
  Calendar,
  LayoutGrid,
  Mail,
  MapPin,
  MessageSquare,
  Newspaper,
  RotateCcw,
  Smile,
} from "lucide-react";

interface BottomHeaderProps {
  isVisible: boolean;
}

const BottomFooter = ({ isVisible }: BottomHeaderProps) => {
  return (
    <div
      className={`bg-white shadow border-t border-gray-200 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full bg-gray-50 px-4 py-2">
        {/* Mobile Layout - visible on mobile and tablet */}
        <div className="flex md:hidden items-center justify-between">
          
          {/* Left Section - Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm ">
                <Smile className="h-6 w-6 text-[#6200ee]" />
              </div>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm ">
                <RotateCcw className="h-6 w-6 text-[#6200ee]" />
              </div>
            </button>
          </div>

          {/* Center Section - Services */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm ">
              <LayoutGrid className="h-6 w-6 text-[#6200ee]" />
            </div>
          </div>

          {/* Right Section - AI*/}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm ">
              <span className="lg:text-sm text-lg font-bold text-[#6200ee]">
                AI
              </span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm ">
                <MessageSquare className="h-6 w-6 text-[#6200ee]" />
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">

          {/* Left Section */}
          <div className="flex items-center space-x-3">
            {/* Navigation Icons */}
            <div className="flex items-center space-x-1">
              <button className="p-2 hover:bg-gray-100 border-r border-r-[#e4e4e4] pr-4">
                <Smile className="h-6 w-6 text-[#6200ee]" />
              </button>
              <button className="p-2 hover:bg-gray-100 border-r border-r-[#e4e4e4] pr-4">
                <RotateCcw className="h-6 w-6 text-[#6200ee]" />
              </button>
            </div>
            {/* Services */}
            <div className="flex items-center space-x-2">
              <LayoutGrid className="h-6 w-6 text-[#6200ee]" />
              <span className="text-sm font-medium text-[#6200ee]">
                Services
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Expert Consultation */}
            <div className="flex items-center space-x-3 border-r border-r-[#e4e4e4] pr-4">
              <Calendar className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">Expert Consultation</span>
            </div>
            {/* Locations */}
            <div className="flex items-center space-x-3 border-r border-r-[#e4e4e4] pr-4">
              <MapPin className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">Locations</span>
            </div>
            {/* Newsroom */}
            <div className="flex items-center space-x-3 border-r border-r-[#e4e4e4] pr-4">
              <Newspaper className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">Newsroom</span>
            </div>
            {/* Contact Us */}
            <div className="flex items-center space-x-3 border-r border-r-[#e4e4e4] pr-4">
              <Mail className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">Contact Us</span>
            </div>
            {/* AI and Message */}
            <div className="flex items-center space-x-3">
              <span className="text-base font-bold text-[#6200ee] border-r border-r-[#e4e4e4] pr-4">
                AI
              </span>
              <MessageSquare className="h-6 w-6 text-[#6200ee]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
