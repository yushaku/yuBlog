"use client";

import { ShinyText } from "@/components/cuicui/texts";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8 flex items-center justify-between'>
        <ShinyText className='text-4xl font-bold'>Resume</ShinyText>
        <Button
          onClick={() =>
            window.open("/levanson-blockchain-developer.pdf", "_blank")
          }
          className='flex items-center gap-2'
        >
          <Download className='size-4' />
          Download PDF
        </Button>
      </div>

      <div className='prose prose-lg dark:prose-invert max-w-none'>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold'>Le Van Son</h2>
          <p className='text-muted-foreground'>Blockchain Developer</p>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-semibold'>Contact</h3>
          <div className='flex flex-col gap-2'>
            <a
              href='mailto:levanson180200@gmail.com'
              className='text-primary hover:underline'
            >
              levanson180200@gmail.com
            </a>
            <a
              href='https://github.com/yushaku'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:underline'
            >
              github.com/yushaku
            </a>
          </div>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-semibold'>Skills</h3>
          <ul className='list-disc pl-6'>
            <li>Blockchain Development</li>
            <li>Smart Contract Development</li>
            <li>Web3 Integration</li>
            <li>Solidity</li>
            <li>React.js</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-semibold'>Experience</h3>
          <div className='space-y-4'>
            <div>
              <h4 className='font-medium'>Blockchain Developer</h4>
              <p className='text-muted-foreground'>2022 - Present</p>
              <ul className='mt-2 list-disc pl-6'>
                <li>
                  Developed and deployed smart contracts on Ethereum and other
                  EVM-compatible chains
                </li>
                <li>Built decentralized applications with React and Web3.js</li>
                <li>Implemented secure and efficient blockchain solutions</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-xl font-semibold'>Education</h3>
          <div>
            <h4 className='font-medium'>Computer Science</h4>
            <p className='text-muted-foreground'>2020 - 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
