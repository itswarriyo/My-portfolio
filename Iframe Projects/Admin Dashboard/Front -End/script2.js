// Grpah



// 🔧 Create chart helper
function createChart(containerId, color) {
  const container = document.getElementById(containerId);

  const chart = LightweightCharts.createChart(container, {
    width: container.clientWidth,
    height: 400,
    layout: {
      background: { color: '#000' },
      textColor: '#fff'
    },
    grid: {
      vertLines: { color: '#111' },
      horzLines: { color: '#111' }
    }
  });

  const series = chart.addLineSeries({
    color: color,
    lineWidth: 3
  });

  return { chart, series, container };
}

// 🎯 Create all charts
const revenue = createChart("chart-revenue", "#00ff99");
const expense = createChart("chart-expense", "yellow");
const profit = createChart("chart-profit", "#00ccff");

// 📊 Data
let time = 0;

// 📋 Lists (optional - agar HTML me ho)
const listRevenue = document.getElementById("list-revenue");
const listExpense = document.getElementById("list-expense");
const listProfit = document.getElementById("list-profit");

// 🔥 LIVE DATA LOOP
setInterval(() => {
  time++;

  const rev = Math.floor(Math.random() * 20000 + 10000);
  const exp = Math.floor(Math.random() * 10000 + 5000);
  const prof = rev - exp;

  const pointR = { time, value: rev };
  const pointE = { time, value: exp };
  const pointP = { time, value: prof };

  revenue.series.update(pointR);
  expense.series.update(pointE);
  profit.series.update(pointP);

  // list update (agar lists exist karti hain)
  if (listRevenue && listExpense && listProfit) {
    addItem(listRevenue, `Day ${time} - $${rev}`);
    addItem(listExpense, `Day ${time} - $${exp}`);
    addItem(listProfit, `Day ${time} - $${prof}`);
  }

}, 2000);

// 📅 List helper
function addItem(list, text) {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);

  if (list.children.length > 7) {
    list.removeChild(list.firstChild);
  }
}

// 📏 Resize fix
window.addEventListener("resize", () => {
  [revenue, expense, profit].forEach(obj => {
    obj.chart.applyOptions({
      width: obj.container.clientWidth
    });
  });
});




// Circle 

// 🎯 get ALL progress circles (both types)
const circles = document.querySelectorAll(".circle-progress, .progress");

let values = {};

// auto assign values to ALL circles
circles.forEach(circle => {
  values[circle.id] = Math.random() * 100;
});

// ⚡ function
function setProgress(circleId, textId, percent) {

  const circle = document.getElementById(circleId);
  const text = document.getElementById(textId);

  if (!circle || !text) return; // safety

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;

  const offset = circumference - (percent / 100) * circumference;

  circle.style.strokeDashoffset = offset;
  text.textContent = Math.floor(percent) + "%";
}

function updateProgress() {

  Object.keys(values).forEach(key => {

    let change = Math.random() * 10;
    let direction = Math.random() > 0.5 ? 1 : -1;

    values[key] += change * direction;

    if (values[key] > 100) values[key] = 100;
    if (values[key] < 0) values[key] = 0;

    let textId;

    // 🔥 handle BOTH naming styles
    if (key.startsWith("circle")) {
      textId = "text" + key.replace("circle", "");
    } else if (key.startsWith("p")) {
      textId = "t" + key.replace("p", "");
    }

    setProgress(key, textId, values[key]);
  });
}

setInterval(updateProgress, 2000);



// Products sales according to gender


function setCircle(id, percent, radius) {
  const circle = document.getElementById(id);

  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset =
    circumference - (percent / 100) * circumference;
}

/* Apply values */
setCircle("outerCircle", 80, 90);
setCircle("middleCircle", 60, 70);
setCircle("innerCircle", 40, 50);




