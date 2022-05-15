import { PencilAltIcon,XIcon,XCircleIcon } from "@heroicons/react/solid";

const modal = (props)=>{
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
                    <form action="" className="grid grid-rows-3 grid-flow-col gap-5">
                        <div className="flex flex-col">
                            <label htmlFor="" className="py-2 text-gray-500">نام</label>
                            <input type="text" name="" id="" className="border-2 border-gray-200 rounded-md p-2 focus:outline-blue-400" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="py-2 text-gray-500">متولد</label>
                            <input type="text" name="" id="" className="border-2 border-gray-200 rounded-md p-2 focus:outline-blue-400" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="py-2 text-gray-500">ایمیل</label>
                            <input type="text" name="" id="" className="border-2 border-gray-200 rounded-md p-2 focus:outline-blue-400" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="py-2 text-gray-500">فامیل</label>
                            <input type="text" name="" id="" className="border-2 border-gray-200 rounded-md p-2 focus:outline-blue-400" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="py-2 text-gray-500">جنسیت</label>
                            <input type="text" name="" id="" className="border-2 border-gray-200 rounded-md p-2 focus:outline-blue-400" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="py-2 text-gray-500">نوع کاربری</label>
                            <input type="text" name="" id="" className="border-2 border-gray-200 rounded-md p-2 focus:outline-blue-400" />
                        </div>
                    </form>
                    <div className="flex justify-end my-4 gap-2">
                        <button className="bg-green-600 text-white px-4 rounded-md text-sm font-bold">ثبت</button>
                        <button className="bg-red-600 text-white p-2 rounded-md text-sm font-bold">انصراف</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default modal;