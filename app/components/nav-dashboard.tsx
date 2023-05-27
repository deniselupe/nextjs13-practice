import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/grail-logo-white.svg';

export default function DashboardNavigation() {
    return (
        <div className="bg-zinc-900 w-56 h-screen flex flex-col px-8">
            <Link href="/">
                <Image className="my-8" src={logo} alt="grail logo" width={200} height={49} />
            </Link>
            <ul className="my-8">
                <li>Dashboard</li>
                <li>My Tasks</li>
                <li>Statistics</li>
                <li>Profiles</li>
                <li>Settings</li>
            </ul>
            <div className="my-8">
                <h3>Teams</h3>
                <ul>
                    <li>Sales</li>
                    <li>Marketing</li>
                    <li>Add Project</li>
                </ul>
            </div>
        </div>
    );
}