import React, {useRef, useState} from 'react'
import * as emailjs from "@emailjs/browser";

const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }
    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true);

        try {

            await emailjs.send('service_o6euyl8', 'template_fm2dxvw', {
                from_name: form.name,
                to_name: 'Idris',
                from_email: form.email,
                to_email: 'mohammedidris10215@gmail',
                message: form.message,
            },'JQnMeZRPqoaeOaw3_')

            setLoading(false);
            alert("Your message has been sent!");
            setForm({
                name: '',
                email: '',
                message: ''

            })
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong");
        }

    }

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center  flex-col border border-white-500 shadow-black-200 shadow-2xl rounded-3xl pb-8">
                {/*<img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />*/}
                <div className="contact-container" >
                    <h3 className="head-text mt-0 py-0">Contact Me</h3>
                    <p className="text-lg text-white-600 mt-3">Whether you are looking to build a new website, improve
                        an existing one, or bring a unique project to life, I am here to help.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">

                        <label className="space-y-3">
                            <span className="field-label">
                                Full Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="field-input"
                                required
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">
                                Email
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="field-input"
                                required
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">
                                Your Message
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your message"
                                className="field-input"
                                required
                                rows={5}
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" className="filed-btn_arrow" alt="arrow" />
                        </button>

                    </form>

                </div>
            </div>

        </section>
    )
}
export default Contact
