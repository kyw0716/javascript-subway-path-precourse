import SubwayPathCalculator from "./utils/SubwayPathCalculator.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

function SubWayController() {
  this.subwayPath = new SubwayPathCalculator();
  this.inputView = new InputView((data) => {
    const result = this.caculateResult(data);
    console.log(result);
    this.outputView.clearContainer();
    this.outputView.printResultHeader();
    this.outputView.printResultSubHeader(data[0]);
    this.outputView.printTable(result[0], result[1][0], result[1][1]);
    console.log(data);
  });
  this.outputView = new OutputView(document.querySelector("#result-container"));

  this.caculateResult = (data) => {
    const result = [];

    if (data[0] === "distance") {
      const calculateResult = this.subwayPath.getResultByDistance(
        data[1],
        data[2]
      );
      result.push(calculateResult[0]);
      result.push(calculateResult[1]);

      return result;
    }

    const calculateResult = this.subwayPath.getResultByTime(data[1], data[2]);

    result.push(calculateResult[0]);
    result.push(calculateResult[1]);

    return result;
  };
}

new SubWayController();
