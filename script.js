var list = [
	/^\d+/,
	/^can you/i,
	/^this (dad|mom|hot)/i,
	/all (he|she|they) did was/i,
	/can teach us about/i,
	/didn['’]t know what/i,
	/get rid of/i,
	/(epic|fantastic|heartbreaking|incredibl|powerful|shocking|teen|terribl|unusual)/i,
	/how one (man|woman)/i,
	/may affect/i,
	/never realized/i,
	/(pictures|photos) of/i,
	/secret of/i,
	/signs you['’]?re/i,
	/somebody needs to/i,
	/things that will/i,
	/trump/i,
	/until you see/i,
	/we need to talk about/i,
	/what could possibly/i,
	/what happens/i,
	/what (he|she|they) found/i,
	/what I learned about/i,
	/what this/i,
	/what you need to know/i,
	/when (he|she|they)/i,
	/when this (man|woman|baby|child|puppy|dog|kitten)/i,
	/when you read these/i,
	/who['’]d thougt/i,
	/why we really shouldn['’]?t/i,
	/with this one/i,
	/won['’]?t believe/i,
	/you can/i,
	/you won['’]?t believe/i
];

function test( string ) {

	if ( string.length < 15 || string.length > 100 ) return false;

	for ( var i = 0, l = list.length; i < l; i ++ ) {

		if ( list[ i ].test( string ) ) return true;

	}

	return false;

}

function parseNode( element ) {

	var iter = document.createNodeIterator ( element, NodeFilter.SHOW_TEXT );

	while (textnode = iter.nextNode()) {

		if ( test( textnode.textContent.trim() ) ) {

			textnode.parentNode.style.textDecoration = 'line-through';

		}

	}


}

parseNode( document.body );
