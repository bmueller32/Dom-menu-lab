
// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


//select and cache the <main> element in a variable named mainEl
 const mainEl = document.querySelector('main')

 //set the background color of mainEl using the 'var(--main-bg)'
 mainEl.style.backgroundColor = 'var(--main-bg)'

 //set the content of mainEl to <h1> SEI Rocks!<h1>
 mainEl.innerHTML = '<h1>SEI Rocks!<h1>' ;

 //add a class of flex-ctr mainEl
 mainEl.classList.add('flex-ctr');

 //select and cache <nav id="top-menu"> element in a variable named topMenuEl
 const topMenuEl = document.getElementById('top-menu');

 //set the height topMenuEl element to be 100%
 topMenuEl.style.height = '100%' 

 //set the background color of topMenuEl using the --top-menu-bg
 topMenuEl.style.backgroundColor = 'var(--main-bg)'


 //add a class of flex-around to topMenuEl
 topMenuEl.classList.add('flex-around') ;

 //Iterate over the entire menuLinks array and for each "link" object:
 menuLinks.forEach(function(link) {
 //Create an <a> element.
 var linkEl = document.createElement('a');
 
 //On the new element, add an href attribute with its value set to the href property of the "link" object.
 linkEl.setAttribute('href', link.href);
 //Set the new element's content to the value of the text property of the "link" object.
 linkEl.textContent = link.text;
 //Append the new element to the topMenuEl element.
 topMenuEl.appendChild(linkEl);
});