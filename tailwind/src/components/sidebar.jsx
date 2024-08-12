export const SideBar = () => {
    return (
        <div>
            <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-800  flex-col md:flex hidden">
                <div className="flex-shrink-0 p-3 overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <img src="/mnt/data/image.png" className="rounded-md" alt="Profile" />
                        </div>
                        <div>
                            <div className="text-sm text-white font-semibold">Sanchit</div>
                            <div className="underline text-sm text-white">Visit store</div>
                        </div>
                        <div className="underline text-sm text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.0"
                                stroke="white"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>

                    <ul className="space-y-2 font-medium">
                        <li>
                            <div className="flex items-center text-white p-2 rounded-lg hover:bg-gray-100 hover:text-gray-500 group">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                                <div className="ml-2">Home</div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center text-white p-2 rounded-lg hover:bg-gray-100 hover:text-gray-500 group">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m6 18v-6h12v6M6 12V6h12v6M6 6l6-6 6 6"
                                    />
                                </svg>
                                <div className="ml-2">Orders</div>
                            </div>
                        </li>
                        {/* Add more items here */}
                    </ul>
                </div>
                <div className="mt-auto p-3">
                    <div className="bg-gray-700 text-white p-3 rounded-lg flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3zM19 20h-14c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h2V4c0-1.656 1.344-3 3-3h4c1.656 0 3 1.344 3 3v1h2c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2z"
                            />
                        </svg>
                        <div>Available Credits</div>
                        <div className="ml-auto">222.10</div>
                    </div>
                </div>
            </aside>
        </div>
    );
};
