import React from 'react'
const PrimaryHeading = ({
    children,
    className,
    left,
    right,
    maxWidth,
    white,
    black,
    subHeading,
}) => {
    return (
        <h2
            style={{ maxWidth: `${maxWidth && maxWidth}px` }}
            className={`${className && className} 
            ${left ? 'ml-0 mr-auto text-left' : right ? 'ml-auto mr-0 text-right' : 'mx-auto text-center'}
            ${white ? 'text-white' : black ? "text-black" : 'text-transparent bg-clip-text bg-btn-gradient'} ${subHeading ? "text-2xl md:text-3xl lg:text-4xl" : "text-[clamp(28px,5.46875vw,50px)]"} font-bold capitalize !leading-120`}
        >
            {children}
        </h2>
    )
}

export default PrimaryHeading   