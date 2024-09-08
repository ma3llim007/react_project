import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
            {movies.length > 0 ? (
                movies.map((movie) => <Movie key={movie?.imdbID} movie={movie} />)
            ) : (
                <Box p={4} textAlign="center">
                    <Text fontSize="xl">No Movies Found</Text>
                </Box>
            )}
        </SimpleGrid>
    );
};

export default MovieList;
