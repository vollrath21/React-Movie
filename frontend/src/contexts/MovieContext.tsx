import {createContext, useState, useContext, useEffect} from "react"

const movieContext = createContext()

export const useMovieContext = () => useContext(movieContext)

export const movieProvider = () => {}