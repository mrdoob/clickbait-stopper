const list = [
	/^\d+ (pictures|movies|shows|stories|things|trailers|tweets)/i,
	/^can you/i,
	/^here['’]s (how|what)/i,
	/^this could/i,
	/all (he|she|they) did was/i,
	/all the best/i,
	/best comeback/i,
	/can['’]t handle/i,
	/can teach us about/i,
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
	/you should watch/i,
	/we can (tell|guess) (what )?your/i,
	/we need to talk about/i,
	/what could possibly/i,
	/what happens/i,
	/what (he|she|they) found/i,
	/what I learned about/i,
	/what this/i,
	/what to expect/i,
	/what you need to know/i,
	/when (he|she|they)/i,
	/when this (man|woman|baby|child|puppy|dog|kitten)/i,
	/when you read these/i,
	/who['’]d thougt/i,
	/why we really shouldn['’]?t/i,
	/with this one/i,
	/won['’]?t believe/i,
	/\s(celebrit|epic|fantastic|heartbreaking|incredibl|powerful|shocking|teen|terribl|unusual)/i
];


function isClickbait( string ) {

	if ( string.length < 20 || string.length > 100 ) return false;

	return list.some( function ( clickbait, i ) {

		if ( clickbait.test( string ) ) {

			console.log( i, string );
			return true;

		}

	} );

}


function strikeIfClickbait( element ) {

	if ( isClickbait( element.textContent.trim() ) ) {

		element.style.textDecoration = 'line-through';

	}

}

function strikeClickbaitLinks( element ) {

	const elements = element.getElementsByTagName( 'a' );
	[ ...elements ].forEach( strikeIfClickbait );

}

function initObserver() {

	const target = document.body;

	const config = {
		childList: true,
		subtree: true
	};

	const observer = new MutationObserver( function ( mutations ) {

		mutations.forEach( function ( mutation ) {

			[ ...mutation.addedNodes ].forEach( function ( node ) {

				if ( node.nodeType === Node.ELEMENT_NODE ) strikeClickbaitLinks( node );

			} );

		} );

	} );

	observer.observe( target, config );

}

strikeClickbaitLinks( document.body );

initObserver();
