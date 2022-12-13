import { SubwayPath } from "./utils/SubwayPath.js";
import { InputView } from "./views/InputView.js";

function SubWayController() {
  this.subwayPath = new SubwayPath();
  this.inputView = new InputView((data) => {
    console.log(data);
  });

  console.log(this.subwayPath.getResultByDistance("교대", "양재시민의숲"));
  console.log(this.subwayPath.getResultByTime("교대", "양재시민의숲"));
}

new SubWayController();
