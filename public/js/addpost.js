



const newPostHandler = async (event) => {
    event.preventDefault();
    const date = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    const hour = date.toLocaleTimeString([], options);
    const dateString = date.toDateString();
    const splitDate = dateString.split(' ');
    const formattedDate = splitDate.slice(1).join(' ');
    const time = `${formattedDate} ${hour}`;


    const repo = document.querySelector('#repo').value.trim();
    const title = document.querySelector('#title').value.trim();
    const desc = document.querySelector('#desc').value.trim();
    const skills = document.querySelector('#skills').value.trim();
    const email = document.querySelector('#email').value.trim();

    if (repo && title && desc && skills && email) {
        {
            console.log(repo, title, desc, email, skills, time);
            const response = await fetch(`/api/user/newpost`, {
                method: 'POST',
                body: JSON.stringify({ repo, title, desc, skills, time }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                // document.location.replace('/');
                alert("Post Created!");
            } else {
                alert(response.statusText);
            }

        }
    }
};




document
    .querySelector('#post')
    .addEventListener('click', newPostHandler);