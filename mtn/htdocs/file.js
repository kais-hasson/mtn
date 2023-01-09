   alert("lskdjsljd")
 function get_offers(){
        const responce=  fetch("http://mtn.infinityfreeapp.com/php/offers.php?who=admin")
        const offers= responce.json()
        console.log(offers)
        for(i=0;i<offers.length;i++) {
            document.getElementById("offers_slider").innerHTML += '<tr><td>' + offers[i].offers_id+'</td><td>'+offers[i].offers_name+'</td><td>'+
                offers[i].message+'</td><td>'+offers[i].minutes+'</td><td>'+offers[i].internet+'</td><td>'+offers[i].money_value+'</td><td>'+offers[i].offer_code+'</td></tr>';
        }
        document.write=offers;
    }
      get_offers()