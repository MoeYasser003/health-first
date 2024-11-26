import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-foreground pt-10">
      <section className="wrapper grid gap-2 min-[450px]:grid-cols-2 md:grid-cols-4">
        <article className="p-2 text-center">
          <h4 className="text-primary-2 text-xl font-semibold mb-2">
            Company Info
          </h4>
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-subtext font-semibold hover:underline duration-300 "
            >
              About Us
            </Link>
            <Link
              to="/"
              className="text-subtext font-semibold hover:underline duration-300 "
            >
              Carrier
            </Link>
            <Link
              to="/"
              className="text-subtext font-semibold hover:underline duration-300 "
            >
              We are hiring
            </Link>
            <Link
              to="/"
              className="text-subtext font-semibold hover:underline duration-300 "
            >
              Blog
            </Link>
          </div>
        </article>
        <article className="p-2 text-center">
          <h4 className="text-primary-2 text-xl font-semibold mb-2">
            Are You a Doctor?
          </h4>
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-subtext font-semibold hover:underline duration-300 "
            >
              Join our doctors
            </Link>
          </div>
        </article>
        <article className="p-2 text-center ">
          <h4 className="text-primary-2 text-xl font-semibold mb-2">
            Features
          </h4>
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-subtext font-semibold hover:underline duration-300"
            >
              Business Marketing
            </Link>
            <Link
              to="/"
              className="text-subtext font-semibold hover:underline duration-300"
            >
              User Analytic
            </Link>
            <Link
              to="/"
              className="text-subtext font-semibold hover:underline duration-300"
            >
              Live Chat
            </Link>
            <Link
              to="/"
              className="text-subtext font-semibold hover:underline duration-300"
            >
              Unlimited Support
            </Link>
          </div>
        </article>
        <article className="p-2 text-center">
          <h4 className="text-primary-2 text-xl font-semibold mb-2">
            Resources
          </h4>
          <div className="flex flex-col gap-2 ">
            <Link
              to="/"
              className="text-subtext font-semibold hover:underline duration-300 "
            >
              IOS & Android
            </Link>
            <Link
              to="/"
              className="text-subtext font-semibold hover:underline duration-300 "
            >
              Watch a Demo
            </Link>
            <Link
              to="/"
              className="text-subtext font-semibold hover:underline duration-300 "
            >
              Customers
            </Link>
            <Link
              to="/"
              className="text-subtext font-semibold hover:underline duration-300 "
            >
              API
            </Link>
          </div>
        </article>
      </section>

      <div className="wrapper bg-foreground py-3 flex items-center justify-between">
        <p className="text-subtext text-sm sm:text-base">Made with love by our team, All right reserved</p>

        <article className="flex gap-2 ">
          <a
            href="https://www.facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener no referrer"
          >
            <FaFacebook className="text-xl text-primary-1 hover:text-primary-2 duration-300" />
          </a>
          <a
            href="https://www.x.com"
            aria-label="X"
            target="_blank"
            rel="noopener no referrer"
          >
            <FaXTwitter className="text-xl text-primary-1 hover:text-primary-2 duration-300" />
          </a>
          <a
            href="https://www.instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener no referrer"
          >
            <FaInstagram className="text-xl text-primary-1 hover:text-primary-2 duration-300" />
          </a>
        </article>
      </div>
    </footer>
  );
}
