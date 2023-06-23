"use client";

import { RefObject, forwardRef, useRef } from "react";
import { Spinner } from "flowbite-react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
// import formData from "form-data"
// import Mailgun from "mailgun.js"

type Props = {
  contactFormRef: RefObject<HTMLElement>;
};

const FormSchema = z.object({
  name: z
    .string()
    .min(2, "Name should be at least 2 characters")
    .max(20, "Name should be at most 20 characters")
    .nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters")
    .max(200, "Message should be at most 200 characters"),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const ContactForm = forwardRef<HTMLFormElement, Props>((props, ref) => {
  ContactForm.displayName = "Contact Form";
  const { contactFormRef } = props;
  const formRef = useRef<any>(null);

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
    register,
    // watch,
  } = useForm<FormSchemaType>({
    mode: "onTouched",
    resolver: zodResolver(FormSchema),
  });

  const notify = () => toast("MESSAGE SENT!");
  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    await new Promise<void>((res) => {
      setTimeout(() => {
        console.log(data);
        res();
        notify();
        reset();
      }, 3000);
    });
  };

  return (
    <section className="pb-20" ref={contactFormRef}>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#4BB543",
            color: "white",
            fontWeight: "bold",
          },
        }}
      />
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex min-h-[300px] max-w-5xl flex-col items-center gap-5 text-gray-400 caret-blue-600 md:flex-row md:items-start"
      >
        <div
          className="flex min-h-[300px] w-full flex-[2] flex-col justify-end gap-5 pl-3 pr-3 md:gap-0"
          data-aos="fade-right"
        >
          <div className="flex flex-col gap-12">
            <div className="relative">
              {errors.name && (
                <p className="absolute top-[-50%] text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
              <input
                disabled={isSubmitting}
                {...register("name")}
                type="text"
                className="w-full rounded-md border border-transparent bg-[#ffffff0d] p-3 outline-0 focus:border-blue-600"
                placeholder="Name..."
              />
            </div>
            <div className="relative">
              {errors.email && (
                <p className="absolute top-[-50%] text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
              <input
                disabled={isSubmitting}
                {...register("email")}
                type="email"
                className="w-full rounded-md border border-transparent bg-[#ffffff0d] p-3 outline-0 focus:border-blue-600"
                placeholder="Email..."
              />
            </div>
          </div>
        </div>
        <div
          className="relative w-full flex-[3] items-center justify-center px-3"
          data-aos="fade-left"
        >
          {errors.message && (
            <p className="absolute text-sm text-red-600 md:left-[-50%]">
              {errors.message.message}
            </p>
          )}
          <textarea
            disabled={isSubmitting}
            placeholder="Unfortunately the form doesn't have the functionality of sending emails, but I'm working on it 😉"
            className="my-[1.7rem] min-h-[300px] w-full max-w-[573px] rounded-md border border-transparent bg-[#ffffff0d] p-3 outline-0 focus:border-blue-600 md:my-0"
            {...register("message")}
          ></textarea>
          {/* <pre className="overflow-hidden">
            {JSON.stringify(watch(), null, 2)}
          </pre> */}
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="mt-3 flex min-h-[48px] w-full cursor-pointer items-center justify-center rounded-md bg-blue-600 p-3 text-white transition-all duration-300 hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-blue-600 md:w-[200px]"
          >
            {isSubmitting ? <Spinner size="sm" /> : <span>SEND</span>}
          </button>
        </div>
      </form>
    </section>
  );
});

export default ContactForm;
