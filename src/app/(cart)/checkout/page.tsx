'use client';
import { FC, useState } from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import ProductCheckoutCard from '@/components/store/ProductCheckoutCard';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/CheckBox';
import Select from '@/components/ui/Select';
import ToolTip from '@/components/ui/ToolTip';
import { RadioGroup, RadioGroupItem } from '@/components/ui/Radios';
import { availableCities, availableCountries } from '@/lib/costants';
import { useData } from '@/contexts/DataContext';

interface CheckoutPageProps {}

const CheckoutPage: FC<CheckoutPageProps> = () => {
  const [selectedCountry, setSelectedCountry] = useState<number>(0);
  const [selectedCity, setSelectedCity] = useState<number>(0);
  const { cartItems } = useData();
  const handleCityChange = (index: number) => {
    setSelectedCity(index);
  };
  const handleCountryChange = (index: number) => {
    setSelectedCountry(index);
  };
  return (
    <div className="w-full bg-white flex flex-col md:flex-row">
      <div className="md:w-[60%] px-14">
        <form action="" className="w-full flex flex-col py-10">
          <h1 className="font-bold">Information</h1>
          <Select
            label="Country/Region"
            onchangeOption={handleCountryChange}
            value={availableCountries[selectedCountry]}
            options={availableCountries}
          />
          <div className="w-full flex gap-5 items-center">
            <input type="text" className="checkoutInput" placeholder="First name" />
            <input type="text" className="checkoutInput" placeholder="Last name" />
          </div>
          <input type="text" className="checkoutInput" placeholder="Address eg: 1234 Main st" />
          <input
            type="text"
            className="checkoutInput"
            placeholder="Apartment, suite , etc. (optional) "
          />
          <Select
            label="City"
            onchangeOption={handleCityChange}
            value={availableCities[selectedCity]}
            options={availableCities}
          />
          <div className="border-2 border-stone-200 flex items-center mt-5">
            <input type="text" className="w-full p-2 h-full outline-none" placeholder="Phone" />
            <ToolTip content="Incase we need to contact you about your order">
              <BsFillQuestionCircleFill color="#909090" className="mx-5" />
            </ToolTip>
          </div>
          <div className="flex items-center gap-3 my-3 placeholder-gray-300">
            <Checkbox id="shipping" />
            <label htmlFor="shipping" className="text-sm font-semibold">
              Shipping address is the same as my billing address
            </label>
          </div>
          <div className="flex items-center gap-3 my-3 placeholder-gray-300">
            <Checkbox id="shipping" />
            <label htmlFor="shipping" className="text-sm font-semibold">
              Save this information for next time
            </label>
          </div>
          <fieldset className="border-2 border-stone-400 p-5 rounded-md">
            <legend className="text-center px-10">Express checkout</legend>
            <img src={'/images/paypal.png'} alt="paypal button" />
          </fieldset>
          <div className="w-full flex my-10 items-center">
            <span className="border-b-2 border-b-slate-300 w-full"></span>
            <span className="px-10 text-slate-600">OR</span>
            <span className="border-b-2 border-b-slate-300 w-full"></span>
          </div>
          <RadioGroup className="w-full flex items-center gap-10">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="debit" id="debit" />
              <label htmlFor="debit" className="text-xs font-semibold">
                Debit Card
              </label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="credit" id="credit" />
              <label htmlFor="credit" className="text-xs font-semibold">
                Credit Card
              </label>
            </div>
          </RadioGroup>
          <div className="w-full flex gap-5 items-center">
            <input type="text" className="checkoutInput" placeholder="Name on card" />
            <input type="text" className="checkoutInput" placeholder="Card number" />
          </div>
          <div className="w-full flex gap-5 items-center">
            <input type="text" className="checkoutInput" placeholder="Expiration" />
            <input type="text" className="checkoutInput" placeholder="CCV" />
          </div>
          <div className="mt-5">
            <h1 className="font-semibold">Stay updated</h1>
            <input type="text" className="checkoutInput" placeholder="Email" />
          </div>
          <div className="flex gap-3 my-3 placeholder-gray-300">
            <Checkbox id="privacy" />
            <label htmlFor="privacy" className="text-xs -mt-1 font-semibold">
              I agree to receive personalized updates and marketing messages based on my
              information, interests, activities, website visits and device data.For more
              information about how we use your personal information, please see our{' '}
              <span className="underline">Privacy Policy.</span>
            </label>
          </div>
          <Button className="bg-black text-white w-full rounded-sm py-7">
            Continue to check out
          </Button>
        </form>
      </div>
      <div className="md:w-[40%] pt-20 px-10 bg-stone-200">
        <div className="w-full gap-6 grid grid-cols-2 sm:grid-cols-3 md:flex flex-col">
          {cartItems.map(() => (
            <ProductCheckoutCard key={i} />
          ))}
        </div>
        <div className="border-y-2 border-neutral-400 py-4">
          <div className="flex items-center justify-between">
            <div className="text-zinc-600">Subtotal</div>
            <div className="text-sm font-semibold">$65.00 USD</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-zinc-600">Shipping fee</div>
            <div className="text-sm font-semibold">$65.00 USD</div>
          </div>
        </div>
        <div className="flex my-5 items-center justify-between">
          <div className="text-zinc-900 font-bold">Total</div>
          <div className="text-sm font-semibold">$65.00 USD</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
