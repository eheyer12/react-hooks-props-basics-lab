import React from "react";
import Links from "./Links"

function About({bio, links}) {
 
  return (
    <div id="about">
      <h2>About Me</h2>
      <div> 
        {bio ? <p>{bio}</p> : null}
      </div>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={links.linkedin} github={links.github} />
    </div>
  );
}

// function Bio({bio}){

//   if (bio) {
//     return <p>{bio}</p>
//   }
//   return <></>
// }

export default About;
