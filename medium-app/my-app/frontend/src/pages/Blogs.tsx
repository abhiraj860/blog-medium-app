import { BlogCard } from "../components/Blogcard";

export const Blogs = () => {
	return (
        <div className="flex justify-center">
            <div className="max-w-xl"> 
                <BlogCard
                    authorName="Abhiraj"
                    title="how an ugly single page website make 500$ a monthe alway."
                    content="how an ugly single page website make 500$ a monthe alwayhow an ugly single page website make 500$ a monthe alway..first content"
                    publishedDate="23/34/2023"
                />
                <BlogCard
                    authorName="Abhiraj"
                    title="how an ugly single page website make 500$ a monthe alway."
                    content="how an ugly single page website make 500$ a monthe alwayhow an ugly single page website make 500$ a monthe alway..first content"
                    publishedDate="23/34/2023"
                />
                <BlogCard
                    authorName="Abhiraj"
                    title="how an ugly single page website make 500$ a monthe alway."
                    content="how an ugly single page website make 500$ a monthe alwayhow an ugly single page website make 500$ a monthe alway..first content"
                    publishedDate="23/34/2023"
                />
            </div>
        </div>
	);
};
