function displayLinks() {
    var navbarLinksDiv = document.getElementById("navbar-links-div");
    var navbarIcon = document.getElementById("navbar-icon");
    navbarLinksDiv.classList.toggle("open");
    navbarIcon.setAttribute(
      "name",
      navbarLinksDiv.classList.contains("open")
        ? "close-outline"
        : "menu-outline"
    );
  }
  document.getElementById('submitMessage').addEventListener('submit',(event)=>{
    event.preventDefault();
    var nameValue = document.getElementById('senderName').value;
    var emailValue = document.getElementById('senderEmail').value;
    var msgValue = document.getElementById('msgValue').value;
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "gcanjit741@gmail.com",
      Password: "502EF27087BDECA2A20081A0F2EA365B6081",
      To: "gcanjit741@gmail.com",
      From: "gcanjit741@gmail.com",
      Subject : "Mail from " + nameValue +" with email "+ emailValue,
      Body : msgValue
    }).then((message) => {
        if(message === "OK"){
            alert("Your message has been send")
        }
        else{
            alert("Message cannot be send");
        }
    });
    document.getElementById('senderName').value = "";
    document.getElementById('senderEmail').value = "";
     document.getElementById('msgValue').value = "";
  })
  