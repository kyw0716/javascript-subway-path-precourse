const form = document.querySelector("#departure-station-name-input").parentNode
  .parentNode;
const departureStationInput = document.querySelector(
  "#departure-station-name-input"
);
const arrivalStationInput = document.querySelector(
  "#arrival-station-name-input"
);
const searchTypeInput = document.querySelectorAll('input[name="search-type"]');

export default function InputView(submitCallback) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const departureStation = departureStationInput.value;
    const arrivalStation = arrivalStationInput.value;
    const checkedSearchType = getCheckedSearchType();

    submitCallback([checkedSearchType, departureStation, arrivalStation]);
  });

  const getCheckedSearchType = () => {
    let checkedSearchType;

    for (let i = 0; i < searchTypeInput.length; i++) {
      const radio = searchTypeInput[i];
      if (radio.checked) {
        checkedSearchType = radio.value;
        break;
      }
    }

    return checkedSearchType;
  };
}
