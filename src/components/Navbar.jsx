import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

import {FaInstagram} from "react-icons/fa";
import { NAV_LOGO } from "../constants";


function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center text-purple-600 text-4xl">
            {NAV_LOGO}
        </div>
        <div className="m-8 flex items-center justify-center text-2xl gap-4 pr-20">
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>

        </div>
    </nav>
  )
}

export default Navbar