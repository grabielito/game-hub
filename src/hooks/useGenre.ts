import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import genres from "../data/genres";
export interface Genre{
    id:number;
    name:string;
    image_background:string;
}

const useGenre = () =>({data:genres, isLoading:false, error:null});

export default useGenre;