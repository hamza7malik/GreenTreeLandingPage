import { AboutSection } from './components/AboutSection';
import { Banner } from './components/Banner';
import { BenifitsSection } from './components/BenifitsSection';
import { ContactSection } from './components/ContactSection';
import { CryptoWalletSection } from './components/CryptoWalletSection';
import { DemoDetails } from './components/DemoDetails';
import { FAQSection } from './components/FAQSection';
import { FooterSections } from './components/FooterSections';
import { Header } from './components/Header';
import { OurFeaturesSections } from './components/OurFeaturesSections';
import { OurProduct } from './components/OurProduct';
import { PricingPlanSection } from './components/PricingPlanSection';
import { SharedWebHosingSections } from './components/SharedWebHosingSections';
import { StandardFeatures } from './components/StandardFeatures';
import { SubBanner } from './components/SubBanner';
import { TechnologiesSection } from './components/TechnologiesSection';
import { WeOfferSection } from './components/WeOfferSection';
import { WhyUsSection } from './components/WhyUsSection';

function App() {
  return (
    <div className=" productpage makent">
     <Header/>
     <Banner/>
     <AboutSection/>
     <BenifitsSection/>
     <WeOfferSection/>
     <DemoDetails/>
     <SubBanner/>
     <WhyUsSection/>
     <SharedWebHosingSections/>
     <CryptoWalletSection/>
     <StandardFeatures/>
     <PricingPlanSection/>
     <TechnologiesSection/>
     <FAQSection/>
     <FooterSections/>
     </div>
    
   
     
  );
}

export default App;



