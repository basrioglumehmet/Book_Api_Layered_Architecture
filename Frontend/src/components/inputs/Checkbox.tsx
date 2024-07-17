import { combineClasses } from '@/utils/tailwind/tailwind';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import { BsCheck } from 'react-icons/bs';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  text?:string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className,text, ...props }, ref) => {3
  const [isChecked,setChecked] = React.useState(false)
  return (
    <div className='flex items-center space-x-5 cursor-pointer' aria-hidden
    
    onClick={() => {
        setChecked(!isChecked)
    }}
    >
        <div className='relative'>
        <div 
      type="checkbox" 
      className={`border rounded-md ${combineClasses({
            "bg-primary":isChecked
      })} text-xl ${className}`} 
      ref={ref} 
      {...props} 
    />
    {isChecked && <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-xl ">
      <BsCheck />
    </div>}
        </div>
    
    {
        text &&  <span>{text}</span>
       }
    </div>
  );
});

export default Checkbox;
