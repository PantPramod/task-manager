import { useEffect, useState } from 'react'
import AddComponent from './AddComponent'
import { RiFlag2Fill } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import { getLength, setColor } from "../Helper/helper"
import { ListType } from '../Helper/typeDefinition';
import axios from '../Helper/axios';



type propType = {
    heading: "todo" | "progress" | "review" | "done"
}
const ToDoList = ({ heading }: propType) => {
    const [showAddComponent, setShowAddComponent] = useState(false);
    const [showActionList, setShowActionList] = useState(false);
    const [List, setList] = useState<ListType[]>([])
    const [userdata, setUserdata] = useState<any>('');
    const [todoId, setTodoId] = useState<number | string>('')

    useEffect(() => {
        const getUserInfo = async () => {
            const userInfo = await localStorage.getItem("userInfo")
            const user = await JSON.parse(userInfo || "")
            setUserdata(user)
            const result = await axios.post('todo/get', { userId: user._id })
            console.log("result===>", result)
            setList(result.data.result)
        }
        getUserInfo();

    }, [showAddComponent, showActionList])

    const openAddComponent = () => {
        setShowAddComponent(true)
    }

    const addToList = async (title: string, Description: string, priority: "low" | "medium" | "high" | "veryHigh") => {

        const res = await axios.post('/todo', {
            title,
            Description,
            type: heading,
            priority,
            userId: userdata._id

        })
        console.log("res==>", res)
    }

    const del = async (userId: number | string) => {
        const res = await axios.delete('/todo', {
            method: "delete",
            data: {
                userId
            }
        })
        setShowActionList(false)

        console.log("res==>", res)
    }


    const changeStatus = (_id: number | string, status: "todo" | "progress" | "review" | "done", index: number) => {

    }

    return (<>
        {showAddComponent &&
            <AddComponent
                close={() => setShowAddComponent(false)}
                type={heading}
                todo={(title: string, description: string, priority: "low" | "medium" | "high" | "veryHigh") => addToList(title, description, priority)}
            />
        }
        <div className='border  p-[20px] pb-0 flex-1 rounded bg-slate-200  mr-[10px] self-start'>
            <div className='flex bg-white items-center border rounded mb-5 justify-between'>
                <div className='flex items-center '>
                    <h1 className='py-2 pl-1 rounded font-bold text-slate-600 text-[16px]'>{heading}</h1>
                    <span className='text-[14px] font-bold ml-2 bg-slate-200 rounded-full w-[25px] h-[25px] flex items-center justify-center'>{getLength(List, heading)}</span>
                </div>
                <span
                    onClick={() => openAddComponent()}
                    className='cursor-pointer text-[16px] font-bold mr-2 bg-slate-200 rounded-full w-[25px] h-[px] flex items-center justify-center'>+</span>
            </div>
            {List.map((item, index) => (

                <div key={item._id}>
                    {item.type === heading &&
                        <div className='relative border p-2 bg-white rounded mb-5 min-h-[130px] flex flex-col justify-between'>
                            <div className='flex justify-between'>
                                <h2 className='font-bold text-[14px]'>{item.title}</h2>
                                <BsThreeDots
                                    onClick={() => { setTodoId(item._id); setShowActionList((prev) => !prev) }}
                                    className='rounded-full bg-slate-300 w-[25px] h-[25px] p-[5px] cursor-pointer' color='black' />
                                {showActionList && item._id === todoId &&
                                    <div className='z-10 absolute shadow bg-slate-200 text-slate-600 rounded text-[14px] mt-[30px]  ml-[195px]  w-[200px] mr-[10px]'>
                                        <p
                                            onClick={() => del(item._id)}
                                            className='p-2 z-30 cursor-pointer hover:font-bold'>Delete</p>
                                        <p
                                            onClick={() => changeStatus(item._id, "todo", index)}
                                            className='p-2 z-30 cursor-pointer hover:font-bold'>Changed to todo</p>
                                        <p
                                            onClick={() => changeStatus(item._id, "progress", index)}
                                            className='p-2 z-30 cursor-pointer hover:font-bold'>Changed to progress</p>
                                        <p
                                            onClick={() => changeStatus(item._id, "review", index)}
                                            className='p-2 z-30 cursor-pointer hover:font-bold'>Changed to Review</p>
                                        <p
                                            onClick={() => changeStatus(item._id, "done", index)}
                                            className='p-2 z-30 cursor-pointer hover:font-bold'>Chaged to Done</p>

                                    </div>
                                }
                            </div>
                            <p className='text-[14px] text-slate-600'>{item.Description}</p>
                            <RiFlag2Fill color={setColor(item.priority)} />

                        </div>
                    }
                </div>
            )
            )}
        </div>
    </>
    )
}

export default ToDoList
