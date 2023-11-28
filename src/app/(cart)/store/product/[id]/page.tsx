'use client';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { useData } from '@/contexts/DataContext';
import { Iproduct, Size } from '@/types/cart.types';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { Route } from 'next';
import { notFound } from 'next/navigation';

interface ProductProps {
  params: { id: string };
}

const Product: FC<ProductProps> = ({ params: { id } }) => {
  const { products, dispatchCartItems, cartItems, concerts } = useData();
  const [product, setProduct] = useState<Iproduct>();
  const [cartItem, setCartItem] = useState<Iproduct & { nbr: number; size: Size }>();
  const [activeSize, setActiveSize] = useState<number>(0);
  const [preferences, setpreferences] = useState<{ nbr: number; size: Size }>({
    nbr: 1,
    size: Size.Large,
  });

  // memo of number of items you want to add to cart
  const num = useMemo<number>(() => {
    console.log(cartItem, preferences);
    return 0;
  }, [cartItem, preferences]);

  const [inCart, setInCart] = useState<boolean>(
    cartItems?.some((e) => e?.id === product?.id) ?? false,
  );
  // function to add item to cart
  const handleCart = () => {
    inCart
      ? dispatchCartItems({ type: 'removeItem', payload: product?.id as string })
      : dispatchCartItems({ type: 'addItem', payload: [product!] });
  };

  const filteredProducts = useRef<Iproduct[]>();
  useEffect(() => {
    console.log(cartItems);
    setInCart(cartItems.some((e) => e?.id === product?.id) ? true : false);
    setCartItem(
      cartItems.find((e) => e?.id === product?.id) as unknown as Iproduct & {
        nbr: number;
        size: Size;
      },
    );
    console.log(cartItem?.nbr);
    if (id && products.length) {
      const productItem = products.find((e) => e?.id === id);
      const concertItem = concerts.find((e) => e?.id === id);
      if (productItem) {
        setProduct(productItem);
      } else if (concertItem) {
        setProduct(concertItem);
      } else {
        return notFound();
      }
      filteredProducts.current = products.filter(
        (e) => e?.id !== id && e?.category === product?.category,
      ) as Iproduct[];
    } else {
      filteredProducts.current = [];
    }
  }, [id, products, cartItems, product, concerts]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col lg:flex-row justify-between mt-14">
        <div className="w-full flex sm:px-20 justify-center">
          {!product ? (
            <div
              role="status"
              className="space-y-8 w-full flex-col h-full animate-pulse rtl:space-x-reverse flex items-center"
            >
              <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            </div>
          ) : (
            <img
              src={product?.image}
              alt=""
              className="p-10 border h-fit w-fit border-stone-400 object-contain px-10"
            />
          )}
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col p-10 lg:p-5">
          <div className="flex flex-col">
            <p className="mb-5">Ariel Wayz</p>
            <h1 className="font-extrabold text-3xl">{product?.name}</h1>
            {/* <h1 className="font-extrabold text-3xl">{JSON.stringify(cartItem)}</h1> */}
            <div className="my-5 mr-10">
              <span className="">Size</span>
              <div className="flex items-center flex-wrap lg:flex-nowrap gap-3 mt-2">
                {['Small', 'Medium', 'Large', 'XLarge', '2X'].map((e, i) => (
                  <Button
                    key={i}
                    onClick={() => setActiveSize(i)}
                    className={cn(
                      'bg-white text-black rounded-full border border-black hover:text-white hover:bg-black',
                      activeSize === i && 'bg-black text-white',
                    )}
                  >
                    {e}
                  </Button>
                ))}
              </div>
            </div>
            <div className="my-5">
              <span className="">Quantity</span>
              <div className="border flex items-center gap-4 text-2xl font-bold mt-3 border-stone-400 px-4 py-1 w-fit">
                <button
                  onClick={() =>
                    preferences.nbr > 1 &&
                    setpreferences((prev) => ({ ...prev, nbr: prev.nbr - 1 }))
                  }
                  className="cursor-pointer"
                >
                  -
                </button>
                <span>{num ?? 0}</span>
                <button
                  onClick={() => setpreferences((prev) => ({ ...prev, nbr: prev.nbr + 1 }))}
                  className="cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
            <Button
              className="rounded-none bg-black text-white w-fit font-extrabold py-6 px-20 disabled:bg-black/40"
              onClick={handleCart}
              isLoading={!product}
            >
              {inCart ? 'Remove from' : 'Add to'} cart
            </Button>
          </div>
          <div className="flex flex-col">
            <p className="my-4 md:max-w-md">
              The ‘Ariel Wayz Scribble Hoodie’ features a color pattern illustration surrounded by
              the letters of Ariel Wayz’s name on the front. Printed on a unisex white hoodie.
            </p>
            <i className="my-4 md:max-w-md">{product?.description}</i>
            <p className="font-bold text-xl flex items-center gap-2">
              <BsUpload size={20} title="share" />
              <span>share</span>
            </p>
          </div>
        </div>
      </div>
      {filteredProducts.current?.length && (
        <div className="my-20 px-10 sm:px-28 w-full flex lg:overflow-x-hidden flex-col">
          <h1 className="font-bold text-lg mb-10">You may also like</h1>
          <div className="flex items-center alsoLIke gap-5 overflow-x-scroll">
            {filteredProducts?.current
              ?.slice(0, 3)
              .map((e, i) => (
                <ProductCard id={e.id} key={i} image={e.image} name={e.name} price={e.price} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  id: string;
}

const ProductCard: FC<ProductCardProps> = ({ name, image, price, id }) => {
  return (
    <Link
      replace={true}
      href={('/store/product/' + id) as Route<string>}
      className="grow shrink-0 lg:grow-0 lg:shrink lg:h-96 flex flex-col"
    >
      <img
        src={image}
        alt={name + ' image'}
        className="w-full h-96 lg:h-full border border-stone-500"
      />
      <h5 className="text-black font-bold text-lg">{name}</h5>
      <p>$ {price.toFixed(2)} USD</p>
    </Link>
  );
};
