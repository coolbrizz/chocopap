const nbArticles = document.querySelector('.nbArticle')
const result = document.getElementById('result')
const articles = document.getElementById('articles')
const empty = document.querySelector('.empty')
const cardbasket = document.querySelector('.cardbasket')
const valide = document.querySelector('.valide')
const totalPanier = document.querySelector('.total')
const openCategoryElement = document.querySelector('.inputSearchElement')
const openCategoryPrice = document.querySelector('.range-container')
const openCategoryNote = document.querySelector('.rangeNote')
const openCategory = document.querySelector('.openCategory')
const openPrices = document.querySelector('.openPrice')
const openNotes = document.querySelector('.openNote')

let dataChocolate = []; 
let nombreArticles="";
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
