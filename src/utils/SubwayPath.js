import Dijkstra from "./Dijkstra.js";

export function SubwayPath() {
  this.subwayPathByTime = new Dijkstra();
  this.subwayPathByDistance = new Dijkstra();

  this.subwayPathByTime.addEdge("교대", "강남", 3);
  this.subwayPathByTime.addEdge("강남", "역삼", 3);
  this.subwayPathByTime.addEdge("교대", "남부터미널", 2);
  this.subwayPathByTime.addEdge("남부터미널", "양재", 5);
  this.subwayPathByTime.addEdge("양재", "매봉", 1);
  this.subwayPathByTime.addEdge("강남", "양재", 8);
  this.subwayPathByTime.addEdge("양재", "양재시민의숲", 3);

  this.subwayPathByDistance.addEdge("교대", "강남", 2);
  this.subwayPathByDistance.addEdge("강남", "역삼", 2);
  this.subwayPathByDistance.addEdge("교대", "남부터미널", 3);
  this.subwayPathByDistance.addEdge("남부터미널", "양재", 6);
  this.subwayPathByDistance.addEdge("양재", "매봉", 1);
  this.subwayPathByDistance.addEdge("강남", "양재", 2);
  this.subwayPathByDistance.addEdge("양재", "양재시민의숲", 10);

  this.getShortestPathByDistance = (startStation, endStation) => {
    return this.subwayPathByDistance.findShortestPath(startStation, endStation);
  };

  this.getShortestPathByTime = (startStation, endStation) => {
    return this.subwayPathByTime.findShortestPath(startStation, endStation);
  };
}
