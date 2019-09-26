const submit = document.getElementById('send');
const message = document.querySelector('input');
const video = document.querySelector('video');
const messages = document.getElementById('messages');

const logout = document.querySelector('button');

logout.onclick = () => {
  fetch('https://hwong0305.garagescript.org/logout', {
    method: 'POST',
    follow: 'manual',
  }).then(() => {
    window.location = 'https://hwong0305.garagescript.org/login';
  });
};

navigator.mediaDevices
  .getUserMedia({
    audio: 'true',
    video: {
      width: 480,
      height: 360,
    },
  })
  .then(stream => {
    video.srcObject = stream;
    video.onloadedmetadata = e => video.play();
  })
  .catch(err => console.log(err));

const updateUserList = () => {
  fetch('https://hwong0305.garagescript.org/users')
    .then(response => response.json())
    .then(response => {
      if (messages.children.length < 2) {
        const userList = Object.keys(response);
        const newMessages = document.createElement('div');
        newMessages.classList.add('temp');
        let cur = 0;
        userList.forEach(user => {
          const userImage = new Image();
          userImage.width = 300;
          userImage.height = 225;
          userImage.src = `images/${user}.png?${Date.now()}`;
          userImage.classList.add('img-thumbnail');
          newMessages.appendChild(userImage);
          userImage.onload = () => {
            if (cur === userList.length - 1) {
              newMessages.classList.remove('temp');
              messages.append(newMessages);
              while (messages.children.length > 1) {
                messages.removeChild(messages.firstChild);
              }
            }
            cur++;
          };
        });
      }
    });
};

submit.onclick = e => {
  e.preventDefault();
  const canvas = document.createElement('canvas');
  canvas.width = 480;
  canvas.height = 360;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0);
  fetch('https://hwong0305.garagescript.org/newMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'manual',
    body: JSON.stringify({
      imageData: canvas.toDataURL().split(',')[1],
      message: message.value,
    }),
  }).then(() => {
    message.value = '';
    updateUserList();
  });
};

updateUserList();
setInterval(updateUserList, 1000);
