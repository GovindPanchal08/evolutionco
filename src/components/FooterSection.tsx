import {
  Globe,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  X,
} from "lucide-react";
import Link from "next/link";

const FooterSection = () => (
  <>
    <footer className="relative bg-[#1A1A1A] text-gray-300 px-20 pt-16 pb-8">
      <div className=" flex justify-between ">
        <div className="">
          <img
            width="250"
            height="200"
            className="mb-10"
            src="https://highlandlifespaces.com/wp-content/uploads/2019/10/Highland-Building-Lifespaces-Logo-2.png"
            class="attachment-1536x1536 size-1536x1536 wp-image-8880"
            alt
            decoding="async"
            loading="lazy"
            srcset="https://highlandlifespaces.com/wp-content/uploads/2019/10/Highland-Building-Lifespaces-Logo-2.png 393w, https://highlandlifespaces.com/wp-content/uploads/2019/10/Highland-Building-Lifespaces-Logo-2-300x101.png 300w"
            sizes="(max-width: 393px) 100vw, 393px"
          ></img>

          <p className="text-[13px]  opacity-70 leading-snug max-w-[18rem]  mb-8">
            Explore how Highland Lifespaces can transform your residential,
            commercial, or industrial aspirations into reality.
          </p>

          <p className="font-medium mb-3">Contacts us</p>
          <div className="space-y-3 text-sm ">
            <div className="flex items-center gap-3">
              <Globe size={16} />{" "}
              <Link
                href={"https://highlandlifespaces.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70"
              >
                https://highlandlifespaces.com/
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} />{" "}
              <a
                href="mailto:marketing@highlandlifespaces.com"
                className="opacity-70"
              >
                marketing@highlandlifespaces.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} />{" "}
              <a href="tel:+919072090720" className="opacity-70">
                90720-90720
              </a>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-evenly w-3/4">
          <div>
            <h4 className="font-medium mb-4">Project</h4>
            <ul className="space-y-4 flex flex-col text-sm opacity-60">
              <Link href={"/"}>Residential</Link>
              <Link href={"/"}>Commercial</Link>
              <Link href={"/"}>Industrial</Link>
              <Link href={"/"}>Hospitality</Link>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Links</h4>
            <ul className="space-y-4 flex flex-col text-sm opacity-60">
              <Link href={"/"}>About us</Link>
              <Link href={"/"}>Insight Center</Link>
              <Link href={"/"}>Newsletter</Link>
              <Link href={"/"}>Privacy Policy</Link>
            </ul>
          </div>

          <div className="bg-[#242424] p-6  ">
            <h4 className="font-medium text-sm  mb-4">
              Subscribe for our newsletters
            </h4>
            <form className="flex  items-center bg- border-b border-neutral-700  overflow-hidden">
              <input
                type="email"
                placeholder="E-mail"
                className="flex-1 px-6 py-1  bg-transparent opacity-70 outline-none text-sm"
              />
              <button type="submit" className="px-6 py-1 text-white text-lg">
                →
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
    <div className="border-t bg-[#1C1C20] border-[#34343C] px-20 py-5 flex flex-col md:flex-row justify-between items-center ">
      <div className="flex gap-4 mb-4 md:mb-0 ">
        {[Instagram, Facebook, Linkedin, X].map((Icon, i) => (
          <span
            key={i}
            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center cursor-pointer transition"
          >
            <Icon color="white" size={18} />
          </span>
        ))}
      </div>
      <p className="text-xs text-gray-500">© 2025— Copyright</p>
    </div>
  </>
);

export default FooterSection;
