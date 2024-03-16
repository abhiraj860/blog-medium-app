import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/Blogcard";
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const {loading, blogs} = useBlogs();
    
    // if(loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center">
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            </div>
        </div>
    // }

	return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="w-5/6 lg:w-3/5"> 
                    {blogs.map(blog=>
                        (<BlogCard
                            authorName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"dfsdf"} 
                            id = {blog.id}
                        />)
                    )}
                </div>
            </div>
        </div>

	);
};
