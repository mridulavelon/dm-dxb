import { Search, Menu, X } from "lucide-react"

interface TopHeaderProps {
  onMenuToggle?: () => void
  onSearchToggle?: () => void
  isSearchOpen?: boolean
}

const TopHeader = ({ onMenuToggle, onSearchToggle, isSearchOpen }: TopHeaderProps) => {
  return (
    <div className="bg-white max-w-[1280px] mx-auto">
      <div className="container mx-auto px-4 py-2">
        {/* Desktop version */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left: Government of Dubai */}
          <div className="flex items-center space-x-4">
            <img src="/images/company-logo.svg" alt="Dubai Government Emblem" className="w-[160px] h-[70px]" />
          </div>
          {/* Right: Dubai Municipality Logo */}
          <div className="flex items-center space-x-4">
            <img src="/images/dubai-logo.svg" alt="Government of Dubai" className="w-[200px] h-[44px]" />
          </div>
        </div>

        {/* Mobile version */}
        <div className="flex lg:hidden items-center justify-between py-2">
          {/* Left: Hamburger Menu */}
          <button
            onClick={isSearchOpen ? undefined : onMenuToggle}
            className={`p-2 rounded-md ${isSearchOpen ? "cursor-default" : "hover:bg-gray-100 cursor-pointer"}`}
            disabled={isSearchOpen}
          >
            <Menu className={`w-6 h-6 ${isSearchOpen ? "text-gray-400" : "text-gray-700"}`} />
          </button>

          {/* Center: Dubai Municipality Logo */}
          <div className="flex-1 flex justify-center">
            <img src="/images/dubai-logo.svg" alt="Dubai Municipality" className="h-8 w-auto" />
          </div>

          {/* Right: Search Icon or Close Button */}
          {isSearchOpen ? (
            <button onClick={onSearchToggle} className="p-2 hover:bg-gray-100 rounded-md">
              <X className="w-6 h-6 text-gray-700" />
            </button>
          ) : (
            <button onClick={onSearchToggle} className="p-2 hover:bg-gray-100 rounded-md">
              <Search className="w-6 h-6 text-gray-700" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TopHeader
