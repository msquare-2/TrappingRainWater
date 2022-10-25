// Function gets invoke on fill Water button click
function fillWater() {
  let buildingHeights = getBuildingHeights();
  let waterHeights = getWaterHeights(buildingHeights);
  let maxHeight = getMaxBuildingHeight(buildingHeights);
  console.log(waterHeights);
  let waterCount = tableCreate(buildingHeights, maxHeight, waterHeights);
  let textNode = document.createTextNode(`${waterCount}`);
  document.body.appendChild(textNode);
}

// Function to get building height and return it as array
function getBuildingHeights() {
  let heights = document.getElementById("heights").value;
  let ans = [];
  for (const it of heights) {
    if (!isNaN(it)) {
        ans.push(parseInt(it));
    }
  }
  return ans;
}

// Function to calculate water height for perticular index
// @parm building height array
// @return calculated water heights
function getWaterHeights(buildingHeights) {
    let ans = new Array(buildingHeights.length);
  for (let i = 0; i < buildingHeights.length; i++) {
    let leftmax = 0;
    let rightmax = 0;
    for (let l = i; l >= 0; l--) {
        leftmax = Math.max(leftmax,buildingHeights[l]);
    }
    for (let r = i; r < ans.length; r++) {
        rightmax = Math.max(rightmax, buildingHeights[r]);
    }
    ans[i] = Math.min(leftmax, rightmax) - buildingHeights[i];
  }
  return ans;
}

// Function to calculate max height amoung all buldings
// @parm building height array
// @return calculated max heights
function getMaxBuildingHeight(buildingHeights) {
  let maxHeight = 0;
  buildingHeights.forEach((element) => {
    maxHeight = Math.max(maxHeight, element);
  });
  return maxHeight;
}


// Function to create table graphics of building and water
// @parm building height array
// @parm max height of all buildings
// @parm water height array
// @return calculated total water units traped
function tableCreate(buildingHeights, maxHeight, waterHeights) {
  let waterCount = 0;
  const body = document.body,
    tbl = document.createElement("table");
    tbl.setAttribute('id', 'waterTable');
  const n = buildingHeights.length;
  for (let i = 0; i < maxHeight; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < n; j++) {
      const td = tr.insertCell();
      td.appendChild(document.createTextNode(""));
      td.style.webkitTextFillColor = "white";
      td.style.height = "50px";
      td.style.width = "50px";
      td.setAttribute("id", `${i},${j}`);
      if (i >= maxHeight - buildingHeights[j]) {
        td.style.backgroundColor = "Brown";
        td.style.webkitTextFillColor = "Brown";
      }
      else if (i >= maxHeight - buildingHeights[j] - waterHeights[j]) {
        td.style.backgroundColor = "Blue";
        td.style.webkitTextFillColor = "Blue";
        waterCount = waterCount + 1;
      }
    }
  }
  body.appendChild(tbl);
  return waterCount;
}
