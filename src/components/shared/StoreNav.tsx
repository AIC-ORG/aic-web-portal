'use client';
import { useData } from '@/contexts/DataContext';
import { navLinks } from '@/lib/costants';
import { Route } from 'next';
import Link from 'next/link';
import { FC, useState } from 'react';
import { buttonVariants } from '../ui/Button';
import { cn } from '@/utils/cn';

interface NavbarProps {}

const StoreNav: FC<NavbarProps> = () => {
  const { cartItems } = useData();
  const [active, setActive] = useState<number>(0);
  return (
    <div className="w-full px-4 py-6 md:py-6 md:px-6 md:pl-20 md:pr-10 bg-black flex flex-row border border-black items-center justify-between">
      <Link href={'/'} className="text-white text-lg sm:text-2xl md:text-4xl whitespace-nowrap">
        ARIEL WAYZ
      </Link>

      <div className="h-full hidden lg:flex justify-center gap-10 px-10 items-center">
        {navLinks.map((e, i) => (
          <Link
            href={e.route as Route<string>}
            key={i}
            className={cn(
              'text-white/60 hover:text-white cursor-pointer relative',
              active === i && 'text-white',
            )}
            style={{ transition: '.3s' }}
            onClick={() => setActive(i)}
          >
            {e.name}{' '}
            <span
              className={cn({
                'absolute h-1 left-0 -bottom-2 w-[70%] bg-white rounded-full': active === i,
              })}
            />
          </Link>
        ))}
      </div>
      <div className="h-full flex justify-between gap-4 items-center">
        <Link
          href={'/login'}
          className={cn(
            buttonVariants({ variant: 'outline' }),
            ' text-xs sm:text-sm py-1 px-3 sm:py-2 sm:px-6',
          )}
        >
          Login
        </Link>
        <Link
          href={'/signup'}
          className={cn(
            buttonVariants({ variant: 'outline' }),
            ' text-xs sm:text-sm py-1 px-3 sm:py-2 sm:px-6',
          )}
        >
          Register
        </Link>
        <Link
          href={'/store/cart' as Route}
          className={cn(buttonVariants(), 'hidden md:block whitespace-nowrap')}
        >
          cart ({cartItems.length})
        </Link>
      </div>
    </div>
  );
};

export default StoreNav;
