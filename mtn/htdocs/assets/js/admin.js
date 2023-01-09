
      async function get_admins(){
        const responce= await  fetch("http://mtn.infinityfreeapp.com/php/admin.php?who=admins")
        const admins=await responce.json()
        console.log(admins)
        for(i=0;i<admins.length;i++) {
            document.getElementById("admins").innerHTML += "<tr><td>" + admins[i].id+ "</td><td>"+admins[i].user_name + "</td><td>"+ admins[i].password+"</td><td>"+ admins[i].email+"</td></tr>";
        }
        }
      get_admins()
     // <!--==========================================================================================================================================================================-->
      async function get_users(){
        const responce= await  fetch("http://mtn.infinityfreeapp.com/php/admin.php?who=users")
        const users=await responce.json()
        console.log(users)
        for(i=0;i<users.length;i++) {
            document.getElementById("users").innerHTML += '<tr><td>' + users[i].id+'</td><td>'+ users[i].title+'</td><td>'+ users[i].f_name + '</td><td>'+
                 users[i].l_name+'</td><td>' + users[i].phone_number+'</td><td>'+
                 users[i].city+'</td><td>' + users[i].address+'</td><td>' + users[i].occupation+'</td><td>'+ users[i].birthday+'</td><td>' + users[i].user_name+'</td><td>'+
                 users[i].email + '</td><td>' + users[i].password + '</td></tr>';
        }
    }
      get_users()
     // <!--==========================================================================================================================================================================-->
      async function get_offers(){
        const responce= await  fetch("http://mtn.infinityfreeapp.com/php/offers.php?who=admin")
        const offers=await responce.json()
        console.log(offers)
        for(i=0;i<offers.length;i++) {
            document.getElementById("offers").innerHTML += '<tr><td>' + offers[i].offers_id+'</td><td>'+offers[i].offers_name+'</td><td>'+
                offers[i].message+'</td><td>'+offers[i].minutes+'</td><td>'+offers[i].internet+'</td><td>'+offers[i].money_value+'</td><td>'+offers[i].offer_code+'</td></tr>';
        }
    }
      get_offers()
     // <!--==========================================================================================================================================================================-->
      async function get_bills(){
          const responce= await  fetch("http://mtn.infinityfreeapp.com/php/bills.php?who=admin")
          const bills=await responce.json()
          console.log(bills)
          for(i=0;i<bills.length;i++) {
              document.getElementById("bills").innerHTML += "<tr><td>" + bills[i].id+ "</td><td>"+ bills[i].phone_number+ "</td><td>"+ bills[i].money_amount+"</td><td>"+ bills[i].user_name+"</td></tr>";
          }
      }
      get_bills()
     // <!--==========================================================================================================================================================================-->
      async function get_jobs(){
          const responce= await  fetch("http://mtn.infinityfreeapp.com/php/jobs.php?")
          const jobs=await responce.json()
          console.log(jobs)
          for(i=0;i<jobs.length;i++) {
              document.getElementById("jobs").innerHTML += '<tr><td>' + jobs[i].id+'</td><td>'+ jobs[i].job_name+'</td><td>'+ jobs[i].job_brunch+'</td><td>'+ jobs[i].job_degree+'</td><td>'+ jobs[i].Experience+'</td><td>'+ jobs[i].job_title + '</td><td>'+
                  jobs[i].salary+'</td><td>'+'<img height="100" width="100" src=' +jobs[i].photo_path +'>' +'</td></tr>';
          }
      }
      get_jobs()
