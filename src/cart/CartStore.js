import { writable } from 'svelte/store';

/**
 * @typedef Product
 * @type {object}
 * @property {string} id - product ID.
 * @property {string} name - product name.
 * @property {number} price - product price.
 */

/**
 * Represents users Cart.
 * @typedef shoppingBasket
 * @type {object} 
 * @property {Product[]} items - ...
 * @property {() => number} total - ...
 */


/** @type {shoppingBasket} */
const cartObject = {
  items: [],
  total: () => {
    let totalBasketPrice = 0
    cartObject.items.forEach(item => totalBasketPrice += item.price )
    return totalBasketPrice
  }
}

const numberOfItems = writable(0);

function createCart() {
	const { subscribe, set, update } = writable(cartObject);

	return {
    subscribe,
    /** @param {Product} item */
    add: (item) => {
      console.log('add product to the cart')
      update(cart => cart.items = [...cart.items, item])
      numberOfItems.set(cartObject.items.length)
      console.log(cartObject)
    },
		// decrement: () => update(n => n - 1),
		empty: () => set(cartObject)
	};
}

export const cart = createCart();
export const itemsCount = numberOfItems