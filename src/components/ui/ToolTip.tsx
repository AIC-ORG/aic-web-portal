import { useState, ReactNode } from 'react';
import { FC } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
interface ToolTipProps {
  children: ReactNode;
  content: string;
}

const ToolTip: FC<ToolTipProps> = ({ children, content }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root open={open}>
        <Tooltip.Trigger asChild>
          <div className="" onClick={() => setOpen(!open)}>
            {children}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-[#4B4B4B] rounded-md text-xs w-40 text-white p-2 flex flex-col items-center"
            sideOffset={5}
          >
            {content}
            <Tooltip.Arrow className="-mt-[1%]" fill="#4B4B4B" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default ToolTip;
