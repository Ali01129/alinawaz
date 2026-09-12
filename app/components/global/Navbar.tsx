import Image from "next/image";
import Link from "next/link";
import LogoLight from "@/public/assets/ali.png";
import LogoDark from "@/public/assets/ali-white.png";
import Theme from "./Theme";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const data = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blog",
      href: "https://medium.com/@chaudharyalinawazz",
    },
  ];

  return (
    <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src={LogoLight}
            width={55}
            height={55}
            alt="logo"
            className="dark:hidden"
          />
          <Image
            src={LogoDark}
            width={55}
            height={55}
            alt="logo"
            className="hidden dark:block"
          />
        </Link>

        <nav className="md:block hidden">
          <ul className="flex items-center gap-x-8">
            {data.map((link, id) => {
              const isExternal = link.href.startsWith("http");
              return (
                <li key={id}>
                  <Link
                    href={link.href}
                    {...(isExternal && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-x-4">
          <Theme />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
