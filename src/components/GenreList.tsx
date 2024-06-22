import React from "react";
import useData from "../hooks/useData";
import useGenre, { Genre } from "../hooks/useGenre";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
              <Button
                fontSize="large"
                variant="link"
                onClick={() => {
                  onSelectGenre(g);
                }}
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))
      )}
    </List>
  );
};

export default GenreList;
