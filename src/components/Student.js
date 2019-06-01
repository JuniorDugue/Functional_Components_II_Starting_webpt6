import React from "react";

function Student(props) {
  // console.log(props);
  return (
    <div className="student-card">
      <h3>{props.hogwartStudent.name}</h3>
      {/* 
        <h3>{}</h3>
        ***to access props data,
        include props inside of
        the Student() e.g.
        Student(props);
        then you can use the data
        anywhere using curly braces
        {} e.g. 
        {props.hogwartStudents.name}
      */}
      {/* 
        javascript will do an array
        forus but not an entire object,
        so we have to pick apart the
        object
      */}
    </div>
  );
}

export default Student;
