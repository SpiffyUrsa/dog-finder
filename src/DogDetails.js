import React from "react";
import { useParams } from "react-router-dom";
import Dog from "./Dog";

/** DogDetails Component: DogDetails will display a single dog based on the name parameter 
 * and facts about the dog.
 * 
 * Params:
 *  name: The name of the dog whom to display details for. 
 * 
 * Props: 
 *  dogs: List of objects representing one dog each like [{name: "", age: 0, src: dog, facts:[]}]
 * 
 * App -> BrowserRouter -> Switch -> Route("/dogs/:name") -> DogDetails -> Dog
 */

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

  const { facts } = dog;

  const factsDisplay = facts.map((detail, idx) => <li key={idx}>{detail}</li>);


  return (
    <div className="DogDetails">
      <Dog dog={dog} />
      <ul>
        {factsDisplay}
      </ul>
    </div>
  )
}

export default DogDetails;

