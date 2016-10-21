// create a baitlist to check our page content against
const list = [
	/^\d+ (\w+ )?(animals|pictures|lessons|movies|secrets|shows|stories|things|times|trailers|tumblr|tweets)/i,
	/^\d+ of the \w+est/i,
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
	/how \w+ are you/i,
	/may affect/i,
	/never realized/i,
	/(pictures|photos) of/i,
	/secret of/i,
	/signs you['’]?re/i,
	/somebody needs to/i,
	/things that will/i,
	/trump/i,
	/until you see/i,
	/you (need to|should) (know|watch)/i,
	/we bet you can/i,
	/we can (tell|guess) (what )?your/i,
	/we need to talk about/i,
	/what could possibly/i,
	/what happens/i,
	/what (he|she|they) found/i,
	/what I learned about/i,
	/what this/i,
	/what to expect/i,
	/when (he|she|they)/i,
	/when this (man|woman|baby|child|puppy|dog|kitten)/i,
	/when you read these/i,
	/who['’]d thougt/i,
	/why we really shouldn['’]?t/i,
	/with this one/i,
	/will never tell/i,
	/won['’]?t believe/i,
	/\s(celebrit|epic|fantastic|genius|heartbreaking|incredibl|powerful|shocking|teen|terribl|unusual|weirdly)/i
];

// function to compare string to our baitlist.
function isClickbait( string ) {
	// is the string short than 20 or longer than 100 characters? Probably not a title.
	if ( string.length < 20 || string.length > 100 ) return false;
	// it is? let's compare it to our baitlist
	return list.some( function ( clickbait, i ) {
		// if it matches, log the offending string to the console and return it to our strike function
		if ( clickbait.test( string ) ) {

			console.log( i, string );
			return true;

		}

	} );

}

// found some clickbait? Let's strike it through
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

	const observer = new MutationObserver( function ( mutations ) {

		mutations.forEach( function ( mutation ) {

			mutation.addedNodes.forEach( function ( node ) {

				if ( node.nodeType === Node.ELEMENT_NODE ) strikeClickbaitLinks( node );

			} );

		} );

	} );

	observer.observe( document.body, { childList: true, subtree: true } );

}

strikeClickbaitLinks( document.body );
// invoke the initObserver function to start the checking process
initObserver();
