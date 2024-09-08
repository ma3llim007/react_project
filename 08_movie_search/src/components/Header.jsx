import { Box, Flex, Heading } from "@chakra-ui/react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
    return (
        <Box as="header" p={4}>
            <Flex align="center" justify="space-between" maxW="1200px" mx="auto" wrap="wrap">
                <Heading size="lg">Movie Search</Heading>
                <DarkModeToggle />
            </Flex>
        </Box>
    );
};

export default Header;
