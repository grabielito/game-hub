import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from './useGenre';

export interface Platform{
  id:number;
  name:string;
  slug:string
}
export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
    rating_top:number;
    rating:number;
  }
  
  

const useGame = (genre:Genre|null,selectedPlatform:Platform|null,sortOption:string,searchParam:string) => useData<Game>('/games',{params:{genres:genre?.id, platforms:selectedPlatform?.id,ordering:sortOption, search:searchParam }},[genre?.id, selectedPlatform?.id,sortOption,searchParam])


export default useGame;