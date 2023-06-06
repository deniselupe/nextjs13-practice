import axios from 'axios';
import { BlogType, BlogsType } from '../types/blog';

interface StaticParams {
    params: {
        blogId: number;
    }
}

export async function generateStaticParams() {
    const response = await axios("https://jsonplaceholder.typicode.com/posts");
    const blogs: BlogsType = response.data;

    return blogs.map((blog) => ({ blogId: blog.id.toString() }));
}

export default async function BlogDetailsPage({ params }: StaticParams) {
    const { blogId } = params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`);
    const blogData: BlogType = response.data;

    return (
        <div>
            <h2>{blogData.title}</h2>
            <p>{blogData.body}</p>
        </div>
    );
}