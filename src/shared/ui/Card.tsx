import  { FC, HTMLAttributes } from 'react';
import { COLORS_BACKGROUND } from './colors';


export const Card: FC<HTMLAttributes<HTMLDivElement>> = function Card(props) {

  return (
    <div className={`${COLORS_BACKGROUND.main300} max-w-80 mx-auto p-4 rounded-lg m-5 ${props.className}`}>
        {props.children}
    </div>
  )
};