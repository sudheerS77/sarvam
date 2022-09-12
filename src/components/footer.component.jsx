import React from "react";
import { Link } from "react-router-dom";
import { MdLocationPin, MdEmail, MdPhoneAndroid } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="border-t border-gray-400">
        <div className="flex items-start justify-around gap-10 px-20 pt-20">
          <div className="flex flex-col items-start justify-center gap-2 text-sm">
            <h4 className="text-xl font-semibold pb-6">Information</h4>
            <Link to="">About us</Link>
            <Link to="">Regional Channel</Link>
            <Link to="">National Channel</Link>
            <Link to="">Safety Tranning</Link>
            <Link to="">Payment Terms</Link>
            <Link to="">Return Policy</Link>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 text-sm">
            <h4 className="text-xl font-semibold pb-6">Information</h4>
            <Link to="">Serives</Link>
            <Link to="">Register Complaint</Link>
            <Link to="">Send Us Enquiry</Link>
            <Link to="">Order History</Link>
            <Link to="">eCom Support</Link>
            <Link to="">Talk To Expert</Link>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 text-sm">
            <h4 className="text-xl font-semibold pb-6">Contact Us</h4>
            <span className="flex items-center gap-4">
              <MdLocationPin className="w-8 h-8 bg-lime-700 text-gray-50 rounded-sm p-1 hover:bg-gray-50 hover:text-lime-700" />
              <p className="text-sm">
                Address :#A6, SIDCO Industrial Estate,
                <br /> Villivakkam,Chennai – 600 049
              </p>
            </span>
            <span className="flex items-center gap-4">
              <MdEmail className="w-8 h-8 bg-lime-700 text-gray-50 rounded-sm p-1 hover:bg-gray-50 hover:text-lime-700" />
              <p className="text-sm">Email :sarvam@sarvamsafety.com</p>
            </span>
            <span className="flex items-center gap-4">
              <MdPhoneAndroid className="w-8 h-8 bg-lime-700 text-gray-50 rounded-sm p-1 hover:bg-gray-50 hover:text-lime-700" />
              <p className="text-sm">
                Telephone: 044 – 4555 3337
                <br />
                Telephone: 044 – 4555 2227
              </p>
            </span>
          </div>
        </div>
        <div className="px-44 py-20">
          <p className="text-sm text-gray-800 text-center">
            3M - Disposable Ear Plug | PN 521 Shelmet | Atom Safety Shoes
            Leather | 3M - Dust Respirator | 3M - Mist Respirator | 3M -
            Spectacles | Karam Clear Spectacles | Cotton Gloves | Bouffant /
            Nurse Cap | 3M Dust/Mist Paint Spary Prefilter | Gloves Mangrip
            Latex Dipped | 3M - Chemical Splash Goggle | Venus - Fold Flat Mask
            | Gravity Safety Shoes | Storm Leather Shoes | Barricading Tape
            Apron Cotton Tie | Gumboot 14 - S.T.D.D PVC | 3M - P100 Filter |
            Proton Safety Shoes | Respirator -Flat Fold With Nose Clip | PN 521
            Shelmet Newstrap | Karam Smoked Spectacles | 3M - Prefilter Retainer
            | 3M - Economy Ear Muff | Alko Plus - Synthetic Leather Shoes |
            OZONE - Ladies Safety Shoes Eye Wash Bottle
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
