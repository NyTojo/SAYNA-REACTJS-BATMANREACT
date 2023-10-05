import React, { Component } from 'react';
import '../styles/Home.css';
import logoBatFleche from '../assets/logos/logo_bat_flèche.png';
import iconFacebook from '../assets/logos/icon_facebook.png';
import iconInstagram from '../assets/logos/icon_ig.png';
import iconTwitter from '../assets/logos/icon_tw.png';
import flecheBas from '../assets/logos/logo_bat_flèche_2.png';
import fleche from '../assets/logos/flèche_down_header.png';
import roberPattinson from '../assets/images/Bathome2.png';
import roberPattinson2 from '../assets/images/robert_pattinson.jpg';
import christian from '../assets/images/Bathome3.png';
import christianBale from '../assets/images/christian_bale.jpg';
import ben from '../assets/images/Bathome4.png';
import benAffleck from '../assets/images/ben_affleck.jpg';
import batChouricken from '../assets/images/Bathome13.png';
import Bathome6 from '../assets/images/Bathome6.png';
import Bathome5 from '../assets/images/Bathome5.png';
import riddler from '../assets/images/riddler.jpg';
import leJoker from '../assets/images/le_joker.jpg';
import Bathome7 from '../assets/images/Bathome7.png';
import darkside from '../assets/images/darkside.jpg';
import Bathome12 from '../assets/images/Bathome12.png';
import Bathome9 from '../assets/images/Bathome9.png';
import pennyworth from '../assets/images/alfred_pennyworth.jpg';
import Catwoman from '../assets/images/Bathome8.png';
import Catwoman2 from '../assets/images/catwoman.jpg';
import JamesGordon from '../assets/images/Bathome10.png';
import gordon from '../assets/images/gordon.jpg';
import jl from '../assets/images/Bathome11.png';
import boutongauche from '../assets/logos/icon_flèche_1.png';
import boutondroite from '../assets/logos/icon_flèche_2.png';
import batmanencinéma from '../assets/images/Bathome_ba1.png';
import Vignettedelavidéo from '../assets/images/Bathome_ba2.png';
import video from '../assets/video/batman-beegins.mp4';


