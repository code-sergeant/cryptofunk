import React from 'react';

type Props = {
  color: string;
};

export const Background: React.FC<Props> = ({children, color}) => (
  <div className={color}>{children}</div>
);
