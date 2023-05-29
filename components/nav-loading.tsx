import Link from "next/link";

export default function NavLink() {
    return (
        <div>
            <Link href="/">Home</Link>{' '}
            <Link href="/album">Album</Link>
        </div>
    );
}