'use client'
import NotificationDisplay from "./NotificationDisplay";


// const socket = io.connect("https://steep-mountainous-avatar.glitch.me");


// socket io server deploy app link: https://glitch.com/edit/#!/steep-mountainous-avatar
// socket io server deploy live link: https://steep-mountainous-avatar.glitch.me

function NotificationAdmin() { 

const username ="Admin";
  return (
     
    <div className="">
     
      <NotificationDisplay
       
        username={username}
        room={500}
      />
    </div>

  );
}

export default NotificationAdmin;