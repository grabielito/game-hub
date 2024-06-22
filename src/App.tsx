import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";

function App() {
  const [genre, setGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(
    null
  );
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
              setGenre(genre);
            }}
            selectedGenre={genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          onSelectedPlatform={(platform) => {
            setselectedPlatform(platform);
          }}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid genre={genre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  );
}

export default App;
