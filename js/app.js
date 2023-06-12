
// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];


//select and cache the <main> element in a variable named mainEl
 const mainEl = document.querySelector('main')

 //set the background color of mainEl using the 'var(--main-bg)'
 mainEl.style.backgroundColor = 'var(--main-bg)'

 //set the content of mainEl to <h1> SEI Rocks!<h1>
 mainEl.innerHTML = '<h1>SEI Rocks!<h1>' ;

 //add a class of flex-ctr mainEl
 mainEl.classList.add('flex-ctr');
 console.log(mainEl)
 //select and cache <nav id="top-menu"> element in a variable named topMenuEl
 const topMenuEl = document.getElementById('top-menu')

 //set the height topMenuEl element to be 100%
 topMenuEl.style.height = '100%' 

 //set the background color of topMenuEl using the --top-menu-bg
 topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'


 //add a class of flex-around to topMenuEl
 topMenuEl.classList.add('flex-around') ;
 console.log(topMenuEl)
 //Iterate over the entire menuLinks array and for each "link" object:
 menuLinks.forEach(function(link) {
 //Create an <a> element.
 const linkEl = document.createElement('a');
 
 //On the new element, *add an href attribute with its value set to the href property of the "link" object.
 linkEl.setAttribute('href', link.href);
 
 ///*textContent
 //Set the new element's content to the value of the text property of the "link" object.
 linkEl.textContent = link.text;
 //Append the new element to the topMenuEl element.
 topMenuEl.appendChild(linkEl);

 });

///*getElementById
 //Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

  const subMenuEl = document.getElementById('sub-menu');

///* style.height
 //Set the height subMenuEl element to be 100%.

 subMenuEl.style.height = '100%'


 //Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.
 //subMenuEl {
  //--main-bg-color: lightgray;

 subMenuEl.style.backgroundColor = 'var(--main-bg)' ;

 
// Add the class of flex-around to the subMenuEl element.


subMenuEl.classList.add('flex-around') ;

//Set the CSS position property of subMenuEl to the value of absolute.


subMenuEl.style.position = "absolute" 


//Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.top = '0' ;

 //}
//5.1 Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = document.querySelectorAll('#top-menu a') ;


//Declare a global showingSubMenu variable and initialize it to false;

let showingSubMenu = false ;


// 5.2 Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  const link = evt.target;
  if (link.tagName !== 'A') return;
  console.log(link.textContent);

//The first line of code of the event listener function should call the event object's preventDefault() method.
//The second line of code function should immediately return if the element clicked was not an <a> element.
// Hint: DOM elements have a tagName property.

//console.log the content of the <a> to verify the handler is working.


//5.3 This feature "deselects" the menu item if it's clicked when it's currently active, resulting in the sub-menu sliding up as well.


///* Asking for if statement 
//Next in the event listener, if the clicked <a> link has a class of active:
 //Remove the active class from the clicked <a> element.
if (link.classList.contains('active')) {
  link.classList.remove('active');

//Set the showingSubMenu to false.
showingSubMenu = false; 
//Set the CSS top property of subMenuEl to 0.
subMenuEl.style.top = '0';

//return; from the event listener function.
return;
}




})
