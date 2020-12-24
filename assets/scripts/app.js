const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Smartcontracts",
				weight: 9
			}, {
				text: "Web3",
				weight: 8
			}, {
				text: "Solidity",
				weight: 9
			}, {
				text: "JavaScript",
				weight: 8
			}, {
				text: "programming",
				weight: 9
			}, {
				text: "python",
				weight: 8
			}, {
				text: "Chaincode",
				weight: 9
			}, {
				text: "Dapps",
				weight: 10
			}, {
				text: "decentralized",
				weight: 9
			},	{
			text: "Ethereum",
			weight: 12
			}, {
			text: "Hyperledger Fabric",
			weight: 11
			},{
			text: "Node.js",
			weight: 13
			},{
			text: "AWS",
			weight: 11
			},{
			text: "Cloud Computing",
			weight: 12
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"I am Blockchain Developer.", "love everything about code.", "Fascinated to program things that work in real world and useful for people in their businesses."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 3,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
