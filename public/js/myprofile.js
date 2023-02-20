

  const editBtn = document.querySelectorAll('.edit');
  const editBox = document.querySelector('#editbox');
  const editBoxClose = document.querySelector('#closebtn');
  const deleteBtn = document.querySelectorAll('.del')
  const saveBtn = document.querySelector('#saveBtn')



  
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
      const ancestor = event.target.closest('[data-id-project]');
      const id = ancestor.dataset.idProject;
  
      const title = event.target.closest('.card').querySelector('.title').innerText
      const description = event.target.closest('.card').querySelector('.desc').innerText
      const skills = event.target.closest('.card').querySelector('.skills').innerText
      const email = event.target.closest('.card').querySelector('.email').getAttribute('href').replace('mailto:', '')
      const github_repo = event.target.closest('.card').querySelector('.repo').getAttribute('href')
  
      document.querySelector('#title').value = title
      document.querySelector('#desc').value = description
      document.querySelector('#skills').value = skills
      document.querySelector('#email').value = email
      document.querySelector('#repo').value = github_repo
  
  
  
      saveBtn.addEventListener('click', function () {
        edit(id)
      }
      )
     
  })

  })

  

 async function edit (id) {
  
    console.log(id)
    const github_repo = document.querySelector('#repo').value.trim();
    const title = document.querySelector('#title').value
    const description  = document.querySelector('#desc').value
    const skills = document.querySelector('#skills').value
    const email = document.querySelector('#email').value.trim();

     if (title && desc && skills && email && repo) {
      const url = `api/user/edit/${id}`
     const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({ github_repo, title, description, email, skills }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (response.ok) {
        alert("Post Updated!");
        document.location.replace('/profile');
      }
      else {
        alert(response.statusText);
      }
  
    }
    else {
      alert('Please fill out all fields')
      return
    }
    
  }





deleteBtn.forEach(function (button) {
    button.addEventListener('click', async function (event) {
      const ancestor = event.target.closest('[data-id-project]');
      const id = ancestor.dataset.idProject;
      console.log(id)
      const url = `api/user/delete/${id}`
     const response = await fetch(url, {
        method: 'DELETE'
      })

      if (response.ok) {
        alert("Post Deleted!");
        document.location.replace('/profile');
      }
      else {
        alert(response.statusText);
      }


    })
  
  })





    
