import React from "react";
import Student from "./Student";

const HarryProfile = {
  name: "Harry Potter",
  identity: "The Chosen One",
  img:
    "https://tk-assets.lambdaschool.com/534cbd01-46c2-4d0e-b617-c89127b736fc_ScreenShot2019-02-11at8.04.05PM.png",
  age: 11,
  bestFriend: "Ron Weasley and Hermione Granger"
};
const RonProfile = {
  name: "Ron Weasley",
  identity: "Youngest Weasley brother, Harry's best friend",
  img:
    "https://tk-assets.lambdaschool.com/e0a070cc-93e3-495b-959c-47dd54244456_ScreenShot2019-02-11at8.04.22PM.png",
  age: 11,
  bestFriend: "Harry Potter and Hermione Granger"
};
const HermioneProfile = {
  name: "Hermione Granger",
  identity: "Smart McSmart pants, Harry's best friend",
  img:
    "https://tk-assets.lambdaschool.com/0ccfd05b-dd91-4caa-b761-4c16452093c6_ScreenShot2019-02-11at8.04.29PM.png",
  age: 11,
  bestFriend: "Harry Potter and Ron Weasley"
};
const DracoProfile = {
  name: "Draco Malfoy",
  identity: "Jerk face",
  img:
    "https://tk-assets.lambdaschool.com/b331b729-6858-4519-94a1-33056d17a270_ScreenShot2019-02-11at8.04.38PM.png",
  age: 11,
  bestFriend: "Crabbe and Goyle"
};
const Draco = {
  name: "Draco Malfoy",
  identity: "Jerk face",
  img:
    "https://tk-assets.lambdaschool.com/b331b729-6858-4519-94a1-33056d17a270_ScreenShot2019-02-11at8.04.38PM.png",
  age: 11,
  bestFriend: "Crabbe and Goyle"
};

// const newStudentsArray = students.map( (studentProfile, index)=> {
//   return
// })

function HogwartsStudents() {
  return (
    <div>
      <h1>Hogwarts Students:</h1>
      <div className="class-list">
        <Student hogwartStudent={HarryProfile} />
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
