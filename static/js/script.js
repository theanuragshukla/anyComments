window.onload = function () {
  document.getElementById("inp").addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      console.log(e.target.value);
      e.target.value = "";
    }
  });
};
