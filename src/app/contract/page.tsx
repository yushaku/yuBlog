"use client";

import { Button } from "@/components/Buttons";
import { FormInput } from "@/components/Forms";
import { Meteors } from "@/components/Meteors";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

type FormContact = {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
};

const {
  YOUR_SERVICE_ID = "",
  YOUR_TEMPLATE_ID = "",
  PUBLIC_API_KEY = "",
} = process.env;

const MeteorPreview = () => {
  const { handleSubmit, handleChange, isValid, isSubmitting, values, errors } =
    useFormik({
      validateOnChange: false,
      initialValues: {
        email: "",
        firstName: "",
        lastName: "",
        message: "",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .email("Please enter your email")
          .required("This field is required"),
        firstName: Yup.string().required("Please let me know your name"),
        lastName: Yup.string(),
        message: Yup.string().required("You don't have any thing to say?"),
      }),
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        emailjs
          .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, values, PUBLIC_API_KEY)
          .then(() => {
            toast.success("thanks! your email has be sended");
            resetForm();
          })
          .catch(() => toast.error("send email failed"));
      },
    });

  const animation = "animate-fade-down animate-once animate-duration-1000";

  return (
    <section className='max-w-[1000px] mx-auto'>
      <article className='relative'>
        <div className='absolute hidden inset-0 h-full w-full bg-linear-to-r from-blue-500 to-teal-500 transform scale-[0.70] bg-red-500 rounded-full blur-3xl' />

        <div className='relative shadow-xl border py-8 px-8 h-full overflow-hidden rounded-2xl flex items-center'>
          <Meteors number={10} />

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
                  className=''
                />

                <FormInput<FormContact>
                  errors={errors.lastName}
                  value={values.lastName}
                  onChange={handleChange}
                  name='lastName'
                  placeholder='Last name'
                  className=''
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
                title='Send'
                // Icon={<SendIcon className='stroke-foreground' />}
                disabled={!isValid || isSubmitting}
                className={`mt-4 border border-gray-700 hover:bg-foreground ${animation} animate-delay-700`}
                onClick={() => handleSubmit()}
              />
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
};

export default MeteorPreview;
