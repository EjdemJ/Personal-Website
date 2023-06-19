"use client";

import {
  RefObject,
  forwardRef,
  useRef,
  FormEvent,
  useState,
  useEffect,
} from "react";
import emailjs from "@emailjs/browser";
// import { z } from "zod";

type Props = {
  messageAreaRef: RefObject<HTMLTextAreaElement>;
  contactFormRef: RefObject<HTMLElement>;
};

const ContactForm = forwardRef<HTMLFormElement, Props>((props, ref) => {
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [message, setMessage] = useState<string>("");

  const { messageAreaRef, contactFormRef } = props;
  const formRef = useRef<any>(null);
  ContactForm.displayName = "Contact Form";

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l2zxrwg",
        "template_7o5vms6",
        formRef.current,
        "L7AAmAm_Q-al84TuX"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="pb-20" ref={contactFormRef}>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="mx-auto flex min-h-[300px] max-w-5xl flex-col items-center gap-5 text-gray-400 caret-blue-600 md:flex-row md:items-start"
      >
        <div className="flex min-h-[300px] w-full flex-[2] flex-col gap-5 pl-3 pr-3 md:justify-between md:gap-0">
          <div className="flex flex-col gap-5">
            <input
              name="user_name"
              type="text"
              onBlur={() => console.log("bluured")}
              className="relative w-full rounded-md border border-transparent bg-[#ffffff0d] p-3 outline-0"
              placeholder="Name..."
            />
            <input
              name="user_email"
              type="email"
              className="relative w-full rounded-md border border-transparent bg-[#ffffff0d] p-3 outline-0"
              placeholder="Email..."
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-blue-600 p-3 text-white transition-all duration-300 hover:bg-blue-400 md:w-[200px]"
          >
            SEND
          </button>
        </div>
        <div className="w-full flex-[3] items-center justify-center px-3">
          <textarea
            name="message"
            ref={messageAreaRef}
            className="min-h-[300px] w-full rounded-md border border-transparent bg-[#ffffff0d] p-3 outline-0 focus:border-blue-600"
          ></textarea>
        </div>
      </form>
    </section>
  );
});

export default ContactForm;
