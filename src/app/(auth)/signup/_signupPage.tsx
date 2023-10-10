'use client';
import { api } from '@/utils/fetch';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const SignupPage = () => {
  const [data, setData] = React.useState({
    names: '',
    email: '',
    telephone: '',
    password: '',
  });
  const [error, setError] = React.useState({
    names: '',
    email: '',
    telephone: '',
    password: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [loginError, setLoginError] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const queryParams = useSearchParams();
  const redirect = queryParams.get('redirect');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(data).some((value) => !value)) {
      return setError({
        ...error,
        email: data.email ? '' : 'Email is required',
        password: data.password ? '' : 'Password is required',
      });
    }
    setLoading(true);
    setLoginError('');
    try {
      const res = await api.post('/user/create', data);
      if (res.status === 200 || res.status === 201) {
        // const token = res.data.token ?? res.data.data.token ?? res.data.data.accessToken;
        // setCookie('token', token, {
        //   maxAge: 60 * 60 * 24,
        //   path: '/',
        // });
        setSuccess(true);
        // const user = res.data?.data?.user;
        // const redirectUrl = redirect ? redirect : user?.role === 'ARTIST' ? '/portal' : '/';
        // window.location.href = redirectUrl;
        router.push('/login');
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
    <>
      <h1 className={` font-black text-2xl font-luckGuy`}>SignUp</h1>
      {success && <span className="text-green-500">SignUp successful</span>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-6 max-w-[400px] mx-auto items-center justify-center w-full mt-10"
      >
        {loginError && <p className="text-red-500 px-2">{loginError}</p>}
        <div className="flex text-sm flex-col w-full">
          <label className="px-2" htmlFor="">
            Names
          </label>
          <input
            type="text"
            name="names"
            value={data.names}
            onChange={handleChange}
            onBlur={handleErrorOnBlur}
            placeholder="Names"
            className="w-full p-3 rounded-lg border-2 border-black/60 focus:border-black focus:border-[2.5px] duration-300 outline-none"
            required
          />
          {error.names && <p className="text-red-500 px-2">{error.names}</p>}
        </div>
        <div className="flex text-sm flex-col w-full">
          <label className="px-2" htmlFor="">
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
          <label className="px-2" htmlFor="">
            Telephone
          </label>
          <input
            type="text"
            name="telephone"
            value={data.telephone}
            onChange={handleChange}
            onBlur={handleErrorOnBlur}
            placeholder="Telephone"
            className="w-full p-3 rounded-lg border-2 border-black/60 focus:border-black focus:border-[2.5px] duration-300 outline-none"
            required
          />
          {error.telephone && <p className="text-red-500 px-2">{error.telephone}</p>}
        </div>
        <div className="flex text-sm flex-col w-full">
          <label className="px-2" htmlFor="">
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
          className="bg-black border-2 border-white hover:border-black truncate stylbtn text-white rounded-[3em] py-3 px-8"
        >
          <p className="z-50 relative">
            {loading ? <FaSpinner className=" animate-spin" /> : 'Login'}
          </p>
        </button>
      </form>
    </>
  );
};

export default SignupPage;
