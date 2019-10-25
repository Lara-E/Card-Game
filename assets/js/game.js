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
	// for 750 turns
	// switch the values of two random cards
	for (var i = 0; i < 750; i++) {
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
	startDeck();
}

function startDeck() {
	var t1p1 = document.getElementById("t1p1");
	var d2p1 = document.getElementById("d2p1");
	var d3p1 = document.getElementById("d3p1");
	var d4p1 = document.getElementById("d4p1");
	var d5p1 = document.getElementById("d5p1");
	var d6p1 = document.getElementById("d6p1");
	var d7p1 = document.getElementById("d7p1");
	var t2p1 = document.getElementById("t2p1");
	var d3p2 = document.getElementById("d3p2");
	var d4p2 = document.getElementById("d4p2");
	var d5p2 = document.getElementById("d5p2");
	var d6p2 = document.getElementById("d6p2");
	var d7p2 = document.getElementById("d7p2");
	var t3p1 = document.getElementById("t3p1");
	var d4p3 = document.getElementById("d4p3");
	var d5p3 = document.getElementById("d5p3");
	var d6p3 = document.getElementById("d6p3");
	var d7p3 = document.getElementById("d7p3");
	var t4p1 = document.getElementById("t4p1");
	var d5p4 = document.getElementById("d5p4");
	var d6p4 = document.getElementById("d6p4");
	var d7p4 = document.getElementById("d7p4");
	var t5p1 = document.getElementById("t5p1");
	var d6p5 = document.getElementById("d6p5");
	var d7p5 = document.getElementById("d7p5");
	var t6p1 = document.getElementById("t6p1");
	var d7p6 = document.getElementById("d7p6");
	var t7p1 = document.getElementById("t7p1");
	var stock = document.getElementById("stock");

	for (var i = 0; i < deck.length; i++) {

		switch (i) {
			case 0:
				setTimeout(deal, 750 * i, deck[i], "up", "down", t1p1);
				break;
			case 1:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d2p1);
				break;
			case 2:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d3p1);
				break;
			case 3:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d4p1);
				break;
			case 4:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d5p1);
				break;
			case 5:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d6p1);
				break;
			case 6:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d7p1);
				break;
			case 7:
				setTimeout(deal, 750 * i, deck[i], "up", "down", t2p1);
				break;
			case 8:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d3p2);
				break;
			case 9:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d4p2);
				break;
			case 10:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d5p2);
				break;
			case 11:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d6p2);
				break;
			case 12:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d7p2);
				break;
			case 13:
				setTimeout(deal, 750 * i, deck[i], "up", "down", t3p1);
				break;
			case 14:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d4p3);
				break;
			case 15:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d5p3);
				break;
			case 16:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d6p3);
				break;
			case 17:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d7p3);
				break;
			case 18:
				setTimeout(deal, 750 * i, deck[i], "up", "down", t4p1);
				break;
			case 19:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d5p4);
				break;
			case 20:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d6p4);
				break;
			case 21:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d7p4);
				break;
			case 22:
				setTimeout(deal, 750 * i, deck[i], "up", "down", t5p1);
				break;
			case 23:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d6p5);
				break;
			case 24:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d7p5);
				break;
			case 25:
				setTimeout(deal, 750 * i, deck[i], "up", "down", t6p1);
				break;
			case 26:
				setTimeout(deal, 750 * i, deck[i], "down", "up", d7p6);
				break;
			case 27:
				setTimeout(deal, 750 * i, deck[i], "up", "down", t7p1);
				break;
			default:
				deal(deck[i], "down", "up", stock);
		}

		setClick();
	}
	console.log(tableau6)
	console.log(tableau1)
}

function deal(deck, face, holder, position) {
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
// shuffle();
// startDeck();
console.log(deck)

// document.getElementById("shuffle").addEventListener("click", function(event) {
// 	console.log("clicked")
// 	event.preventDefault();
// 	shuffle();
// });

document.getElementById("deal").addEventListener("click", function() {
	// window.location.reload();

	shuffle();
})


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



