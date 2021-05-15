import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Footer from "./Footer"
import Navbar from "./Navbar"
import { useRef, useEffect } from "react";

const name = 'Your Name'
var myX, myY, xyOn, myMouseX, myMouseY, xy;
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
    <Navbar />
    <div className="glow" id="my_div"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  )
}

function bigImg(z) {
  //z.style.height = "64px";
  //z.style.width = "64px";
  //document.onmousemove = getXYPosition;
  console.log("hai");
/*   const divEl = document.querySelector('#my_div');
  divEl.style.position = "absolute";
  divEl.style.top = myMouseY; */
  //divEl.style.backgroundposition = xy;
  //z.style.height = "1000px";
}

function getXYPosition(e) {
  myMouseX = (e || event).clientX;
  myMouseY = (e || event).clientY;
  xy = (myMouseX,myMouseY,1);
  //if (document.documentElement.scrollTop > 0) {
      myMouseY = myMouseY + document.documentElement.scrollTop;
  //}
  //console.log(myMouseY);
  const divEl = document.querySelector('#my_div');
  //divEl.style.position = "absolute";
  //divEl.style.backgroundColor = (0,0,0,1);
  //divEl.style.left = myMouseX;
  //divEl.style.top = myMouseY;
  //divEl.style
}

if (typeof window !== 'undefined') {
  document.onmousemove = getXYPosition;
  const divEl = document.querySelector('#my_div');
  divEl.addEventListener('mouseenter', bigImg);
}