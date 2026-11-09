// //Affichage et Sélection 
// // Ex1

// const prenom = "Amina";

// const span=document.querySelector('#firstname');
// span.textContent=prenom;

// Ex2
const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};
//  const article=document.querySelector('.card');
//  const h2=document.querySelector('#user-name');
//  h2.textContent=user.nom;
//  const paragraphe=document.querySelector('#user-email');
//  paragraphe.textContent=user.email;
//  const p=document.querySelector('#user-role');
//  p.textContent=user.role;

// Ex3

const article=document.querySelector('.user-card');

article.querySelector('.card-title').textContent = user.nom;
article.querySelector('.card-email').textContent = user.email;
article.querySelector('.card-role').textContent = user.role;






//   Événements basiques
// Ex1
// const btn = document.getElementById("btn");
 
// btn.addEventListener("click", () => {
//       console.log("Le bouton a été cliqué !");
//   alert("Le bouton a été cliqué !");
// });

// Ex2
// const btn = document.getElementById("btn");
// btn.addEventListener("click", (e) => {
//     e.target.textContent="C'est cliqué !"

// })





// Style et affichage
// Ex1
// const p=document.querySelector("#text");
// const button=document.querySelector("#style-btn");

// button.addEventListener("click",()=>{
//     p.style.color="red";
//     p.style.fontSize="15px";
// })
// // Ex2
// const button=document.querySelector('#toggle-btn');
// const div=document.querySelector('#details');
// button.addEventListener("click",()=>{
//     if(div.style.display==='none'){
// div.style.display='block';
//     }else{
// div.style.display='none';
// }
// })



// // Création dynamique
// // Ex1
// const h=document.querySelector("h2")
//  const paragraphe=document.createElement('p');
//  paragraphe.textContent="il sera créé en JavaScript ";
//  h.appendChild(paragraphe);
// // Ex2





// const imageUrl = "/images/image.png";
// const div=document.querySelector('#image-container');
// const img=document.createElement('img');
// img.setAttribute('src',imageUrl);
// img.setAttribute('alt',"image");
// div.appendChild(img);






// Formulaires
// Ex1
// const div=document.querySelector(".raw");
// const input=document.querySelector("#name-input");
// const button=document.querySelector("#validate-btn");
// const h3=document.querySelector("#output");
// button.addEventListener("click",()=>{
//     h3.textContent=input.value;
// })


// Ex2

// const input=document.querySelector('#live-input')
// const strong=document.querySelector('#live-output')

//  input.addEventListener('input',(e)=>{
//     strong.textContent=e.target.value;
//  });


//Délégation d'événements
// Ex1

// const ul=document.querySelector("#todo");
// const input=document.querySelector('#todo-input');
// const button=document.querySelector("#add-btn");
// button.addEventListener('click',()=>{
//     if(input.value.trim()==="") return;
   
//      const li=document.createElement('li');

//     li.textContent=input.value;
//     ul.appendChild(li)
  
//     input.value="";


// })
// Ex2
const ul=document.querySelector("#todo");
 const input=document.querySelector('#todo-input');
 const button=document.querySelector("#add-btn");
 button.addEventListener('click',()=>{
     if(input.value.trim()==="") return;
const li=document.createElement('li');
     li.textContent=input.value;
    ul.appendChild(li)
  
    input.value="";

 })
