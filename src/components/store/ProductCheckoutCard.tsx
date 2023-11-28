import { FC } from 'react';

interface ProductCheckoutCardProps {}

const ProductCheckoutCard: FC<ProductCheckoutCardProps> = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:h-40 lg:w-52 border border-slate-500 rounded-md p-1 relative">
        <img
          src={
            'https://cdn.sanity.io/images/p2r4izjx/production/9e6ef9b457ff4a43691a9fca52bd3fd7e052115f-308x487.png'
          }
          alt="jumper"
          className="w-full h-full"
        />
        <div className="absolute rounded-full w-fit h-fit p-1 bg-stone-700 -top-2 -right-2 text-white flex items-center justify-center">
          <p className="h-4 w-4 flex items-center justify-center">1</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:justify-between">
        <div className="ml-4">
          <h3 className="text-sm font-semibold">Ariel Scribble Hoddie</h3>
          <p className="text-slate-500">size :small</p>
        </div>
        <p className="text-sm font-semibold ml-4 my-3 lg:my-0 lg:ml-0">$ 65.00 USD</p>
      </div>
    </div>
  );
};

export default ProductCheckoutCard;
