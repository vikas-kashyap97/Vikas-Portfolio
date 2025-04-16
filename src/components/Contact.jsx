import React from 'react';
import { Button, Input, Textarea } from "@material-tailwind/react";
import { FaLocationDot, FaMessage, FaPhone } from "react-icons/fa6";
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useRef } from "react";
import { animateBox } from "./animation";

const Contact = () => {
  const contact = useRef();

  useEffect(() => {
    animateBox(contact);
  }, []);

  const [state, handleSubmit] = useForm("myzgzwgb");

  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <>
      <section ref={contact} id="contact" className="w-full mt-10 md:mt-20">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-500 pl-2">
          CONTACT
        </h1>

        <h2 className="text-sm md:text-lg lg:text-2xl my-5 text-center text-green-500">
          I Want to Hear from You
        </h2>
        <div className="w-full md:w-4/5 mx-auto p-5 flex flex-col md:flex-row justify-between">
          {/* left section */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-5">
              <FaLocationDot className="text-5xl md:text-6xl p-4 rounded-full bg-green-500" />
              <div className="ml-5">
                <span className='text-green-600 lg:text-xl'>Address</span>
                <br />
                <span className="text-green-500 hover:text-green-400  transition-colors">Hardoi, Uttar Pradesh</span>
              </div>
            </div>

            <div className="flex items-center mb-5">
              <FaMessage className="text-5xl md:text-6xl p-4 rounded-full bg-green-500 " />
              <div className="ml-5">
                <span className='text-green-600 lg:text-xl'>Email</span>
                <br />
                <span className="text-green-500 hover:text-green-400 transition-colors">vikaskashyaprock@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center mb-5">
              <FaPhone className="text-5xl md:text-6xl p-4 rounded-full bg-green-500" />
              <div className="ml-5">
                <span className='text-green-600 lg:text-xl'>Phone</span>
                <br />
                <span className="text-green-500 hover:text-green-400 transition-colors">+91 8542050782</span>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="w-full md:w-1/2 mt-5 md:mt-0">
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap gap-5"
            >
              <Input
                size="lg"
                color="green"
                type="text"
                id="name"
                name="name"
                label="Your Name"
                variant="outlined"
                required
                className='text-green-500'
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <Input
                size="lg"
                color="green"
                type="email"
                id="email"
                name="email"
                label="Your Email"
                variant="outlined"
                required
                className='text-green-500'
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <Input
                size="lg"
                color="green"
                type="number"
                id="phone"
                name="phone"
                label="Your Phone"
                variant="outlined"
                required
                className='text-green-500'
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />

              <Textarea
                label="Message..."
                color="green"
                size="lg"
                id="message"
                name="message"
                required
                className='text-green-500'
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <Button
                type="submit"
                className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 text-black hover:scale-105"
                disabled={state.submitting}
              >
                Submit Now
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
