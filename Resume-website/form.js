"use strict";

let form = document.getElementById('form');
let Name = document.getElementById('Name');
let Designation = document.getElementById('des');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let address = document.getElementById('add');
let passing_year1 = document.getElementById('pass1');
let degree1 = document.getElementById('deg1');
let institute1 = document.getElementById('inst1');
let skill1 = document.getElementById('ski1');
let skill2 = document.getElementById('ski2');
let skill3 = document.getElementById('ski3');
let skill4 = document.getElementById('ski4');
let Job_title2 = document.getElementById('job2');
let start_date2 = document.getElementById('sta2');
let end_date2 = document.getElementById('end2');
let company2 = document.getElementById('com2');
let location012 = document.getElementById('loc2');
let Achivement12 = document.getElementById('ach12');
let Achivement22 = document.getElementById('ach22');
let Achivement32 = document.getElementById('ach32');
let pic = document.getElementById('pic');

form?.addEventListener('submit', (event) => {
    event.preventDefault();

    localStorage.setItem("Name", Name.value);
    localStorage.setItem("Designation", Designation.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("passing_year1", passing_year1.value);
    localStorage.setItem("degree1", degree1.value);
    localStorage.setItem("institute1", institute1.value);
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    localStorage.setItem("skill3", skill3.value);
    localStorage.setItem("skill4", skill4.value);
    localStorage.setItem("Job_title2", Job_title2.value);
    localStorage.setItem("start_date2", start_date2.value);
    localStorage.setItem("end_date2", end_date2.value);
    localStorage.setItem("company2", company2.value);
    localStorage.setItem("location012", location012.value);
    localStorage.setItem("Achivement12", Achivement12.value);
    localStorage.setItem("Achivement22", Achivement22.value);
    localStorage.setItem("Achivement32", Achivement32.value);

    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.onload = () => {
            localStorage.setItem("profile_pic", reader.result);
        };
        reader.readAsDataURL(pic.files[0]);
    }

    window.location.href = "./resume.html";
});
