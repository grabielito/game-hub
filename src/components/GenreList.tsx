import useGenre, { Genre } from "../hooks/useGenre";
import {
  Button,
  HStack,
  Heading,
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
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
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
                  objectFit={"cover"}
                  src={getCroppedImageUrl(g.image_background)}
                />
                <Button
                  whiteSpace={"normal"}
                  textAlign={"left"}
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
    </>
  );
};

export default GenreList;
