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

function isClickbait( string ) {
	if ( string.length < 15 || string.length > 100 ) return false;
	return list.some( clickbait => clickbait.test( string ) );
}

function parseNode( element ) {
	if ( element.nodeType === 3 && isClickbait( element.nodeValue.trim() ) ) {
		element.parentNode.style.textDecoration = 'line-through';
	}

	[...element.childNodes].forEach( parseNode );
}

parseNode( document.body );
