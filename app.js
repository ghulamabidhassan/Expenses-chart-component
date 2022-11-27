import jsonConfig from "./data.json" assert { type: "json" };

const ctx = document.getElementById("myChart").getContext("2d");

const labels = jsonConfig.map((jsonData) => {
  return jsonData.day;
});

const amount = jsonConfig.map((amt) => {
  //   let dollar = `$ ${amt.amount}`;

  return amt.amount;
  //   return dollar;
});

const data = {
  labels,
  datasets: [
    {
      data: amount,
      backgroundColor: [
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(186, 34%, 60%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
      ],
      borderRadius: 4,
      hoverBackgroundColor: "hsl(186, 34%, 60%)",
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    onHover: (event, chartElement) => {
      if (chartElement.length == 1) {
        event.native.target.style.cursor = "pointer";
      }
    },
    plugins: {
      tooltip: {
        caretSize: 0,
        yAlign: "bottom",
        padding: 9,
        displayColors: false,
        callbacks: {
          title: function (context) {
            return (context[0].label = "");
          },
          label: function (e) {
            // console.log(e);
          },
        },
        caret: false,
        backgroundColor: "hsl(25, 47%, 15%)",
      },
      legend: {
        display: false,
      },
    },
    responsive: "true",
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);
