import { useState } from "react";
import Input from "./Input";
import ListOfCategories from "./ListOfCategories";
import useFilterStore from "../store/useFilterStore";

export default function Panel() {
  const [show, setShow] = useState(false);
  const { setDateFrom, setDateTo, addCategory, removeCategory } =
    useFilterStore();

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div
      className={`px-5 absolute flex flex-row top-24 items-center justify-between w-full transition-all ease-in-out duration-700 ${
        show ? "show" : "hide"
      }`}
    >
      <Input label="Desde" type="date" name="from" />
      <Input label="Hasta" type="date" name="to" />
      <ListOfCategories />
      <button
        onClick={handleShow}
        className="bg-white rounded-full p-2 font-bold text-text-secondary border border-primary "
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
