import React from "react"
import { Link } from "react-router-dom";


/** Dog Component. Renders a single Dog's name, age, and photo.
 * 
 * Props:
 *  name: A string with the name of the dog. 
 *  age: A number with the age of the dog.
 *  src: A string with the image file name of the dog.
 * 
 * App -> BrowserRouter("/dogs") -> Switch -> DogList -> Dog
 */

function Dog(props) {

  const { name, age, src } = props.dog;

  return (
    <div className="Dog">

      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>

      <Link to={`/dogs/${name}`}><img src={src} alt={name} /></Link>
    </div>
  )
};

export default Dog;