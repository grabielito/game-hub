import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="200px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
