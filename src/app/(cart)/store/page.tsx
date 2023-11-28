'use client';
import { FC, Suspense } from 'react';
import ProductCard from '@/components/store/ProductCard';
import { useData } from '@/contexts/DataContext';
import Link from 'next/link';
import { Route } from 'next';
import Skeleton from '@/components/store/Skeleton';

const HomePage: FC = () => {
  const { products, concerts } = useData();
  const isLoading = !products || !concerts;

  return (
    <div className="w-full flex flex-col px-7 sm:px-32 pt-10 items-center bg-white">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {isLoading
          ? Array(6)
              .fill('')
              .map((_, i) => <Skeleton key={i} />)
          : products?.map((e, i) => (
              <Link key={i} href={('/store/product/' + e.id) as Route<string>} className="w-full">
                <ProductCard name={e.name} image={e.image} price={e.price} />
              </Link>
            ))}
      </div>
      <div className="w-full grid gap-20 mt-32 mb-10 grid-cols-1 md:grid-cols-2">
        {isLoading
          ? Array(2)
              .fill('')
              .map((_, i) => <Skeleton key={i} />)
          : concerts.slice(0, 2).map((e, i) => (
              <Link
                href={('/store/product/' + e.id) as Route<string>}
                key={i}
                className="flex flex-col w-full"
              >
                <img src={e.image} alt={e.name + ' image'} className="w-full" />
                <h5 className="text-black font-bold text-lg">{e.name}</h5>
                <p>$ {e.price} USD</p>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default HomePage;
