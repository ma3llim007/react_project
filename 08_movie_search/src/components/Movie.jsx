import { Box, Image, Text } from "@chakra-ui/react";

const Movie = ({ movie }) => {
    return (
        <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} boxShadow="md">
            <Image src={movie.Poster} alt={`Poster of the movie ${movie.Title}`} boxSize="200px" objectFit="cover" mb={4} />
            <Text fontWeight="bold" fontSize="xl" mb={2}>
                {movie.Title}
            </Text>
            <Text>{movie.Year}</Text>
        </Box>
    );
};

export default Movie;
