import React from 'react';
import Layout from './components/Layout';
import aboutStyles from './About.module.scss';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import paddle from './assets/images/paddle.png';
import paddleRed from './assets/images/paddle-red.png'
import stamp from './assets/images/stamp.png'

const About = () => {
  return (
    <Layout>
      <div className={aboutStyles.imageLayout}>
        <p className={aboutStyles.heading}>KDO JSME</p>
        <div className={aboutStyles.paddleWrapper}>
          <img src={paddle} alt="padlo" className={aboutStyles.paddle}/>
        </div>
        <img src={stamp} alt="razitko" className={aboutStyles.stamp} />
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
          <img src={paddleRed} alt="padlo" className={aboutStyles.paddleRed}/>
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