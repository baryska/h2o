import React from 'react';
import Layout from './components/Layout';
import aboutStyles from './About.module.scss';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload } from '@cloudinary/react';

const About = () => {
  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: 'dmb0zn354'
    }
  });

  const paddle = cloudinary.image('Fotky/general/paddle_qyc2ti.png'); 
  const paddleRed = cloudinary.image('Fotky/general/paddle-red_ltvpvn.png'); 
  const stamp = cloudinary.image('Fotky/general/stamp_xljw1x.png'); 
  
  return (
    <Layout>
      <div className={aboutStyles.imageLayout}>
        <p className={aboutStyles.heading}>KDO JSME</p>
        <div className={aboutStyles.paddleWrapper}>
          <AdvancedImage cldImg={paddle} plugins={[lazyload()]} className={aboutStyles.paddle} />
        </div>
        <AdvancedImage cldImg={stamp} plugins={[lazyload()]} className={aboutStyles.stamp} />
        <div className={aboutStyles.aboutus}>
          <p>
            Jsme skupina přátel, která pořádá dvoutýdenní vodácká putování pro naše děti i děti našich kamarádů a známých.
            Navazujeme na úspěšnou tradici letních vodáckých táborů Přírodovědecké fakulty Univerzity Karlovy,
            které dlouhá léta svým nezapomenutelným způsobem vedl náš kamarád, kolega a životní učitel Jirka Candra.
          </p>
          <p>Dle aktuálního stavu vody jezdíme každý rok v červenci na jednu z následujících řek: Vltavu, Lužnici, Otavu nebo Ohři.</p>
          <p>Hlavním vedoucím, účetním, šifrantem, budíkem a kytaristou je Ondřej Čepek, který rovněž emituje hlavní táborovou měnu, Ondrouše.
            Jejich hodnota je definována tzv. čokoládovým standardem. </p>
        </div>
        <div className={aboutStyles.redPaddleWrapper}>
          <AdvancedImage cldImg={paddleRed} plugins={[lazyload()]} className={aboutStyles.paddleRed}/>
        </div>
        <Paper elevation={12} className={aboutStyles.contact}>
          <Fab
            style={{ position: "absolute", top: '-20px', left: '-20px', backgroundColor: "white" }}
            href="mailto: ondrej.cepek@mff.cuni.cz"
          ><EmailRoundedIcon /></Fab>
          <p>Ondřej Čepek</p>
          <p>ondrej.cepek@mff.cuni.cz</p>
        </Paper>
      </div>
    </Layout>
  )
};

export default About;