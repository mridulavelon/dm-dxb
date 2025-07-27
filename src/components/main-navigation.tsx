import { useState } from "react";
import { Search, Menu, User, Accessibility, X } from "lucide-react";

interface MainNavigationProps {
  isVisible: boolean;
  isMobileMenuOpen?: boolean;
  onMobileMenuClose?: () => void;
  isSearchOpen?: boolean;
  onSearchClose?: () => void;
}

export function MainNavigation({
  isVisible,
  isMobileMenuOpen,
  onMobileMenuClose,
  isSearchOpen,
}: MainNavigationProps) {
  // Local satate
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      {/* Desktop Navigation */}
      <div
        className={`bg-white transition-all duration-300 overflow-hidden hidden lg:block ${
          isVisible ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 py-1">
          <header className="flex items-center justify-between pt-2 pb-2 mt-2">
            {/* Left side: Logo and Navigation */}
            <div className="flex items-center gap-4">
              <Menu className="w-5 h-5 cursor-pointer" />
              <nav className="flex gap-[30px] text-sm font-medium text-gray-700">
                <a href="#" className="hover:text-[#6200ee]">
                  Home
                </a>
                <a href="#" className="hover:text-[#6200ee]">
                  Services
                </a>
                <a href="#" className="hover:text-[#6200ee]">
                  About us
                </a>
                <a href="#" className="hover:text-[#6200ee]">
                  Easy Payment
                </a>
                <a href="#" className="hover:text-[#6200ee]">
                  Open Data
                </a>
                <a href="#" className="hover:text-[#6200ee]">
                  Contact Us
                </a>
              </nav>
            </div>
            {/* Right side: Search, Accessibility, Language, Login */}
            <div className="flex items-center gap-[30px]">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-8 pr-3 py-1.5 border border-[#e4e4e4] rounded-full text-sm bg-white focus:outline-none focus:ring"
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
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden">
          <div className="p-4 pt-20">
            {/* Search Input */}
            <div className="relative mb-6">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder=""
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-full focus:outline-none transition-colors"
                autoFocus
              />
            </div>
            {/* Search Results/Suggestions Area */}
            <div className="space-y-4">
              {searchQuery ? (
                <div className=""></div>
              ) : (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Popular Searches</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSearchQuery("Services")}
                      className="block w-full text-left p-3 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Search className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">Services</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-50 z-50 lg:hidden" onClick={onMobileMenuClose} />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 ">
            <button onClick={onMobileMenuClose} className="p-2 hover:bg-gray-100 rounded-md">
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <img src="/images/dubai-logo.svg" alt="Dubai Municipality" className="h-8 w-auto" />
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Search className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 py-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">MAIN MENU</h2>
            </div>

            <nav className="px-6">
              <div className="space-y-0">
                <a
                  href="#"
                  className="flex items-center justify-between py-4 text-gray-700 hover:bg-gray-50 -mx-6 px-6 border-b border-gray-100"
                >
                  <span className="font-medium">Home</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between py-4 text-gray-700 hover:bg-gray-50 -mx-6 px-6 border-b border-gray-100"
                >
                  <span className="font-medium">Services</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between py-4 text-gray-700 hover:bg-gray-50 -mx-6 px-6 border-b border-gray-100"
                >
                  <span className="font-medium">About Us</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between py-4 text-gray-700 hover:bg-gray-50 -mx-6 px-6 border-b border-gray-100"
                >
                  <span className="font-medium">Easy Payment</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between py-4 text-gray-700 hover:bg-gray-50 -mx-6 px-6 border-b border-gray-100"
                >
                  <span className="font-medium">Open Data</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between py-4 text-gray-700 hover:bg-gray-50 -mx-6 px-6 border-b border-gray-100"
                >
                  <span className="font-medium">Contact Us</span>
                </a>
              </div>
            </nav>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 bg-gray-50">
            <div className="flex items-center justify-center gap-4 mb-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
                <Accessibility className="w-4 h-4 text-gray-600" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium text-gray-700">عربي</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
                <User className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Login</span>
              </button>
            </div>
            <div className="flex items-center justify-center gap-4">
              <img src="/images/company-logo.svg" alt="Government of Dubai" className="h-8 w-auto opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
