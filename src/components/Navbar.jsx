import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Link } from "react-router-dom";
import SwitchButton from "./SwitchButton";
import avatar from "../assets/icons/avatar.png";
import { useAuthContext } from "../context/AuthProvider";

export default function Navbar() {
  const { logOut, currentUser } = useAuthContext();
  // const currentUser = { displayName: "felix franko" };
  // const currentUser = false
  return (
    <>
      {" "}
      <Disclosure
        as="nav"
        className="bg-neutral-100 dark:bg-gray-900 dark:text-white fixed top-0 w-full z-20"
      >
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <Link className="pr-2 text-2xl font-semibold" to="/">
              Movie App
            </Link>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {currentUser && (
                <h5 className="mr-2 capitalize">{currentUser?.displayName}</h5>
              )}
              <SwitchButton />
              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={currentUser?.photoURL || avatar}
                      className="size-8 rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  {!currentUser && (
                    <>
                      <MenuItem>
                        <Link
                          to="/register"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          Register
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          Login
                        </Link>
                      </MenuItem>
                    </>
                  )}
                  <MenuItem>
                    <span
                      onClick={logOut}
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer"
                    >
                      Logout
                    </span>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </Disclosure>
      <div className="h-16"></div>
    </>
  );
}
