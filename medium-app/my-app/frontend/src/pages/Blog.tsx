import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { getBlog } from "../hooks"

export function Blog() {
    const {id} = useParams();
    const {loading, blog} = getBlog({
        id: id || ""   
    });
    if(loading) {
        return <div>
            loading...
        </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
}