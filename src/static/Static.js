export const weightedSubwayPath = {
  교대: {
    강남: {
      time: 3,
      distance: 2,
    },
    남부터미널: {
      time: 2,
      distance: 3,
    },
  },
  강남: {
    교대: {
      time: 3,
      distance: 2,
    },
    역삼: {
      time: 3,
      distance: 2,
    },
    양재: { time: 8, distance: 2 },
  },
  역삼: {
    강남: { time: 3, distance: 2 },
  },
  남부터미널: {
    교대: { time: 2, distance: 3 },
    양재: { time: 5, distance: 6 },
  },
  양재: {
    남부터미널: { time: 5, distance: 6 },
    매봉: { time: 1, distance: 1 },
    양재시민의숲: { time: 3, distance: 10 },
  },
  매봉: {
    양재: { time: 1, distance: 1 },
  },
  양재시민의숲: {
    양재: { time: 3, distance: 10 },
  },
};
