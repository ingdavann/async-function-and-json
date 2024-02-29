'use strict';

import { getData } from "../store/fetchApi.js"
import { productCard } from "../components/productCard.js"

const renderArea = document.querySelector('#render-area');

const products = await getData("products");


products.map((product) => {
    renderArea.innerHTML += productCard(product);
})

