import MainLayout from '@/layouts/MainLayout';
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_er) {
    console.log('error', _er);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex flex-col w-full text-white h-screen items-center justify-center">
          <h1 className=" text-mainblue font-bold text-[10em]">500</h1>
          <p className="text-xl">A client side error occured. </p>
          <p className="text-xl">Contact the owner for help or try again later. </p>
          <p className="text-lg">Check console if you are the developer </p>
          <div className="flex items-center gap-3">
            <a href={'/'} className="text-lg text-white">
              Go back home
            </a>
            Or
            <a href={window.location.href} className="text-lg text-mainblue">
              Reload
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
