var chico = [
  {description:"Flumes",
  picture:"http://static.panoramio.com/photos/large/37573219.jpg",
  from:"panoramio.com"},
  {description:"Bidwell",
  picture:"https://upload.wikimedia.org/wikipedia/commons/3/3e/Bidwell_Park_Chico.jpg",
  from:"wikimedia.org"},
  {description:"Sierra Nevada brewery",
  picture:"https://c1.staticflickr.com/3/2745/4070583043_44cbdf99c7_b.jpg",
  from:"staticflickr.com"},
  {description:"Bear hole",
  picture:"http://static.panoramio.com/photos/large/13056243.jpg",
  from:"panoramio.com"},
  {description:"Upper Bidwell", picture:"https://farm4.staticflickr.com/3374/3508801408_e7f774a2e0_z.jpg",
  from:"staticflickr.com"}
];
var current;
function shuffleGallery()
{
var random;
do{
random = Math.floor(Math.random() * chico.length);
} while(chico[random] == current);
current = chico[random];
document.getElementById('picture').src=current.picture;
document.getElementById('caption').innerHTML=current.description;
document.getElementById('source').innerHTML="Image courtesy of:"+current.from;
}
