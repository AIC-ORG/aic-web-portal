import React, { useState, useRef, Fragment } from 'react';
import { BiDotsVerticalRounded, BiEdit, BiTrash } from 'react-icons/bi';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

interface DropdownMenuProps {
  index?: number;
  id: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ index = 1, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const dropdownRef = useRef(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = () => {
    // Add your delete logic here
    console.log('Delete clicked');
  };
  const [dropdownState, setDropdownState] = useState(false);
  const dropdownStates = [{ state: dropdownState, setState: setDropdownState }];

  const closeOtherDropdowns = () => {
    dropdownStates.forEach((dropdown, i) => {
      if (i !== index) {
        dropdown.setState(false);
      }
    });
  };
  const handleUpdate = () => {
    // Add your update logic here
    console.log('Update clicked');
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md  text-sm font-medium text-white ">
          <BiDotsVerticalRounded size={30} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/admin/desk/music;${id}`}
                  className={`${
                    active ? 'bg-black text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <BiEdit className="mr-2 h-5 w-5" aria-hidden="true" />
                  Edit
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/admin/desk/music;${id}`}
                  className={`${
                    active ? 'bg-black text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <BiTrash className="mr-2 h-5 w-5 text-red-800" aria-hidden="true" />
                  Delete
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
