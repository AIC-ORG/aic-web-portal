'use client';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { sanityClient } from '@/sanity/sanity.client';
import { Iproduct, Size } from '@/types/cart.types';
import { concertQuery, productsQuery } from '@/sanity/queries/cart.query';

type Action =
  | { type: 'addItem'; payload: Iproduct[] }
  | { type: 'removeItem'; payload: string }
  | {
      type: 'updateCart';
      payload: { id: string; nbr?: number; size?: Size };
    };

// Define the context type
interface DataContextType {
  cartItems: Iproduct[];
  dispatchCartItems: Dispatch<Action>;
  products: Iproduct[];
  concerts: Iproduct[];
  setProducts: Dispatch<SetStateAction<Iproduct[]>>;
  setConcerts: Dispatch<SetStateAction<Iproduct[]>>;
}

const dataContext = createContext<DataContextType | undefined>(undefined);

interface Iprops {
  children: React.ReactNode;
}

function cartReducer(state: Iproduct[], action: Action): Iproduct[] {
  switch (action.type) {
    case 'addItem':
      if (typeof window !== 'undefined') {
        if (Array.isArray(action.payload)) {
          const data = action.payload.map((item) => ({ ...item, nbr: 3, size: 'Medium' }));
          const payload = data ?? ([] as unknown as Iproduct & { nbr: number; size: Size }[]);
          if (state && payload) {
            if (state.some((e) => data.some((payload) => payload?.id === e?.id))) return state;
          }
          if (payload.length === 1)
            window.localStorage.setItem('cart', JSON.stringify([...state, ...action.payload]));
        }
      }
      if (Array.isArray(action.payload)) {
        const data = action.payload.map((item) => ({ ...item, nbr: 3, size: 'Medium' }));
        return [...state, ...data] as Iproduct[];
      } else {
        return [];
      }
    case 'updateCart':
      if (typeof window !== 'undefined') {
        // If it is a client component i have to add items to the localstorage to perfom persist of state
        const payload =
          action.payload ?? (null as unknown as Iproduct & { nbr: number; size: Size });
        console.log(action.payload);
        if (state && payload) {
          if (state.some((st) => st?.id === payload?.id)) {
            const { id, ...data } = payload;
            const element = state.find((st) => st?.id === payload?.id);
            const index = state.indexOf(element as Iproduct);
            state[index] = { ...element, ...data } as unknown as any;
            console.log(state);
            return state;
          }
          return state;
        }
        return state;
      }
    case 'removeItem':
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(
          'cart',
          JSON.stringify(state.filter((e) => !(e.id == action.payload))),
        );
      }
      return state.filter((e) => !(e.id == action.payload));
    default:
      return state;
  }
}
const DataProvider: React.FC<Iprops> = ({ children }) => {
  const [cartItems, dispatchCartItems] = useReducer(cartReducer, []);
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [concerts, setConcerts] = useState<Iproduct[]>([]);

  const fetchProducts = async () => {
    try {
      const products = await sanityClient.fetch(productsQuery);
      setProducts(products);
      return products;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchConcerts = async () => {
    try {
      const concerts = await sanityClient.fetch(concertQuery);
      setConcerts(concerts);
      return concerts;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem('cart');
      item !== 'undefined'
        ? dispatchCartItems({ type: 'addItem', payload: JSON.parse(item as string) })
        : null;
    }
    fetchProducts();
    fetchConcerts();
  }, []);
  return (
    <dataContext.Provider
      value={{ cartItems, dispatchCartItems, products, setProducts, concerts, setConcerts }}
    >
      {children}
    </dataContext.Provider>
  );
};

const useData = (): DataContextType => {
  const context = useContext(dataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a dataprovider');
  }

  return context;
};

export { DataProvider, useData };
