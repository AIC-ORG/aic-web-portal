'use client';
import { Size } from '@/types/cart.types';
import { FC, useState } from 'react';
import { BsTrash3 } from 'react-icons/bs';

interface CartProductCardProps {
  image: string;
  title: string;
  price: number;
  size?: Size;
  id: string;
  onClick: (id: string) => void;
}

const CartProductCard: FC<CartProductCardProps> = ({
  image,
  title,
  price,
  size = 'Small',
  id,
  onClick,
}) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between">
      <div className="flex w-full flex-col items-center md:items-start md:flex-row">
        <img src={image} alt="cart image" className="h-72 w-72 md:h-52 md:w-52 object-contain" />
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <div className="mt-10 mb-5 ml-5">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-slate-500">size :{size}</p>
          </div>
          <div className="flex cursor-pointer justify-between sm:justify-around items-center lg:items-start w-full ">
            <div className="w-fit flex items-center gap-2 lg:mt-10">
              <div className="border h-10 px-4 py-2 flex items-center gap-4 text-2xl font-bold border-stone-400 rounded-sm">
                <button
                  onClick={() => count > 0 && setCount((prev) => prev - 1)}
                  className="cursor-pointer"
                >
                  -
                </button>
                <span>{count}</span>
                <button onClick={() => setCount((prev) => prev + 1)} className="cursor-pointer">
                  +
                </button>
              </div>
              <BsTrash3 onClick={() => onClick(id)} />
            </div>
            <p className="font-semibold lg:mt-10">$ {price.toFixed(2)} USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
