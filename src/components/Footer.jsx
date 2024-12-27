import Link from "next/link";
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
// import { MobileIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <>
    
      <Footer1 /> <Footer2 />
    </>
  );
}

export function Footer2() {
  return (
    <div className=" py-2  bg-gray-900">
      <div className="container max-w-7xl mx-auto block space-y-2 pb-4 md:pb-0 text-center md:flex md:justify-between  text-white text-baseline">
        <p className="mt-2">
          Copyright &copy; National Biomedical Suppliers
        </p>
        <p>
          <strong>
            <span className="text-white">Developed By: </span>
            <a
              href="https://www.nepaltechinnov.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ color: "red" }}>Nepal </span>
              <span style={{ color: "blue" }}> Tech</span>
              <span style={{ color: "#5d5d5f" }}> Innovations Pvt. Ltd.</span>
            </a>
          </strong>
        </p>
      </div>
    </div>
  );
}

export function Footer1() {
  return (
    <footer className="relative z-10 bg-gray-900 text-white pt-10  lg:pt-10 pb-10 mt-10 ">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap  justify-between">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px] bg-white rounded-sm">
                <img
                  src="/logo.png?height=20&width=100"
                  alt="Logo"
                  className="h-16 md:h-32 w-auto object-contain"
                />
              </Link>
              <p className="mb-7 text-base text-gray-300 text-justify">
                National Biomedical Suppliers Pvt. Ltd.
              </p>

              <h4 className="mb-2 text-lg font-semibold text-white">
                Follow Us On
              </h4>
              <div className="mb-2 flex items-center">
                <SocialLink
                  href="https://www.facebook.com/profile.php?id=100070231987124"
                  icon={<Facebook className="h-4 w-4" />}
                  label="Facebook"
                />
                <SocialLink
                  href="/"
                  icon={<Twitter className="h-4 w-4" />}
                  label="Twitter"
                />
                <SocialLink
                  href="/"
                  icon={<Youtube className="h-4 w-4" />}
                  label="YouTube"
                />
                <SocialLink
                  href="/"
                  icon={<Linkedin className="h-4 w-4" />}
                  label="LinkedIn"
                />
              </div>

            </div>
          </div>

          <LinkGroup header="Shop">
            <NavLink href="/pages/products" label="All Products" />
            {/* <NavLink href="/categories" label="Categories" /> */}
            {/* <NavLink href="/deals" label="Special Deals" /> */}
          </LinkGroup>
          {/* <LinkGroup header="Customer Service">
            <NavLink href="/faq" label="FAQ" />
            <NavLink href="/shipping" label="Shipping Info" />
            <NavLink href="/returns" label="Returns & Exchanges" />
          </LinkGroup> */}
          <LinkGroup header="Company">
            <NavLink href="/pages/about-us" label="About Us" />
            <NavLink href="/pages/contact" label="Contact Us" />
            <NavLink href="/pages/legal/terms" label="Terms of Service" />
            <NavLink href="/pages/legal/privacy-policy" label="Privacy Policy" />
          </LinkGroup>

          <div className="w-full px-4 sm:w-1/2 lg:w-4/12">
            <div className="mb-10 w-full">
              <h4 className="mb-4 text-lg font-semibold text-white">
                Contact Us
              </h4>
              <div className=" mb-2 flex space-x-1 ">
                <div className="flex items-center font-semibold text-white">
                  <MapPin className="mr-1 h-5 w-5 text-gray-400" />
                  <span className="text-sm">Address:</span>
                </div>
                
                <p>Tripurewshor, Kathmandu</p>
              </div>
              <div className=" mb-2 flex space-x-1 ">
                <div className="flex items-center font-semibold text-white">
                  <Phone className="mr-1 h-5 w-5 text-gray-400" />
                  <span className="text-sm">Customer Support:</span>
                </div>
                
                <ContactLink href="tel:01-4222353" label="01-4222353" />
              </div>
              <EmailList />
            </div>
          </div>
        </div>
      </div>
      <BackgroundDecoration />
    </footer>
  );
}

function ContactLink({ icon, href, label }) {
  return (
    <a
      href={href}
      className="flex items-center font-medium text-white hover:text-primary transition-colors duration-200"
    >
      {icon && <span className="mr-3">{icon}</span>}
      <span className="text-sm">{label}</span>
    </a>
  );
}
function LinkGroup({ children, header }) {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-white">{header}</h4>
        <ul className="space-y-3">{children}</ul>
      </div>
    </div>
  );
}

function NavLink({ href, label }) {
  return (
    <li>
      <Link
        href={href}
        className="text-base text-gray-300 hover:text-white"
      >
        {label}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-3 text-gray-400 hover:text-white transition-colors duration-200"
    >
      {icon}
    </a>
  );
}

function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute bottom-0 left-0 w-full text-gray-800 opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 300"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

const emailLinkClass = "hover:text-white transition-colors duration-200";

function EmailList() {
  return (
    <div className="space-x-1 flex ">
      <p className="flex items-center text-base font-medium text-white">
        <Mail className="mr-1 h-5 w-5 text-gray-400" />
        <span className="text-sm font-semibold">Email Us:</span>
      </p>
      <a
            href="mailto:biomedsuppliers2018@gmail.com"
            className="hover:text-white transition-colors duration-200"
          >
            biomedsuppliers2018@gmail.com
          </a>
    </div>
  );
}

