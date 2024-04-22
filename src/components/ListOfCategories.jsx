import { useState } from "react";

let categories = ["Frontend", "React", "Backend"];

export default function ListOfCategories() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="bg-white p-2 rounded-xl font-bold text-text-secondary relative">
      <button onClick={handleClick}>Categorias</button>
      <div
        className={`${
          show && "hidden"
        } absolute top-11 bg-white bg-secondary p-3 rounded-xl w-40 transition-all ease-in-out duration-700 border border-text shadow-md`}
      >
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <label htmlFor={category} className="flex items-center">
                <input
                  type="checkbox"
                  id={category}
                  className="mr-2 text-primary form-checkbox h-5 w-5"
                />
                <span>{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
