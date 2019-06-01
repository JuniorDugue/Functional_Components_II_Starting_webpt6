import React from "react";

function Student(props) {
  // console.log(props);
  return (
    <div className="student-card">
      <img src={props.hogwartStudent.img} />
      <div className="student-info">
        <h3>{props.hogwartStudent.name}</h3>
        <p>
          <strong>Identity:{props.hogwartStudent.identity}</strong>
        </p>
        <p>
          <strong>Age:{props.hogwartStudent.age}</strong>
        </p>
        <p>
          <strong>Bestfriend:{props.hogwartStudent.bestFriend}</strong>
        </p>
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
        {/* 
        to access images instead of using
        strings, you'll access via {}, e.g.
        <img src={} />
        <img src={props.hogwartStudent.img} />
      */}
      </div>
    </div>
  );
}

export default Student;
