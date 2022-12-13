import { weightedSubwayPath } from "../static/Static.js";
import Dijkstra from "./Dijkstra.js";

export default function SubwayPathCalculator() {
  this.subwayPathByTime = new Dijkstra();
  this.subwayPathByDistance = new Dijkstra();

  this.subwayPathByTime.addEdge(
    "교대",
    "강남",
    weightedSubwayPath["교대"]["강남"]["time"]
  );
  this.subwayPathByTime.addEdge(
    "강남",
    "역삼",
    weightedSubwayPath["강남"]["역삼"]["time"]
  );
  this.subwayPathByTime.addEdge(
    "교대",
    "남부터미널",
    weightedSubwayPath["교대"]["남부터미널"]["time"]
  );
  this.subwayPathByTime.addEdge(
    "남부터미널",
    "양재",
    weightedSubwayPath["남부터미널"]["양재"]["time"]
  );
  this.subwayPathByTime.addEdge(
    "양재",
    "매봉",
    weightedSubwayPath["양재"]["매봉"]["time"]
  );
  this.subwayPathByTime.addEdge(
    "강남",
    "양재",
    weightedSubwayPath["강남"]["양재"]["time"]
  );
  this.subwayPathByTime.addEdge(
    "양재",
    "양재시민의숲",
    weightedSubwayPath["양재"]["양재시민의숲"]["time"]
  );

  this.subwayPathByDistance.addEdge(
    "교대",
    "강남",
    weightedSubwayPath["교대"]["강남"]["distance"]
  );
  this.subwayPathByDistance.addEdge(
    "강남",
    "역삼",
    weightedSubwayPath["강남"]["역삼"]["distance"]
  );
  this.subwayPathByDistance.addEdge(
    "교대",
    "남부터미널",
    weightedSubwayPath["교대"]["남부터미널"]["distance"]
  );
  this.subwayPathByDistance.addEdge(
    "남부터미널",
    "양재",
    weightedSubwayPath["남부터미널"]["양재"]["distance"]
  );
  this.subwayPathByDistance.addEdge(
    "양재",
    "매봉",
    weightedSubwayPath["양재"]["매봉"]["distance"]
  );
  this.subwayPathByDistance.addEdge(
    "강남",
    "양재",
    weightedSubwayPath["강남"]["양재"]["distance"]
  );
  this.subwayPathByDistance.addEdge(
    "양재",
    "양재시민의숲",
    weightedSubwayPath["양재"]["양재시민의숲"]["distance"]
  );

  this.getTotalDistance = (route) => {
    let distance = 0;

    for (let i = 0; i < route.length - 1; i++) {
      distance += weightedSubwayPath[route[i]][route[i + 1]]["distance"];
    }

    return distance;
  };

  this.getTotalTime = (route) => {
    let time = 0;

    for (let i = 0; i < route.length - 1; i++) {
      time += weightedSubwayPath[route[i]][route[i + 1]]["time"];
    }

    return time;
  };

  this.getShortestPathByDistance = (startStation, endStation) => {
    return this.subwayPathByDistance.findShortestPath(startStation, endStation);
  };

  this.getShortestPathByTime = (startStation, endStation) => {
    return this.subwayPathByTime.findShortestPath(startStation, endStation);
  };

  this.getResultByTime = (startStation, endStation) => {
    const route = this.getShortestPathByTime(startStation, endStation);
    const time = this.getTotalTime(route);
    const distance = this.getTotalDistance(route);

    return [route, [time, distance]];
  };

  this.getResultByDistance = (startStation, endStation) => {
    const route = this.getShortestPathByDistance(startStation, endStation);
    const time = this.getTotalTime(route);
    const distance = this.getTotalDistance(route);

    return [route, [time, distance]];
  };
}
