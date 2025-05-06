"use client";

import { FormInput } from "@/components/Forms";
import { Meteors } from "@/components/Meteors";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FormContact, useContactForm } from "@/hooks/useContactForm";

export default function ContactPage() {
  const { handleSubmit, handleChange, isValid, isSubmitting, values, errors } =
    useContactForm();

  const animation = "animate-fade-down animate-once animate-duration-1000";

  return (
    <section className='max-w-[1000px] mx-auto'>
      <article className='relative'>
        <div className='absolute hidden inset-0 h-full w-full bg-linear-to-r from-blue-500 to-teal-500 transform scale-[0.70] bg-red-500 rounded-full blur-3xl' />

        <div className='relative shadow-xl border py-8 px-8 h-full overflow-hidden rounded-2xl flex items-center'>
          {/* <Meteors number={10} /> */}

          <div>
            <h1
              className={`text-2xl font-bold text-foreground ${animation} animate-delay-300`}
            >
              Just say hello!!!
            </h1>

            <p
              className={`font-normal text-base text-slate-500 mb-4 ${animation} animate-delay-500`}
            >
              Let me know more about you
            </p>

            <div className={`${animation} animate-delay-600`}>
              <label className='flex gap-3'>
                <FormInput<FormContact>
                  errors={errors.firstName}
                  value={values.firstName}
                  onChange={handleChange}
                  name='firstName'
                  placeholder='First name'
                />

                <FormInput<FormContact>
                  errors={errors.lastName}
                  value={values.lastName}
                  onChange={handleChange}
                  name='lastName'
                  placeholder='Last name'
                />
              </label>

              <FormInput<FormContact>
                errors={errors.email}
                value={values.email}
                onChange={handleChange}
                name='email'
                className=''
                placeholder='Your email'
              />

              <FormInput<FormContact>
                errors={errors.message}
                value={values.message}
                isTextArea={true}
                onChange={handleChange}
                name='message'
                className='h-32 '
                placeholder='Message'
              />

              <Button
                type='submit'
                disabled={!isValid || isSubmitting}
                className={`mt-4 w-full h-14 border bg-card hover:bg-primary ${animation} animate-delay-700`}
                onClick={() => handleSubmit()}
              >
                Send <SendIcon className='stroke-foreground' />
              </Button>
            </div>
          </div>

          <div className='hidden md:block'>
            <Image
              placeholder='empty'
              src='/coder.png'
              alt='coder form'
              width={464}
              height={464}
            />
          </div>
        </div>
      </article>
    </section>
  );
}
