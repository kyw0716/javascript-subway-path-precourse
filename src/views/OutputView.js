export default function OutputView(container) {
  this.clearContainer = () => {
    container.replaceChildren();
  };

  this.printResultHeader = () => {
    const header = document.createElement("h2");

    header.innerHTML = "✏️ 결과";

    container.appendChild(header);
  };

  this.printResultSubHeader = (searchType) => {
    const subHeader = document.createElement("h3");
    let subHeaderText;

    if (searchType === "distance") subHeaderText = "최단거리";
    if (searchType === "time") subHeaderText = "최소시간";

    subHeader.innerHTML = subHeaderText;

    container.appendChild(subHeader);
  };

  this.makeRoute = (route) => {
    console.log(route);
    return route.join("➜");
  };

  this.printTable = (route, totalDistance, totalTime) => {
    const table = document.createElement("table");

    table.innerHTML = `
        <tr>
            <th>총 거리</th>
            <th>총 소요 시간</th>
        </tr>
        <tr>
            <td>${totalDistance}</td>
            <td>${totalTime}</td>
        </tr>
        <tr>
            <td colspan="2">${this.makeRoute(route)}</td>
        </tr>
    `;

    container.appendChild(table);
  };
}
