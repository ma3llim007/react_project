import { useDispatch, useSelector } from "react-redux";
import { GithubUserCard } from "../components/";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { setPage } from "../reduxStore/GithubSlice";
import { useMemo } from "react";

const Home = () => {
    const { userList, page, totalCount, usersPerPage } = useSelector((state) => state.github);
    const dispatch = useDispatch();

    const handlePreviousPage = () => {
        if (page > 1) {
            dispatch(setPage(page - 1));
        }
    };

    const handleNextPage = () => {
        if (page < Math.ceil(totalCount / usersPerPage)) {
            dispatch(setPage(page + 1));
        }
    };

    const totalPages = useMemo(() => Math.ceil(totalCount / usersPerPage), [totalCount, usersPerPage]);

    return (
        <>
            <section className="h-[85vh] w-full bg-black overflow-scroll text-white pt-8">
                <div className="container mx-auto">
                    {userList?.items?.length > 0 && (
                        <>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                                {userList?.items.map((item) => (
                                    <GithubUserCard data={item} key={item?.id} />
                                ))}
                            </div>
                            <div className="border-2 w-full flex bg-gray-900 rounded-lg items-center justify-between px-5 py-5 mt-5 h-15">
                                <button
                                    aria-label="Go to previous page"
                                    disabled={page === 1}
                                    onClick={handlePreviousPage}
                                    type="button"
                                    className="py-2.5 disabled:cursor-not-allowed px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    <FaArrowLeft />
                                </button>
                                <h4 className="text-2xl font-bold">
                                    Page {page} Of {totalPages}
                                </h4>
                                <button
                                    aria-label="Go to next page"
                                    disabled={page === totalCount}
                                    onClick={handleNextPage}
                                    type="button"
                                    className="py-2.5 px-5 disabled:cursor-not-allowed me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </>
                    )}

                    {userList.length === 0 && (
                        <div className="flex w-full bg-gray-600 rounded border py-10 justify-center">
                            <h1 className="text-4xl text-black font-bold underline select-none">You haven't searched for a user yet.</h1>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};
export default Home;
