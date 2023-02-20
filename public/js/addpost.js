

const validRepoUrl = /^https?:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;

const newPostHandler = async (event) => {
    event.preventDefault();
    const date = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    const hour = date.toLocaleTimeString([], options);
    const dateString = date.toDateString();
    const splitDate = dateString.split(' ');
    const formattedDate = splitDate.slice(1).join(' ');
    const data_created = `${formattedDate} ${hour}`;


    const github_repo = document.querySelector('#repo').value.trim();
    const title = document.querySelector('#title').value
    const description  = document.querySelector('#desc').value
    const skills = document.querySelector('#skills').value
    const email = document.querySelector('#email').value.trim();

    if (github_repo && validRepoUrl.test(github_repo) && title && description && skills && email) {
        
            console.log(github_repo, title, description, email, skills, data_created);
            const response = await fetch(`/api/user/newpost`, {
                method: 'POST',
                body: JSON.stringify({ github_repo, title, description, email, skills, data_created}),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/profile');
                alert("Post Created!");
            } else {
                alert(response.statusText);
            }
    }
    else {
        alert('Please fill out all fields and enter a valid GitHub repo URL')
    }
};




document
    .querySelector('#post')
    .addEventListener('click', newPostHandler);