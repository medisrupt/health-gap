import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { solutions } from "../MenuProduct";


const MobileProduct = (props) => {
  return (
    <>
    <div className="block w-full ">
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
              ${open ? "" : "text-opacity-90"}
              group inline-flex items-center rounded-md bg-none px-3 py-2 text-base font-medium text-[#819B9B]  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>{props.texts}</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                ml-1 h-5 w-5 text-[#819B9B]  transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className=" left-1/2 z-10 mt-3 w-screen max-w-[300px] -translate-x-1/2 transform  sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7  lg:grid-cols-2">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="-m-4 flex items-center rounded-lg  py-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div> */}
                        <div className="w-full flex flex-col justify-between ml-2">
                          <p className=" flex justify-between w-full text-sm font-medium text-gray-900">
                            {item.name}
                            {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-pink-700"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              />
                            </svg> */}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  </>
  )
}

export default MobileProduct
