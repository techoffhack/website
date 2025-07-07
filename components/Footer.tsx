"use client";
import React, { useState } from "react";
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { FooterLogo } from "@/app/constants/icons";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    window.location.href = `https://techoff.kit.com/f7705b4763`;
  };

  return (
    <footer className="bg-[#090909] text-white relative mt-52">
      <div className="w-full px-6 md:px-0 md:w-10/12 mx-auto py-14">
        <div className="mt-44 mb-20">
          <div className="flex flex-col md:flex-row gap-y-12 gap-x-36">
            <div className="flex flex-col gap-y-5 md:gap-y-10 md:w-1/2">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Get the latest Technology news, <br />
                  Straight to Your Inbox!
                </h2>

              </div>
              <div className="flex flex-row md:w-8/12">
                {/* <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-l-lg bg-[#6B727866] border border-[#6B727866] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                /> */}

                <button
                  onClick={handleSubscribe}
                  className="px-6 py-2 bg-[#f9f9f9] rounded-lg text-[#090909] font-medium cursor-pointer"
                >
                  Subscribe
                </button>
              </div>

              <div className="flex gap-4">
                <Link href="https://www.youtube.com/@techoffhack" className="bg-[#6B727866] p-4 rounded-lg">
                  <Youtube size={20} />
                </Link>
                <Link href="https://www.linkedin.com/company/techoff-hack" className="bg-[#6B727866] p-4 rounded-lg">
                  <Linkedin size={20} />
                </Link>
                <Link href="https://www.instagram.com/techoffhack/" className="bg-[#6B727866] p-4 rounded-lg">
                  <Instagram size={20} />
                </Link>
                <Link href="mailto:thetechoffhack@gmail.com" className="bg-[#6B727866] p-4 rounded-lg">
                  <Mail size={20} />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-[#f9f9f9]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a href="https://blog.techoffhack.com" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Media & press kit
                  </a>
                </li> */}
                <li>
                  <a href="mailto:thetechoffhack@gmail.com" className="hover:text-white transition-colors">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">TECHOFF 2025</h3>
              <ul className="space-y-2 text-[#f9f9f9]">
                <li>
                  <a href="https://olivine-cup-272.notion.site/21d35754e3678042b13ece1465f15ba6?pvs=105" className="hover:text-white transition-colors">
                    Register as participant
                  </a>
                </li>
                <li>
                  <a href="https://olivine-cup-272.notion.site/22235754e3678092bf1cd814bba362c2?pvs=105" className="hover:text-white transition-colors">
                    Become a sponsor
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-white transition-colors">
                    The vision
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#6B727866] pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#f9f9f9] mb-4 md:mb-0">© TECHOFFHACK, 2025</div>
          {/* <div className="flex gap-6">
            <a
              href="#"
              className="text-[#f9f9f9] "
            >
              Privacy policy
            </a>
            <a
              href="#"
              className="text-[#f9f9f9]"
            >
              Terms & conditions
            </a>
          </div> */}
        </div>
      </div>

      <div className=" mt-10 bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <FooterLogo />
      </div>
    </footer>
  );
};

export default Footer;
