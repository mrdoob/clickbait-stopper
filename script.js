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
	/pictures of/,
	/things that will/i,
	/nip slips/i,
	/we need to talk about/i,
	/signs you['’]?re/i,
	/you can/i,
	/what could possibly/i,
	/when you read these/i,
	/until you see/i,
	/didn['’]t know what/i,
	/what they found/i,
	/what she found/i,
	/what he found/i,
	/who['’]d thougt/i,
	/all she did was/i,
	/all he did was/i,
	/all they did was/i,
	/what this/i,
	/when he/i,
	/when she/i,
	/when they/i,
	/when this man/i,
	/when this woman/i,
	/when this baby/i,
	/when this child/i,
	/when this puppy/i,
	/when this dog/i,
	/when this kitten/i,
	/this man/i,
	/this woman/i,
	/this child/i,
	/this baby/i,
	/never realized/i,
	/something great happened/i,
	/something happened/i
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
