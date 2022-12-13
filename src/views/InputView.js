const form = document.querySelector("#departure-station-name-input").parentNode
  .parentNode;
const departureStationInput = document.querySelector(
  "#departure-station-name-input"
);
const arrivalStationInput = document.querySelector(
  "#arrival-station-name-input"
);
const searchTypeInput = document.querySelectorAll('input[name="search-type"]');

export function InputView(submitCallback) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const departureStation = departureStationInput.value;
    const arrivalStation = arrivalStationInput.value;

    submitCallback([departureStation, arrivalStation]);
  });
}
