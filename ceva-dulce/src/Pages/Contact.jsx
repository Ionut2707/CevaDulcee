import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nrwz5u8",
        "template_1uxdnwg",
        form.current,
        "5ckAxUVXKiEmgF0tl"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
      alert("Mesajul dumneavoastra a fost trimis, vom reveni in cel mai scurt timp")
  };

  return (
    <div id="contact" className="font-lobster">
      <section className="bg-white dark:bg-gray-900 ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-gray-100 rounded-xl ">
          <h2 className="mb-4 text-4xl tracking-tight  text-center text-brown-500 dark:text-white">
            Contact
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label
                for="nume"
                className="block mb-2 text-2xl  text-brown-500 dark:text-gray-300"
              >
                Nume
              </label>
              <input
                name="nume"
                type="text"
                id="nume"
                className="shadow-sm bg-gray-50 border border-gray-300 text-yellow-800 text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Nume"
                required
              />
            </div>
            <div className="">
              <label
                for="subiect"
                className="block mb-2 text-2xl text-brown-500 dark:text-gray-300"
              >
                Adresa Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="block p-3 w-full text-xl text-yellow-800 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Email"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-2xl  text-brown-500 dark:text-gray-400 "
              >
                Mesajul Dvs
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                className="block p-2.5 w-full text-xl text-yellow-800 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Lasati un mesaj...
                "
              ></textarea>
            </div>
            <div className="w-full flex justify-center text-3xl">
              <button type="submit" className="border-2 rounded-lg py-2 px-4 text-brown-500">
                Trimite Mesaj
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Contact;
