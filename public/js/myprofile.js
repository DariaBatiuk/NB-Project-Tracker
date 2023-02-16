
// document.addEventListener('DOMContentLoaded', function () {
  const editBtn = document.querySelectorAll('.edit');
  const editBox = document.querySelector('#editbox');
  const editBoxClose = document.querySelector('#closebtn');
  const editBoxSave = document.querySelector('#savebtn');
  const deleteBtn = document.querySelector('.del')
  const saveBtn = document.querySelector('#saveBtn')
const posts = document.querySelector('.card')
  
editBoxClose.addEventListener('click', function () {
    // add style to editBox
    editBox.style.display = 'none'
  });


  editBtn.forEach(function (button) {
    button.addEventListener('click', function (event) {
   
      editBox.style.display = 'flex'
      editBox.style.justifyContent = 'center'
      editBox.style.alignItems = 'center'
      editBox.style.position = 'fixed'
      editBox.style.width = '100%'
      editBox.style.height = '100%'
      editBox.style.backgroundColor = 'rgba(0,0,0,0.5)'
      const id = event.target.dataset.idProject
      console.log(id)

      saveBtn.addEventListener('click', function () {
       if (title && desc && skills && email && repo) {
        const url = `api/user/edit/${id}`
        const title = document.querySelector('#title').value.trim();
        const desc = document.querySelector('#desc').value.trim();
        const skills = document.querySelector('#skills').value.trim();
        const email = document.querySelector('#email').value.trim();
        const repo = document.querySelector('#repo').value.trim();
        fetch(url, {
          method: 'PUT',
          body: JSON.stringify({ title, desc, skills, email, repo }),
          headers: { 'Content-Type': 'application/json' },
        }).then(function (response) {
          window.location.href = '/profile'
        })

      }
      else {
        window.alert('Please fill out all fields')
      }
      
    })
  })
  })
deleteBtn.forEach(function (button) {
    button.addEventListener('click', function (event) {
     const id = event.target.dataset.idProject
      const url = `api/user/delete/${id}`
      fetch(url, {
        method: 'DELETE'
      }).then(function (response) {
        window.location.href = '/profile'

      })

    })
  })



