import * as React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiOutlineDotsVertical } from 'react-icons/hi'

export default function () {
    return (
        <div className="flex items-center justify-center p-12">
            <div className="relative inline-block text-left">
                <Menu>
                    {({ open }) => (
                        <>
                            <Menu.Button className="flex items-center justify-center w-8 h-8 transition duration-150 ease-in-out hover:text-green-400 ">
                                <HiOutlineDotsVertical className="w-5 h-5" />
                            </Menu.Button>

                            <Transition
                                show={open}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    static
                                    className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                >
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#account-settings"
                                                    className={`${
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700'
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                >
                                                    1
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#support"
                                                    className={`${
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700'
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                >
                                                    2
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item
                                            as="span"
                                            disabled
                                            className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 opacity-50 cursor-not-allowed"
                                        >
                                            New feature (soon)
                                        </Menu.Item>
                                    </div>

                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#sign-out"
                                                    className={`${
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700'
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                >
                                                    Delete
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </div>
        </div>
    )
}
