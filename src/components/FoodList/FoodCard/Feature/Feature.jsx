import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({feature}) => {
    return (
      <div className='flex items-center font-semibold gap-2'>
        <CheckCircleIcon className="h-6 w-6 text-indigo-400" />
        <span>{feature}</span>
      </div>
    );
};

export default Feature;