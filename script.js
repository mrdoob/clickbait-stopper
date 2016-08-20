var list = [
	/why we really shouldn['’]?t/i,
	/what I learned about/i,
	/can teach us about/i,
	/powerful photos/i,
	/heartbreaking/i,
	/may affect/i,
	/somebody needs to/i,
	/you won['’]?t believe/i,
	/what happens/i,
	/^\d+/,
	/get rid of/i,
	/secret of/i,
	/shocking/i
	/what you need to know/i,
	/won['’]?t believe/i,
	/[pictures|photos] of/i,
	/things that will/i,
	/nip slips/i,
	/we need to talk about/i,
	/signs you['’]?re/i,
	/you can/i,
	/what could possibly/i,
	/when you read these/i,
	/until you see/i,
	/didn['’]t know what/i,
	/what [he|she|they] found/i,
	/who['’]d thougt/i,
	/all [he|she|they] did was/i,
	/what this/i,
	/when [he|she|they]/i,
	/when this [man|woman|baby|child|puppy|dog|kitten]/i,
	/never realized/i,
	/something [great]? happened/i
];

function test( string ) {

	if ( string.length < 15 ) return false;

	for ( var i = 0, l = list.length; i < l; i ++ ) {

		if ( list[ i ].test( string ) ) return true;

	}

	return false;

}

function parseNode( element ) {

	if ( element.nodeType === 3 ) {

		if ( test( element.nodeValue ) ) {

			element.parentNode.style.textDecoration = 'line-through';

		}

	}

	var childNodes = element.childNodes;

	for ( var i = 0, l = childNodes.length; i < l; i ++ ) {

		parseNode( childNodes[ i ] );

	}

}

parseNode( document.body );
