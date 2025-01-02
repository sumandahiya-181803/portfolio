"use client"
import emailjs from 'emailjs-com';
import { useState } from 'react';
import InputWithLabel from '../home/InputWithLable';
import Paragraph from '../home/Paragraph';
import PrimaryButton from '../home/PrimaryButton';
import PrimaryHeading from './PrimaryHeading';

const ContactForm = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
        address: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: '', // Clear the error when typing
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate inputs
        let formErrors = {};

        if (!formValues.firstName) formErrors.firstName = 'First name is required';
        if (!formValues.lastName) formErrors.lastName = 'Last name is required';
        if (!formValues.email) formErrors.email = 'Email address is required';
        if (!formValues.phoneNumber) formErrors.phoneNumber = 'Mobile number is required';
        if (!formValues.message) formErrors.message = 'Message is required';
        if (!formValues.address) formErrors.address = 'Address is required';

        // Validate phone number using regex
        const phoneNumberRegex = /^[6-9][0-9]{9}$/;
        if (formValues.phoneNumber && !phoneNumberRegex.test(formValues.phoneNumber)) {
            formErrors.phoneNumber = 'Please enter a valid 10-digit mobile number';
        }


        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        // Email.js parameters
        const templateParams = {
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            phoneNumber: formValues.phoneNumber,
            message: formValues.message,
            address: formValues.address,
        };

        setIsSubmitting(true);

        //send email using email.js
        emailjs.send('service_yqt2s6h', 'template_9gfuauh', templateParams, 'PPwdTVh7-TLkuFxZs')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                // Clear form values
                setFormValues({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    message: '',
                    address: '',
                });
                setErrors({});
                setIsSubmitting(false);
            }, (err) => {
                console.error('FAILED...', err);
                setIsSubmitting(false);
            });
    };

    return (
        <div className='max-w-[1440px] w-full p-6 mx-auto'>
            <PrimaryHeading
                black={'text-black'}>Contact Our Team</PrimaryHeading>
            <Paragraph className={'pt-3 !max-w-[500px] text-black'} black={'text-light-black'}>Perfect for a friendly, inviting tone, this is great for encouraging users to reach out with any inquiries.</Paragraph>
            <form className="w-full max-w-[1240px] mx-auto pt-8" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row w-full gap-7">
                    {/* ==================FIRST NAME====================== */}
                    <div className="flex w-full rounded-md flex-col relative">
                        <InputWithLabel
                            name="firstName"
                            type="text"
                            value={formValues.firstName}
                            onChange={handleInputChange}
                            placeholder={"First Name*"}
                        />
                        {errors.firstName && (
                            <p className={`text-red-600 font-medium text-xs md:text-sm tracking-[0.4px] absolute -bottom-[22px]`}>
                                {errors.firstName}
                            </p>
                        )}
                    </div>
                    {/* ==================LAST NAME====================== */}
                    <div className="flex w-full rounded-md flex-col relative">
                        <InputWithLabel
                            name="lastName"
                            type="text"
                            value={formValues.lastName}
                            onChange={handleInputChange}
                            placeholder={"Last Name*"}
                        />
                        {errors.lastName && (
                            <p className={`text-red-600 font-medium text-xs md:text-sm tracking-[0.4px] absolute -bottom-[22px]`}>
                                {errors.lastName}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row w-full gap-7 mt-8">
                    {/* ==================EMAIL ADDRESS====================== */}
                    <div className="flex w-full rounded-md flex-col relative">
                        <InputWithLabel
                            name="email"
                            type="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            placeholder={"Email Address*"}
                        />
                        {errors.email && (
                            <p className={`text-red-600 font-medium text-xs md:text-sm tracking-[0.4px] absolute -bottom-[22px]`}>
                                {errors.email}
                            </p>
                        )}
                    </div>
                    {/* ==================MOBILE NUMBER====================== */}
                    <div className="flex w-full rounded-md flex-col relative">
                        <InputWithLabel
                            name="phoneNumber"
                            type="text"
                            value={formValues.phoneNumber}
                            onChange={handleInputChange}
                            placeholder={"Enter Your Number*"}
                            maxLength={10}
                            minLength={10}
                            onKeyDown={(e) => {
                                if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                                    e.preventDefault();
                                }
                            }}
                        />
                        {errors.phoneNumber && (
                            <p className={`text-red-600 font-medium text-xs md:text-sm tracking-[0.4px] absolute -bottom-[22px]`}>
                                {errors.phoneNumber}
                            </p>
                        )}
                    </div>
                </div>
                {/* ==================ADDRESS====================== */}
                <div className="flex w-full rounded-md relative flex-col mt-8">
                    <InputWithLabel
                        name="address"
                        type="text"
                        value={formValues.address}
                        onChange={handleInputChange}
                        placeholder={"Enter Your Address*"}
                    />
                    {errors.address && (
                        <p className={`text-red-600 font-medium text-xs md:text-sm tracking-[0.4px] absolute -bottom-[22px]`}>
                            {errors.address}
                        </p>
                    )}
                </div>
                <div className="flex w-full rounded-md relative flex-col mt-8">
                    <textarea
                        className={`w-full font-lato font-semibold border-[2px] text-light-black border-light-black duration-300 hover:border-light-blue rounded-md py-2 focus:outline-none outline-none text-sm md:text-base px-2 placeholder:text-black placeholder:text-opacity-50 resize-none h-[200px]`}
                        name="message"
                        id="message"
                        placeholder='Message'
                        onChange={handleInputChange}
                        value={formValues.message}
                    />

                    {errors.address && (
                        <p className={`text-red-600 font-medium text-xs md:text-sm tracking-[0.4px] absolute -bottom-[22px]`}>
                            {errors.message}
                        </p>
                    )}
                </div>
                <div className="mt-8 md:mt-10 flex justify-center">
                    <PrimaryButton className={"!px-8 shadow-md shadow-gray-200 hover:bg-blue-800 hover:text-white duration-300 "} onClick={' border-[2px] hover:border-indigo hover:bg-white-gradient overflow-hidden relative z-30 after:w-full after:duration-300 hover:after:right-0 after:h-full bg-blue-500 after:absolute after:top-0 after:-right-full after:z-[-1] text-black bg-btn-gradient px-5 rounded-lg text-base lg:text-lg !leading-115 py-2 md:py-3 font-bold duration-300 ease-linear'}>Submit</PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;