function fun1(image , place_name)
{
    var x=document.getElementById(image);
    var y = document.getElementById(place_name);

    y.style.color= 'rgb(96, 174, 251)'
    x.style.width="22.5rem";
    x.style.marginTop= "-0.5rem";
    x.style.transition= "all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55)";
}
function fun2(image , place_name)
{
    var x=document.getElementById(image);
    var y=document.getElementById(place_name);

    x.style.width="22rem";
    x.style.marginTop= "1rem";
    x.style.transition= "all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55)";
    y.style.color= 'black';
}

//sendemail
function sendemail() {
    var send = document.getElementById("send");
    var sending = document.getElementById("sending");
    var sent = document.getElementById("sent");
    send.style.visibility = "hidden";
    sending.style.visibility = "visible";
    var userid = "Gl6M_dGMAT3M0Wefs";
    emailjs.init(userid);
    var name = document.getElementById('con_name').value;
    var email = document.getElementById('con_email').value;
    var msg = document.getElementById('con_message').value;
    if (name == "") {
      alert("Please Enter Name");
      sending.style.visibility = "hidden";
      send.style.visibility = "visible";
    }
    else if (email == "") {
      alert("Please Enter Valid Email");
      sending.style.visibility = "hidden";
      send.style.visibility = "visible";
    }
    else if (msg == "") {
      alert("Please Enter Message");
      sending.style.visibility = "hidden";
      send.style.visibility = "visible";
    }
    else {
      var parameters = {
        from_name: name,
        from_email: email,
        message: msg
      };
      emailjs.send('service_pcpc', 'template_pcpc', parameters).then(function (res) {
        send.style.visibility = "hidden";
        sending.style.visibility = "hidden";
        sent.style.visibility = "visible";
        alert("Email Sent Successfully.");
      },
        reason => {
          alert("There was an error sending your email.");
        })
    }
  }
