import { FaAndroid, FaApple, FaFacebookF, FaXTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

const FooterPage = () => {
  return (
    <footer className="max-w-[1280px] mx-auto py-0  bg-white text-sm text-gray-700 border-b border-gray-200 pb-10 lg:pb-8 ">
        <div className=" mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            {/* Left Section: Quick Links + Website T&Cs */}
            <div className="flex flex-col sm:flex-row gap-10 flex-1">
              {/* Quick Links */}
              <div className="min-w-[220px]">
                <h4 className="font-semibold mb-2">Quick Links</h4>
                <hr className="border-gray-300 mb-2 " />
                <ul className="space-y-[15px]">
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>

              {/* Website T&Cs */}
              <div className="min-w-[220px]">
                <h4 className="font-semibold mb-2">Website T&Cs</h4>
                <hr className="border-gray-300 mb-2" />
                <ul className="space-y-[15px]">
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Security & Privacy</a>
                  </li>
                  <li>
                    <a href="#">Information Security Awareness</a>
                  </li>
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
                  <div className="p-2 rounded bg-gray-100">
                    <FaFacebookF className="w-4 h-4" />
                  </div>
                  <div className="p-2 rounded bg-gray-100">
                    <FaXTwitter className="w-4 h-4" />
                  </div>
                  <div className="p-2 rounded bg-gray-100">
                    <FaYoutube className="w-4 h-4" />
                  </div>
                  <div className="p-2 rounded bg-gray-100">
                    <FaInstagram className="w-4 h-4" />
                  </div>
                  <div className="p-2 rounded bg-gray-100">
                    <FaLinkedinIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default FooterPage
