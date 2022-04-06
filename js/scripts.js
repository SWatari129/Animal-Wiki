function wikiInfo(animal) {
  if (animal === "dog") {
    $(".dog").show();
    } else if (animal === "honey-badger") {
      $(".hone-badger").show();
    } else if (animal === "fossa") { 
      $(".fossa").show();
    };
  }
$(document).ready(function() {
  const animal = prompt("What animal would you like to learn about?");
  wikiInfo(animal)
});
