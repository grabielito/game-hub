import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image:string;
  }
  
  interface FetchGames {
    count: number;
    results: Game[];
  }

const useGame = () => {
    const [games, setgames] = useState<Game[]>([]);
    const [error, seterror] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const controller= new AbortController();
        setIsLoading(true);
        apiClient
          .get<FetchGames>("/games",{signal:controller.signal})
          .then((res) => {setgames([...res.data.results]);
            setIsLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;

            seterror(err.message);
            setIsLoading(false);
          });

          return ()=>{controller.abort()}
      }, []);
  return {games,error,isLoading};
}

export default useGame;