import React from 'react'

function Signup() {
    return (
// <<<<<<< main
        // <div className="flex flex-col md:flex-row min-h-screen justify-end relative bg-cover bg-center mb-2" style={{
        //     backgroundImage: "url('/Images/background.jpg')",
        // }}>
        //     <div className='w-full' style={{
        //         background:
        //             "linear-gradient(120deg, transparent 15%, white 50%)",
        //     }}>
        //         <div className='w-full'></div>
        //         <div className="float-right mr-10 w-full md:w-1/2 z-20 flex  flex-col items-center justify-start  overflow-y-auto min-h-screen">
        //             <div className="text-center max-w-md w-full mt-16 md:mt-6">
        //                 <h1 className="my-5 font-sans text-5xl font-semibold text-primary-base ">
        //                     Registration
        //                 </h1>
        //             </div>

        //             <div className="flex justify-center w-5/6  mt-6 ">
        //                 <input
        //                     placeholder="First Name"
        //                     className="w-1/2 mr-5 text-gray-500 text-xl border border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
        //                 />
        //                 <input
        //                     placeholder="Last Name"
        //                     className="w-1/2 ml-5 text-gray-500 text-xl border border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
        //                 />
        //             </div>

        //             <div className="flex w-5/6 mt-6 space-x-10 text-xl">
        //                 <div class="flex  mt-3 mb-3">
        //                     <input type="checkbox" id="male" value="" class="w-7 h-7" />
        //                     <label for="male" class="ms-2 text-xl text-gray-600 dark:text-gray-900">Male</label>
        //                 </div>

        //                 <div class="flex  mt-3 mb-3">
        //                     <input type="checkbox" id="female" value="" class="w-7 h-7" />
        //                     <label for="female" class="ms-2 text-xl text-gray-600 dark:text-gray-900">Female</label>
        //                 </div>
        //             </div>

        //             <div className="flex flex-col items-center w-5/6 mt-6 space-y-4">
        //                 <input
        //                     placeholder="Phone Number"
        //                     type='tel'
        //                     className="w-full text-gray-500 text-xl border border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
        //                 />
        //                 <input
        //                     placeholder="Email"
        //                     type='mail'
        //                     className="w-full text-gray-500 text-xl border border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
        //                 />
        //                 <input
        //                     placeholder="Password"
        //                     type='password'
        //                     className="w-full text-gray-500 text-xl border border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
        //                 />
        //                 <input
        //                     placeholder="Confirm Password"
        //                     type='password'
        //                     className="w-full text-gray-500 text-xl border border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
        //                 />
        //             </div>

        //             <div className="flex flex-col w-5/6 mt-6 text-xl">
        //                 <div class="flex  mt-3 mb-3">
        //                     <input type="checkbox" id="red-checkbox" value="" class="w-7 h-7 border-2 border-gray-700 text-gray-600 rounded-[6px] " />
        //                     <label for="red-checkbox" class="ms-2 text-xl text-gray-600 dark:text-gray-900">Agree to the terms and conditions</label>
        //                 </div>

        //                 <div class="flex  mt-3 mb-3">
        //                     <input type="checkbox" value="" class="w-7 h-7 border-2 border-gray-700 text-gray-600 rounded-[6px] " />
        //                     <label for="Male" class="ms-2 text-xl text-gray-600 dark:text-gray-900">Notify me for all updates</label>
        //                 </div>
        //             </div>

        //             <div className="mt-10 mb-6 w-full max-w-xs sm:max-w-sm flex justify-center">
        //                 <button className="btn-primary w-2/3 text-xl rounded-[4px]">
        //                     Sign Up
        //                 </button>
        //             </div>

        //             <div className="mt-4 mb-2 text-center">
        //                 <p className="text-gray-400 text-xl">
        //                     Already have an account |{" "}
        //                     <a className="text-xl text-primary-base" href="/signup" >login</a>
        //                 </p>
// =======
        <div className='signup'>
            <div className='container-signup'>
                <div className='reg-image'>
                    {/* <div className='reg-image'>
                    <div className='brand-logo'><img src='../Assets/maa.png' alt='' /></div>
                </div> */}
                    <div className='reg-form'>
                        <div className='reg-title'>Registration</div>
                        <div className='reg-detail'>
                            <form className='input-form'>
                                <div className='input-name'>
                                    <input className='input-field-primary' type='text' placeholder='First Name' required />
                                    <input className='input-field-primary' type='text' placeholder='Last Name' required />
                                </div>
                                <div className='gender'>
                                    <div className='male'>
                                        <input className="checkboxes border rounded-md  border-gray-700" type='radio' id='gender-m' required />
                                        <label htmlFor="gender-m" required>Male</label>
                                    </div>
                                    <div className='female'>
                                        <input className="checkboxes border rounded-md border-gray-700" type='radio' id='gender-f' required />
                                        <label htmlFor="gender-f" required>Female</label>
                                    </div>
                                </div>
                                <div className='other-details'>
                                    <input className='input-field-primary' type='tel' placeholder='Phone Number' required />
                                    <input className='input-field-primary' type='email' placeholder='Email' required />
                                    <input className='input-field-primary' type='password' placeholder='Password' required />
                                    <input className='input-field-primary' type='password' placeholder='Confirm Password' required />
                                </div>
                                <div className='agreements'>
                                    <div className='terms'>
                                        <input className="checkboxes border rounded-md border-gray-700" type='checkbox' id='agree' required />
                                        <label htmlFor="agree">Agree to the terms and conditions</label>
                                    </div>
                                    <div className='terms'>
                                        <input className="checkboxes border rounded-md border-gray-700" type='checkbox' id='notify' required />
                                        <label htmlFor="notify">Notify me for all updates</label>
                                    </div>
                                </div>
                                <div className='signup-btn'><button type='submit'>Sign Up</button></div>
                                <div className='footer-signup'>Already have an account | <a href="/login">login</a></div>
                            </form>
                        </div>
{/* // >>>>>>> main */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;