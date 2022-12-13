import { SubwayPath } from "./utils/SubwayPath.js";

function SubWayController() {
  this.subwayPath = new SubwayPath();

  console.log(this.subwayPath.getResultByDistance("교대", "양재시민의숲"));
  console.log(this.subwayPath.getResultByTime("교대", "양재시민의숲"));
}

new SubWayController();
