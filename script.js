let addbtn = document.getElementsByClassName("btn-success")[0];

let i = 1;

let addTodo = () => {
  let text = document.getElementsByClassName("form-control")[0].value;
  while (i != 10) {
    if (text != '') {
      console.log(text)
      document.getElementById("notodo").innerHTML = ""

      localStorage.setItem(`note${i}`, text); //stores the notes

      let todos = document.createElement("div");
      todos.className = `alert bg-info d-flex justify-content-between align-items-center fs-5 text-body-emphasis`;
      todos.innerHTML = `${text} <button type="button" class="btn btn-danger">DELETE</button>`
      document.getElementsByClassName("container")[0].append(todos)
      document.getElementsByClassName("form-control")[0].value = ``;

      let deleteBtns = document.querySelectorAll(".btn-danger")
      for (item of deleteBtns) {
        item.addEventListener('click', (e) => {
          localStorage.removeItem(`note${i}`);
          console.log(i)
          e.target.parentElement.remove()
        })
      }
    }
    else {
      document.getElementsByClassName("form-control")[0].value = `Please enter some text !`;

    }
    i++;
    break;
  }
}

addbtn.addEventListener('click', addTodo);