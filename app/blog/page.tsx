import axios from 'axios';
import { BlogsType } from './types/blog';

export default async function BlogHome() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const data: BlogsType = response.data;

    return (
        <div>
            <h2>All Blogs</h2>
            <hr />
            {
                data.map((blog) => {
                    return <p key={blog.id}>{blog.id}.  {blog.title}</p>
                })
            }
        </div>
    );
}