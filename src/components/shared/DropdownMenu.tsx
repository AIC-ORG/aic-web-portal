import React, { useState, useRef } from 'react';
import { BiDotsVertical } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { HiOutlinePencil } from 'react-icons/hi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

interface DropdownMenuProps {
  index: number;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ index }) => {
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
    <div className="relative inline-block text-left w-1/4" ref={dropdownRef}>
      <button
        onClick={() => {
          toggleDropdown();
          closeOtherDropdowns();
        }}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5  transition duration-150 ease-in-out bg-transparent border border-none rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <FontAwesomeIcon icon={faEllipsisV} className="text-white" />
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          style={{
            minWidth: `${(dropdownRef.current as HTMLDivElement)?.clientWidth}px`,
          }}
        >
          <button
            onClick={handleDelete}
            className="flex flex-row gap-4 justify-center items-center text-xl py-2 text-red-700 hover:bg-red-100 hover:text-red-900 w-full "
          >
            <RiDeleteBin6Line style={{ Width: '40px', height: '40px' }} />
            Delete
          </button>
          <button
            onClick={handleUpdate}
            className="flex flex-row gap-4 py-2 text-xl text-blue-700 items-center justify-center hover:bg-blue-100 hover:text-blue-900 w-full "
          >
            <HiOutlinePencil style={{ Width: '40px', height: '40px' }} />
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
