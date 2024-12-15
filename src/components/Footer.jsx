import Link from "next/link";
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Phone,
  Mail,
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
    <div className="bg-primary py-2">
      <div className="container max-w-7xl mx-auto block space-y-2 pb-4 md:pb-0 text-center md:flex md:justify-between  text-white text-baseline">
        <p className="mt-2">
          Copyright &copy; National Biomedical Suppliers
        </p>
        <p>
          <strong>
            <span style={{ color: "white" }}>Developed By: </span>
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
    <footer className="relative z-10 bg-green-200 pt-10  lg:pt-10 border-t-2 border-primary">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap mx-4 justify-between">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px]">
                <img
                  src="/logo.png?height=20&width=100"
                  alt="Logo"
                  className="h-16 md:h-24 w-auto object-contain"
                />
              
              </Link>
              <p className="mb-7 text-base text-muted-foreground text-justify">
              National Biomedical Suppliers, Tripura Marg, Kathmandu, Nepal
              </p>

              <h4 className="mb-2 text-lg font-semibold text-foreground">
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

          <LinkGroup header="Company">
            <NavLink href="/about-us" label="About Us" />
            <NavLink href="/contact" label="Contact & Support" />
            <NavLink href="/our-clients" label="Our Customers" />
          </LinkGroup>
          <LinkGroup header="Quick Links">
            <NavLink href="/demands" label="Whats new" />
            <NavLink
              href="/procedure/recruitment-procedure"
              label="Our Services"
            />
            <NavLink href="/our-categories" label="Our Categories" />
            <NavLink href="/teams" label="Know Our Team" />
          </LinkGroup>

          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-4 text-lg font-semibold text-foreground">
                Contact Us
              </h4>
              <div className="space-y-3 mb-2">
              <div className="flex items-center font-medium text-foreground">
                  <Phone className="mr-3 h-5 w-5 text-primary" />
                  <span className="text-sm">Phone:</span>
                </div>
                <div className="pl-8 space-y-1">
                  <ContactLink href="tel:+97714582136" label="01-4222353" />
               
                </div>
                {/* <div className="flex items-center font-medium text-foreground">
                  <Phone className="mr-3 h-5 w-5 text-primary" />
                  <span className="text-sm">Direct:</span>
                </div>
                <div className="pl-8 space-y-1">
                  <ContactLink href="tel:+97714582136" label="+977-1-4582136" />
                  <ContactLink href="tel:+97714584937" label="+977-1-4584937" />
                 
                </div>
                <ContactLink
                  icon={<Phone className="h-5 w-5 text-primary" />}
                  href="tel:+9779802343347"
                  label="Mobile: +977-9802343347"
                />
              </div> */}
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
      className="flex items-center font-medium text-foreground hover:text-primary transition-colors duration-200"
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
        <h4 className="mb-9 text-lg font-semibold text-foreground">{header}</h4>
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
        className="text-base text-muted-foreground hover:text-primary"
      >
        {label}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="mr-3 h-8 w-8 rounded-full border-muted-foreground/25"
      asChild
    >
      <Link
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </Link>
    </Button>
  );
}

function BackgroundDecoration() {
  return (
    <>
      <span className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="217"
          height="229"
          viewBox="0 0 217 229"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-20"
        >
          <path
            d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
            fill="url(#paint0_linear_1179_5)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1179_5"
              x1="76.5"
              y1="281"
              x2="76.5"
              y2="1.22829e-05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" stopOpacity="0.08" />
              <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="absolute right-10 top-10 z-[-1]">
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-20"
        >
          <path
            d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
            fill="url(#paint0_linear_1179_4)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1179_4"
              x1="-1.63917e-06"
              y1="37.5"
              x2="75"
              y2="37.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" stopOpacity="0.31" />
              <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </>
  );
}

const emailLinkClass = "hover:text-primary transition-colors duration-200";

function EmailList() {
  return (
    <div className="space-y-2">
      <p className="flex items-center text-base font-medium text-foreground">
        <Mail className="mr-3 h-5 w-5 text-primary" />
        <span className="text-sm">Email Us:</span>
      </p>
      <ul className="list-none pl-8 space-y-1 text-sm text-foreground">
        <li>
          <a
            href="mailto:md@centralcapitalservices.com"
            className={emailLinkClass}
          >
           biomedsuppliers2018@gmail.com
          </a>
        </li>
        </ul>
      
      {/* <ul className="list-none pl-8 space-y-1 text-sm text-foreground">
        <li>
          <a
            href="mailto:md@centralcapitalservices.com"
            className={emailLinkClass}
          >
           biomedsuppliers2018@gmail.com
          </a>
        </li>
        <li>
          <a
            href="mailto:info@centralcapitalservices.com"
            className={emailLinkClass}
          >
            info@centralcapitalservices.com
          </a>
        </li>
        <li>
          <a href="mailto:ccsriya01@gmail.com" className={emailLinkClass}>
            ccsriya01@gmail.com
          </a>
        </li>
        <li>
          <a
            href="mailto:servicescentralcapital@gmail.com"
            className={emailLinkClass}
          >
            servicescentralcapital@gmail.com
          </a>
        </li>
      </ul> */}
    </div>
  );
}
