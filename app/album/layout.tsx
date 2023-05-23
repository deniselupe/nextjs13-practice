interface AlbumLayoutProps {
    children: React.ReactNode;
}

export default function AlbumLayout({ children }: AlbumLayoutProps) {
    return (
        <div>
            <h2>Artist Data</h2>
            {children}
        </div>
    );
}