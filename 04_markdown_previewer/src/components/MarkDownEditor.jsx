const MarkDownEditor = ({ markDown, setMarkDown }) => {
    return <textarea className="w-full min-h-[700px] p-5 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={markDown} onChange={(e) => setMarkDown(e.target.value)}  aria-label="Markdown Editor"/>;
};

export default MarkDownEditor;
