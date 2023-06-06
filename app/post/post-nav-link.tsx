'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

interface PostNavLinkProps {
    slug: string;
    children: React.ReactNode;
}

// This *client* component will be imported into a blog layout
export default function PostNavLink({ slug, children }: PostNavLinkProps) {
    // Navigating to `/post/first` will return `first` for the selected layout segment
    const segment = useSelectedLayoutSegment();
    const isActive = slug === segment;

    return (
        <Link
          href={`/post/${slug}`}
          // Change style depending on whether the link is active
          style={{ color: isActive ? 'red' : 'white' }}
          className="mr-2"
        >
            {children}
        </Link>
    );
}