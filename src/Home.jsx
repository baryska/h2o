import React from "react";
import Layout from './components/Layout';
import River from './assets/video.mp4';
import "@fontsource/windsong"
import homeStyles from './Home.module.scss';
import Paddle from './assets/images/paddle-white.png'


const Home = () => {
  return (
    <Layout>
      <video autoPlay muted loop className={homeStyles.video}>
        <source src={River} type="video/mp4" />
      </video>
      <div>
        <h1 className={homeStyles.title}>Sdružení přátel vody H2O</h1>
        <img src={Paddle} alt="pádlo" className={homeStyles.paddle} />
      </div>
    </Layout>
  )
};

export default Home;
