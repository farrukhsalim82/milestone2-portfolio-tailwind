import {Header} from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import html from "../images/html.jpg"
import next from "../images/next.jpg"
import tail from "../images/tail.jpg"
import type from "../images/ts.jpg"
import css from "../images/css.jpg"

export default function Skills(){
  return (
    <div>
  <Header/>
  <div className="skills2">
      <div className="skills-top">
        <h1 className="abt-me">Skills</h1>
      </div>
      <div className="skills-bottom">
      <div className="skills-bottom-top">
         <div className="skill1">
          
         <Image className="html" src={html} alt="/" />
         <p>Html 5</p>
         </div>
         <div className="skill2">
          <Image className="css" src={css} alt="/" />
          <p>CSS 3</p>
         </div>
         <div className="skill3">
          <Image className="next" src={next} alt="/" />
          <p>Next JS</p>
         </div>
         <div className="skill4">
         <Image className="type" src={type} alt="/" />
         <p>Type Script</p>
         </div>
         <div className="skill5">
         <Image className="tail" src={tail} alt="/" />
         <p>Tailwind CSS</p>
         </div>         
      </div>
      
      </div>

    </div>
   <Footer/>

  </div>
  );
}