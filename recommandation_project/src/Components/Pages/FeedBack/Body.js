import React from 'react';
import StarRatings from 'react-star-ratings';

const defaultBodyStyles = {
	padding: '10px',
	fontSize: '14px',
	display: 'block !important',
	textAlign:'center'
}

const defaultMessageStyles = {
	boxSizing: 'border-box',
	padding: '10px 10px 0 10px',
   overflow: 'hidden',
	width: '370px',
	fontFamily: 'arial'
}

const Body = ({ bodyText, bodyStyles, nameInput, messageInput, emailInput, ratingInput, handleMessageInput, showNameInput, showMessageInput, showRatingInput, showEmailInput, numberOfStars }) => (
	<div style={bodyStyles}>
		<div style={defaultMessageStyles}>
			<p>{bodyText}</p>
		</div>
		{/* {showNameInput &&
			<div>
				<input type='text' rows="5" value={nameInput} placeholder="Entrer Votre Login" required onChange={e => handleMessageInput('name', e.target.value)} style={defaultMessageStyles} />
			</div>
		} */}

		{showEmailInput &&
			<div>
				<input type='text' rows="5" value={emailInput} placeholder="Entrer Votre Email" required onChange={e => handleMessageInput('Email', e.target.value)} style={defaultMessageStyles} />
			</div>
		}
		{showMessageInput &&
			<div>
				<textarea rows="5" value={messageInput} placeholder="Entrer Votre Avis" onChange={e => handleMessageInput('Message', e.target.value)} style={defaultMessageStyles} />
			</div>
		}
		{showRatingInput &&
			<div style={defaultMessageStyles}>
				<StarRatings 
					rating={ratingInput}
					starRatedColor="#023C59"
					changeRating={newRating => handleMessageInput('Rating', newRating)}
					numberOfStars={numberOfStars}
					name='Rating'
					starDimension="35px"
					starSpacing="10px"
				/>
			</div>
		}
	</div>
)

Body.defaultProps = {
	bodyText: 'Need help? Have feedback? I\'m a human so please be nice and I\'ll fix it!',
	bodyStyles: defaultBodyStyles,
	showEmailInput: true,
	showRatingInput: true,
	showMessageInput: true,
	showNameInput: true,
	numberOfStars: 5
}

export default Body;
