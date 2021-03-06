import React from 'react';
import { connect } from 'react-redux';
import { addBasketItem } from '../../Redux/Actions/actions';

let AddBasketItem = ({ dispatch }) => {
	let input;

	return (
	  <div>
		  <form
			onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) { return }
				dispatch(addBasketItem(input.value));
				input.value = '';
			}}
		  >
			  <input
				ref={node => {
					input = node
				}}
			  />
			  <button type="submit">Add BasketItem</button>
		  </form>
	  </div>
	)
};
AddBasketItem = connect()(AddBasketItem);

export default AddBasketItem;