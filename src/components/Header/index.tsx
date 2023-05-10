
export function Header(){
    return(
        <>
            <header className="flex flex-1 justify-between py-7 px-16 items-center bg-slate-700">
                <div className="text-white text-3xl">Logo</div>
                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <a href="/" className="text-yellow-300 hover:text-gray-300">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="text-white hover:text-gray-300">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}