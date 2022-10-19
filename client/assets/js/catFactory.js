//Random color
function getColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function genColors() {
  var colors = [];
  for (var i = 10; i < 99; i++) {
    var color = getColor();
    colors[i] = color;
  }
  return colors;
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color, code) {
  $(".cat__head, .cat__chest").css("background", "#" + color); //This changes the color of the cat
  $("#headcode").html("code: " + code); //This updates text of the badge next to the slider
  $("#dnabody").html(code); //This updates the body color part of the DNA that is displayed below the cat
}
//This function code needs to modified so that it works with Your cat code.
function earsColor(color, code) {
  $(".cat__ear,.cat__ear--left, .cat__ear--right ").css(
    "background",
    "#" + color
  ); //This changes the color of the cat
  $("#earcode").html("code: " + code); //This updates text of the badge next to the slider
  $("#dnaears").html(code); //This updates the body color part of the DNA that is displayed below the cat
}

//This function code needs to modified so that it works with Your cat code.
function whiskersColor(color, code) {
  $(".cat__whiskers-left, .cat__whiskers-right ").css(
    "background",
    "#" + color
  ); //This changes the color of the cat
  $("#whiskercode").html("code: " + code); //This updates text of the badge next to the slider
  $("#dnawhiskers").html(code); //This updates the body color part of the DNA that is displayed below the cat
}
//This function code needs to modified so that it works with Your cat code.
function eyeVariation(color, code) {
  $(".cat__eye--left, .cat__eye--right ").css("background", "#" + color); //This changes the color of the cat
  $("#eyeName").html("code: " + code); //This updates text of the badge next to the slider
  $("#dnaeyes").html(code); //This updates the body color part of the DNA that is displayed below the cat
}

//This function code needs to modified so that it works with Your cat code.
function dots(color, code) {
  $("cat__head-dots").css("background", "#" + color); //This changes the color of the cat
  $("#dots").html("code: " + code); //This updates text of the badge next to the slider
  $("#dnadots").html(code); //This updates the body color part of the DNA that is displayed below the cat
}

//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {
  $("#dnashape").html(num);
  switch (num) {
    case 1:
      normalEyes();
      $("#eyeName").html("Basic");
      break;
    case 2:
      normalEyes();
      $("#eyeName").html("Chill");
      eyeTypes1();
      break;
    case 3:
      normalEyes();
      $("#eyeName").html("Up");
      eyeTypes2();
      break;
    case 3:
      normalEyes();
      $("#eyeName").html("Up");
      eyeTypes3();
      break;
    default:
      console.log("not 1 or 2 ");
      break;
  }
}

function decorationVariation(num) {
  $("#dotsshape").html(num);
  switch (num) {
    case 1:
      $("#dots").html("Basic");
      normaldecoration();
      break;
    case 2:
      $("#dots").html("Steer");
      dots();
      break;
    case 3:
      $("#dots").html("form");
      dotsTransform();
      break;
    case 4:
      $("#dots").html("180");
      dotsTransform2();
      break;
  }
}
function animationVariation(num) {
  $("#dnaanimation").html(num);
  switch (num) {
    case 1:
      animationType1();
      break;
    case 2:
      animationType2();
      break;
    case 3:
      animationType3();
      break;
    case 4:
      resetAnimation();
      break;
  }
}

// adds the class we created to a specific element with jquery.
// so we first need to find the element which is head element id which we want to animate
// addCLass is an inbuilt jquery function
function animationType1() {
  resetAnimation();
  $("#head").addClass("movingHead");
}
function animationType2() {
  resetAnimation();
  $("#head").addClass("movingHead2");
}
function animationType3() {
  resetAnimation();
  $("#head").addClass("movingHead3");
}
function resetAnimation() {
  // add any animation class that you create
  $("#head").removeClass("movingHead");
  $("#head").removeClass("movingHead2");
  $("#head").removeClass("movingHead3");
}

async function normalEyes() {
  await $(".cat__eye").find("span").css("border", "none");
}
async function eyeTypes1() {
  await $(".cat__eye").find("span").css("border-top", "15px solid");
}
async function eyeTypes2() {
  await $(".cat__eye").find("span").css("border-bottom", "15px solid");
}
async function eyeTypes3() {
  await $(".cat__eye").find("span").css("border-radius", "0 0 50% 50%");
}
async function dots() {
  await $(".cat__head-dots").find("span").css("border-bottom", "15px solid");
}

async function dotsTransform() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  $(".cat__head-dots").css({
    transform: "rotate(0deg)",
    background: "red",
    height: "20px",
    left: "-40px",
    position: "absolute",
    top: "40px",
    width: "100px",
  });
}
async function dotsTransform2() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  $(".cat__head-dots").css({
    transform: "rotate(180deg)",
    background: "red",
    height: "20px",
    left: "-40px",
    position: "absolute",
    top: "40px",
    width: "100px",
  });
}
async function normaldecoration() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  $(".cat__head-dots").css({
    transform: "rotate(0deg)",
    height: "48px",
    width: "14px",
    top: "1px",
    "border-radius": "0 0 50% 50%",
  });
  $(".cat__head-dots_first").css({
    transform: "rotate(0deg)",
    height: "35px",
    width: "14px",
    top: "1px",
    "border-radius": "50% 0 50% 50%",
  });
  $(".cat__head-dots_second").css({
    transform: "rotate(0deg)",
    height: "35px",
    width: "14px",
    top: "1px",
    "border-radius": "0 50% 50% 50%",
  });
}
