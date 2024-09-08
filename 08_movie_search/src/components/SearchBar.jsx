import { Input } from "@chakra-ui/react";

const SearchBar = ({setSearchTerm}) => {
    return (
        <Input
            placeholder="Search For Movies..."
            onChange={(e) => setSearchTerm(e.target.value)}
            mb={4}
        />
    )
}
export default SearchBar;