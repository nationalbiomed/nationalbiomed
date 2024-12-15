import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessagesSquare, Phone } from "lucide-react";

const Contact6 = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-14 px-5">
          <h1 className="mb-2 mt-1 text-balance text-3xl font-bold md:text-4xl">
            <span className="text-green-700">Get </span> 
            <span className="text-blue-500">In </span>
            <span className="text-green-700">Touch</span>
          </h1>
          <p className="text-md text-muted-foreground">
            We&apos;d love to assist you. Fill out the form or drop us an email.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 ">
          <div className="grid sm:gap-10 gap-2 sm:grid-cols-2 sm:px-5 px-3 gap-y-10">
            <div>
              <Mail className="mb-3 h-5 w-auto" />
              <p className=" text-lg">Email Us</p>
              <p className=" text-muted-foreground">
                Our team is ready to assist.
              </p>
              <a href="#" className="text-sm hover:underline">
              biomedsuppliers2018@gmail.com
              </a>
            </div>
            <div>
              <MessagesSquare className="mb-3 h-5 w-auto" />
              <p className=" text-lg ">Live Chat Support</p>
              <p className=" text-muted-foreground">
                Reach out for quick help.
              </p>
              <a href="#" className="font-semibold hover:underline">
                Start a new chat
              </a>
            </div>
            <div>
              <MapPin className="mb-3 h-5 w-auto" />
              <p className=" text-lg ">Visit Us</p>
              <p className=" text-muted-foreground">
                Drop by our office for a chat.
              </p>
              <a href="#" className="font-semibold hover:underline">
              National Biomedical Suppliers, Tripura Marg, Kathmandu, Nepal
              </a>
            </div>
            <div>
              <Phone className="mb-3 h-5 w-auto" />
              <p className=" text-lg ">Call Us</p>
              <p className=" text-muted-foreground">
                We&apos;re available Mon-Fri, 9am-5pm.
              </p>
              <a href="#" className="font-semibold hover:underline">
              01-4222353
              </a>
            </div>
            <div className="col-span-2 mb-2 text-lg">
              <h2 className="">Our Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509823!2d144.9537353153163!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11e2b3%3A0x5045675218ceed30!2sYour%20Company%20Name!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                width="400"
                height="250"
                style={{ border: 0, marginTop: "20px" }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
          <div className="mx-auto flex w-full flex-col gap-6 rounded-lg md:max-w-[464px] bg-muted p-10">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">
                  First Name<sup className="ml-0.5">*</sup>
                </Label>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="Your First Name"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">
                  Last Name<sup className="ml-0.5">*</sup>
                </Label>
                <Input type="text" id="lastname" placeholder="Your Last Name" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">
                Email Address<sup className="ml-0.5">*</sup>
              </Label>
              <Input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="phone">
                Phone no.<sup className="ml-0.5">*</sup>
              </Label>
              <Input type="text" id="phone" placeholder="Your Number" />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">
                Your Message<sup className="ml-0.5">*</sup>
              </Label>
              <Textarea placeholder="How can we help you?" id="message" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the
                <span className="ml-1 underline">privacy policy</span>
              </label>
            </div>
            <Button className="w-full">Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact6;
