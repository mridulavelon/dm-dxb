"use client"

import { useState, useEffect } from "react"
import TopHeader from "./top-header"
import { MainNavigation } from "./main-navigation"
import BottomFooter from "./bottom-footer"

const StickyHeader = () => {
  // Local state
  const [showFullHeader, setShowFullHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isAtBottom, setIsAtBottom] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Custom hook
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if at bottom of page
      const atBottom = windowHeight + currentScrollY >= documentHeight - 50
      setIsAtBottom(atBottom)

      // Show full header if at top (within 100px), bottom, or scrolling up
      if (currentScrollY <= 100 || atBottom || currentScrollY < lastScrollY) {
        setShowFullHeader(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Hide full header when scrolling down
        setShowFullHeader(false)
      }

      setLastScrollY(currentScrollY)
    }

    // Add scroll listener 
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Prevent body scroll when overlays are open
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen, isSearchOpen])

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Close search if open
    if (isSearchOpen) {
      setIsSearchOpen(false)
    }
  }

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false)
  }

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen)
    // Close menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  const handleSearchClose = () => {
    setIsSearchOpen(false)
  }

  return (
    <>
      {/* Fixed Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <TopHeader onMenuToggle={handleMenuToggle} onSearchToggle={handleSearchToggle} isSearchOpen={isSearchOpen} />
        <MainNavigation
          isVisible={showFullHeader}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuClose={handleMobileMenuClose}
          isSearchOpen={isSearchOpen}
          onSearchClose={handleSearchClose}
        />
      </div>

      {/* Bottom Header - Fixed at bottom when visible */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <BottomFooter isVisible={showFullHeader} />
      </div>
    </>
  )
}

export default StickyHeader
