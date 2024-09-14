import axios from "axios";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setPage, updateTotalCount, updateUserName } from "../reduxStore/GithubSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const { page, userName, usersPerPage } = useSelector((state) => state.github);
    const inputRef = useRef(null);
    const timeoutRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Memoized function for fetching GitHub users
    const fetchUsers = useCallback(
        async (username, page) => {
            if (!username.trim()) return;
            try {
                const response = await axios.get(`https://api.github.com/search/users?q=${username}&per_page=${usersPerPage}&page=${page}`, {
                    headers: {
                        Authorization: "token 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",
                    },
                });
                if (response.status === 200) {
                    dispatch(addUser(response?.data));
                    dispatch(updateTotalCount(response?.data?.total_count));
                    dispatch(updateUserName(username));
                }
            } catch (error) {
                console.error(error);
            }
        },
        [dispatch, usersPerPage]
    );

    // Debounced input change handler
    const handleSearchChange = useCallback(() => {
        const username = inputRef.current.value;
        if (username.trim()) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                dispatch(setPage(1));
                fetchUsers(username, 1);
                inputRef.current.value = "";
            }, 500);

            return () => clearTimeout(timeoutRef.current);
        }
    }, [fetchUsers, dispatch, navigate]);

    // Update User On Pagination
    useEffect(() => {
        if (userName?.trim()) {
            fetchUsers(userName, page);
        }
    }, [page, fetchUsers]);

    return (
        <>
            <header className="text-white bg-gray-900 top-0 left-0 sticky right-0 h-[15vh] border-b border-white">
                <div className="flex flex-col justify-around items-center h-full lg:flex-row">
                    <Link>
                        <h3 className="text-base xl:text-2xl 2xl:text-2xl font-bold cursor-pointer uppercase underline select-none">Github User Search</h3>
                    </Link>
                    <div className="flex justify-between gap-5 items-center">
                        <div className="flex items-center mx-auto w-96">
                            <label htmlFor="search" className="sr-only">
                                Search
                            </label>
                            <div className="w-full flex gap-4 items-center justify-center">
                                <input
                                    type="text"
                                    id="search"
                                    ref={inputRef}
                                    className="bg-gray-50 border border-gray-300 p-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search For a User. e.g ma3llim007"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={handleSearchChange}
                                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm me-2 p-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
