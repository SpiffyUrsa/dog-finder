import React from "react";
import Dog from "./Dog";

/** DogList Component: Shows the list of dogs when clicked shows their details.
 * 
 * Props:
 *  dogs: An array of objects that represent dogs like {name: "", age: 0, src: "src", facts: []}
 * 
 * App -> BrowserRouter -> Switch -> Router("/dogs") -> DogList -> Dog
 */

function DogList({ dogs }) {

  const dogsDisplay = dogs.map(dog => <Dog dog={dog} key={dog.src} />);

  return (
    <div className="DogList">
      {dogsDisplay}
    </div>
  )
}



export default DogList;