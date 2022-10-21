var web3 = new Web3(
  Web3.givenProvider || "http://127.0.0.1:58505/client/index.html"
);
// var web3 = new Web3("http://127.0.0.1:58505/client/index.html");

var instance;
var user;
var contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

$(document).ready(function () {
  window.ethereum.enable().then(function (accounts) {
    instance = new web3.eth.Contract(abi, contractAddress, {
      from: accounts[0],
    });
    user = accounts[0];

    console.log("index.js", instance);
    console.log("hallåutanför");

    instance.events
      .Birth()
      .on("data", function (event) {
        console.log("event", event);

        let owner = event.returnValues.owner;
        let kittenId = event.returnValues.kittenId;
        let mumId = event.returnValues.mumId;
        let dadId = event.returnValues.dadId;
        let genes = event.returnValues.genes;
        $("#kittyCreation").css("display", "block");
        $("#kittyCreation").text(
          "owner:" +
            owner +
            "kittenId:" +
            kittenId +
            "mumId:" +
            mumId +
            "dadId:" +
            dadId +
            "genes:" +
            genes
        );
      })
      .on("error", console.error);
  });
});

function createKitty() {
  var dnaStr = getDna();
  instance.methods.createKittyGen0(dnaStr).send({}, function (error, txHash) {
    if (error) console.log("error message from create kitty", error);
    else {
      console.log("Kitty creation successful with hash", txHash);
    }
  });
}
