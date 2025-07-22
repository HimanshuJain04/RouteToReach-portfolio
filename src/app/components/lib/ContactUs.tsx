import { Button } from "./Button";

export function ContactUs() {
  return (
    <div
      id="contact-us"
      className="w-full flex justify-center items-center bg-[#1E1E20]/50 py-20"
    >
      <div className="w-full flex sm:flex-row flex-col sm:items-center items-start sm:gap-10 gap-4 justify-between max-w-[90%]">
        <h6 className="max-w-4xl font-bold xl:text-7xl lg:text-6xl md:text-5xl text-4xl">
          Contact us for the service you want to use
        </h6>

        <Button href="mailto:prathammathur688@gmail.com">Contact us</Button>
      </div>
    </div>
  );
}
