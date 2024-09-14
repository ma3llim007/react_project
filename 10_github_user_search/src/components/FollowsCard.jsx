const FollowsCard = ({ data }) => {
    console.log(data);

    return (
        <a href={data?.html_url} target="_blank">
            <div className="w-full flex items-center flex-wrap gap-3 border border-white rounded-md px-4 py-2 bg-slate-900 hover:bg-slate-600 cursor-pointer hover:transition-all duration-150">
                <img className="w-16 h-16 object-cover rounded-3xl" src={data?.avatar_url} alt="User Avatar" />
                <h4 className="text-xl text-wrap mb-2 font-bold">{data?.login}</h4>
            </div>
        </a>
    );
};
export default FollowsCard;
