var colors = Object.values(allColors());

var defaultDNA = {
  headcolor: 10,
  mouthColor: 13,
  eyesColor: 96,
  earsColor: 10,
  whiskersColor: 10,

  //Cattributes
  eyesShape: 1,
  decorationPattern: 1,
  decorationMidcolor: 13,
  decorationSidescolor: 13,
  animation: 1,
  lastNum: 1,
};

// when page load
$(document).ready(function () {
  $("#dnabody").html(defaultDNA.headColor);
  $("#dnamouth").html(defaultDNA.mouthColor);
  $("#dnaeyes").html(defaultDNA.eyesColor);
  $("#dnaears").html(defaultDNA.earsColor);
  $("#dnawhiskers").html(defaultDNA.earsColor);
  $("#dotsshape").html(defaultDNA.dots);

  $("#dnashape").html(defaultDNA.eyesShape);
  $("#dnadecoration").html(defaultDNA.decorationPattern);
  $("#dnadecorationMid").html(defaultDNA.decorationMidcolor);
  $("#dnadecorationSides").html(defaultDNA.decorationSidescolor);
  $("#dnaanimation").html(defaultDNA.animation);
  $("#dnaspecial").html(defaultDNA.lastNum);

  renderCat(defaultDNA);
});

function getDna() {
  var dna = "";
  dna += $("#dnabody").html();
  dna += $("#dnamouth").html();
  dna += $("#dnaeyes").html();
  dna += $("#dnaears").html();
  dna += $("#dnawhiskers").html();
  dna += $("#dnashape").html();
  dna += $("#dnadecoration").html();
  dna += $("#dnadecorationMid").html();
  dna += $("#dnadecorationSides").html();
  dna += $("#dnaanimation").html();
  dna += $("#dnadots").html();
  dna += $("#dnaspecial").html();

  return parseInt(dna);
}

// render cat = create the cat
function renderCat(dna) {
  headColor(colors[dna.headcolor], dna.headcolor);
  $("#bodycolor").val(dna.headcolor);
  earsColor(colors[dna.headcolor], dna.headcolor);
  $("#earcolor").val(dna.headcolor);
  whiskersColor(colors[dna.headcolor], dna.headcolor);
  $("#whiskerscolor").val(dna.headcolor);
  eyeVariation(colors[dna.headcolor], dna.headcolor);
  $("#eyeshape").val(dna.headcolor);
  dotsTransform(colors[dna.headcolor], dna.headcolor);
  $("#dotsshape").val(dna.headcolor);

  animationVariation(dna.animation);
  $("#animation").val(dna.animation);
}

// Changing cat colors
$("#bodycolor").change(() => {
  var colorVal = $("#bodycolor").val();
  headColor(colors[colorVal], colorVal);
});

// Changing cat colors
$("#earcolor").change(() => {
  var colorVal = $("#earcolor").val();
  earsColor(colors[colorVal], colorVal);
});

// Changing cat colors
$("#whiskerscolor").change(() => {
  var colorVal = $("#whiskerscolor").val();
  whiskersColor(colors[colorVal], colorVal);
});

// Changing cat eyes shape
$("#eyeshape").change(() => {
  var shape = parseInt($("#eyeshape").val()); // between 1-7
  eyeVariation(shape);
});
// Changing cat dot shapes
$("#dotsshape").change(() => {
  var shape = parseInt($("#dotsshape").val());
  decorationVariation(shape);
});

// Changing cat animations, making it move etc
// need to parse the string to make it work with the switch statements
// 1,2,3 etc
$("#animation").change(() => {
  var animationVal = parseInt($("#animation").val());
  animationVariation(animationVal);
});

//Randomize Function
$("#random").click(() => {
  var bodycolor = Math.floor(Math.random() * 89) + 10;
  headColor(colors[bodycolor], bodycolor);
  $("#bodycolor").val(bodycolor);
  var mouthcolor = Math.floor(Math.random() * 89) + 10;
  mouthColor(colors[mouthcolor], mouthcolor);
  $("#mouthcolor").val(mouthcolor);
  var eyescolor = Math.floor(Math.random() * 89) + 10;
  eyesColor(colors[eyescolor], eyescolor);
  $("#eyescolor").val(eyescolor);
  var earscolor = Math.floor(Math.random() * 89) + 10;
  earsColor(colors[earscolor], earscolor);
  $("#earscolor").val(earscolor);
  var eyevar = Math.floor(Math.random() * (7 - 1 + 1) + 1);
  eyeVariation(eyevar);
  $("#eyeshape").val(eyevar);
  var anim = Math.floor(Math.random() * (7 - 1 + 1) + 1);
  animationsPlayer(anim);
  $("#animation").val(anim);
});

// default kitty reset
$("#reset").click(() => {
  renderCat(defaultDNA);
});

// create kitty
$("#create").click(() => {
  createKitty();
});
