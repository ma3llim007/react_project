const Header = ({activeState,SectionSwitch}) => {
  return (
    <>
      <header className="text-white body-font bg-gray-950 top-0 left-0 sticky right-0">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-bold items-center mb-4 md:mb-0">
            <span onClick={()=>SectionSwitch('add')} className="ml-3 text-xl cursor-pointer">To-Do</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">
            <a onClick={()=>SectionSwitch('add')} className={`mr-5 hover:text-white cursor-pointer ${activeState=='add' ? 'text-white' :'text-gray-500'}`}>To-Do Add</a>
            <a onClick={()=>SectionSwitch('list')} className={`mr-5 hover:text-white cursor-pointer ${activeState=='list' ? 'text-white' :'text-gray-500'}`}>To-Do List</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
