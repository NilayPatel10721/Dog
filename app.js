
const imgs = document.querySelector('.dog-img');
const next = document.querySelector('.next');
const check = document.querySelector('#checkbox');
const loader = document.querySelector('.loader');


fetch('https://dog.ceo/api/breed/hound/images/random')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    change(data.message);
  });

function change(images) {
  
  loader.style.display = 'block';

  imgs.onload = function () {
    
    loader.style.display = 'none';
   
  };

  imgs.src = images;
  console.log(imgs.src);
}
imgs.style.display = 'none'

next.addEventListener('click', function() {
 
  loader.style.display = 'block';
    imgs.style.display = 'none'
  fetch('https://dog.ceo/api/breed/hound/images/random')
    .then(res => res.json())
    .then(data => {
      change(data.message);
    });
   
  
  check.checked = false;
});

imgs.addEventListener('load' ,()=>{
    imgs.style.display = 'block'
})

