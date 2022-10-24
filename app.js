function getBuildingHeights() {
  var heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  return heights;
}

function getWaterHeights() {
  var heights = [0, 0, 1, 0, 1, 2, 1, 0, 0, 1, 0, 0];
  return heights;
}

function getMaxBuildingHeight(buildingHeights) {
  let maxHeight = 0;
  buildingHeights.forEach((element) => {
    maxHeight = Math.max(maxHeight, element);
  });
  return maxHeight;
}

function fillWater() {
  // var heights = document.getElementById("heights")[0].value;
  var buildingHeights = getBuildingHeights();
  var waterHeights = getWaterHeights();
  var maxBuildingHeight = getMaxBuildingHeight(buildingHeights);
  tableCreate(buildingHeights, maxBuildingHeight);
}

function tableCreate(buildingHeights, maxHeight, waterHeights) {
  const body = document.body,
    tbl = document.createElement("table");
    tbl.setAttribute('id', 'waterTable');
  const n = buildingHeights.length;
  for (let i = 0; i < maxHeight; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < n; j++) {
      const td = tr.insertCell();
      td.appendChild(document.createTextNode("cscnxc"));
      td.style.webkitTextFillColor = "white";
      td.style.height = "50px";
      td.setAttribute("id", `${i},${j}`);
      if (i >= maxHeight - buildingHeights[j]) {
        td.style.backgroundColor = "Brown";
        td.style.webkitTextFillColor = "Brown";
      }
      else if (i >= maxHeight - buildingHeights[j] - waterHeights[j]) {
        td.style.backgroundColor = "Blue";
        td.style.webkitTextFillColor = "Blue";
      }
    }
  }
  body.appendChild(tbl);
}
tableCreate([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 3, [0,0,1,0,1,2,1,0,0,1,0,0]);
