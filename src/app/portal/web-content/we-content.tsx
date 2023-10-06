import { IWebContent } from '@/types/web-content.type';
import React, { FC } from 'react';

interface Props {
  webContent: IWebContent;
}

const WebContent: FC<Props> = ({ webContent }) => {
  return <div>WebContent</div>;
};

export default WebContent;
