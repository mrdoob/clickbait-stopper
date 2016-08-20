const list = [
	/^\d+ /,
	/^can you/i,
	/all (he|she|they) did was/i,
	/all the best/i,
	/can teach us about/i,
	/(celebrit|epic|fantastic|heartbreaking|incredibl|powerful|shocking|teen|terribl|unusual)/i,
	/didn['’]t know what/i,
	/get rid of/i,
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
	/you won['’]?t believe/i
];

function isClickbait( string ) {

	if ( string.length < 20 || string.length > 100 ) return false;

		return list.some( function( clickbait, i ) {

				if ( clickbait.test( string ) ) {

						console.log( i, string );
						return true;

				}

		} );

}

let node;
const nodeIterator = document.createNodeIterator( document.body, NodeFilter.SHOW_TEXT );

while ( node = nodeIterator.nextNode() ) {

	if ( isClickbait( node.textContent.trim() ) ) {

		node.parentNode.style.textDecoration = 'line-through';

	}

}
