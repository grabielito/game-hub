import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { Game, Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenre";

interface Props {
  genre: Genre | null;
  selectedPlatform: Platform | null;
  sortOption: string;
}

const GameGrid = ({ genre, selectedPlatform, sortOption }: Props) => {
  const {
    error,
    data: games,
    isLoading,
  } = useGame(genre, selectedPlatform, sortOption);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
