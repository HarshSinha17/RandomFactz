var fact = document.getElementById("fact");

fetch("https://uselessfacts.jsph.pl/random.json?language=en")
.then((result) => result.json())
.then((data) => {
  console.log(data)
  fact.innerHTML = data.text;
})