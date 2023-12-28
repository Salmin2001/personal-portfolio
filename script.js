
    let contactForm = document.getElementById("contact-form")
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      let name = document.getElementById("name");
      let email = document.getElementById("email");
      let subject = document.getElementById("subject");
      let message = document.getElementById("comment");
      let error = document.getElementById("error-message")
      let success = document.getElementById("sent-message")
      let formControl=document.querySelectorAll("form-control")
      
      if (name.value == "" || email.value == "" || subject.value == "" || message.value == "") {
       
        if (name.value == '') {
          name.classList.add('error')
        }
        if (email.value == '') {
          email.classList.add('error')
        }
        if (subject.value == '') {
          subject.classList.add('error')
        }
        if (message.value == '') {
          message.classList.add('error')
        }

      
        error.style.display = "block";
      }
      else {
        error.style.display = "none";
        success.style.display = "block";
         setTimeout(() => {
          location.reload()
         },1000);
   



      }


    })
  