import { useState } from "react";
import { PencilAltIcon , XCircleIcon } from "@heroicons/react/solid";

function Modal(props){
    const [stateformInput,setStateFormInput] = useState({
        
    })

    function formInputHandler(e){
        setStateFormInput({
            ...stateformInput,
            [e.target.name] : e.target.value
        })
    }

    
    
    
    function formHandler(e) {
        e.preventDefault();
        props.add(stateformInput)
        props.modal()
       
      }

    return(
        <div className="bg-gray-600/70 fixed z-10 h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col bg-white p-10 rounded-lg w-1/2">
                <div className="flex justify-between my-5">
                    <div className="flex gap-2 justify-center items-center">
                    <PencilAltIcon className="h-5 w-5 text-gray-500" />
                    <h2 className="text-gray-500 text-lg font-bold">ثبت کاربر</h2>
                    </div>
                    <XCircleIcon className="h-7 w-7 text-gray-500 hover:text-gray-400 cursor-pointer" onClick={props.modal}/>
                </div>
                <div className="w-full">
                    <form action="" onSubmit={formHandler}>
                        <div className="grid grid-rows-3 grid-flow-col gap-5">
                            <div className="flex flex-col">
                                <label htmlFor="" className="py-2 text-gray-500">نام</label>
                                <input type="text" name="firstname" id="" className="border-2 border-gray-200 rounded-md p-2 focus:outline-blue-400" onChange={formInputHandler} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="py-2 text-gray-500">متولد</label>
                                <input type="text" name="birthday" id="" className="border-2 border-gray-200 rounded-md p-2 focus:outline-blue-400" onChange={formInputHandler} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="py-2 text-gray-500">ایمیل</label>
                                <input type="text" name="email" id="" className="border-2 border-gray-200 rounded-md p-2 focus:outline-blue-400" onChange={formInputHandler} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="py-2 text-gray-500">فامیل</label>
                                <input type="text" name="lastname" id="" className="border-2 border-gray-200 rounded-md p-2 focus:outline-blue-400" onChange={formInputHandler} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="py-2 text-gray-500">جنسیت</label>
                                <input type="text" name="gender" id="" className="border-2 border-gray-200 rounded-md p-2 focus:outline-blue-400" onChange={formInputHandler} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="py-2 text-gray-500">نوع کاربری</label>
                                <select name="account" id="cars" form="carform">
                                    <option value="volvo">Admin</option>
                                    <option value="saab">User</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-end my-4 gap-2">
                            <button type="submit" className="bg-green-600 text-white px-4 rounded-md text-sm font-bold">ثبت</button>
                            <button className="bg-red-600 text-white p-2 rounded-md text-sm font-bold" onClick={props.modal}>انصراف</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Modal;