const title = document.getElementById('title')
const list = document.getElementById('fruList')
const veggies = document.getElementById('vegList')
const headings = document.querySelectorAll('h3');
const grocery = document.getElementsByClassName('vitamins');
const selling = document.getElementById('selling');
const fruits = document.getElementById('fruits');
const vegetables = document.getElementById('vegetables');
const h1Element = document.querySelector('h1'); 
const pElement = document.querySelector('p');
const image = document.getElementById('frutIMage')
const heading = document.getElementsByTagName = ('header')

pElement.style.textAlign = 'centre'
selling.style.textAlign = 'centre'
   
h1Element.style.textAlign = 'center';
pElement.style.textAlign = 'centre';

headings.forEach(element => {
    element.style.textTransform = 'uppercase'
})

const newListItem = document.createElement('li');


newListItem.textContent = 'apple'
list.appendChild(newListItem)
heading.style
const newVeggies = document.createElement('li');
newVeggies.textContent = 'spinach'
veggies.appendChild(newVeggies)

document.body.style.backgroundColor = '#C0C0C0'
document.body.style.justifyItems = 'center'



title.style.color = 'green'
title.style.textAlign = "centre"



vitamins.style.display = 'flex'
vitamins.style.gap = '20%'
vitamins.style.marginLeft = '-15%'

fruits.style.border = '1px,solid'
fruits.style.padding = '5%'
fruits.style.borderBlockColor = 'black'
fruits.style.borderRadius = '5%'

vegetables.style.border = '1px,solid'
vegetables.style.borderBlockColor = 'black'
vegetables.style.padding = '5%'
vegetables.style.borderRadius = '5%'

const buyButton = document.createElement('button')
fruits.appendChild(buyButton)
buyButton.textContent = "Buy now"
buyButton.style.background = 'none';
buyButton.style.border = 'none';
buyButton.style.backgroundColor = 'green';
buyButton.style.padding = '12px  16px'
buyButton.style.borderRadius = '5px'
buyButton.style.color = 'white'
buyButton.style.cursor = 'pointer'
buyButton.style.width = '90%'
buyButton.style.marginTop = '5%'

const buyVeggies = document.createElement('button')
vegetables.appendChild(buyVeggies)
buyVeggies.textContent = "Buy now"
buyVeggies.style.background = 'none';
buyVeggies.style.border = 'none';
buyVeggies.style.backgroundColor = 'green';
buyVeggies.style.padding = '12px  16px'
buyVeggies.style.borderRadius = '5px'
buyVeggies.style.color = 'white'
buyVeggies.style.cursor = 'pointer'
buyVeggies.style.marginLeft = '10%'
buyVeggies.style.width = '90%'
























