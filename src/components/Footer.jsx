import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.png";
import Play from "../assets/play.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3  justify-center items-center">
          <div className="flex flex-col gap-4 justify-center pl-28">
            <img src={Logo} alt="Logo" className="h-7 w-36" />
            <p className="text-sm">
              You can explore and shop many different <br /> collections from
              various brands here.
            </p>
            <div className="flex space-x-4">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} className="h-6" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="h-6" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} className="h-6" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} className="h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-20 pl-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Catalog</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    API Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Claim
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5 pl-32">
            <div>
              <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
              <img
                src="https://www.pngitem.com/pimgs/m/179-1792550_payment-methods-images-png-transparent-png.png"
                alt="Payment Methods"
                className="h-8"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
              <img src={Play} alt="Download App" className="h-24 " />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-6">
          <p className="text-center">© 2024 Coral, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
