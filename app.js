function getBuildingHeights() {
  var heights = document.getElementById("heights").value;
  let ans = [];
  console.log(heights);
  for (const it of heights) {
    if (!isNaN(it)) {
        ans.push(parseInt(it));
    }
  }
  return ans;
}

function getWaterHeights(buildingHeights) {
    var ans = [];
  for (let i = 0; i < buildingHeights.length; i++) {
    let leftmax = 0;
    let rightmax = 0;
    for (let l = i; l >= 0; l--) {
        leftmax = Math.max(leftmax,buildingHeights[l]);
    }
    for (let r = i; r < array.length; r++) {
        rightmax = Math.max(rightmax, buildingHeights[r]);
    }
    ans.push(Math.min(leftmax, rightmax) - buildingHeights[i]);
  }
  return ans;
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
  var waterHeights = getWaterHeights(buildingHeights);
  var maxHeight = getMaxBuildingHeight(buildingHeights);
  tableCreate(buildingHeights, maxHeight, waterHeights);
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
