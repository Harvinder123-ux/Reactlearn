import Note from "./Note";

import React from "react";

const NoteData = (props) => {
  const employee = {
    id: "Harleen",
    tech: "Mern",
    salary: 2000000,
    isMale: true,
  };
  return <Note.Provider value={employee}>{props.children}</Note.Provider>;
};

export default NoteData;
