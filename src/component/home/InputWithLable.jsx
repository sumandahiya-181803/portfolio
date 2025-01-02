import React from 'react'

const InputWithLabel = ({ name, onKeyDown, placeholder, value, onChange, type, maxLength, minLength }) => {
    return (

        <>
            <input
                type={type}
                className={`w-full font-lato font-semibold border-[2px] text-light-black border-light-black duration-300 hover:border-light-blue rounded-md py-2 focus:outline-none outline-none text-sm md:text-base px-2 placeholder:text-light-black`}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                maxLength={maxLength}
                minLength={minLength}
                onKeyDown={onKeyDown}
            />
        </>
    )
}

export default InputWithLabel