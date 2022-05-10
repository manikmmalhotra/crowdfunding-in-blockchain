import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x4b23D5205348724Fb834cDfFB32C602c3C888a89"
);

export default instance;
