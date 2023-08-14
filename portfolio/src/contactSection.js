import { useEffect, useState } from "react";
import { postMessage } from "./postMessage.js";

export function ContactSection() {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const emailHandle = (event) => {
    setEmailInput(event.target.value);
  };

  const nameHandle = (event) => {
    setNameInput(event.target.value);
  };

  const messageHandle = (event) => {
    setMessageInput(event.target.value);
  };

  const user = {
    name: nameInput,
    email: emailInput,
    message: messageInput,
  };

  useEffect(() => {
    console.log(user);
  }, [user, nameInput, emailInput, messageInput]);

  const resetInputs = () => {
    setNameInput("");
    setEmailInput("");
    setMessageInput("");
  };

  return (
    <div className="bg-gray-600 mt-10 lg:px-32 2xl:px-64">
      <div className="w-2/3 m-auto">
        <p className="text-white text-5xl font-bold text-center mb-8 pt-16">
          Contact
        </p>
        <p className="text-white text-lg text-center md:px-16 2xl:text-2xl">
          I would love to hear about your company, your projects and how I could
          help. Please fill the form and I will get back to you as soon as
          possible.{" "}
        </p>

        <form className="mt-8 w-5/6 flex flex-col m-auto md:px-10">
          <input
            onChange={nameHandle}
            value={nameInput}
            placeholder="NAME"
            className="bg-transparent border-b-2 p-4 focus:outline-none 2xl:text-xl"
          ></input>

          <input
            onChange={emailHandle}
            value={emailInput}
            placeholder="EMAIL"
            className="bg-transparent border-b-2 p-4 focus:outline-none 2xl:text-xl"
          ></input>

          <textarea
            onChange={messageHandle}
            value={messageInput}
            placeholder="MESSAGE"
            className="bg-transparent border-b-2 p-4 focus:outline-none 2xl:text-xl resize-none h-40"
            maxLength={500}
          ></textarea>

          <div className="flex justify-end mt-20">
            <button
              onClick={() => {
                postMessage(user);
                resetInputs();
              }}
              type="button"
              className="p-1 border-b-4 border-green-800 text-white text-2xl 2xl:text-2xl"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <p className="mt-20 border w-full"></p>
    </div>
  );
}
