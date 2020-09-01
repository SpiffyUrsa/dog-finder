import React from "react"
import DogDetails from "./DogDetails";
import { useParams } from "react-router-dom";

/**Finds a Dog object matching url param. Renders respective Dog component
 * 
 * Props:
 * -dogs [{dogs},...]
 * 
 * Params: 
 * -name
 * 
 * State:
 * -None
 * 
 * App -> Route (/dogs/:name) -> DogDetails
 */

 function DogFinder({dogs}) {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

  return(
    <DogDetails dog={dog} />
  )
 }

 export default DogFinder;