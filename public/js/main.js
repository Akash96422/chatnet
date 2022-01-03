const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const socket = io();

// Join chatroom
socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

// Message from server
socket.on('message', (message) => {
  console.log(message);
  outputMessage(message);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get message text
  let msg = e.target.elements.msg.value;

  msg = msg.trim();

  if (!msg) {
    return false;
  }

  // Emit message to server
  socket.emit('chatMessage', msg);

  // Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  const p = document.createElement('p');
  p.classList.add('meta');
  p.innerText = message.username;
  p.innerHTML += `<span>${message.time}</span>`;
  div.appendChild(p);
  const para = document.createElement('p');
  para.classList.add('text');
  para.innerText = message.text;
  div.appendChild(para);
  document.querySelector('.chat-messages').appendChild(div);
}

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.innerText = user.username;
    userList.appendChild(li);
  });
}

//Prompt the user before leave chat room
document.getElementById('leave-btn').addEventListener('click', () => {
  const leaveRoom = confirm('Are you sure you want to leave the chatroom?');
  if (leaveRoom) {
    window.location = '../index.html';
  } else {
  }
});

var aud =new Audio();
aud.src="Notification Tone ! Message Tone.mp3";

function tone(){
      aud.play();
}

setInterval(() => {
  createSnowFlake();   
},300);

function createSnowFlake(){
     const Snow_Flake = document.createElement('i');
     Snow_Flake.classList.add('fas');
     Snow_Flake.classList.add('fa-snowflake');
     Snow_Flake.style.left= Math.random() * window.innerWidth + 'px';
     Snow_Flake.style.top= Math.random() * window.innerHeight + 'px';
     Snow_Flake.style.animationDuration = Math.random() * 3+2+'5';
     Snow_Flake.style.opacity = Math.random();
     Snow_Flake.style.fontSize= Math.random() * 10 + 10 + 'px';

     document.body.appendChild(Snow_Flake);

     setTimeout(() => {
           Snow_Flake.remove();
     },5000);

}

const text= document.getElementById('text');
const prog = "welcome to chatnet. it's great to meet you";
let idx=1;

setInterval(() => {
      writetext();
},300);

function writetext(){
      text.innerText = prog.slice(0, idx);
      idx++;
      if(idx > prog.length){
            idx=100;// to stop increase the idx value 
      }
}

