import React, { useContext } from "react";
// import NoteData from "../Context/NoteData";
import Note from "../Context/Note";

const Card = () => {
    const emp = useContext(Note)
  return (
    <>
      <div className="CardCont">
        <h1>Employe Name: {emp.id}</h1>
        <h1>Technology:{emp.tech} </h1>
        <h1>Salary: {emp.salary}</h1>
        <h1>isMale: {emp.isMale}</h1>
      </div>
    </>
  );
};

export default Card;
