import { Avatar } from "./Blogcard"

export const Appbar = ()=>{
    return <div className="border-b flex justify-between px-10 py-4">
        <div className="flex  justify-center flex-col">
            <div>
                Medium
            </div>
        </div>
        <div>
            <Avatar size={"big"} name="Abhiraj"/>
        </div>
    </div>
}