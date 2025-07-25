import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

const FooterItems = [
  {
    label: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/routetoreach",
  },
  {
    label: "7898935945",
    icon: <FaPhoneAlt />,
    href: "tel:7898935945",
  },
];

export function Footer() {
  return (
    <footer id="footer" className="w-full flex justify-center py-8">
      <div className="flex flex-col w-full max-w-[90%] gap-6">
        <div className="flex flex-col sm:flex-row w-full justify-between sm:items-center sm:gap-10 gap-5">
          {/* logo */}
          <Link href={"/"} className="">
            <Image src={"/logo.jpg"} alt="logo" width={80} height={20} />
          </Link>

          {/* links */}
          <div className="flex sm:text-base text-sm sm:flex-row flex-col sm:gap-10 gap-3">
            {FooterItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-white/70 hover:underline flex items-center gap-2"
              >
                <span className="text-lg">{item.icon}</span>

                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* copyright */}
        <div className="text-white/70 sm:text-sm text-xs text-center">
          © 2025 RouteToReach. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
