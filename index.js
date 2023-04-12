let data = [
  {
    description: "Lady with a red umbrella",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Alpha",
  },
  {
    description: "Flowers and some fruits",
    image:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Beta",
  },
  {
    description: "Beautiful scenery",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Gama",
  },
  {
    description: "Some kind of bird",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "loki",
  },
];

const ul = document.querySelector("ul");
const createListElements = () => {
    ul.innerHTML=''
  data.forEach((person, i) => {
    const li = document.createElement("li");
    li.setAttribute("list-pos", i);
    li.innerHTML = `
        <div class="user">
        <img src="${person.image}">
        <div class="info">
        <h2>${person.name}</h2>
        <p>${person.description}</P>
        </div>
        </div>
        <h1 class="icon">&#10978;</h1>
                `;
    ul.appendChild(li);
  });
  listenToEvent();
};
createListElements();
function listenToEvent() {
  let lists = ul.querySelectorAll("li"),current_pos , drop_pos;
  for (let li of lists) {
    li.draggable = true;

    li.ondragstart = function () {
        current_pos = this.getAttribute("list-pos");

    };

    li.ondragenter = () => li.classList.add("active");
    li.ondragleave = () => li.classList.remove("active");
    li.ondragend = function () {
      this.style.display = "flex";
      for (let active_list of lists){
        active_list.classList.remove("active");
      }
    };

    li.ondragover = (e) => e.preventDefault();
    li.ondrop = function(e){
        e.preventDefault();
        drop_pos = this.getAttribute("list-pos");
        data.splice(drop_pos,0,data.splice(current_pos,1)[0]);
        createListElements();
    }
  }
}
