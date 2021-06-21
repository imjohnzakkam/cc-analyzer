import { Disclosure } from "@headlessui/react";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const navigation = [
  {
    name: "Github",
    href: "https://github.com/imjohnzakkam/cc-viz",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  return (
    <>
      <div className="pt-5">
        <Disclosure
          as="nav"
          className="bg-gradient-to-r from-green-400 to-blue-500"
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex pr-4">
                    {navigation.map((item) => (
                      <>
                        <a
                          key="github"
                          href={item.href}
                          target="blank"
                          className={classNames(
                            item.current
                              ? "bg-bg-blue-400 text-red-500"
                              : "text-black hover:bg-blue-800 hover:text-white",
                            "rounded-full px-3 py-2 text-md no-underline font-custom font-semibold"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <span className="p-2">contributions are welcome</span>
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="CC viz"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}
                    alt="CC viz"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>
        </Disclosure>
      </div>
    </>
  );
}
