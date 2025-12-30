import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Window from './window';

function EmailBox() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.send(
                "emailjs_02021310",
                "template_yrpmkgn",
                {
                    username: formData.username,
                    email: formData.email,
                    message: formData.message,
                },
                {
                    publicKey: "ssigpLT16O6iG8e3o",
                }
            );

            setStatus("success");
            setFormData({ username: "", email: "", message: "" });
        } catch (error) {
            console.error("FAILED...", error);
            setStatus("error");
        }
    };

    let inputStyle = "border-2 border-[#696969] min-w-[300px] max-md:min-w-[200px] p-1.5 px-[10px] outline-none text-[0.9rem] text-[white] rounded-[10px]";
    let labelStyle = "ps-[10px] text-[#c4c4c4] my-[5px] font-[700]"

    return (
        <Window>
            <div className="flex items-center justify-center w-full">
                <form className='' onSubmit={sendEmail}>
                    <h1 className='text-center text-[2rem] text-white font-[700] my-[1rem]' >
                        {status === "success" ? "Thank you" : "Contact Me"}
                    </h1>
                    <div className="">
                        <p className={labelStyle} >Name</p>
                        <input className={inputStyle} type="text" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="">
                        <p className={labelStyle} >Email</p>
                        <input className={inputStyle} type="email" name="email" value={formData.email} onChange={handleChange} required
                        />
                    </div>
                    <div className="">
                        <p className={labelStyle} >Message</p>
                        <textarea className={`${inputStyle} resize-none`} name="message" value={formData.message} onChange={handleChange} required
                        />
                    </div>

                    <input type="submit" className='bg-white text-black p-1 w-full rounded-[10px] mt-[1rem] font-[600] cursor-pointer transition-all hover:-translate-y-[2px]' value={status === "sending" ? "Sending..." : "Send"} disabled={status === "sending"}
                    />

                    
                </form>
            </div>
        </Window>
    );
};
export default EmailBox;