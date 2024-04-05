// ContactUs.js

import React from "react";

const ContactUs = () => {
    return (
        <div className="flex justify-center items-centre py-10 h-screen ">
            <div>
                <iframe
                    className="rounded-3xl mr-10 border-2 p-1 border-black"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.943343382072!2d72.85354627561404!3d19.022218082171356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4972d21%3A0x2c50185364aca4c1!2sVeermata%20Jijabai%20Technological%20Institute!5e0!3m2!1sen!2sin!4v1711224440682!5m2!1sen!2sin"
                    style={{ width: "600px", height: "615px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div>
                <div className="pt-5 px-10 h-[81%] border-black border-2 rounded-3xl shadow-xl w max-w-md w-full">
                    <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
                    <p className="mb-5">
                        Feel free to reach out to us with any questions,
                        feedback, or inquiries.
                    </p>
                    <form
                        className="mt-0"
                        action="https://formspree.io/f/mwkgnjzo"
                        method="POST"
                    >
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                autoComplete="off"
                                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                autoComplete="off"
                                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                autoComplete="off"
                                className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
