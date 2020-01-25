import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard.js";


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState();
  const [searchArg, setSearchArg] = useState();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results);
        if (!props.searchArg.values || props.searchArg.values.search === "") {
          setCharacters(res.data.results);
          console.log("No search");
        } else {
          setCharacters(res.data.results.filter((item) => {
            console.log("filtering", item.name + " === " + props.searchArg.values.search);
            return item.name.includes(props.searchArg.values.search);
          }))
        }
      })
      