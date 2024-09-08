import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import { Container } from "@chakra-ui/react";

const fetchMovies = async (searchTerm) => {
    if (!searchTerm) return [];
    try {
        const response = await fetch(` http://www.omdbapi.com/?s=${searchTerm}&apikey=42c0d585`);
        const data = await response.json();
        return data.Search || [];
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
};

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const movies = await fetchMovies(searchTerm);
            setMovies(movies);
        };

        const timeOut = setTimeout(() => {
            getMovies();
        }, 1000);

        return () => clearTimeout(timeOut);
    }, [searchTerm]);
    return (
        <>
            <Header />
            <Container maxW="container.sm" marginTop={10}>
                <SearchBar setSearchTerm={setSearchTerm} />
                <MovieList movies={movies} />
            </Container>
        </>
    );
};
export default App;
