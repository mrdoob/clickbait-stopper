var list = [
	/^\d+/,
	/all [he|she|they] did was/i,
	/can teach us about/i,
	/didn['’]t know what/i,
	/get rid of/i,
	/[heartbreaking|incredibly|powerful|shocking]/i,
	/may affect/i,
	/never realized/i,
	/[pictures|photos] of/i,
	/secret of/i,
	/signs you['’]?re/i,
	/somebody needs to/i,
	/things that will/i,
	/until you see/i,
	/we need to talk about/i,
	/what could possibly/i,
	/what happens/i,
	/what [he|she|they] found/i,
	/what I learned about/i,
	/what this/i,
	/what you need to know/i,
	/when [he|she|they]/i,
	/when this [man|woman|baby|child|puppy|dog|kitten]/i,
	/when you read these/i,
	/who['’]d thougt/i,
	/why we really shouldn['’]?t/i,
	/won['’]?t believe/i,
	/you can/i,
	/you won['’]?t believe/i,
	/this hot new/i,
	/signs you['`]re/i,
	/how one man/i,
	/how one woman/i,
	/with this one/i
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
