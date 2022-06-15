google.load("visualization", "1", {
  packages: ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable(
    [
      ["appreciate_point", "Rating"],
      ["OST", 12],
      ["영상미", 17],
      ["스토리", 17],
      ["연기", 35],
      ["연출", 19]
    ]
  );
  var options = {
    title: "영화 감상포인트"
  };
  var chart = new google.visualization.PieChart(document.getElementById("appreciate_piechart"));
  chart.draw(data, options);
}