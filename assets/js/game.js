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
	startDeck();
}

function startDeck() {
	// document.getElementById("stock").innerHTML = "";
	var tableau1 = document.getElementById("tableau1");
	var tableau2 = document.getElementById("tableau2");
	var tableau3 = document.getElementById("tableau3");
	var tableau4 = document.getElementById("tableau4");
	var tableau5 = document.getElementById("tableau5");
	var tableau6 = document.getElementById("tableau6");
	var tableau7 = document.getElementById("tableau7");
	var stock = document.getElementById("stock");

	for (var i = 0; i < deck.length; i++) {

		switch (i) {
			case 0:
				deal(deck[i], "up", "down", tableau1);
				break;
			case 1:
				deal(deck[i], "down", "up", tableau2, i);
				break;
			case 2:
			case 8:
				deal(deck[i], "down", "up", tableau3, i);
				break;
			case 3:
			case 9:
			case 14:
				deal(deck[i], "down", "up", tableau4, i);
				break;
			case 4:
			case 10:
			case 15:
			case 19:
				deal(deck[i], "down", "up", tableau5, i);
				break;
			case 5:
			case 11:
			case 16:
			case 20:
			case 23:
				deal(deck[i], "down", "up", tableau6, i);
				break;
			case 6:
			case 12:
			case 17:
			case 21:
			case 24:
			case 26:
				deal(deck[i], "down", "up", tableau7, i);
				break;
			case 7:
				deal(deck[i], "up", "down", tableau2, i);
				break;
			case 13:
				deal(deck[i], "up", "down", tableau3, i);
				break;
			case 18:
				deal(deck[i], "up", "down", tableau4, i);
				break;
			case 22:
				deal(deck[i], "up", "down", tableau5, i);
				break;
			case 25:
				deal(deck[i], "up", "down", tableau6, i);
				break;
			case 27:
				deal(deck[i], "up", "down", tableau7, i);
				break;
			default:
				deal(deck[i], "down", "up", stock, i);
		}

		setClick();
	}
	console.log(tableau6)
	console.log(tableau1)
}

function deal(deck, face, holder, position, z) {
	var card = document.createElement("div");
	var value = document.createElement("div");
	var bottom = document.createElement("div");
	card.className = "card";
	card.setAttribute("data-suit", deck.Suit);
	card.setAttribute("data-value", deck.Value);
	value.className = "value";
	bottom.className = "bottom";
	value.innerHTML = deck.Value;
	bottom.innerHTML = deck.Value;
	card.appendChild(value);
	card.appendChild(bottom);
	card.setAttribute("data-face", face);
	card.setAttribute("data-holder", holder);
	position.appendChild(card);
	// card.style.zIndex = z;
}


getDeck();
shuffle();
// startDeck();
console.log(deck)

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



