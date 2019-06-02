import React from "react";
import Student from "./Student";

const students = [
  {
    name: "Harry Potter",
    identity: "The Chosen One",
    img:
      "https://tk-assets.lambdaschool.com/534cbd01-46c2-4d0e-b617-c89127b736fc_ScreenShot2019-02-11at8.04.05PM.png",
    age: 11,
    bestFriend: "Ron Weasley and Hermione Granger"
  },
  {
    name: "Ron Weasley",
    identity: "Youngest Weasley brother, Harry's best friend",
    img:
      "https://tk-assets.lambdaschool.com/e0a070cc-93e3-495b-959c-47dd54244456_ScreenShot2019-02-11at8.04.22PM.png",
    age: 11,
    bestFriend: "Harry Potter and Hermione Granger"
  },
  {
    name: "Hermione Granger",
    identity: "Smart McSmart pants, Harry's best friend",
    img:
      "https://tk-assets.lambdaschool.com/0ccfd05b-dd91-4caa-b761-4c16452093c6_ScreenShot2019-02-11at8.04.29PM.png",
    age: 11,
    bestFriend: "Harry Potter and Ron Weasley"
  },
  {
    name: "Draco Malfoy",
    identity: "Jerk face",
    img:
      "https://tk-assets.lambdaschool.com/b331b729-6858-4519-94a1-33056d17a270_ScreenShot2019-02-11at8.04.38PM.png",
    age: 11,
    bestFriend: "Crabbe and Goyle"
  },
  {
    name: "Draco Malfoy",
    identity: "Jerk face",
    img:
      "https://tk-assets.lambdaschool.com/b331b729-6858-4519-94a1-33056d17a270_ScreenShot2019-02-11at8.04.38PM.png",
    age: 11,
    bestFriend: "Crabbe and Goyle"
  }
];

{
  /*old format before it was refactored
const HarryProfile = {
  name: 'Harry Potter',
  identity: 'The Chosen One',
  img:
    'https://tk-assets.lambdaschool.com/534cbd01-46c2-4d0e-b617-c89127b736fc_ScreenShot2019-02-11at8.04.05PM.png',
  age: 11,
  bestFriend: 'Ron Weasley and Hermione Granger'
};
const RonProfile = {
  name: 'Ron Weasley',
  identity: "Youngest Weasley brother, Harry's best friend",
  img:
    'https://tk-assets.lambdaschool.com/e0a070cc-93e3-495b-959c-47dd54244456_ScreenShot2019-02-11at8.04.22PM.png',
  age: 11,
  bestFriend: 'Harry Potter and Hermione Granger'
};
const HermioneProfile = {
  name: 'Hermione Granger',
  identity: "Smart McSmart pants, Harry's best friend",
  img:
    'https://tk-assets.lambdaschool.com/0ccfd05b-dd91-4caa-b761-4c16452093c6_ScreenShot2019-02-11at8.04.29PM.png',
  age: 11,
  bestFriend: 'Harry Potter and Ron Weasley'
};
const DracoProfile = {
  name: 'Draco Malfoy',
  identity: 'Jerk face',
  img:
    'https://tk-assets.lambdaschool.com/b331b729-6858-4519-94a1-33056d17a270_ScreenShot2019-02-11at8.04.38PM.png',
  age: 11,
  bestFriend: 'Crabbe and Goyle'
};
*/
}

const newStudentsArray = students.map((studentProfile, index) => {
  return <Student hogwartsStudent={studentProfile} />;
});
console.log(newStudentsArray);
// you'll see 4 components in the console

{
  /* 1st step
  const newStudentsArray = students.map( () => {

  });
*/
}

{
  /*2nd step 
  const newStudentsArray = students.map( (studentProfile, index) => {
  return <Student hogwartsStudent={studentProfile}/>
});  
*/
}

{
  /*3rd step
  const newStudentsArray = students.map((studentProfile, index) => {
  return <Student hogwartsStudent={studentProfile} />;
});

then using that hogwartsStudent to pass the data in the child component e.g. 
    <img src={props.hogwartsStudent.img} alt={props.hogwartsStudent.name} />
      <div className="student-info">
        <h3>{props.hogwartsStudent.name}</h3>
        <p>
          <strong>Identity:{props.hogwartsStudent.identity}</strong>
        </p>
        <p>
          <strong>Age:{props.hogwartsStudent.age}</strong>
        </p>
        <p>
          <strong>Bestfriend:{props.hogwartsStudent.bestFriend}</strong>
        </p>

        into the parent container e.g.
      <div>
        <h1>Hogwarts Students:</h1>
        <div className="class-list">
          {newStudentsArray}
        </div>
      </div>
*/
}

{
  /* example of how map function works
  
let nums = [1,2,3];

let newArraysofNums = nums.map( (num)=>{
  return num + 1;
});

console.log(newArraysofNums);
*/
}

function HogwartsStudents() {
  return (
    <div>
      <h1>Hogwarts Students:</h1>
      <div className="class-list">
        {newStudentsArray}
        {/* <Student hogwartStudent={HarryProfile} />
        <Student hogwartStudent={RonProfile} />
        <Student hogwartStudent={HermioneProfile} />
        <Student hogwartStudent={DracoProfile} /> */}

        {/* 
        <Student hogwartStudent=""/>  
        ***if you're passing a string, use quotes, if not use curly braces which is 
        used for raw javascript***
      */}
        {/* 
        <Student hogwartStudent={ {key: "value"} }/> 
        ***you couldn't just copy and paste an entire object into the curly
        braces, so if you want to include an object, it'll be {} within {}
        like the example above, the outer curly braces represent the fact
        that we're writing javascript, the inner curly braces represent the
        actual object 
      */}
        {/* 
        <Student hogwartStudent={HarryProfile} />
        ***to access the object data above, just use the variable names used e.g.  
        HarryProfile, RonProfile, HermioneProfile, DracoProfile, and Draco
        ***so first we name the prop e.g. hogwartStudent, then we assign the prop
        to something, then we pass in whatever we want including js e.g. 
        <Student hogwartsStudent={HarryProfile} isKind={[jsArray]}/> or
        <Student hogwartsStudent={HarryProfile} isNice={true}/>
        <Student hogwartsStudent={HarryProfile} isBad="yes"/>
        key value pairs basically
      */}
      </div>
    </div>
  );
}

export default HogwartsStudents;
