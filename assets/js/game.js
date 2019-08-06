var deck = new Array();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck()
{
	deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffle()
{
	console.log("shuffling")
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
	renderDeck();
}

function renderDeck()
{
      document.getElementById("deck").innerHTML = "";

	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		var suitFlip = document.createElement("div");
		var bottom = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;
		suitFlip.className = deck[i].Suit + "-flip flip";
		bottom.className = "bottom";

		value.innerHTML = deck[i].Value;
		bottom.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);
		card.appendChild(suitFlip);
		card.appendChild(bottom);

		document.getElementById("deck").appendChild(card);
	}
}


getDeck();
shuffle();
renderDeck();
document.getElementById("shuffle").addEventListener("click", function(event) {
	console.log("clicked")
	event.preventDefault();
	shuffle();
});

