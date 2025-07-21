import { Button } from "./Button";

export function ContactUs() {
  return (
    <div
      id="contact-us"
      className="w-full flex justify-center items-center bg-[#1E1E20]/50 py-40"
    >
      <div className="w-full flex items-center gap-10 justify-between max-w-[90%]">
        <h6 className="max-w-4xl font-bold text-7xl">
          Contact us for the service you want to use
        </h6>

        <Button href="mailto:prathammathur688@gmail.com">Contact us</Button>
      </div>
    </div>
  );
}
