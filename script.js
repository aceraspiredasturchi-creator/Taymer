const minutElement = document.getElementById("minut");
const sekundElement = document.getElementById("sekund");
const box = document.getElementById("box");

function startCount() {
  let minut = parseInt(minutElement.innerText);
  let sekund = parseInt(sekundElement.innerText);

  const id = setInterval(() => {
    if (minut === 0 && sekund === 0) {
      clearInterval(id);
      box.style.backgroundColor = "red";
      return;
    }

    if (sekund === 0) {
      minut--;
      sekund = 59;
      minutElement.innerText = minut;
    } else {
      sekund--;
    }
    sekundElement.innerText = sekund;
  }, 1000);
}