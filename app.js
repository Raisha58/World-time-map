async function getData(place) {
  const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=735fa4b680bb4dec916040aef776a885&location=${place}`;
  const res = await fetch(url);
  data = await res.json();
  time = data.datetime;

  document.getElementById(
    "time"
  ).innerText = `${place}'s time = ${time} ${data.timezone_abbreviation}`;
}

document.querySelectorAll(".allPaths").forEach((e) => {
  e.addEventListener("mouseover", function () {
    window.onmousemove = function (j) {
      x = j.clientX;
      y = j.clientY;
      document.getElementById("name").style.top = y - 20 + "px";
      document.getElementById("name").style.left = x - 20 + "px";
    };
    e.style.fill = "#6b8078";
    document.getElementById("namep").innerText = e.id;
    document.getElementById("name").style.opacity = 1;
  });
  e.addEventListener("mouseleave", function () {
    e.style.fill = "#6b8078";
    document.getElementById("name").style.opacity = 0;
  });
});
