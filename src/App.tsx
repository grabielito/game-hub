import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector, { SortOptions } from "./components/SortSelector";

interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOption: SortOptions;
}

function App() {
  const [gamequery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => {
              setGameQuery({ ...gamequery, genre });
            }}
            selectedGenre={gamequery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack marginBottom={5}>
          <PlatformSelector
            onSelectedPlatform={(platform) => {
              setGameQuery({ ...gamequery, platform });
            }}
            selectedPlatform={gamequery.platform}
          />
          <SortSelector
            onSelectSortOption={(option) => {
              setGameQuery({ ...gamequery, sortOption: option });
            }}
            sortOption={gamequery.sortOption?.label || "Relevance"}
          />
        </HStack>
        <GameGrid
          genre={gamequery.genre}
          selectedPlatform={gamequery.platform}
          sortOption={gamequery.sortOption?.value}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
