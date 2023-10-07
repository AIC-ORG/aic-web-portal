import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface MyPortalComponentProps {
  children: ReactNode;
}

export class MyPortalComponent extends React.Component<MyPortalComponentProps> {
  render() {
    return ReactDOM.createPortal(this.props.children, document.getElementById('portal-root')!);
  }
}
