// Import the Client Component into a parent Layout (Server Component)
import PostNavLink from './post-nav-link';

interface PostLayoutProps {
    children: React.ReactNode;
}

export default async function PostLayout({ children }: PostLayoutProps) {
    return (
        <div>
            <PostNavLink slug="first">First</PostNavLink>
            <PostNavLink slug="second">Second</PostNavLink>
            {children}
        </div>
    );
}