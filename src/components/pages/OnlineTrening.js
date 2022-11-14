import "../../App.css";
import photo from "../../imgs/training.jpg";
import Button from "../Button";
import "./OnlineTrening.css";
import Footer from "../Footer";
import Rectangle from "../Rectangle";
import Arrow from "../../imgs/arrow.png";
import Square from "../Square";
import app1 from "../../imgs/app1.png";
import app2 from "../../imgs/app2.png";
import app3 from "../../imgs/app3.png";
import app4 from "../../imgs/app4.png";
import VerticalRectangle from "../VerticalRectangle";
import dream from "../../imgs/dream.png";
import lifeQuality from "../../imgs/life-quality.png";
import advices from "../../imgs/advices.png";
import app from "../../imgs/aplikacija.png";
import change from "../../imgs/change.png";
import food from "../../imgs/food.png";
import goals from "../../imgs/goals.png";
import jump from "../../imgs/jump.png";
import plan from "../../imgs/plan.png";
import training from "../../imgs/training.png";
import video from "../../imgs/video.png";
import whatsapp from "../../imgs/whatsapp.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

const OnlineTrening = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.9 }}
    >
      <div className="wrapper1">
        <div>
          <h1 className="heading2">KAKO IZGLEDA ONLINE SURADNJA?</h1>
        </div>
        <Rectangle
          data-aos="fade-up"
          text="Prvi korak je upoznavanje pri kojem ću ja kao trener saznati sve potrebne informacije o tebi kako bi mogli nastaviti dalje sa programom. Zanimati će me tvoja visina, težina, zanimanje kojim se baviš, tvoja starost i slične informacije."
          heading="UPOZNAVANJE"
        />
        <Rectangle
          data-aos="fade-up"
          text="U ovom dijelu programa tvoj trener će napraviti detaljan plan treninga kojega će sastaviti baš prema informacijama koje je dobio o tebi."
          heading="PLAN TRENINGA"
        />
        <Rectangle
          data-aos="fade-up"
          text="Prehrana je važan dio zdravog života. Kroz ovaj dio tvoj trener odnosno nutricionist će ti osmisliti plan prehrane iz tjedan u tjedan. Tako da nećeš imati izbora nego pratiti i držati se prehrane što će rezultirati brzom promjenom tvoga tjelesnog sastava i napposljetku promjenom tvoga izgleda."
          heading="PREHRANA"
        />
        <Rectangle
          data-aos="fade-up"
          text="Kroz tjedne razgovore tvoj trener pratiti će vaš napredak i prema njemu imati bolje informacine za daljnji tok programa."
          heading="PRAĆENJE TRENINGA"
        />{" "}
        <div data-aos="fade-up" className="initial--questionnaire">
          <div className="card2">
            <div className="img--holder1">
              <img src={Arrow} alt="" />
            </div>
            <div className="middle-questionaire">
              <div className="text-content">
                <h2 className="heading4">INICIJALNI UPITNIK</h2>
                <h2 className="text5">
                  Prije samog početka suradnje ispunjavaš inicijalni upitnik
                  koji će mi pružiti sve potrebne informacije da bih za tebe
                  izradio optimalan program treninga i odabrao primjere
                  prehrane, nužne za ostvarenje tvojih ciljeva.
                </h2>
              </div>
              <div className="button-container">
                <a
                  class="botun"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfFWgVobIWZ-OuyUQFSM_bhxkJ9l5Nx4RcOnwulBKr6CItsXQ/viewform"
                  // class="btn btn--primary btn--large"
                >
                  ISPUNI UPITNIK
                </a>
              </div>
            </div>
            <div className="img--holder2">
              <img src={Arrow} className="arrow-image" alt="" />
            </div>
          </div>
        </div>
        <div className="training--benefits">
          <div data-aos="fade-up" className="row">
            <h2 className="heading2">ŠTO DOBIVAŠ?</h2>
          </div>
          <div data-aos="fade-up" className="row">
            <Square text="Bolji san" icon={dream} />
            <Square text="Unaprjeđenje kvalitete života" icon={lifeQuality} />
            <Square text="Više energije kroz dan" icon={jump} />
            <Square
              text="Znanje o planiranju treninga i prehrane"
              icon={plan}
            />
          </div>
          <div data-aos="fade-up" className="row">
            <Square text="Korištenje aplikacije 'FitProMotion'" icon={app} />
            <Square text="Video instrukcije za svaku vježbu" icon={video} />
            <Square
              text="Promjenu programa treninga u slučaju potrebe"
              icon={change}
            />
            <Square
              text="Praćenje rezultata i postavljanje ciljeva za svaki novi tjedan"
              icon={goals}
            />
          </div>
          <div data-aos="fade-up" className="row">
            <Square text="Personalizirani program trenigna" icon={training} />
            <Square text="Primjere raznovrsne prehrane" icon={food} />
            <Square
              text="Savjete o prehrani, korištenju dodataka prehrani i treningu"
              icon={advices}
            />
            <Square text="Podršku 24/7 preko whatsappa" icon={whatsapp} />
          </div>
        </div>
        <div data-aos="fade-up" className="mobile--app">
          <h1 data-aos="fade-up" className="heading2">
            APLIKACIJA ZA TRENING
          </h1>
          <div data-aos="fade-up" className="row">
            <div className="holder-for-image">
              <h4 className="text5">S lakoćom prati svoje dnevne obveze</h4>
              <img className="app--img" src={app1} alt="" />
            </div>
            <div className="holder-for-image">
              <h4 className="text5">
                Pristupi svom treningu i planu prehrane bilo gdje
              </h4>
              <img className="app--img" src={app2} alt="" />
            </div>
            <div className="holder-for-image">
              <h4 className="text5">
                Postavi ciljeve trening i prehrane sa svojim trenerom
              </h4>
              <img className="app--img" src={app3} alt="" />
            </div>
            <div className="holder-for-image">
              <h4 className="text5">
                Radite sa svojim trenerom kako biste postigli ciljeve
              </h4>
              <img className="app--img" src={app4} alt="" />
            </div>
          </div>
          <div className="holder-for-text">
            <h5 data-aos="fade-up" className="text5">
              Aplikacija “FitProMotion” dostupna je svim aktivnim online
              klijentima, a preko nje dobivaš personalizirani program treninga s
              brojem ponavljanja, radnim opterećenjem i brojem radnih serija u
              odnosu na tvoje ciljeve i na opremu s kojom raspolažeš. Da bismo
              smanjili mogućnost krivog izvođenja, za svaku vježbu dobivaš i
              video instrukcije.
            </h5>
          </div>
        </div>
        <div className="price--list">
          <h2 data-aos="fade-up" className="heading2">
            CJENIK USLUGA
          </h2>
          <div className="row">
            <VerticalRectangle
              name="LITE"
              price="67 €"
              timeInterval="1 mjesec"
              Link="https://checkout.stripe.com/c/pay/cs_live_a1vt3Uhx00OMPG92uFUp0s11hME2p3InpboWnwSJF7ljoNlF4Hgv6dLnpK#fidkdWxOYHwnPyd1blppbHNgWjA0SXBPfEtJdkZTb2Q8dXJBfTx9Tl9nf2IyZ1QwUmlQZExrXUdBVlM1aF9JSWE2TW1Ac1Q0TjUyb1U9NlFtbDRyTnRibUFLaTdNSEhNQHF0MWZyPHJLaGZsNTVvZGRDdDZtPScpJ3VpbGtuQH11anZgYUxhJz8nY19gN2dmZE5kMHZQMX18MG5uJ3gl"
            />
            <VerticalRectangle
              name="PREMIUM"
              price="147 €"
              timeInterval="3 mjeseca"
              Link="https://checkout.stripe.com/c/pay/cs_live_a1n5B9qhHuVlT3lfln0pOZQS5enEcZgGpS0DUxz39XbrGm2hRrN86PNBdD#fidkdWxOYHwnPyd1blppbHNgWjA0SXBPfEtJdkZTb2Q8dXJBfTx9Tl9nf2IyZ1QwUmlQZExrXUdBVlM1aF9JSWE2TW1Ac1Q0TjUyb1U9NlFtbDRyTnRibUFLaTdNSEhNQHF0MWZyPHJLaGZsNTVvZGRDdDZtPScpJ3VpbGtuQH11anZgYUxhJz8nNDFuYF1cMWlINT1ENW1sYFBTJ3gl"
            />
            {/* <VerticalRectangle
              name="GOLD"
              price="247 €"
              timeInterval="6 mjeseci"
            /> */}
            <VerticalRectangle
              name="GOLD"
              price="447 €"
              timeInterval="12 mjeseci"
              Link="https://buy.stripe.com/00g8zA9G65sU2pq8wy"
            />
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default OnlineTrening;
