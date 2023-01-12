import IntroVideo from './Components/IntroVideo';
import freshtopicImg from './assets/academy.png';
import freshtopic2Img from './assets/story.png';
import Tedtalks from './assets/in-the-news.gif';
import franchiseImg from './assets/franchise.gif';
import mapImg from './assets/locations.png';
import coursesImg from './assets/image2.png';
import albumImg from './assets/mba-cares.gif';
import baratImg from './assets/image1.png';
import chaiwalaImg from './assets/image3.png';
import data from './Data/data.json';
import Footer from './Components/Footer';
import Section from './Components/Section';
import Misc from './Components/Misc';
import Loader from './Components/Loader';
import './Styles/App.scss';
import './Styles/intro.scss';
import './Styles/section.scss';
import './Styles/footer.scss';
import './Styles/misc.scss';
import './Styles/mediaquery.scss';
import { useEffect, useState } from 'react';

const yellow = '#fff100',
  pink = '#ed1e79',
  red = '#d20120',
  white = '#fff',
  brown = ' #6d3d0f';

function App() {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    chaiwala,
  } = data;

  const dotCursor = (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;
    if (element.getAttribute('data-cursorpointer')) {
      cursor.classList.add('cursorHover');
    } else if (element.getAttribute('data-cursorpointermini')) {
      cursor.classList.add('cursorHoverMini');
    } else {
      cursor.classList.remove('cursorHover');
      cursor.classList.remove('cursorHoverMini');
    }
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener('mousemove', dotCursor);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      window.addEventListener('mousemove', dotCursor);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      <IntroVideo />

      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imgSrc={freshtopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnTxt={freshTopic2.btn}
        imgSrc={freshtopic2Img}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/* tead talks */}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnTxt={tedTalks.btn}
        imgSrc={Tedtalks}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      {/* franchise */}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnTxt={franchise.btn}
        imgSrc={franchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      {/* map */}
      <Section
        h3={map.heading}
        text={map.text}
        imgSrc={mapImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={brown}
        btnColor={yellow}
        hasBtn={false}
      />
      {/* courses */}
      <Section
        h3={courses.heading}
        text={courses.text}
        imgSrc={coursesImg}
        btnTxt={courses.btn}
        imgSize="30%"
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      {/* album */}
      <Section
        h3={album.heading}
        text={album.text}
        imgSrc={albumImg}
        btnTxt={album.btn}
        imgSize="30%"
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      {/* barat */}
      <Section
        h3={barat.heading}
        text={barat.text}
        imgSrc={baratImg}
        btnTxt={barat.btn}
        imgSize="30%"
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* chaiwala */}
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        imgSrc={chaiwalaImg}
        btnTxt={chaiwala.btn}
        imgSize="30%"
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      <Footer />
      <Misc />
    </>
  );
}

export default App;
