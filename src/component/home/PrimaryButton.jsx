
const PrimaryButton = ({
    children,
    left,
    onClick,
    className,
    transparent,
    url,
    ...rest
}) => {
    const buttonClass = transparent ? "!border-white" : "";
    return url ? (
        <a {...rest}
            onClick={onClick}
            href={url}
            className={`${className} ${buttonClass} ${left ? "ml-0 mr-auto text-left" : "mx-auto text-center flex"
                } border-[2px] hover:border-indigo hover:bg-white-gradient overflow-hidden relative z-30 after:w-full after:duration-300 hover:after:right-0 after:h-full after:bg-pink-gradient after:absolute after:top-0 after:-right-full after:z-[-1] text-black bg-btn-gradient px-5 rounded-lg text-base lg:text-lg !leading-115 py-2 md:py-3 font-bold duration-300 ease-linear `}
        >
            {children}
        </a>
    ) : (
        <button
            onClick={onClick}
            className={`${className} ${buttonClass} ${left ? "ml-0 mr-auto text-left" : "mx-auto text-center flex"
                } border-[2px] hover:border-indigo hover:bg-white-gradient overflow-hidden relative z-30 after:w-full after:duration-300 hover:after:right-0 after:h-full bg-blue-500 after:absolute after:top-0 after:-right-full after:z-[-1] text-black bg-btn-gradient px-5 rounded-lg text-base lg:text-lg !leading-115 py-2 md:py-3 font-bold duration-300 ease-linear `}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;