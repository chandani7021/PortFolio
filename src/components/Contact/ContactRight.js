import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import {
    EMAILJS_USER_ID,
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
} from '../../emailConfig'; // Import your EmailJS config

const ContactRight = () => {

    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessagge] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    // email Validation
    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    }

    const handleSend = (e) => {
        e.preventDefault()

        if (username === "") {
            setErrMsg("Username is required!")
            // console.log(errMsg)
        } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!")
            // console.log(errMsg)
        } else if (email === "") {
            setErrMsg("Pleasse give your email!")
            // console.log(errMsg)
        } else if (!emailValidation(email)) {
            setErrMsg("Give a valid email!")
            // console.log(errMsg)
        } else if (subject === "") {
            setErrMsg("Please give Subject!")
            // console.log(errMsg)
        } else if (message === "") {
            setErrMsg("Message is required!")
            // console.log(errMsg)
        } else {
            // If the form data is valid, send the email
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                name: username,
                phone_number: phoneNumber,
                email: email,
                email_subject: subject,
                message: message,
            }, EMAILJS_USER_ID)
                .then((response) => {
                    setSuccessMsg(
                        `Thank you ${username}, your message has been sent successfully!`
                    );
                    setErrMsg('');
                    setUsername('');
                    setPhoneNumber('');
                    setEmail('');
                    setSubject('');
                    setMessagge('');
                    console.log(username, phoneNumber, email, message, subject);
                })
                .catch((error) => {
                    setErrMsg('Error sending the email. Please try again later.');
                });
        }
    };


    return (
        <div className='sm:w-full lg:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne'>

            <form className='w-full flex flex-col gap-6 py-5'>
                {
                    errMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-red-400 text-base tracking-wide animate-bounce'>
                        {errMsg}</p>
                    )}
                {
                    successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>
                        {successMsg}
                    </p>
                }

                <div className='w-full flex gap-10'>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>YOUR NAME</p>
                        <input onChange={(e) => setUsername(e.target.value)} value={username} className={`${errMsg === "Username is required!" && "outline-designColor"} contactInput`} type="text" id="name" />
                    </div>

                    <div className='w-1/2 flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone Number</p>
                        <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className={`${errMsg === "Phone number is required!" && "outline-designColor"} contactInput`} type="text" id="phone" />
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className={`${errMsg === "Pleasse give your email!" && "outline-designColor"} contactInput`} type="email" id="email" />
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
                    <input onChange={(e) => setSubject(e.target.value)} value={subject} className={`${errMsg === "Please give Subject!" && "outline-designColor"} contactInput`} type="text" id="subject" />
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Message</p>
                    <textarea onChange={(e) => setMessagge(e.target.value)} value={message} cols="30" rows="8" className={`${errMsg === "Message is required!" && "outline-designColor"} contactTextArea`} type="text" id="message" />
                </div>

                <div className='w-full'>
                    <button onClick={handleSend} className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'>
                        Send Message
                        {/* 57:11 */}
                    </button>
                </div>
                {
                    errMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-red-400 text-base tracking-wide animate-bounce'>{errMsg}</p>
                    )}

                {
                    successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>
                        {successMsg}
                    </p>
                }

            </form>

        </div>
    )

};

export default ContactRight