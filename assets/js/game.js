var deck = new Array();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck() {
	deck = new Array();

	for (var i = 0; i < suits.length; i++) {
		for (var x = 0; x < values.length; x++) {
			var card = { Value: values[x], Suit: suits[i] };
			deck.push(card);
		}
	}

	return deck;
}

function shuffle() {
	console.log("shuffling")
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++) {
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
	// renderDeck();
}

function renderDeck() {
	document.getElementById("stock").innerHTML = "";

	for (var i = 0; i < deck.length; i++) {
		var card = document.createElement("div");
		var value = document.createElement("div");
		var bottom = document.createElement("div");
		card.className = "card";
		card.setAttribute("data-suit", deck[i].Suit);
		card.setAttribute("data-value", deck[i].Value);
		card.setAttribute("data-face", "up");
		card.setAttribute("data-holder", "down");
		value.className = "value";
		bottom.className = "bottom";

		value.innerHTML = deck[i].Value;
		bottom.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(bottom);

		document.getElementById("stock").appendChild(card);

		setClick();
	}
}


getDeck();
shuffle();
// renderDeck();
document.getElementById("shuffle").addEventListener("click", function(event) {
	console.log("clicked")
	event.preventDefault();
	shuffle();
});


function logData() {
	var dataFace = this.getAttribute("data-face");
	var dataHolder = this.getAttribute("data-holder")
	this.setAttribute("data-face", dataHolder);
	this.setAttribute("data-holder", dataFace)
	
	
}
function setClick() {
	var cards = document.getElementsByClassName("card");
	// console.log(cards)

	for (var i = 0; i < cards.length; i++) {
		cards[i].addEventListener("click", logData, false)
		// console.log(cards[i])
	}
}


  
