import axios from "axios";
import { useEffect, useState } from "react";
import { MdWork } from "react-icons/md";
import { useParams } from "react-router-dom";
import { RepositoriesCard } from "../components";
import FollowsCard from "../components/FollowsCard";

const UserDetail = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const HeadersOptions = {
        headers: {
            Authorization: "token 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",
        },
    };
    const fetchAllDetails = async () => {
        setLoading(true);
        setError(null);
        let timeoutId;
        try {
            const userRequest = axios.get(`https://api.github.com/users/${userId}`, HeadersOptions);
            const reposRequest = axios.get(`https://api.github.com/users/${userId}/repos`, HeadersOptions);
            const followersRequest = axios.get(`https://api.github.com/users/${userId}/followers`, HeadersOptions);
            Promise.all([userRequest, reposRequest, followersRequest])
                .then(([userResponse, reposResponse, followersResponse]) => {
                    if (userResponse?.status === 200 && reposResponse?.status === 200 && followersResponse?.status === 200) {
                        const data = {
                            user: {
                                login: userResponse?.data?.login,
                                id: userResponse?.data?.id,
                                avatar_url: userResponse?.data?.avatar_url,
                                html_url: userResponse?.data?.html_url,
                                name: userResponse?.data?.name,
                                company: userResponse?.data?.company,
                                blog: userResponse?.data?.blog,
                                bio: userResponse?.data?.bio,
                                public_repos: userResponse?.data?.public_repos,
                                followers: userResponse?.data?.followers,
                                following: userResponse?.data?.following,
                            },
                            repos: reposResponse?.data?.slice(0, 10).map((repo) => ({
                                id: repo?.id,
                                name: repo?.name,
                                html_url: repo?.html_url,
                                description: repo?.description,
                                language: repo?.language,
                                stargazers_count: repo?.stargazers_count,
                                forks_count: repo?.forks_count,
                            })),
                            followers: followersResponse?.data?.slice(0, 10).map((follow, index) => ({
                                login: follow?.login,
                                id: follow?.id,
                                avatar_url: follow?.avatar_url,
                                html_url: follow?.html_url,
                            })),
                        };
                        setUserData(data);
                    }
                })
                .catch((error) => {
                    setError(error);
                });
        } catch (error) {
            console.error(error);
        } finally {
            timeoutId = setTimeout(() => {
                setLoading(false);
            }, 1000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    };
    useEffect(() => {
        fetchAllDetails();
    }, []);

    if (loading) {
        return (
            <div className="flex w-full bg-gray-600 rounded border py-10 justify-center">
                <h1 className="text-4xl text-black font-bold underline select-none">Loading.....</h1>
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex w-full bg-gray-600 rounded border py-10 justify-center">
                <h1 className="text-4xl text-black font-bold underline select-none">{error?.message}</h1>
            </div>
        );
    }
    return (
        <>
            <section className="h-[90vh] w-full bg-black overflow-scroll text-white pt-8">
                <div className="container mx-auto">
                    <div className="border-2 border-blue-300 flex px-5 py-2 gap-4 rounded-xl items-center">
                        <img className="w-64 h-52 rounded-3xl object-cover" src={userData?.user?.avatar_url} alt="User Avatar" />
                        <div className="w-full">
                            <h1 className="text-2xl font-bold">
                                {userData?.user?.name}{" "}
                                <span className="text-base font-normal">
                                    <a
                                        className="text-blue-400 relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:content-[''] hover:after:w-full"
                                        href={userData?.user?.html_url}
                                        target="_blank"
                                    >
                                        @{userData?.user?.login}
                                    </a>
                                </span>
                            </h1>
                            <p className="my-2">Bio: {userData?.user?.bio}</p>
                            {userData?.user?.company && (
                                <p className="flex gap-1 items-center">
                                    <MdWork /> {userData?.user?.company}
                                </p>
                            )}
                            <div className="flex gap-2 mt-2 select-none">
                                <div className="text-center px-2 py-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <h3 className="text-2xl font-bold tracking-tight">{userData?.user?.followers}</h3>
                                    <h4 className="font-normal text-gray-700 dark:text-gray-400">Followers</h4>
                                </div>
                                <div className="text-center px-2 py-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <h3 className="text-2xl font-bold tracking-tight">{userData?.user?.following}</h3>
                                    <h4 className="font-normal text-gray-700 dark:text-gray-400">Following</h4>
                                </div>
                                <div className="text-center px-2 py-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <h3 className="text-2xl font-bold tracking-tight">{userData?.user?.public_repos}</h3>
                                    <h4 className="font-normal text-gray-700 dark:text-gray-400">Repos</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-orange-400 rounded-lg grid grid-cols-2 mt-5 p-5 gap-2">
                        <div className="border rounded-lg p-3">
                            <h1 className="text-2xl font-bold uppercase underline text-center mb-4">Repositories</h1>
                            <div className="flex flex-col gap-5">
                                {userData?.repos?.map((repo) => (
                                    <RepositoriesCard key={repo?.id} data={repo} />
                                ))}
                            </div>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h1 className="text-2xl font-bold uppercase underline text-center mb-4">Followers</h1>
                            <div className="grid grid-cols-2 gap-2">
                                {userData?.followers?.map((follower) => (
                                    <FollowsCard key={follower?.id} data={follower} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default UserDetail;
