import { getPosts } from './fetch.js';

let container = document.getElementById("posts-container");
function createPost(post) {
  // create all elements needed
  const box = document.createElement("article");
  const postTitle = document.createElement("div");
  const author = document.createElement("div");
  const avatar = document.createElement("img");
  const info = document.createElement("div");
  const name = document.createElement("span");
  const date = document.createElement("span");
  const indention = document.createElement("div");
  const identionTitle = document.createElement("h2");
  const bottom = document.createElement("div");
  const details = document.createElement("div");
  const reactions = document.createElement("div");
  const sectionReactions = document.createElement("section");
  const reactionCounterSpan = document.createElement("span");
  const reactionText = document.createElement("p");
  const comments = document.createElement("div");
  const commentImg = document.createElement("img");
  const addComment = document.createElement("span");
  const save = document.createElement("div");
  const minReadP = document.createElement("p");
  const minReadCounterSpan = document.createElement("span");
  const minReadSvg = document.createElement("img");
  const br = document.createElement("br");
  const mainContainer = document.createElement("div");
  const buttonsContainer = document.createElement("div");
  const editButton = document.createElement("a");
  const deleteButton = document.createElement("a");

  // Add all classes, atributes and ID's

  // Boton Editar
  editButton.id = "editPost";
  editButton.href = `/store.html?id=${post.id}`;
  editButton.type = "button";
  editButton.innerHTML = "Editar";
  // Boton Borrar
  deleteButton.id = "deletePost";
  deleteButton.type = "button";
  deleteButton.innerHTML = "Eliminar";
  // Boton Container
  buttonsContainer.classList.add("buttonsContainer");
  // Main Container
  mainContainer.classList.add("mainContainer");

  // Container de Card
  box.classList.add("card");
  box.classList.add("post-section");
  // PostTitle Class added
  postTitle.classList.add("post-title");
  // Author Class Added
  author.classList.add("post-author");
  // Avatar Class and Ids
  avatar.classList.add("avatar");
  avatar.classList.add("radius-50");
  avatar.id = "avatar";
  avatar.alt = "Avatar";
  // Info Class
  info.classList.add("post-title-info");
  // name ID added
  name.id = "name";
  // Date Id Added
  date.id = "date";
  // botton info Dov
  indention.classList.add("post-indention");
  // botton Title
  identionTitle.classList.add("title");
  // botton tittle ID
  identionTitle.id = "title";
  // bottom class added
  bottom.classList.add("bottom");
  // container de reactiones, comentarios y hora de visualizacion
  details.classList.add("details");
  // reactions classes added
  reactions.classList.add("card");
  reactions.classList.add("reactions");
  // section reactions class added
  sectionReactions.classList.add("reactions-counter");
  // Reaction ID added
  reactionCounterSpan.id = "reaction-counter";
  // reaction Text Classes added
  reactionText.classList.add("d-none");
  reactionText.classList.add("d-sm-contents");
  // comments classes added
  comments.classList.add("card");
  comments.classList.add("comments");
  // comments svg class y alt added
  commentImg.classList.add("icon");
  commentImg.alt = "comment";
  // add comment class added
  addComment.classList.add("d-none");
  addComment.classList.add("d-sm-contents");
  // save class added
  save.classList.add("save");
  // min Read counter ID added
  minReadCounterSpan.id = "min-read-counter";
  // min Read alt added to the svg
  minReadSvg.alt = "icon-bookmark";

  // Agregar, texto e imagenes de pruebas
  avatar.src = post.user.profile_image;
  commentImg.src = "./img/svg/icon-comment.svg";
  minReadSvg.src = "./img/svg/icon-bookmark.svg";

  // Formatear la fecha de creación
  var createdDate = new Date(post.created_at);
  var month = createdDate.toLocaleString('default', { month: 'short' });
  var day = createdDate.getDate();
  var formattedDate = month + ' ' + day;

  // informacion de uso
  name.innerHTML = post.user.name;
  date.innerHTML = formattedDate;
  identionTitle.innerHTML = post.title;
  reactionCounterSpan.innerHTML = post.reactions_count;
  reactionText.innerHTML = "Reaction";
  addComment.innerHTML = post.comments_count + " comments" ?? "Add Comment";
  minReadCounterSpan.innerHTML = post.reading_time_minutes;
  minReadP.innerHTML = "Min Read";

  // author div
  info.append(name, br, date);
  //Main Container
  mainContainer.append(avatar, info);
  //Buttons Container
  buttonsContainer.append(editButton, deleteButton);
  //Author Container
  author.append(mainContainer, buttonsContainer);
  //PostTitle Container, incluye el Avatar, nombre, fecha y botones
  postTitle.append(author);

  // Reactions
  sectionReactions.append(reactionCounterSpan, reactionText);
  reactions.append(sectionReactions);

  // Comments
  comments.append(commentImg, addComment);

  // Reactions and Comments div
  details.append(reactions, comments);

  // Min Read
  save.append(minReadCounterSpan, minReadP, minReadSvg);

  //bottom div
  bottom.append(details, save);

  indention.append(identionTitle, bottom);

  box.append(postTitle, indention);
  container.append(box);

  deleteButton.addEventListener("click", function(event){
    const Seleccionado = post.id
    const URL = ('https://devto-api.kodinc.dev/api/articulos/'+Seleccionado)
    fetch(URL, {
        method: 'DELETE'
    }).
    then(response => {
        if (!response.ok) {
            throw new Error('No se pudo eliminar')
        }
        getPosts().then((data) => {
            // Verificar si los datos son válidos antes de iterar sobre ellos
            if (Array.isArray(data)) {
               // Iterar sobre los datos obtenidos
               setPosts(data);
            } else {
               console.error("Los datos de la API no son válidos:", data);
            }
         })
        .catch((error) => {
            // Manejar cualquier error al obtener los datos de la API
            console.error("Error al obtener los datos de la API:", error);
         }); 
    })
    .catch(error => {
        console.error('Error',error)
    })
  })
}
const setPosts = (posts) => {
    let container = document.getElementById("posts-container");
    container.innerHTML = "";
    posts.forEach((post) => {
       // Llamar a la función createPost para crear un post con los datos de la API
       createPost(post);
    });
 }


export { createPost, setPosts };
