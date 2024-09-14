import { Link } from "react-router-dom";

const GithubUserCard = ({ data }) => {
    return (
        <>
            <div className="border w-4/5 md:w-full lg:w-full xl:w-full 2xl:w-full mx-auto shadow-md border-blue-900 flex gap-2 p-1 bg-gray-700 rounded-lg items-center">
                <div className="h-24 w-24 rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <img className="w-full h-full rounded-full" src={data?.avatar_url} loading="lazy" alt={data?.login} />
                </div>
                <div className="flex-grow">
                    <h2 className="text-white text-lg title-font font-bold">{data?.login}</h2>
                    <Link to={`/user-detail/${data?.login}`} className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer font-bold">
                        View More
                    </Link>
                </div>
            </div>
        </>
    );
};
export default GithubUserCard;
