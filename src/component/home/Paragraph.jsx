import React from 'react'

const Paragraph = ({
    className,
    left,
    right,
    maxWidth,
    small,
    white,
    toSmall,
    children,
    bold,
    big,
    mdleft,
    toBig,
    black,
}) => {
    return (
        <p
            style={{ maxWidth: `${maxWidth && maxWidth}px` }}
            className={`${className && className} ${left ? 'ml-0 mr-auto text-left' : mdleft ? "md:text-left" : right ? 'ml-auto mr-0 text-right' : 'mx-auto text-center'} ${small ? 'text-sm md:text-base' : toSmall ? 'text-lg md:text-xl lg:text-2xl' : big ? 'text-xl md:text-2xl lg:text-3xl' : toBig ? "text-base md:text-lg lg:text-xl" : 'text-sm sm:text-base md:text-lg'} ${white ? 'text-white' : black ? "text-black" : 'text-light-black'} ${bold ? "font-bold" : "font-normal"} duration-300 !leading-115`}
        >
            {children}
        </p>
    )
}

export default Paragraph