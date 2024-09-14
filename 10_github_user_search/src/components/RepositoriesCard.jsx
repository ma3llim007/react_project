import { FaCodeBranch, FaStar } from "react-icons/fa";

const RepositoriesCard = ({ data }) => {
    console.log(data);

    return (
        <div className="w-full border border-white rounded-md px-4 py-2 bg-slate-900 hover:bg-slate-600 cursor-pointer hover:transition-all duration-150">
            <h4 className="text-xl text-wrap mb-2 font-bold">{data?.name}</h4>
            <p className="text-base">
                <strong>Desc: </strong> {data?.description}
            </p>
            <div className="flex gap-3">
                <p className="flex justify-center items-center gap-1">
                    <FaStar />
                    {data?.stargazers_count}
                </p>
                <p className="flex justify-center items-center gap-1">
                    <FaCodeBranch /> {data?.forks_count}
                </p>
            </div>
        </div>
    );
};
export default RepositoriesCard;
