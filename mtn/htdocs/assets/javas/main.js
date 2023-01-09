$(document).ready(function(){
    $('#home_page').load('home.html',get_language)
    get_offers()

    //Load home page onclick
    $('#home').on('click',()=>{
        load_home_page()
    })
    $('#mtn_brand').on('click',()=>{
        load_home_page()
    })

    //Load offers page onclick
    $('#offers').on('click',()=>{
        load_offers_page()
    })

    //Load vacancies page onclick
    $('#join_us').on('click',()=>{
        load_vacancies_page()
    })

    // Load register page oncclick
    $('#register').on('click',()=>{
        load_register_page()
    })

    // Load login page oncclick
    $('#login').on('click',()=>{
        load_login_page()
    })
    // $('#login_svg').on('click',()=>{
    //     load_login_page()
    // })

    //load bills page onclick
    $('#my_account').on('click',()=>{
        load_bills_page()
    })
    
    //lang change
    $('#ar').on('click',()=>{
        arabic()
    });
    $('#en').on('click',()=>{
        english()
    });

    function get_language(){
        if($('#lang').attr('lang')=="ar"){
            arabic()
        }
        else{
            english()
        }
    }

    function load_home_page(){
        $('#vacancies_page').css('display','none')
        $('#register_page').css('display','none')
        $('#offers_page').css('display','none')
        $('#login_page').css('display','none')
        $('#bills_page').css('display','none')
        $('#home_page').css('display','block')
        $('#home_page').load('home.html',get_language)
        get_offers()
    }

    function load_offers_page(){
        $('#vacancies_page').css('display','none')
        $('#home_page').css('display','none')
        $('#register_page').css('display','none')
        $('#login_page').css('display','none')
        $('#bills_page').css('display','none')
        $('#offers_page').css('display','block')
        $('#offers_page').load('offers.html',get_language)
        get_all_offers()
    }

    function load_vacancies_page(){
        $('#offers_page').css('display','none')
        $('#home_page').css('display','none')
        $('#register_page').css('display','none')
        $('#login_page').css('display','none')
        $('#bills_page').css('display','none')
        $('#vacancies_page').css('display','block')
        $('#vacancies_page').load('vacancies.html',get_language)
        get_vacancies()
    }

    function load_register_page(){
        $('#vacancies_page').css('display','none')
        $('#offers_page').css('display','none')
        $('#home_page').css('display','none')
        $('#login_page').css('display','none')
        $('#bills_page').css('display','none')
        $('#register_page').css('display','block')
        $('#register_page').load('register.html',get_language)
        get_user_bills()
    }

    function load_login_page(){
        $('#vacancies_page').css('display','none')
        $('#offers_page').css('display','none')
        $('#home_page').css('display','none')
        $('#register_page').css('display','none')
        $('#bills_page').css('display','none')
        $('#login_page').css('display','block')
        $('#login_page').load('login.html',get_language)
    }

    function load_bills_page(){
        $('#vacancies_page').css('display','none')
        $('#offers_page').css('display','none')
        $('#home_page').css('display','none')
        $('#register_page').css('display','none')
        $('#login_page').css('display','none')
        $('#bills_page').css('display','block')
        $('#bills_page').load('bills.html',get_language)
        get_user_bills()
    }

    //Translating to arabic
    function arabic(){
        $('#lang').attr('lang','ar');
        $('#lang').attr('dir','rtl');
        $('#search').attr('placeholder','بحث');
        $('#home').text("الصفحة الرئيسية");
        $('#offers').text("العروض");
        $('#join_us').text("الشواغر المتاحة");
        $('#register').text("انشاء حساب");
        $('#my_account').text("حسابي");
        $('#login').text("تسجيل الدخول");
        $('#7_text').html("اختر رقمك الجديد<br><strong>احجز رقمك<\strong>");
        $('#8_text').html("اعلانك سيصل للملايين<br><strong>الرسائل الاعلانية<\strong>");
        $('#9_text').html("احسبها بالميغا<br><strong>حاسبة البيانات<\strong>");
        $('.offers_word').html("<strong>أحدث العروض<\strong>");
        $('.copyright').html("© جميع الحقوق محفوظة. براء البيك, قيس حسون, سيملا المصري, محمد ايمن ليلا");
        $('.join_word').text("التقدم للشاغر");
        $('#account_information').text("ادخل معلومات حسابك");
        $('#user_name').text("اسم المستخدم");
        $('.password').text("كلمة المرور");
        $('#login_btn').text("تسجيل الدخول");
        $('#forget_password_btn').text("هل نسيت كلمة المرور ؟");
        $('#register_process').text("عملية التسجيل");
        $('#registeration_information').text("يرجى إدخال المعلومات الخاصة بعملية التسجيل");
        $('#_title').text("اللقب");
        $('#mr').text("السيد");
        $('#lady').text("السيدة");
        $('#ms').text("آنسة");
        $('#gentlemen').text("السادة");
        $('#dr').text("الدكتور");
        $('#other').text("أخرى");
        $('#firstName').attr('placeholder','الاسم الاول');
        $('#lastName').attr('placeholder','اسم العائلة');
        $('#gsmNumber').attr('placeholder','رقم الموبايل');
        $('#emailAddress').attr('placeholder','البريد الإلكتروني');
        $('#userName').attr('placeholder','اسم المستخدم');
        $('#hUserName').text("لطفا يمكن ان يكون اسم المستخدم اي نص بحد ادنى 8 احرف");
        $('#rPassw0rd').attr('placeholder','تأكيد كلمة المرور');
        $('#uPper').text("كلمة المرور مكونة من 8 محارف على الاقل وتحتوي احرف كبيرة وصغيرة وارقام");
        $('#address').attr('placeholder','لطفا ادخل العنوان');
        $('#_gender').text("الجنس");
        $('#male').text("ذكر");
        $('#female').text("انثى");
        $('#birth').text("   تاريخ الميلاد :   ");
        $('#_city').text("المدينة");
        $('#damascus').text("دمشق");
        $('#aleppo').text("حلب");
        $('#homs').text("حمص");
        $('#latakia').text("اللاذقية");
        $('#hama').text("حماة");
        $('#tartous').text("طرطوس");
        $('#suwayda').text("السويداء");
        $('#hasakah').text("الحسكة");
        $('#qamishli').text("القامشلي");
        $('#raqqa').text("الرقة");
        $('#kenitra').text("القنيطرة");
        $('#deir_ezzor').text("دير الزور");
        $('#job').text("المهنة");
        $('#job1').text("المحاسبة / المالية");
        $('#job2').text("تكنولوجيا المعلومات");
        $('#job3').text("الاستشارات");
        $('#job4').text("خدمة العملاء / الدعم");
        $('#job5').text("التعليم / التدريب");
        $('#job6').text("موظف حكومي / عسكري");
        $('#job7').text("إداري");
        $('#job8').text("الموارد البشرية / الإدارة");
        $('#job9').text("التصنيع / الإنتاج /العمليات");
        $('#job10').text("البحث و التطوير");
        $('#job11').text("التسويق");
        $('#job12').text("المبيعات");
        $('#job13').text("عمل خاص");
        $('#job14').text("طالب");
        $('#job15').text("تاجر / حرفي");
        $('#job16').text("أخرى");
        $('#acceptTerms').text("أوافق على الشروط و الأحكام");
        $('#Ssubmit').attr('value','إرسال');
        $('#p-number').text("رقم الهاتف");
        $('#m-amount').text("قيمة الدفعة");
        $('#bills_word').text("الدفعات:");
    }

    //Translating to English
    function english(){
        $('#lang').attr('lang','en');
        $('#lang').attr('dir','ltr');
        $('#search').attr('placeholder','Search');
        $('#home').text("Home");
        $('#offers').text("Offers");
        $('#customer_services').text("Join us");
        $('#register').text("Register");
        $('#my_account').text("My Account");
        $('#login').text("Login");
        $('#7_text').html("<strong>RESERVE YOUR NUMBER</strong><br>Chose your mobile number");
        $('#8_text').html("<strong>BULK SMS</strong><br>Reach your audience");
        $('#9_text').html("<strong>SPEED CALCULATOR</strong><br>Calculate your audience");
        $('.offers_word').html("<strong>OFFERS<\strong>");
        $('.copyright').html("© Baraa_109168, kais_154467, Simla_133641, mohammed_149376. All rights reserved.");
        $('#join_us').text("Join us");
        $('#account_information').text("Enter your account inforamtion");
        $('#user_name').text("User name");
        $('.password').text("Password");
        $('#login_btn').text("Login");
        $('#forget_password_btn').text("did you forget your password ?");
        $('#register_process').text("Registration");
        $('#registeration_information').text("Enter the registeration information");
        $('#_title').text("Title");
        $('#mr').text("Mr");
        $('#lady').text("Lady");
        $('#ms').text("Ms");
        $('#gentlemen').text("Gentlemen");
        $('#dr').text("Dr");
        $('#other').text("Other");
        $('#firstName').attr('placeholder','First Name');
        $('#lastNamr').attr('placeholder','Last Name');
        $('#gsmNumber').attr('placeholder','Mobile Number');
        $('#emailAddress').attr('placeholder','E-Mail');
        $('#userName').attr('placeholder','User Name');
        $('#hUserName').text("Any text with a minimum of 8 characters");
        $('#rPassw0rd').attr('placeholder','Confirm Password');
        $('#uPper').text("At least 8 characters and contain uppercase and lowercase letters and numbers");
        $('#address').attr('placeholder','Enter your address');
        $('#_gender').text("Gender");
        $('#male').text("Male");
        $('#female').text("Female");
        $('#birth').text("   Birth :   ");
        $('#_city').text("City");
        $('#damascus').text("Damascus");
        $('#aleppo').text("Aleppo");
        $('#homs').text("Homs");
        $('#latakia').text("Latakia");
        $('#hama').text("Hama");
        $('#tartous').text("Tartous");
        $('#suwayda').text("Al-Suwayda");
        $('#hasakah').text("Al-Hasakah");
        $('#qamishli').text("Al-Qamishli");
        $('#raqqa').text("Al-Raqqa");
        $('#kenitra').text("Al-Kenitra");
        $('#deir_ezzor').text("Deir-Ezzor");
        $('#job').text("Job");
        $('#job1').text("Financial Accounting");
        $('#job2').text("Information Technology");
        $('#job3').text("Consulting");
        $('#job4').text("Customer Service / Support");
        $('#job5').text("Education / Training");
        $('#job6').text("Government employee / Military");
        $('#job7').text("Administrative");
        $('#job8').text("Human Resources / Administration");
        $('#job9').text("Manufacturing / Production / Operations");
        $('#job10').text("Research and Development");
        $('#job11').text("Marketing");
        $('#job12').text("Sales");
        $('#job13').text("Private job");
        $('#job14').text("Student");
        $('#job15').text("Tradesman / Craftsman");
        $('#job16').text("Other");
        $('#acceptTerms').text("I agree to the terms and conditions");
        $('#Ssubmit').attr('value','Send');
        $('#p-number').text("Phone Number");
        $('#m-amount').text("Money Amount");
        $('#bills_word').text("Bills:");
    }

    // fetch offers data
    async function get_offers(){
        const responce= await  fetch("offers.json")
        const offers=await responce.json()
        const table = document.getElementById("offers_cards");
                let cards = "";
                for(let offer of offers){
                    cards += "<th><div class='offer_card'><a id='show_offer' href='#'><div class='offers_img'><img src="+ offer.img + " class='offers_img' alt='...'></div><div class='card-body'><h5 class='card-title offers_title'>" + offer.title + "</h5></div></a></div></th>";
                }
                table.innerHTML = cards;
    }

    // fetch offers data
    async function get_all_offers(){
        const responce= await  fetch("offers.json")
        const offers=await responce.json()
        const table = document.getElementById("offers_slider");
                let cards = "";
                for(let offer of offers){
                    cards += "<th><div class='offer_card'><a id='show_offer' href='#'><div class='offers_img'><img src="+ offer.img + " class='offers_img' alt='...'></div><div class='card-body'><h5 class='card-title offers_title'>" + offer.title + "</h5></div></a></div></th>";
                }
                table.innerHTML = cards;
    }

    // fetch vacancies data
    async function get_vacancies(){
        const responce= await  fetch("http://mtn.infinityfreeapp.com/php/jobs.php")
        const vacancies=await responce.json()
        const table = document.getElementById("vacancies_cards");
        let cards = "";
        for(let vacancy of vacancies){
            cards += "<div class='col'></div><div class='card vacancy_card' style='width: 22rem;'><img class='card-img-top' src="+ vacancy.photo_path +" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+vacancy.id+"</h5><p class='card-text'>"+vacancy.job_name +"</h5><p class='card-text'>"+vacancy.job_title+"</h5><p class='card-text'>"+vacancy.job_brunch+"</h5><p class='card-text'>"+ vacancy.job_degree +"</h5><p class='card-text'>"+ vacancy.Experience+"</h5><p class='card-text'>"+ vacancy.salary +"</p><a href='#' class='btn btn-primary join_word' id=''>Join us</a></div></div>"
        }
        table.innerHTML = cards;
    }

    //fetch user bills
    async function get_user_bills(){
        const responce= await  fetch("http://mtn.infinityfreeapp.com/php/bills.php?who=user")
        const bills=await responce.json()
        const table = document.getElementById("bill-row");
        let cards = "";
        for(let bill of bills){
            cards += "<tr><td>" + bill.phone_number + "</td><td>" + bill.money_amount + "</td></tr>"
        }
        table.innerHTML = cards;
    }



    // fetch offers data
    // function get_offers() {
    //     fetch("offers.json")
    //         .then(function(response){
    //             return response.json();
    //         })
    //         .then(function(offers){
    //             const table = document.getElementById("offers_cards");
    //             let cards = "";
    //             for(let offer of offers){
    //                 cards += "<th><div class='offer_card'><div class='offers_img'><img src="+ offer.img + " class='offers_img' alt='...'></div><div class='card-body'><h5 class='card-title offers_title'>" + offer.title + "</h5></div></div></th>";
    //             }
    //             table.innerHTML = cards;
    //         })
    // }

    // Mohammad section
    function fmOver(y){

        y.style.height="40px";
       }
    
       function fmOut(x)
       {
        x.style.height="28px"
       }
    
       function fValidate()
       {
        var pass=document.getElementById('passw0rd');
        var upper=document.getElementById('uPper');
        var lower =document.getElementById('lOwer');
        var num=document.getElementById('nUmber');
        var len=document.getElementById("lEngth");
    
    
        // Check if pass value contain a number
    
        if (pass.value.match(/[0-9]/))
        {
           num.style.color= 'green';
        }
        else
        {
            num.style.color='red';
        }
    
        // Check if pass value contain a Upper Char
    
        if (pass.value.match(/[A-Z]/))
        {
            upper.style.color= 'green';
        }
        else
        {
            upper.style.color='red';
        }
    
        // Check if pass value contain a Lower Char
    
        if (pass.value.match(/[a-z]/))
        {
            lower.style.color= 'green';
        }
        else
        {
            lower.style.color='red';
        }
    
        // Checking The Length Of password
    
        if (pass.value.length > 8)
        {
            len.style.color='green';
        }
        else
        {
            len.style.color='red'
        }
    
    
    
    
    
       }
    
       // Check The password match
    
       function fPvalidate ()
       {
     //  var repass=getElementById('rPassw0rd');
       // var pass=getElementById('passw0rd');
    
    
        
        
        
    
        
        if (document.getElementById('passw0rd').value == document.getElementById('rPassw0rd').value)
        {
          document.getElementById('mMatch').innerHTML ="كلمتا السر متطابقتان";
          document.getElementById('mMatch').style.color='green';
    
          
        }
        else
        {
            document.getElementById('mMatch').innerHTML ="كلمتا السر غير  متطابقتان";
            document.getElementById('mMatch').style.color='red';
          
        }
       }
    
       function fUsernameCheck()
       {
        if (document.getElementById('userName').value.length > 8 )
        {
            document.getElementById('hUserName').innerHTML="الاسم المقترح مقبول";
            document.getElementById('hUserName').style.color='green';
        }
        else
        {
            document.getElementById('hUserName').innerHTML="الاسم المقترح غير مقبول";
            document.getElementById('hUserName').style.color='red';
        }
    
       }
    
        function vaildateForm()
        {
            var fn=document.forms['regForm']['firstName'].value;
            var ln=document.forms['regForm']['lastName'].value;
            var gn=document.forms['regForm']['gender'];
            var ctry=document.forms['regForm']['city'];
            var un=document.forms['regForm']['userName'];
            var ps=document.forms['regForm']['passw0rd'];
            var rps=document.forms['regForm']['rPassw0rd'];
    
            if (fn==null || fn=='')
            {
                alert('يجب إدخال الاسم الأول ');
                return false;
            }
           
            else if (ln == null || ln == '')
            {
                alert('يجب إدخال اسم العائلة : ');
                return false;
            }
    
            else if (un.value.length < 8)
            {
                alert ('يجب ان يتكون اسم المستخدم من 8 محارف على الاقل :');
            }
           
            else if (ctry.selectedIndex==0)
            {
                alert('ادخل اسم المدينة');
                return false;
            }
    
           else if (document.getElementById('passw0rd').value !== document.getElementById('rPassw0rd').value)
        {
          
                   alert ('كلمتا السر غير  متطابقتان:');
                   return false;
          
        }
        
            
        }
})