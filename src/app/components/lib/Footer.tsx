import Image from "next/image";
import Link from "next/link";

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
            <Link href="/" className="text-white/70">
              Support
            </Link>

            <Link href="/" className="text-white/70">
              Privacy Policy
            </Link>

            <Link href="/" className="text-white/70">
              Terms and Conditions
            </Link>
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
