import "./App.css";
import React, { useEffect, useState } from "react";

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const show = (setter) => {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

const checkWin = (correct, wrong, word) => {
  let status = 'win';
  
  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  });

  if(wrong.length === 6) status = 'lose';
  return status
}

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

const Word = ({ selectedWord, correctLetters }) => {
	return (
		<div className="word">
			{selectedWord.split("").map((letter, i) => {
				return (
					<span className="letter" key={i}>
						{correctLetters.includes(letter) ? letter : ""}
					</span>
				);
			})}
		</div>
	);
};

const WrongLetters = ({ wrongLetters }) => {
	return (
		<div className="wrong-letters-container">
			<div>
				{wrongLetters.length > 0 && <p>Wrong</p>}
				{wrongLetters
					.map((letter, i) => <span key={i}>{letter}</span>)
					.reduce(
						(prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
						null
					)}
			</div>
		</div>
	);
};

const Figure = ({ wrongLetters }) => {
	const errors = wrongLetters.length;

	return (
		<svg height="250" width="200" className="figure-container">
			<line x1="60" y1="20" x2="140" y2="20" />
			<line x1="140" y1="20" x2="140" y2="50" />
			<line x1="60" y1="20" x2="60" y2="230" />
			<line x1="20" y1="230" x2="100" y2="230" />

			{errors > 0 && <circle cx="140" cy="70" r="20" />}
			{errors > 1 && <line x1="140" y1="90" x2="140" y2="150" />}
			{errors > 2 && <line x1="140" y1="120" x2="120" y2="100" />}
			{errors > 3 && <line x1="140" y1="120" x2="160" y2="100" />}
			{errors > 4 && <line x1="140" y1="150" x2="120" y2="180" />}
			{errors > 5 && <line x1="140" y1="150" x2="160" y2="180" />}
		</svg>
	);
};

const Hangman = () => {
	const [isPlayable, setPlayable] = useState(true);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [showNotification, setShowNotification] = useState(false);

	useEffect(() => {
		const handleKeydown = (event) => {
			const { key, keyCode } = event;
			if (isPlayable && keyCode >= 65 && keyCode <= 90) {
				const letter = key.toLowerCase();
				if (selectedWord.includes(letter)) {
					if (!correctLetters.includes(letter)) {
						setCorrectLetters((currentLetters) => [...currentLetters, letter]);
					} else {
						show(setShowNotification);
					}
				} else {
					if (!wrongLetters.includes(letter)) {
						setWrongLetters((currentLetters) => [...currentLetters, letter]);
					} else {
						show(setShowNotification);
					}
				}
			}
		};
		window.addEventListener("keydown", handleKeydown);

		return () => window.removeEventListener("keydown", handleKeydown);
	}, [correctLetters, wrongLetters, isPlayable]);

	const playAgain = () => {
		setPlayable(true);
		setCorrectLetters([]);
		setWrongLetters([]);

		const random = Math.floor(Math.random() * words.length);
		selectedWord = words[random];
	};

	return (
		<>
			<h1>Hangman using React</h1>
			<p>Find the hidden word - Enter a letter</p>
			<div className="game-container">
				<Figure wrongLetters={wrongLetters} />
				<WrongLetters wrongLetters={wrongLetters} />
				<Word selectedWord={selectedWord} correctLetters={correctLetters} />
			</div>
			<Popup
				correctLetters={correctLetters}
				wrongLetters={wrongLetters}
				selectedWord={selectedWord}
				setPlayable={setPlayable}
				playAgain={playAgain}
			/>
			<Notification showNotification={showNotification} />
		</>
	);
};

export default Hangman;
