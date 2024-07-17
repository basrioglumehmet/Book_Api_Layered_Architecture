import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export enum ButtonType {
  PRIMARY = 'primary',
  GHOST = 'ghost',
  SECONDARY = 'secondary',
  BLACK = 'black'
}

type Props = {
  type: ButtonType;
  text:string,
  icon?:ReactNode,
  disableLeftRounded?: boolean
};

const IKButton = (props: Props) => {
  const { type } = props;

  const baseClasses = `px-4 py-2  focus:outline-none  w-full justify-center h-full focus:ring-2 text-sm flex items-center gap-5 ${props.disableLeftRounded ? "rounded-r":"rounded"}`;
  const typeClasses = clsx({
    'bg-primary text-white font-semibold hover:bg-primaryhover': type === ButtonType.PRIMARY,
    'bg-black text-white font-semibold hover:bg-black': type === ButtonType.BLACK,
    'bg-transparent border border-gray-500 text-gray-700 hover:bg-gray-100': type === ButtonType.GHOST,
    'bg-secondary text-black hover:bg-secondaryhover font-semibold': type === ButtonType.SECONDARY,
  });

  const classes = twMerge(baseClasses, typeClasses);

  return (
    <button className={classes}>
       {props.icon ?? ""}
      <span>{props.text}</span>
    </button>
  );
};

export default IKButton;
