'use client';
import { FC, Suspense } from 'react';
import ProductCard from '@/components/store/ProductCard';
import { useData } from '@/contexts/DataContext';
import Link from 'next/link';
import { Route } from 'next';
import Skeleton from '@/components/store/Skeleton';

const Apparel: FC = () => {
  const { products, concerts } = useData();
  const isLoading = !products || !concerts;

  return (
    <div className="w-full flex flex-col px-7 sm:px-32 py-10 items-center bg-white">
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
    </div>
  );
};

export default Apparel;
