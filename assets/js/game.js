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
	renderDeck();
}

function renderDeck() {
	document.getElementById("stock").innerHTML = "";
	var tableau1 = document.getElementById("tableau1");
	var tableau2 = document.getElementById("tableau2");
	var tableau3 = document.getElementById("tableau3");
	var tableau4 = document.getElementById("tableau4");
	var tableau5 = document.getElementById("tableau5");
	var tableau6 = document.getElementById("tableau6");
	var tableau7 = document.getElementById("tableau7");
	var stock = document.getElementById("stock");

	for (var i = 0; i < deck.length; i++) {
		var card = document.createElement("div");
		var value = document.createElement("div");
		var bottom = document.createElement("div");
		card.className = "card";
		card.className= "hide";
		card.setAttribute("data-suit", deck[i].Suit);
		card.setAttribute("data-value", deck[i].Value);
		value.className = "value";
		bottom.className = "bottom";
		value.innerHTML = deck[i].Value;
		bottom.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(bottom);

		// document.getElementById("stock").appendChild(card);

		switch (i) {
			case 0:
				card.setAttribute("data-face", "up");
				card.setAttribute("data-holder", "down");
				tableau1.appendChild(card);
				break;
			case 1:
				card.setAttribute("data-face", "down");
				card.setAttribute("data-holder", "up");
				tableau2.appendChild(card);
				break;
			case 2:
			case 8:
				card.setAttribute("data-face", "down");
				card.setAttribute("data-holder", "up");
				tableau3.appendChild(card);
				break;
			case 3:
			case 9:
			case 14:
				card.setAttribute("data-face", "down");
				card.setAttribute("data-holder", "up");
				tableau4.appendChild(card);
				break;
			case 4:
			case 10:
			case 15:
			case 19:
				card.setAttribute("data-face", "down");
				card.setAttribute("data-holder", "up");
				tableau5.appendChild(card);
				break;
			case 5:
			case 11:
			case 16:
			case 20:
			case 23:
				card.setAttribute("data-face", "down");
				card.setAttribute("data-holder", "up");
				tableau6.appendChild(card);
				break;
			case 6:
			case 12:
			case 17:
			case 21:
			case 24:
			case 26:
				card.setAttribute("data-face", "down");
				card.setAttribute("data-holder", "up");
				tableau7.appendChild(card);
				break;
			case 7:
				card.setAttribute("data-face", "up");
				card.setAttribute("data-holder", "down");
				tableau2.appendChild(card);
				break;
			case 13:
				card.setAttribute("data-face", "up");
				card.setAttribute("data-holder", "down");
				tableau3.appendChild(card);
				break;
			case 18:
				card.setAttribute("data-face", "up");
				card.setAttribute("data-holder", "down");
				tableau4.appendChild(card);
				break;
			case 22:
				card.setAttribute("data-face", "up");
				card.setAttribute("data-holder", "down");
				tableau5.appendChild(card);
				break;
			case 25:
				card.setAttribute("data-face", "up");
				card.setAttribute("data-holder", "down");
				tableau6.appendChild(card);
				break;
			case 27:
				card.setAttribute("data-face", "up");
				card.setAttribute("data-holder", "down");
				tableau7.appendChild(card);
				break;
			default:
				card.setAttribute("data-face", "down");
				card.setAttribute("data-holder", "up");
				stock.appendChild(card);
		}
		
		setClick();
	}
	//call deal function here
}


getDeck();
shuffle();
renderDeck();

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



