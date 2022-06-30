import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full h-fit p-4 bg-slate-900 flex justify-around items-center gap-2 text-center">
            <div className="sm:text-3xl text-2xl text-green-500 font-bold">
                <Link href="/">Next Events</Link>
            </div>
            <nav className="sm:text-2xl text-xl text-green-300">
                <ul>
                    <li>
                        <Link href="/events">Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
