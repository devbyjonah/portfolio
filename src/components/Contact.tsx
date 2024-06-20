"use client";

import { useState } from "react";
import { sendEmail } from "../server/send-email";
import { Heading, Paragraph } from "./elements";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    const form = new FormData(e.currentTarget);
    let result;
    try {
      result = await sendEmail(form);
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    } finally {
      if (result) {
        router.push("/success");
      } else {
        alert("Failed to send message. Please try again later.");
      }
      setIsSending(false);
    }
  };

  return (
    <section className="px-6 py-32 md:px-0 relative min-h-screen flex flex-col justify-center">
      <div className="opacity-0 on-scroll flex flex-col gap-6 mx-auto mb-10">
        <Heading title="Contact" />
        <Paragraph text="If you are interested in hiring a creative and driven Frontend Engineer, get in touch using the form below or connect with me on LinkedIn using the links at the top!" />
      </div>
      <form
        onSubmit={handleSubmit}
        name="contact"
        id="contact"
        className="opacity-0 on-scroll text-gray-600 mx-auto flex max-w-2xl flex-col gap-4 w-full"
      >
        <label className="-mb-2 dark:text-gray-300" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          name="name"
          className="border-4 dark:bg-light-bg border-logo-blue/50 focus:border-logo-blue rounded-2xl"
          type="text"
          placeholder="Jonah Wagner"
          autoComplete="name"
          minLength={2}
          maxLength={100}
          required
        />
        <label className="-mb-2 dark:text-gray-300" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          name="email"
          className="border-4 dark:bg-light-bg border-logo-blue/50 focus:border-logo-blue rounded-2xl"
          type="email"
          placeholder="devbyjonah@gmail.com"
          autoComplete="email"
          minLength={5}
          maxLength={300}
          required
        />
        <label className="-mb-2 dark:text-gray-300" htmlFor="message">
          Message:
        </label>
        <textarea
          required
          minLength={10}
          maxLength={2000}
          id="message"
          name="message"
          className="border-4 border-logo-blue/50 focus:border-logo-blue rounded-2xl"
          placeholder="Let's connect!"
          autoComplete="off"
          rows={5}
        />
        <div className="pt-8 flex justify-center">
          {!isSending ? (
            <input
              disabled={isSending}
              className="cursor-pointer mx-auto px-12 animate-pulseShadow hover:drop-shadow-logo-blue my-4 md:my-0 text-xl font-bold rounded-2xl p-3 max-w-fit bg-gradient-to-tr to-logo-blue text-gray-600 dark:text-dark-bg from-light-bg"
              type="submit"
            />
          ) : (
            <button className="cursor-pointer mx-auto px-16 animate-pulseShadow hover:drop-shadow-logo-blue my-4 md:my-0 text-xl font-bold rounded-2xl p-3 max-w-fit bg-gradient-to-tr to-logo-blue text-gray-600 dark:text-dark-bg from-light-bg">
              <div className="animate-spin h-8 w-8 border-t border-b border-logo-blue rounded-full" />
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
