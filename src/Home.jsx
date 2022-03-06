import React from "react";
import Layout from './components/Layout';
import "@fontsource/windsong"
import homeStyles from './Home.module.scss';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, AdvancedVideo, lazyload } from '@cloudinary/react';

const Home = () => {
  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: 'dmb0zn354'
    }
  });

  const paddle = cloudinary.image('Fotky/general/paddle-white_fk7fp2.png');
  const video = cloudinary.video('Fotky/video_dsc8en')

  return (
    <Layout>
      <AdvancedVideo cldVid={video} autoPlay muted loop plugins={[lazyload()]} className={homeStyles.video}/>
      <div>
        <h1 className={homeStyles.title}>Sdružení přátel vody H2O</h1>
        <AdvancedImage cldImg={paddle} className={homeStyles.paddle} />
      </div>
    </Layout>
  )
};

export default Home;
