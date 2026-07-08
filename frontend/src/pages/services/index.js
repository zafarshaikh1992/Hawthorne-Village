// Registry of service page configs, keyed by URL slug.
import dentalImplants from "./data/dental-implants";
import orthodontics from "./data/orthodontics";
import invisalign from "./data/invisalign";
import childrensDentistry from "./data/childrens-dentistry";
import oralSedation from "./data/oral-sedation";
import sleepApnea from "./data/sleep-apnea";
import botoxTmjTreatment from "./data/botox-tmj-treatment";
import dentalBoneGrafting from "./data/dental-bone-grafting";
import plasmaRichFibrin from "./data/plasma-rich-fibrin";
import connectiveTissueGraft from "./data/connective-tissue-graft";
import porcelainVeneers from "./data/porcelain-veneers";
import cosmeticDentistry from "./data/cosmetic-dentistry";
import sameDayCrowns from "./data/same-day-crowns";
import teethInADay from "./data/teeth-in-a-day";
import dentures from "./data/dentures";
import wisdomTeeth from "./data/wisdom-teeth";
import periodontalGumCare from "./data/periodontal-gum-care";
import sportsMouthguards from "./data/sports-mouthguards";
import rootCanalTherapy from "./data/root-canal-therapy";

export const servicePages = {
  "dental-implants": dentalImplants,
  orthodontics,
  invisalign,
  "childrens-dentistry": childrensDentistry,
  "oral-sedation": oralSedation,
  "sleep-apnea": sleepApnea,
  "botox-tmj-treatment": botoxTmjTreatment,
  "dental-bone-grafting": dentalBoneGrafting,
  "plasma-rich-fibrin": plasmaRichFibrin,
  "connective-tissue-graft": connectiveTissueGraft,
  "porcelain-veneers": porcelainVeneers,
  "cosmetic-dentistry": cosmeticDentistry,
  "same-day-crowns": sameDayCrowns,
  "teeth-in-a-day": teethInADay,
  dentures,
  "wisdom-teeth": wisdomTeeth,
  "periodontal-gum-care": periodontalGumCare,
  "sports-mouthguards": sportsMouthguards,
  "root-canal-therapy": rootCanalTherapy,
};
