var list = [
	/why we really shouldn\'t/i,
	/what I learned about/i,
	/can teach us about/i,
	/powerful photos/i,
	/heartbreaking/i,
	/may affect/i,
	/somebody needs to/i,
	/^\d+/
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
