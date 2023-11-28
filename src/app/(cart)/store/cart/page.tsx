'use client';
import { FC, useMemo } from 'react';
import { useData } from '@/contexts/DataContext';
import Link from 'next/link';
import CartProductCard from '@/components/store/CartProductCard';
import { Button, buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { Route } from 'next';
import { toast } from '@/components/ui/Toast';
import { useRouter } from 'next/navigation';

interface CartPageProps {}

const CartPage: FC<CartPageProps> = () => {
  const { cartItems, products, dispatchCartItems } = useData();
  const subtotal = useMemo<number>(() => {
    const amount = cartItems.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
    return amount;
  }, [cartItems]);

  const removeItemFromCard = (id: String) => {
    dispatchCartItems({ type: 'removeItem', payload: id as string });
    cartItems.filter((e) => !(e.id == id));
    toast({
      title: 'Removed item successfully',
      message: `Removed ${id} from cart`,
      type: 'success',
    });
  };
  const router = useRouter();
  return (
    <div className="w-full flex flex-col px-10 sm:px-20 items-center">
      <div className="w-full flex items-center my-10 justify-between">
        <h1 className="text-3xl font-extrabold ">Your Cart</h1>
        <Link href={'/'} className="font-semibold underline">
          Continue Shopping
        </Link>
      </div>
      {cartItems?.length == 0 ? (
        <h1 className="text-3xl font-semibold my-5">oops!! your Cart is empty</h1>
      ) : (
        <>
          <div className="w-full flex py-10 space-y-10 flex-col border-y-2 border-r-slate-600">
            {cartItems.map((e, i) => (
              <CartProductCard
                key={i}
                image={e.image}
                price={e.price}
                title={e.name}
                onClick={removeItemFromCard}
                id={e.id}
              />
            ))}
          </div>

          <div className="w-full flex justify-between items-end mt-5">
            <h1 className="font-bold text-lg">Featured Collection</h1>
            <div className="flex flex-col ">
              <div className="w-fit gap-3 mb-3 self-end flex items-center">
                <h1 className="text-lg font-bold ">Subtotal</h1>
                <p>$ {subtotal.toFixed(2)} USD</p>
              </div>
              <p className="text-sm my-2">Taxes and shipping calculated at the checkout</p>
              <Link
                href={'/checkout'}
                className={cn(buttonVariants(), 'bg-black text-white rounded-none py-5')}
              >
                Check out
              </Link>
            </div>
          </div>
        </>
      )}
      {cartItems?.length == 0 && <h1>you can view the products below</h1>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
        {products.slice(0, 3).map((e, i) => (
          <ProductCard id={e.id} key={i} image={e.image} name={e.name} price={e.price} />
        ))}
      </div>
      <Button
        className="rounded-none bg-black text-white mb-10"
        onClick={() => router.push('/store')}
      >
        View All
      </Button>
    </div>
  );
};

export default CartPage;

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  id: string;
}

const ProductCard: FC<ProductCardProps> = ({ name, image, price, id }) => {
  return (
    <Link href={('/store/product/' + id) as Route<string>} className="lg:h-96 flex flex-col">
      <img
        src={image}
        alt={name + ' image'}
        className="w-full h-80 lg:h-full border border-stone-500"
      />
      <h5 className="text-black font-bold text-lg">{name}</h5>
      <p>$ {price.toFixed(2)} USD</p>
    </Link>
  );
};
