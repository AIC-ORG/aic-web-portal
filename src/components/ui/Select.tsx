import { FC, useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';

interface SelectProps {
  onchangeOption: (index: number) => void;
  value: string;
  options: string[];
  label: string;
}

const Select: FC<SelectProps> = ({ onchangeOption, value, options, label }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="w-full relative">
        <div
          onClick={() => setOpen(!open)}
          className="flex border-2 rounded-md border-stone-200 items-center py-2 px-5"
        >
          <div className="flex flex-col border-r-2 w-full border-stone-300">
            <span className="text-stone-500 text-sm">{label}</span>
            <span className="text-lg font-bold">{value}</span>
          </div>
          <div className="pl-5">
            <BsFillCaretDownFill color="#E7E5E4" />
          </div>
        </div>
        {open && (
          <div className="absolute top-[100%] w-full rounded-b-md p-3 bg-white z-10 h-40 overflow-y-scroll">
            {options.map((e, i) => (
              <div
                key={i}
                onClick={() => {
                  onchangeOption(i);
                  setOpen(false);
                }}
                className="hover:bg-stone-200 p-3 rounded-sm"
              >
                {e}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
