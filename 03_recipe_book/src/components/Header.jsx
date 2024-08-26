const Header = ({ activeStatus, handleActiveStatus }) => {
    return (
        <>
            <header className="text-gray-400 body-font bg-gray-950 top-0 left-0 sticky right-0">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-bold items-center mb-4 md:mb-0">
                        <span className="ml-3 text-xl cursor-pointer">Recipe Book</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">
                        <a
                            onClick={() => handleActiveStatus("list")}
                            className={`mr-5 hover:text-white cursor-pointer
                            ${activeStatus == "list" ? "text-white" : ""}
                            `}
                        >
                            Recipe Book List
                        </a>
                        <a
                            onClick={() => handleActiveStatus("add")}
                            className={`mr-5 hover:text-white cursor-pointer
                            ${activeStatus == "add" ? "text-white" : ""}
                            `}
                        >
                            Recipe Book Add
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
