import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="footer" className="w-full flex justify-center">
      <div className="flex w-full max-w-[90%] justify-between items-center py-10 gap-10">
        {/* logo */}
        <Link href={"/"} className="">
          <Image src={"/logo.jpg"} alt="logo" width={100} height={20} />
        </Link>

        {/* links */}
        <div className="flex gap-10">
          <Link href="/" className="text-lg text-white/70">
            Support
          </Link>

          <Link href="/" className="text-lg text-white/70">
            Privacy Policy
          </Link>

          <Link href="/" className="text-lg text-white/70">
            Terms and Conditions
          </Link>
        </div>

        {/* copyright */}
        <div className="text-white/70 text-base">
          © 2025 RouteToReach. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