export default class Home extends Component {
  render() {
    return (
      <>
        <div className="up-bar"></div>
        <div className="left-bar"></div>
        <div className="right-bar"></div>


        <div className="scroll">
          <img src={logoBatFleche} alt="flèche-haut" />
          <img className="social" src={iconFacebook} alt="icon_facebook" />
          <img className="social" src={iconInstagram} alt="icon_instagram" />
          <img className="social" src={iconTwitter} alt="icon_twitter" />
          <img src={flecheBas} alt="flèche bas" />
        </div>
        <div className="espace-vertical"></div>
        <section id="hero">
          <div className="container">
            <div className="espace-vertical"></div>
            <div className="espace-vertical"></div>
            <div className="content">
              <p className="texte">Au nom de ses parents assassinés, Bruce Wayne mène une guerre éternelle contre les criminels de Gotham City. Il est vengeur. Il est la nuit.</p><br />
              <h2 className="titre">Il est Batman.</h2>
              <div className="espace-vertical"></div>
              <div className="cta">
                <a className="btn" href="#batman-cinema">VOIR LE HEROS</a>
                <a className="btn" href="#némésis">LES ADVERSAIRES</a>
              </div>
            </div>
          </div>
          <img className="fleche" src={fleche} alt='fleche' />

        </section>
        <div className="espace-vertical"></div>
        <div className="espace-vertical"></div>
        <section id="batman-cinema">
          <div className="container">
            <h1 className="titre">Batman au Cinema</h1>
            <p className="description">Le personnage de Batman est un super héros de l’univers de DC Comics. Il a été créé par le dessinateur Bob Kane et le scénariste Bill Finger et apparaît pour la première fois dans le comic book Detective Comics en 1939. Batman se différencie de Superman, alors héros majeur de DC, car il n’a aucun pouvoir. Il sera porté au cinéma pour la première fois en 1943 par Lewis Wilson et bénéficiera de nombreux reboots, donnant l’occasion à de multiples acteurs d’interpréter l’homme chauve-souris. Voici les trois derniers :</p>
            <div className="batman-personnage">
              <div className="batman-item">
                <img src={roberPattinson} alt="roberPattinson" />
                <div className="pochette">
                  <div className="personnage-info">
                    <img className="miniature" src={roberPattinson2} alt="" />
                    <h3>Robert Pattinson <br /> <p>(2022)</p></h3>
                  </div>
                </div>
              </div>
              <div className="batman-item">
                <img src={christian} alt="christian" />
                <div className="pochette">
                  <div className="personnage-info">
                    <img className="miniature" src={christianBale} alt="christianBale" />
                    <h3>Christian Bale <br /> <p>(2006-2008-2012)</p></h3>
                  </div>
                </div>
              </div>
              <div className="batman-item" >
                <img src={ben} alt="ben" />
                <div className="pochette">
                  <div className="personnage-info" >
                    <img className="miniature" src={benAffleck} alt="benAffleck" />
                    <h3>Ben Affleck <br /> <p>(2016-2017-2020-2023)</p></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="espace-vertical"></div>
        <div className="espace-vertical"></div>
        <section id="némésis">
          <div className="container">
            <div className="imgtxt"><h1 className="titre">Némésis</h1>
              -<img src={batChouricken} alt="batChouricken" className="superpose" />
            </div>
            <p className="description">Batman souhaite éradiquer la criminalité de Gotham. C'est pourquoi il affrontera la plupart du temps des vilains sans capacités surnaturelles mais particulièrement violents ou psychopathes. Avec son introduction dans Justice League, il aura l'occasion de se mesurer à des antagonistes qui défient l'imagination et les lois de la physique. Parmi les derniers ennemis emblématiques que nous avons pu voir au cinéma, on retrouve :</p><br /><br />
            <div className="batman-personnage">
              <div className="batman-item">
                <img src={Bathome6} alt="Bathome6" />
                <div className="pochette">
                  <div className="personnage-info">
                    <img className="miniature" src={leJoker} alt="leJoker" />
                    <h3>le Joker - Heath Ledger <br /> <p>(2008)</p></h3>
                  </div>
                </div>
              </div>
              <div className="batman-item">
                <img src={Bathome5} alt="Bathome5" />
                <div className="pochette">
                  <div className="personnage-info">
                    <img className="miniature" src={riddler} alt="riddler" />
                    <h3>The Riddler - Paul Dano <br /> <p>(2022)</p></h3>
                  </div>
                </div>
              </div>
              <div className="batman-item" >
                <img src={Bathome7} alt="Bathome7" />
                <div className="pochette">
                  <div className="personnage-info" >
                    <img className="miniature" src={darkside} alt="darkside" />
                    <h3>Darkseid - Ray Porter <br /> <p>(2022)</p></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="espace-vertical"></div>
        <div className="espace-vertical"></div>
        <section id="Alliés">
          <div className="container">
            <div className="imgtxt"><h1 className="titre">Alliés</h1>
              <img src={Bathome12} alt="Bathome12" className="pose" />
            </div>
            <p className="description">Alfred est le majordome des Wayne. À leur mort, il s’occupe de l’éducation du jeune Bruce avant de l’assister dans son rôle du Batman. Ce dernier rencontrera Catwoman dès le premier numéro des aventures de l’homme chauve-souris en 1940. Tantôt ennemie, tantôt alliée, la jeune femme fatale fera tourner la tête de Batman à maintes reprises. Du côté de la police, Bruce pourra compter sur l’aide infaillible de James Gordon, “Jim”, qui désire lui aussi nettoyer sa ville de la criminalité qui y règne.</p><br /><br /><br />
            <div className="batman-personnage">
              <div className="batman-item">
                <img src={Bathome9} alt="Bathome9" />
                <div className="pochette">
                  <div className="personnage-info">
                    <img className="miniature" src={pennyworth} alt="pennyworth" />
                    <h3>Alfred Pennyworth <br /> <p>(2006-2008-2012)</p></h3>
                  </div>
                </div>
              </div>
              <div className="batman-item">
                <img src={Catwoman} alt="Catwoman1" />
                <div className="pochette">
                  <div className="personnage-info">
                    <img className="miniature" src={Catwoman2} alt="Catwoman2" />
                    <h3>Catwoman - Zoë Kravitz <br /> <p>(2006-2008-2012)</p></h3>
                  </div>
                </div>
              </div>
              <div className="batman-item" >
                <img src={JamesGordon} alt="JamesGordon" />
                <div className="pochette">
                  <div className="personnage-info" >
                    <img className="miniature" src={gordon} alt="gordon" />
                    <h3>James Gordon <br /> <p>(2016-2017-2020-2023)</p></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="espace-vertical"></div>
          <section id="batman-justice-league">
            <div className="container">
              <h1 className="titre"> Justice League</h1>
              <p className="description">
                Lorsque la Terre est menacée, les plus grands super-héros s’allient pour la protéger. Ils doivent cependant apprendre à se faire confiance mutuellement et à faire équipe, ce qui ne sera pas chose aisée. Ensemble, ils forment la Justice League, les plus grands super-héros de la Terre, ceux vers qui le monde entier se tourne lorsque les menaces extraterrestres ou surnaturelles menacent son existence.
              </p>
            </div>
            <img src={jl} alt="justice league" className="jl" id="justice-league-image" />
          </section>

          <section id="multimedia">
            <div className="container">
              <h1 className="titre">MULTIMEDIA</h1>
              <button className="left" >
                <img src={boutongauche} alt="boutongauche" />
              </button>
              <button className="right" >
                <img src={boutondroite} alt="boutondroite" />
              </button>
              <div className="slider-multimedia">
                <div className="slider-image">
                  <img src={batmanencinéma} alt="batmanencinéma" />
                </div>
                <div className="slider-content">
                  <h2>ACTION, ADVENTURE</h2>
                  <h3>Batman Begins</h3>
                  <p>IMDB: <span className="yellow" >8.2</span></p>
                  <p>
                    Le jeune Bruce Wayne assiste impuissant au meurtre de ses parents. Profondément traumatisé, il grandit obnubilé par un désir de vengeance. La Ligue des ombres, une secte de guerriers ninja dirigée par Ra's al Ghul, se chargera de son entraînement. De retour chez lui à Gotham, avec l'aide de son majordome Alfred Pennyworth, Bruce Wayne se lance alors dans la lutte contre le crime sous le nom de Batman.
                  </p>
                </div>
              </div>
            </div>

            <div className="video-container">
              <div className="image-bande-annonce">
                <img src={Vignettedelavidéo} className="image-annonce" alt="Vignettedelavidéo" />
                <video className="video" controls allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                  <source src={video} type="video/mp4" />
                  Votre navigateur ne prend pas en charge la lecture de vidéos.
                </video>


              </div>
            </div>
          </section>
          <div className="espace-vertical"></div>
        </section>
      </>
    );
  }
}
