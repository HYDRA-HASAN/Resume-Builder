"use strict";
let myname = localStorage.getItem("Name");
window.addEventListener('load', () => {
    let name = localStorage.getItem("Name");
    let Designation = localStorage.getItem("Designation");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let address = localStorage.getItem("address");
    let year = localStorage.getItem("year");
    let degree1 = localStorage.getItem("degree1");
    let institute1 = localStorage.getItem("institute1");
    let passing_year2 = localStorage.getItem("passing_year2");
    let degree2 = localStorage.getItem("degree2");
    let institute2 = localStorage.getItem("institute2");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let skill4 = localStorage.getItem("skill4");
    let language1 = localStorage.getItem("language1");
    let language2 = localStorage.getItem("language2");
    let Bio = localStorage.getItem("profileSum");
    let picture = localStorage.getItem("profile_pic");
    // 2nd
    let start_date2 = localStorage.getItem("start_date2");
    let end_date2 = localStorage.getItem("end_date2");
    let company2 = localStorage.getItem("company2");
    let location012 = localStorage.getItem("location012");
    let Job_title2 = localStorage.getItem("Job_title2");
    let Achivement12 = localStorage.getItem("Achivement12");
    let Achivement22 = localStorage.getItem("Achivement22");
    let Achivement32 = localStorage.getItem("Achivement32");
    //3rd
    let start_date13 = localStorage.getItem("start_date3");
    let end_date13 = localStorage.getItem("end_date3");
    let company13 = localStorage.getItem("company3");
    let location013 = localStorage.getItem("location013");
    let Job_title13 = localStorage.getItem("Job_title3");
    let Achivement13 = localStorage.getItem("Achivement13");
    let Achivement23 = localStorage.getItem("Achivement23");
    let Achivement33 = localStorage.getItem("Achivement33");
    let Name = document.getElementById('Name');
    Name.textContent = myname;
    let designation = document.getElementById('designation');
    designation.textContent = Designation;
    let phone1 = document.getElementById('phone1');
    phone1.textContent = phone;
    let email1 = document.getElementById('email1');
    email1.textContent = email;
    let address1 = document.getElementById('address1');
    address1.textContent = address;
    let year1 = document.getElementById('year1');
    year1.textContent = year;
    let degree = document.getElementById('degree');
    degree.textContent = degree1;
    let instituteName = document.getElementById('instituteName');
    instituteName.textContent = institute1;
    let year2 = document.getElementById('year2');
    year2.textContent = passing_year2;
    let degree3 = document.getElementById('degree3');
    degree3.textContent = degree2;
    let instituteName2 = document.getElementById('instituteName2');
    instituteName2.textContent = institute2;
    let skill001 = document.getElementById('skill001');
    skill001.textContent = skill1;
    let skill002 = document.getElementById('skill002');
    skill002.textContent = skill2;
    let skill003 = document.getElementById('skill003');
    skill003.textContent = skill3;
    let skill004 = document.getElementById('skill004');
    skill004.textContent = skill4;
    let lang1 = document.getElementById('lang1');
    lang1.textContent = language1;
    let lang2 = document.getElementById('lang2');
    lang2.textContent = language2;
    //............................
    let Bio2 = document.getElementById('profileSum');
    Bio2.textContent = Bio;
    // 2nd
    //.....................................
    let jobTitle2 = document.getElementById('jobTitle2');
    jobTitle2.textContent = Job_title2;
    let startDate2 = document.getElementById('startDate2');
    startDate2.textContent = start_date2;
    let endDate2 = document.getElementById('endDate2');
    endDate2.textContent = end_date2;
    let companyName2 = document.getElementById('companyName2');
    companyName2.textContent = company2;
    let location2 = document.getElementById('location2');
    location2.textContent = location012;
    let achive12 = document.getElementById('achive12');
    achive12.textContent = Achivement12;
    let achive22 = document.getElementById('achive22');
    achive22.textContent = Achivement22;
    let achive32 = document.getElementById('achive32');
    achive32.textContent = Achivement32;
    ///...........................
    let jobTitle3 = document.getElementById('jobTitle3');
    jobTitle3.textContent = Job_title13;
    let startDate3 = document.getElementById('startDate3');
    startDate3.textContent = start_date13;
    let endDate3 = document.getElementById('endDate3');
    endDate3.textContent = end_date13;
    let companyName3 = document.getElementById('companyName3');
    companyName3.textContent = company13;
    let location3 = document.getElementById('location3');
    location3.textContent = location013;
    let achive13 = document.getElementById('achive13');
    achive13.textContent = Achivement13;
    let achive23 = document.getElementById('achive23');
    achive23.textContent = Achivement23;
    let achive33 = document.getElementById('achive33');
    achive33.textContent = Achivement33;
    let resimg = document.getElementById('resimg');
    resimg.src = picture;
});
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
let edit_btn = document.getElementById('edit_btn');
edit_btn?.addEventListener("click", () => {
    window.history.back();
});
let share_btn = document.getElementById("share_btn");
let anc = document.getElementById("anc");
let userName;
if (myname) {
    userName = myname.toLowerCase().replace(/\s+/g, "-");
}
else {
    userName = "user";
}
let baseUrl = "http://127.0.0.1:5500/Resume-website/resume.html";
let uniqUrl = `${baseUrl}?/${myname}`;
share_btn?.addEventListener("click", () => {
    anc?.setAttribute("href", uniqUrl);
});
let copy_btn = document.getElementById('copy_btn');
copy_btn?.addEventListener("click", () => {
    navigator.clipboard.writeText(uniqUrl).then(() => {
        alert("copy succful");
    });
});
