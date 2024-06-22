import React from "react";
import useData from "../hooks/useData";
import useGenre, { Genre } from "../hooks/useGenre";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenre();

  // if (isLoading) {
  //   return <Spinner />;
  // }
  if (error) {
    return null;
  }
  return (
    <List>
      {isLoading ? (
        <Spinner />
      ) : (
        genres.map((g) => (
          <ListItem key={g.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(g.image_background)}
              />
              <Text fontSize="large">{g.name}</Text>
            </HStack>
          </ListItem>
        ))
      )}
    </List>
  );
};

export default GenreList;
