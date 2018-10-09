const submit = document.querySelector('.submit');
const input = document.querySelector('.user-input');
const chat = document.querySelector('.chat');
submit.onclick = () => {
  const val = input.value;
  if (val.length < 1) return;
  fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({query: `
    mutation {
      addMessage(value: "${val}") {
          name
        }
    }
    `}),
  });
  input.value = '';
};
const getMessages = () => {
  setTimeout(() => {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query: ` {messages{name, value}}`}),
    }).then((r)=>r.json()).then( ({data}) => {
      chat.innerHTML = data.messages.reduce( (acc, m) => {
        return acc + `
          <div><span class="bold">${m.name}</span>: ${m.value}</div>
        `;
      }, '');
      getMessages();
    });
  }, 500);
};
getMessages();
