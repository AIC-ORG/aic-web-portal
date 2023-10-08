'use client';
import { useAuthContext } from '@/contexts/AuthContext';
import { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { BiLoaderAlt } from 'react-icons/bi';

const Login = () => {
  const { setViewLogin, setUser, setAuthenticated, setViewSignup } = useAuthContext();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await api().post('/auth/login', { ...loginData });
      const { data } = response.data;
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(data.user);
      setAuthenticated(true);
      setViewLogin(false);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute z-[60] backdrop-blur-sm w-full h-full flex items-center justify-center">
      <div className="w-full h-full absolute z-[70]" onClick={() => setViewLogin(false)}></div>
      <div className="w-3/4 ltab:w-2/4 bg-white rounded-lg flex justify-center items-center flex-col z-[80] p-6">
        <span className="font-bold text-2xl font-luckyGuy">Sign In</span>
        <span className="flex my-4">
          Not yet in the family ? &nbsp;
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              setViewLogin(false);
              setViewSignup(true);
            }}
          >
            Sign Up
          </span>
        </span>

        <form className="w-full flex flex-col rounded-lg p-6" onSubmit={handleLogin}>
          <div className="w-full flex my-3 flex-col items-start justify-center">
            <div className="my-1 w-full flex items-center justify-between">
              <span className={``}>Email</span>
            </div>
            <div className="border border-slate-300 w-full rounded-l rounded flex">
              <div
                className={`w-10 rounded-l h-10 flex border items-center justify-center bg-addon text-slate-600 border-r border-r-slate-300`}
              >
                <AiOutlineMail />
              </div>
              <input
                value={loginData.email}
                onChange={(e) => {
                  setLoginData({ ...loginData, email: e.target.value });
                }}
                type={'email'}
                className={`w-11/12 bg-light-input-bg placeholder:text-gray-400 placeholder:text-sm outline-none rounded-r px-3 h-10`}
                placeholder={'eg: precieuxmugisha@gmail.com'}
              />
            </div>
          </div>
          <div className="w-full flex my-3 flex-col items-start justify-center">
            <div className="my-1 w-full flex items-center justify-between">
              <span className={``}>Password</span>
            </div>
            <div className="border border-slate-300 w-full rounded-l rounded flex">
              <div
                className={`w-10 rounded-l h-10 flex border items-center justify-center bg-addon text-slate-600 border-r border-r-slate-300`}
              >
                <AiFillLock />
              </div>
              <input
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                type={'password'}
                className={`w-11/12 bg-light-input-bg placeholder:text-gray-400 placeholder:text-sm outline-none rounded-r px-3 h-10`}
                placeholder={'****'}
              />
            </div>
          </div>
          <button
            className="bg-bg-african mt-4 text-center w-44 h-12 mx-auto rounded text-white text-xl font-bold"
            type="submit"
          >
            {loading ? <BiLoaderAlt size={25} className="mx-auto animate-spin" /> : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
