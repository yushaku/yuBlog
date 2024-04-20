'use client';

import React from 'react';
import { toast } from 'react-hot-toast';
import { IconCopy } from './Icons';

export const CopyBtn = ({ plainText }: { plainText: string }) => {
  return (
    <span
      onClick={() => {
        navigator.clipboard.writeText(plainText);
        toast.success('copied!!!');
      }}
      className='hidden cursor-pointer rounded-md border border-[#cdcdcd]/40 group-hover:block'
    >
      <IconCopy className='h-7 w-7' color='#cdcdcd' />
    </span>
  );
};
