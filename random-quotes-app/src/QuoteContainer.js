import React, { useState, useEffect } from 'react';

function QuoteContainer() {
	const [ quote, setQuote ] = useState('');
	const [ author, setAuthor ] = useState('');

	useEffect(() => {
		getQuotes();
	}, []);

	const getQuotes = () => {
		const inspo = `https://type.fit/api/quotes`;
		fetch(inspo)
      .then((res) => res.json())
      .then((data) => {
    
			let randomNum = Math.floor(Math.random() * data.length);
	
			setQuote(data[randomNum]); 
			setAuthor(data[randomNum]); 
		});
	};


	const handleClick = () => {
		getQuotes();
	};


	return (
			<div className="quotes-container">
				<div id="quotes-box">
					<div id="text">{quote.text}</div>
					<div id="author"> -{author.author}</div>
                    <div id='btn'>
                    <button onClick={handleClick} id="new-quote">
						New quote
					</button><br></br><br></br>
          <a href={'https://twitter.com/intent/tweet?text=hello'}
          target="_blank"
          rel='noopener noreferrer' className='social'>Tweet</a>
                    </div>
				</div>
			</div>
	);
}

export default QuoteContainer;