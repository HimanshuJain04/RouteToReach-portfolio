import Link from "next/link";

export function Footer() {
  return (
    <div className="flex justify-between py-10">
      {/* logo */}
      <div className="w-36">LOGO</div>

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
        © 2025 OnTheGoMarketing. All Rights Reserved.
      </div>
    </div>
  );
}
