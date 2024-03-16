import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../Config"
import { ChangeEvent,  useState } from "react"
import { useNavigate } from "react-router-dom";

export function Publish() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    return <div>
        <Appbar />
        <div className="flex justify-center pt-8">
            <div className="w-1/2">
                <input onChange={(e)=>{setTitle(()=>e.target.value)}} type="text"  className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" />
                <TextEditor onChange={(e)=>setDescription(()=>e.target.value)} />
                <button onClick={async ()=>{
                    const resp =  await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content: description
                    }, {
                        headers: {
                            Authorization: localStorage.getItem('token')
                        }
                    });
                    navigate(`/blog/${resp.data.id}`);
                }} type="submit" className=" mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800 ">
                    Publish post
                </button>

            </div>
        </div> 
    </div> 
}

function TextEditor({onChange} : {onChange: (e: ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return <div>
            <div className="w-full mt-4 mb-4 h-[50vh]">
                <textarea id="editor" onChange={onChange} className="bg-gray-50 rounded-lg h-full outline-none p-4 block w-full text-sm text-gray-800 focus:ring-blue-500 focus:border-blue-500  border" placeholder="Write an article..." required />

            </div>
    </div>
 
}