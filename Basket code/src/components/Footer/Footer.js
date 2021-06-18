import React from 'react';
import FilterLink from '../Basket/FilterLink';

const Footer = () => (
  <footer>
	  <div>
		  <FilterLink filter="SHOW_ALL">All Products</FilterLink>
		  {', '}
		  <FilterLink filter="SHOW_ACTIVE">Remaining</FilterLink>
		  {', '}
		  <FilterLink filter="SHOW_COMPLETED">Purchased Items</FilterLink>
	  </div>
  </footer>
);

export default Footer;