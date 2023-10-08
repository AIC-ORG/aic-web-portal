import { useAuthContext } from '@/contexts/AuthContext';
import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import { BiLoaderAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { LiaMicrophoneAltSolid } from 'react-icons/lia';
import { api } from '@/utils/fetch';

const Signup = () => {
  const { setViewSignup, setUser, setAuthenticated, setViewLogin } = useAuthContext();
  const [signupData, setSignupData] = useState({
    names: '',
    email: '',
    role: 'USER',
    telephone: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await api.post('/user/create', { ...signupData });
      const { data } = response.data;
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(data.user);
      setAuthenticated(true);
      setViewSignup(false);
    } catch (e: any) {
      toast.error(e.response.data.message);
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute z-[60] backdrop-blur-sm w-full h-full flex items-center justify-center">
      <div className="w-full h-full absolute z-[70]" onClick={() => setViewSignup(false)}></div>
      <div className="w-3/4 ltab:w-2/4 bg-white rounded-lg flex justify-center items-center flex-col z-[80] p-6">
        <span className="font-bold text-2xl font-luckyGuy">Welcome</span>
        <span className="flex my-4">
          Already in the family ? &nbsp;
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              setViewSignup(false);
              setViewLogin(true);
            }}
          >
            Log In
          </span>
        </span>
        <form className="w-full flex flex-col rounded-lg p-6" onSubmit={handleSignup}>
          <div className="w-full flex my-3 flex-col items-start justify-center">
            <div className="w-full flex my-3 flex-col items-start justify-center">
              <div className="my-1 w-full flex items-center justify-between">
                <span className={``}>Names</span>
              </div>
              <div className="border border-slate-300 w-full rounded-l rounded flex">
                <div
                  className={`w-10 rounded-l h-10 flex border items-center justify-center bg-addon text-slate-600 border-r border-r-slate-300`}
                >
                  <AiOutlineUser />
                </div>
                <input
                  value={signupData.names}
                  onChange={(e) => {
                    setSignupData({ ...signupData, names: e.target.value });
                  }}
                  type={'text'}
                  className={`w-11/12 bg-light-input-bg placeholder:text-gray-400 placeholder:text-sm outline-none rounded-r px-3 h-10`}
                  placeholder={'eg: Mugisha Precieux'}
                />
              </div>
            </div>
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
                value={signupData.email}
                onChange={(e) => {
                  setSignupData({ ...signupData, email: e.target.value });
                }}
                type={'email'}
                className={`w-11/12 bg-light-input-bg placeholder:text-gray-400 placeholder:text-sm outline-none rounded-r px-3 h-10`}
                placeholder={'eg: precieuxmugisha@gmail.com'}
              />
            </div>
          </div>
          <div className="w-full flex my-3 flex-col items-start justify-center">
            <div className="my-1 w-full flex items-center justify-between">
              <span className={``}>Telephone</span>
            </div>
            <div className="border border-slate-300 w-full rounded-l rounded flex">
              <div
                className={`w-10 rounded-l h-10 flex border items-center justify-center bg-addon text-slate-600 border-r border-r-slate-300`}
              >
                <AiOutlinePhone />
              </div>
              <input
                value={signupData.telephone}
                onChange={(e) => {
                  setSignupData({ ...signupData, telephone: e.target.value });
                }}
                type={'text'}
                className={`w-11/12 bg-light-input-bg placeholder:text-gray-400 placeholder:text-sm outline-none rounded-r px-3 h-10`}
                placeholder={'eg: +250782307144'}
                defaultValue={'+250'}
              />
            </div>
          </div>
          <div className="w-full flex my-3 flex-col items-start justify-center">
            <div className="my-1 w-full flex items-center justify-between">
              <span className={``}>Register as</span>
            </div>
            <div className="w-full flex items-center">
              <label
                htmlFor="fan-radio"
                className="border border-slate-300 w-6/12 mr-1 rounded-l rounded flex items-center"
              >
                <div
                  className={`w-10 rounded-l h-10 flex border items-center justify-center bg-addon text-slate-600 border-r border-r-slate-300`}
                >
                  <AiOutlineUser />
                </div>
                <input
                  id="fan-radio"
                  value={signupData.role}
                  name="role"
                  onChange={(e) => {
                    setSignupData({ ...signupData, role: 'USER' });
                  }}
                  type={'radio'}
                  className={`mx-3 bg-light-input-bg placeholder:text-gray-400 placeholder:text-sm outline-none rounded-r px-3 h-10`}
                  checked={signupData.role === 'USER'}
                />
                <span>Fan</span>
              </label>

              <label
                htmlFor="artist-radio"
                className="border border-slate-300 w-6/12 mr-1 rounded-l rounded flex items-center"
              >
                <div
                  className={`w-10 rounded-l h-10 flex border items-center justify-center bg-addon text-slate-600 border-r border-r-slate-300`}
                >
                  <LiaMicrophoneAltSolid />
                </div>
                <input
                  id="artist-radio"
                  value={signupData.role}
                  name="role"
                  onChange={(e) => {
                    setSignupData({ ...signupData, role: 'ARTIST' });
                  }}
                  type={'radio'}
                  className={`mx-3 bg-light-input-bg placeholder:text-gray-400 placeholder:text-sm outline-none rounded-r px-3 h-10`}
                  checked={signupData.role === 'ARTIST'}
                />
                <span>Artist</span>
              </label>
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
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
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

export default Signup;
