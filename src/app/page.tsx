import Link from "next/link"
import {Header} from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import html from "../app/images/html.jpg"
import next from "../app/images/next.jpg"
import tail from "../app/images/tail.jpg"
import type from "../app/images/ts.jpg"
import css from "../app/images/css.jpg"


export default function Home(){
  return (
    <div>
  <Header/>
  <div className="my-container">

    <div className="first">
      <div className="first-left">
        <h1 className="name">Farrukh Salim</h1>
        <h3 className="other-particulars">Front End Developer</h3>
        
        
      </div>
      <div className="first-right">
      
      </div>
    </div>

    <div className="about-me">
      <div className="about-me-top">
        <h1 className="abt-me">About Me</h1>
      </div>
      <div className="about-me-bottom">
      <p className="abt-text">I am a Front End Developer. I can develop the website based on your needs and suggstions. I can also develop responsive website from scratch and consult you during the job.</p>
      <div className="btn">
      <button className="btn-view"><Link href={"/about-me"}>View More</Link></button>
      </div>
      </div>

    </div>

    <div className="skills">
      <div className="skills-top">
        <h1 className="abt-me">Skills</h1>
      </div>
      <div className="skills-bottom">
      <div className="skills-bottom-top">
         <div className="skill1">
          
         <Image className="html" src={html} alt="/" />
         <p className="color-white">Html 5</p>
         </div>
         <div className="skill2">
          <Image className="css" src={css} alt="/" />
          <p className="color-white">CSS 3</p>
         </div>
         <div className="skill3">
          <Image className="next" src={next} alt="/" />
          <p className="color-white">Next JS</p>
         </div>
         <div className="skill4">
         <Image className="type" src={type} alt="/" />
         <p className="color-white">Type Script</p>
         </div>
         <div className="skill5">
         <Image className="tail" src={tail} alt="/" />
         <p className="color-white">Tailwind CSS</p>
         </div>         
      </div>
      <div className="btn">
      <button className="btn-view2"><Link href={"/skills"}>View More</Link></button>
      </div>
      </div>

    </div>

  </div>

  <Footer/>

  </div>
  );
}