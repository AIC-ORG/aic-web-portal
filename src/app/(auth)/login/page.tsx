'use client';
import { api } from '@/utils/fetch';
import { setCookie } from 'cookies-next';
import Image from 'next/image';
import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const LoginPage = () => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });
  const [error, setError] = React.useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [loginError, setLoginError] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const queryParams = useSearchParams();
  const redirect = queryParams.get('redirect');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(data).some((value) => !value)) {
      return setError({
        email: data.email ? '' : 'Email is required',
        password: data.password ? '' : 'Password is required',
      });
    }
    setLoading(true);
    setLoginError('');
    try {
      const res = await api.post('/auth/login', data);
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        const token = res.data.token ?? res.data.data.token ?? res.data.data.accessToken;
        const user_role = res.data.data?.user?.role;
        setCookie('token', token, {
          maxAge: 60 * 60 * 24,
          path: '/',
        });
        setCookie('role', user_role, {
          maxAge: 60 * 60 * 24,
          path: '/',
        });
        setSuccess(true);
        const user = res.data?.data?.user;
        const redirectUrl = redirect ? redirect : user?.role === 'ARTIST' ? '/portal' : '/';
        window.location.href = redirectUrl;
      }
    } catch (error: any) {
      console.log(error?.response?.data?.error ?? error);
      setLoginError(error?.response?.data?.message ?? 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleErrorOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setError({ ...error, [e.target.name]: `${e.target.name} is required` });
    } else {
      setError({ ...error, [e.target.name]: '' });
    }
  };

  return (
    <div className=" w-full flex h-screen bg-white overflow-y-auto">
      <div className="lg:w-1/2 relative w-1/3 sm:flex hidden flex-col text-white items-center justify-center bg-black h-full">
        <div className=" absolute top-0 left-0 bottom-0 right-0">
          <Image src="/banner.png" className=" opacity-20" layout="fill" alt="" objectFit="cover" />
        </div>
        <h1 className={` font-black z-10 lg:text-5xl text-2xl font-luckGuy`}>Welcome back</h1>
      </div>
      <div className="lg:w-1/2 bg-banner sm:w-2/3 w-full flex flex-col items-center justify-center bg-white h-full">
        <h1 className={` font-black text-2xl font-luckGuy`}>Login</h1>
        {success && <span className="text-green-500">Login successful</span>}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-6 max-w-[400px] mx-auto items-center justify-center w-full mt-10"
        >
          {loginError && <p className="text-red-500 px-2">{loginError}</p>}
          <div className="flex text-sm flex-col w-full">
            <label className="px-1" htmlFor="">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              onBlur={handleErrorOnBlur}
              placeholder="Email"
              className="w-full p-3 rounded-lg border-2 border-black/60 focus:border-black focus:border-[2.5px] duration-300 outline-none"
              required
            />
            {error.email && <p className="text-red-500 px-2">{error.email}</p>}
          </div>
          <div className="flex text-sm flex-col w-full">
            <label className="px-1" htmlFor="">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              onBlur={handleErrorOnBlur}
              placeholder="Password"
              className="w-full p-3 rounded-lg border-2 border-black/60 focus:border-black focus:border-[2.5px] duration-300 outline-none"
              required
            />
            {error.password && <p className="text-red-500 px-2">{error.password}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-black border-2 border-white hover:border-black truncate stylbtn text-white rounded-[3em] py-3 px-8"
          >
            <p className="z-50 relative">
              {loading ? <FaSpinner className=" animate-spin" /> : 'Login'}
            </p>
          </button>
        </form>
        <p className=" text-center text-sm gap-x-2 mt-6 flex items-center">
          Don't have an account?.{' '}
          <Link className=" font-black" href={'/signup'}>
            Signup
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
