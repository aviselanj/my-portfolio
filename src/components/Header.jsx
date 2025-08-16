export default function Header() {
    return (
        <header className="bg-white shadow fixed w-full top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <ul className="flex space-x-6">
                    <li><a href="#about" className="hover:text-blue-500">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
