import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [PasswordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    // const showPassword = () => {
    //     // alert("Show teb")
    //     passwordRef.current.type = "text"
    //     console.log(ref.current.src);

    //     if (ref.current.src.includes("icons/hide.png")) {
    //         ref.current.src = "icons/visible.png"
    //         passwordRef.current.type = "password"
    //     }
    //     else {
    //         passwordRef.current.type = "text"
    //         ref.current.src = "icons/hide.png"
    //     }

    // }
    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 2) {

            console.log(form);
            setPasswordArray([...PasswordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...PasswordArray, { ...form, id: uuidv4() }]))

            console.log({ ...PasswordArray, form });
            setform({ site: "", username: "", password: "" })

            // toast:
            toast('Password saved ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            // toast:
            toast('Error: Enter Credentials!')
        }

    }
    const deletePassword = (id) => {
        console.log("deleting password with id", id);
        let c = confirm("Do you really want to delete ?")
        if (c) {

            setPasswordArray(PasswordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(PasswordArray.filter(item => item.id !== id)))
            // toast:
            toast('Password Deleted Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }
    }
    const editPassword = (id) => {
        console.log("Editing password with id", id);
        setform(PasswordArray.filter(i => i.id === id)[0])

        setPasswordArray(PasswordArray.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast('Copied to Clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)
    }

    return (
        <>
            {/* Toast for copy Clipboard: */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="pt-7 mycontainer max-w-5xl mx-auto px-4 sm:px-6">

                <h1 className="text-2xl sm:text-4xl font-bold text-center">

                    &lt;
                    <span className='text-green-700'>/</span>
                    Password
                    <span className='text-green-700'>-Manager /</span>
                    &gt;</h1>
                <p className="text-base sm:text-lg text-center">Your own Password Manager</p>

                <div className="flex flex-col p-4 text-black gap-8 items-center">

                    <input value={form.site} onChange={handleChange} className='rounded-full border border-green-600 w-full p-4 py-1' type="text" name="site" placeholder='Enter website URL' />
                    <div className="flex flex-col sm:flex-row w-full gap-4">

                        <input value={form.username} onChange={handleChange} className='rounded-full border border-green-600 w-full p-4 py-1' type="text" name="username" placeholder='Enter username' />

                        <div className="relative">

                            <input onChange={handleChange} className='rounded-full border border-green-600 w-full p-4 py-1' type="password" name="password" placeholder='Enter password' />

                            {/* <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="/icons/hide.png" alt="" />
                            </span> */}
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-green-400 rounded-full px-5 py-2 w-fit hover:bg-green-300 cursor-pointer border-2 border-green-700 gap-1'>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Save</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {PasswordArray.length === 0 && <div>No Passwords to Show</div>}
                    {PasswordArray.length != 0 && (
                        <div className="overflow-x-auto w-full">
                            <table className="table-auto w-full overflow-hidden rounded-md mb-10">
                                <thead className='bg-green-800 text-white'>
                                    <tr>
                                        <th className='py-2'>Site</th>
                                        <th className='py-2'>Username</th>
                                        <th className='py-2'>Password</th>
                                        <th className='py-2'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-green-100'>
                                    {PasswordArray.map((item, index) => {
                                        return <tr key={index} >
                                            <td className='py-2 border-3 border-emerald-300 text-center'>
                                                <div className='flex items-center justify-center '>
                                                    <a href={item.site} target='_blank'>{item.site}</a>
                                                    <div className='lordiconCopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className=' py-2 border-3 border-emerald-300 text-center'>
                                                <div className='flex items-center justify-center'>

                                                    <span>{item.username}</span>
                                                    <div className='lordiconCopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover">
                                                        </lord-icon>

                                                    </div>
                                                </div>
                                            </td>
                                            <td className='py-2 border-3 border-emerald-300 text-center'>
                                                <div className='flex items-center justify-center'>

                                                    <span>{item.password}</span>
                                                    <div className='lordiconCopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='py-2 border-3 border-emerald-300 text-center'>
                                                <div className='flex items-center justify-center'>

                                                    <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px" }}
                                                            src="https://cdn.lordicon.com/gwlusjdu.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </span>
                                                    <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px" }}
                                                            src="https://cdn.lordicon.com/skkahier.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </span>

                                                </div>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>

                            </table>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default Manager
