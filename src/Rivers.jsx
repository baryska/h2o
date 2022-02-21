import React from 'react';
import Layout from './components/Layout'
import Fab from '@mui/material/Fab';
import riverStyles from './Rivers.module.scss';
import Vltava from './assets/images/vltava.jpg'
import Luznice from './assets/images/luznice.png';
import Loket from './assets/images/loket2.jpg';
import Pisek from './assets/images/pisek.jpg';
import stamp from './assets/images/stamp.png';


const Rivers = () => {
  return (
    <Layout>
      <img src={stamp} alt="razitko" className={riverStyles.stamp} />
      <div className={riverStyles.layout}>
        <div className={riverStyles.info}>
          <Fab
            variant="extended"
            className={riverStyles.river}
            style={{ backgroundColor: '#3CBFD4' }}
          >VLTAVA</Fab>
           <img src={Vltava} alt="vltava" className={riverStyles.image}/>
          <h4>ITINERÁŘ</h4>
          <p>Vltavu začínáme na <strong>Soumarském mostě</strong>, z něhož většinou chodíme na výlet na Boubín. Poté se přesouváme do <strong>Nové Pece</strong>, dnes již musíme v doprovodu průvodce Národního parku Šumava. Z <strong>Nové Pece</strong> chodíme na výlet na Třístoličník a další dva dny přejíždíme vodní nádrž Lipno s přespáním na <strong>Chemoprojektu</strong>. Do <strong>Vyššího brodu</strong> pak jdeme kolem Čertových proudů pešky a lodě převážíme. Dalšími zastávkami jsou tábořiště <strong>Zátoň</strong> a <strong>Český Krumlov</strong>, kde se zdržíme dvě noci, abychom si stihli prohlédnout město. Z Českého Krumlova pokračujeme na krásné tábořiště <strong>Dívčí kámen</strong> a celé putování končíme v <strong>Českých Budějovicích</strong>, kde by chtěl žít každý.</p>
          <h4>VODÁCKÁ ŘEKA</h4>
          <p> Vltava je nejnavštěvovanější česká prázdninová řeka, hlavně proto, že pod Lipnem je garantován minimální průtok po celý rok.
            Díky tomu je splavná i v období sucha. Většina jezů je sjízdná. Horní úsek protéká krásnou a nedotčenou přírodou národního parku Šumava.
            Splouvání je zde povoleno, ale je nutné dodržovat různá opatření - např. minimum limitu pro splutí, časová omezení a omezení počtu lodí,
            registrace plavidel za jakéhokoli stavu na stránkách npsumava.cz atd. Od Nové Pece není plavba nijak omezována a brzo následuje vzdutí naší
            největší nádrže Lipno. Pod přehradou na vyrovnávací nádrž Lipno II je velmi obtížný úsek Loučovická kaskáda a Čertovy proudy, kde je ale
            voda jen výjimečně.
            Na trase je pak velké množství vodáckého zázemí (kempy, restaurace ...), ale také zde můžete potkat velké množství vodáků.
            Přes sezónu řeku splaví přes 200 000 lidí!
            Na řece je (počínaje Lipnem) 6 stupňů vltavské kaskády s lodní dopravou od Českých Budějovic k ústí do Labe. (zdroj: www.raft.cz)</p>
            <a href="https://www.vodackanavigace.cz/vltava?uo=2972&ud=2979" target="_blank" rel="noreferrer"><h4>Kilometráž</h4></a>        
        </div>
        <div className={riverStyles.info}>
          <Fab
            variant="extended"
            className={riverStyles.river}
            style={{ backgroundColor: '#34D5CA' }}
          >LUŽNICE</Fab>
           <img src={Luznice} alt="vltava" className={riverStyles.image}/>
          <h4>ITINERÁŘ</h4>
          <p>Lužnici začínáme v <strong>Suchdole nad Lužnicí</strong>, odkud pokračujeme po jednom z nejkrásnějších meandrovitých úseků Lužnice na 
           <strong> Majdalenu</strong> a z Majdaleny plujeme po Nové řece na <strong>Mláku</strong>. Z Mláky chodíme na celodenní výlet do Třeboně. 
          Z Mláky pokračujeme po Nežárce na <strong>Hamr</strong> a poté dále do <strong>Soběslavi</strong>, kde se obvykle zdržíme a hrajeme na místní říční plovárně
          nejrůznější hry. To už jsme dávno zpátky na Lužnici a pokračujeme po ní na <strong>Soukeník</strong> a z něj na krásné tábořiště na 
          <strong> Harrachovce</strong>. Z Harrachovky chodíme na výlet do Tábora. Putování po Lužnici zakončujeme v "holandském kempu" v <strong>Dobronicích</strong>. 
          </p>
          <h4>VODÁCKÁ ŘEKA</h4>
          <p>  Vodáky a trampy často vyhledávaná pohodová řeka, která nemá obtížných míst v podobě peřejí. V horní části řeka meandruje písčitým, 
            místy zarostlým korytem s množstvím padlých stromů až k Veselí nad Lužnicí. Odtud je napojena na soustavu 
            třeboňských rybníků, kdy nejprve nad jezem Pilař odbočuje z řeky umělý tok Zlatá Stoka. Pod Majdalenou se řeka 
            rozděluje na Novou a Starou. Stará je silně meandrující, zarostlá s možností padlých stromů a s problematickým dostatkem vody, 
            která ústí do našeho největšího rybníka Rožmberk, a Novou s umělým 13 km dlouhým tokem, který má obvykle dostatek vody. Celý tok 
            až k Veselí je součástí CHKO s omezeným tábořením. Je to velmi klidná řeka, vhodná pro začátečníky a komáry. Až pod Táborem do Bechyně se 
            řeka více zařezává do mělkého lesnatého údolí, spád se mírně zvyšuje a objevují se malá peřejnatá místa. Často je ale proud zbržďován jezy, 
            které bývají nesjízdné a mnohé z nich jsou také smrtelně nebezpečné (Pilař, Dráchov ...) (zdroj: www.raft.cz)</p>      
            <a href="https://www.vodackanavigace.cz/luznice?uo=3055&ud=3064" target="_blank" rel="noreferrer"><h4>Kilometráž</h4></a>
            </div>
        <div className={riverStyles.info}>
          <Fab
            variant="extended"
            className={riverStyles.river}
            style={{ backgroundColor: '#6AE7AF' }}
          >OTAVA</Fab>
          <img src={Pisek} alt="vltava" className={riverStyles.image}/>
          <h4>ITINERÁŘ</h4>
          <p>Vltavu začínáme na <strong>Soumarském mostě</strong>, z něhož většinou chodíme na výlet na Boubín. Poté se přesouváme do <strong>Nové Pece</strong>, dnes již musíme v doprovodu průvodce Národního parku Šumava. Z <strong>Nové Pece</strong> chodíme na výlet na Třístoličník a další dva dny přejíždíme vodní nádrž Lipno s přespáním na <strong>Chemoprojektu</strong>. Do <strong>Vyššího brodu</strong> pak jdeme kolem Čertových proudů pešky a lodě převážíme. Dalšími zastávkami jsou tábořiště <strong>Zátoň</strong> a <strong>Český Krumlov</strong>, kde se zdržíme dvě noci, abychom si stihli prohlédnout město. Z Českého Krumlova pokračujeme na krásné tábořiště <strong>Dívčí kámen</strong> a celé putování končíme v <strong>Českých Budějovicích</strong>, kde by chtěl žít každý.</p>
          <h4>VODÁCKÁ ŘEKA</h4>
          <p> V horní části se jedná o pěknou horskou řeku s kamenitým dnem v krásné šumavské přírodě. Plavba na horní úseku je omezena 
            návštěvním řádem národního parku Šumava. Od Rejnštějna, což dříve bývala osada zlatokopů rýžujících zlato z řeky, ale také sklářů, 
            se proud zmírňuje, 
            aby se od Sušice stal již klasickou letní prázdninovou řekou vhodnou pro sváteční vodáky. Na řece je mnoho jezů s vorovými propustmi, 
            které se používaly na plavení dřeva. Bohužel jsou často zahrazené a nesjízdné. Z historických památek stojí za návštěvu střed města 
            Sušice s památkovou zónou a pod ní zřícenina gotického hradu Rábí. V Horažďovicích je pěkný barokní zámek a za návštěvu stojí hrad 
            i město Písek, které poznáte podle nejstaršího dochovaného kamenného mostu v Čechách z konce 13. století. (zdroj: www.raft.cz)</p>        </div>
        <div className={riverStyles.info}>
          <Fab
            variant="extended"
            className={riverStyles.river}
            style={{ backgroundColor: '#AFF38C' }}
          >OHŘE</Fab>
          <img src={Loket} alt="vltava" className={riverStyles.image}/>
          <h4>ITINERÁŘ</h4>
          <p>Vltavu začínáme na <strong>Soumarském mostě</strong>, z něhož většinou chodíme na výlet na Boubín. Poté se přesouváme do <strong>Nové Pece</strong>, dnes již musíme v doprovodu průvodce Národního parku Šumava. Z <strong>Nové Pece</strong> chodíme na výlet na Třístoličník a další dva dny přejíždíme vodní nádrž Lipno s přespáním na <strong>Chemoprojektu</strong>. Do <strong>Vyššího brodu</strong> pak jdeme kolem Čertových proudů pešky a lodě převážíme. Dalšími zastávkami jsou tábořiště <strong>Zátoň</strong> a <strong>Český Krumlov</strong>, kde se zdržíme dvě noci, abychom si stihli prohlédnout město. Z Českého Krumlova pokračujeme na krásné tábořiště <strong>Dívčí kámen</strong> a celé putování končíme v <strong>Českých Budějovicích</strong>, kde by chtěl žít každý.</p>
          <h4>VODÁCKÁ ŘEKA</h4>
          <p> Turistická řeka vhodná pro vícedenní putování. Obvykle se začíná již z Chebu, odkud protéká pomalým proudem okolo historicky zajímavých míst, 
            např. Kynšperka nad Ohří. Za Kynšperkem dochází ke zrychlení proudu a objevují se peřeje a řeka se zařezává do údolí. Na skalnatém ostrohu se vypíná 
            hrad Loket s městskou památkovou rezervací. Pod Loktem přicházejí asi nejhezčí peřeje v okolí Svatošských skal, skládajících se ze skalních věží bizarních 
            tvarů. Pak už se řeka uklidňuje a teče směrem k lázeňskému městu Karlovy Vary. Pod městem ještě naposledy proud zrychlí, přibývá kamenů s drobnými 
            peřejemi v lesnatém údolí, z nichž nejznámější je peřej Hubertus. Konec vodáckého putování bývá v Kadani, odkud začíná vzdutí přehrady Nechranice. Většina jezů na řece je bez propustí 
            a některé jsou velmi nebezpečné (Černý mlýn, Radošov ...). Jak se ale rozšiřuje vodácký zájem o řeku, vznikají v rámci přestavby jezů nové propusti 
            nebo obtokové kanály kolem jezů. Ohře i v dolním úseku je příjemnou řekou, zachovává si slušný proud a má čistou vodu. 
            Na mnoha místech jsou písčité pláže vhodné ke koupání. (zdroj: www.raft.cz)</p>        
            </div>
      </div>
    </Layout>
  )
};

export default Rivers;