import React from 'react'

const PopUp = ({ setOpen, open }) => {
    return (
        <div className={`${open ? "scale-100 pointer-events-auto" : "scale-0 pointer-events-none "} duration-300 min-h-screen w-full h-full fixed z-[300] bg-black bg-opacity-20 left-0 top-0 flex justify-center items-center`}>
            <div className="max-w-[600px] py-20 bg-white rounded-sm">
                <h2 onClick={() => setOpen(false)} className='text-4xl cursor-pointer relative z-[50000] font-bold'>Form has been Successufly submit</h2>
            </div>
        </div>
    )
}

export default PopUp