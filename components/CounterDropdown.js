import * as React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiOutlineDotsVertical } from 'react-icons/hi'

export default function ({ remove, freeze }) {
  return (
    <Menu>
      {({ open }) => (
        <div>
          <Menu.Button className="flex items-center justify-center w-8 h-8 transition duration-150 ease-in-out hover:text-green-400 ">
            <HiOutlineDotsVertical className="w-5 h-5" />
          </Menu.Button>

          <Transition
            show={open}
            enter="transition ease-out duration-100 "
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg right-2 w-36 md:w-56 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => freeze()}
                      className={`${
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                      } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                    >
                      Freeze
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        console.log('FUNCTION MISSED')
                      }}
                      className={`${
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                      } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                    >
                      Generate New Avatar
                    </button>
                  )}
                </Menu.Item>
              </div>

              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      href="#sign-out"
                      onClick={() => remove()}
                      className={`${
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                      } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                    >
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  )
}
