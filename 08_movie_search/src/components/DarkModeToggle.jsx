import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

const DarkModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return <Button onClick={toggleColorMode}>Switch to {colorMode === "light" ? "dark" : "light"} mode</Button>;
};

export default DarkModeToggle;
