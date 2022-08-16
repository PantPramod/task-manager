import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

type propTypes = {
    close: () => void
    todo: (arg0: string, arg1: string, arg2: "low" | "medium" | "high" | "veryHigh") => void,
    type: "todo" | "progress" | "review" | "done",
}

const AddComponent = ({ close, todo, type }: propTypes) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<"low" | "medium" | "high" | "veryHigh">('medium')

    const addToList = () => {
        todo(title, description, priority)
        close()
    }

    return (
        <div className='z-50 w-[100vw] h-[100vh] border bg-transparent fixed flex items-center justify-center top-0'>
            <div className=' z-10 w-[50vw] bg-slate-600 shadow rounded p-[20px] '>
                <AiOutlineClose
                    onClick={close}
                    className='ml-auto p-2 cursor-pointer'
                    size={35}
                    color="white"
                />
                <div className='mb-[5px] text-slate-600'> Title</div>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder='Enter Title'
                    className='outline-0 mb-[10px] border-slate-300 border-[2px] rounded w-[100%] p-[7px]' />
                <div className='mb-[5px] text-slate-600' >Description</div>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    className=' outline-0 mb-[10px] border-slate-300 border-[2px] rounded w-[100%] p-[7px] h-[200px]'></textarea>

                <div className='flex'>
                    <div

                        onClick={() => setPriority("veryHigh")}
                        className={priority === "veryHigh" ? "bg-red-600 min-w-[30px] min-h-[30px] rounded-full cursor-pointer mr-3 border-2 border-blue-500 " : "bg-red-600 min-w-[30px] min-h-[30px] rounded-full cursor-pointer mr-3 "}></div>
                    <div
                        onClick={() => setPriority("high")}
                        className={priority === 'high' ? "bg-orange-600 min-w-[30px] min-h-[30px] rounded-full cursor-pointer mr-3 border-2 border-blue-500 " : "bg-orange-600 min-w-[30px] min-h-[30px] rounded-full cursor-pointer mr-3"}></div>
                    <div
                        onClick={() => setPriority("medium")}
                        className={priority === "medium" ? 'bg-yellow-600 min-w-[30px] min-h-[30px] rounded-full cursor-pointer mr-3 border-2 border-blue-500 ' : "bg-yellow-600 min-w-[30px] min-h-[30px] rounded-full cursor-pointer mr-3"}></div>
                    <div
                        onClick={() => setPriority("low")}
                        className={priority === 'low' ? "bg-green-600 min-w-[30px] min-h-[30px] rounded-full cursor-pointer mr-3 border-2 border-blue-500 " : "bg-green-600 min-w-[30px] min-h-[30px] rounded-full cursor-pointer mr-3"}></div>
                </div>
                <div className='max-w-[500px] flex mx-auto'>
                    <button
                        onClick={() => addToList()}
                        className='login-btn w-[100%] p-3 rounded-[20px] text-white mt-7'>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddComponent
