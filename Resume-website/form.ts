let Name: any = document.getElementById('Name')

let Designation: any = document.getElementById('des')
let phone: any = document.getElementById('phone')
let email: any = document.getElementById('email')
let address: any = document.getElementById('add')
let passing_year1: any = document.getElementById('pass1')
let degree1: any = document.getElementById('deg1')
let institute1: any = document.getElementById('inst1')
let passing_year2: any = document.getElementById('pass2')
let degree2: any = document.getElementById('deg2')
let institute2: any = document.getElementById('inst2')
let skill1: any = document.getElementById('ski1')
let skill2: any = document.getElementById('ski2')
let skill3: any = document.getElementById('ski3')
let skill4: any = document.getElementById('ski4')
let language1: any = document.getElementById('lan1')
let language2: any = document.getElementById('lan2')

let Bio: any = document.getElementById('profileSum')
let Job_title2: any = document.getElementById('job2')
let start_date2: any = document.getElementById('sta2')
let end_date2: any = document.getElementById('end2')
let company2: any = document.getElementById('com2')
let location012: any = document.getElementById('loc2')
let Achivement12: any = document.getElementById('ach12')
let Achivement22: any = document.getElementById('ach22')
let Achivement32: any = document.getElementById('ach32')
//3rd
let Job_title3: any = document.getElementById('job3')
let start_date3: any = document.getElementById('sta3')
let end_date3: any = document.getElementById('end3')
let company3: any = document.getElementById('com3')
let location013: any = document.getElementById('loc3')
let Achivement13: any = document.getElementById('ach13')
let Achivement23: any = document.getElementById('ach23')
let Achivement33: any = document.getElementById('ach33')

let pic: any = document.getElementById('pic')

let submitButton: any = document.getElementById('btnsubmit')
let form = document.getElementById('form')
form?.addEventListener('submit', (event) => {
   event.preventDefault()

   localStorage.setItem("Name", Name.value)
   localStorage.setItem("Designation", Designation.value)
   localStorage.setItem("phone", phone.value)
   localStorage.setItem("email", email.value)
   localStorage.setItem("address", address.value)
   localStorage.setItem("year", passing_year1.value)
   localStorage.setItem("degree1", degree1.value)
   localStorage.setItem("institute1", institute1.value)
   localStorage.setItem("passing_year2", passing_year2.value)
   localStorage.setItem("degree2", degree2.value)
   localStorage.setItem("institute2", institute2.value)
   localStorage.setItem("skill1", skill1.value)
   localStorage.setItem("skill2", skill2.value)
   localStorage.setItem("skill3", skill3.value)
   localStorage.setItem("skill4", skill4.value)
   localStorage.setItem("language1", language1.value)
   localStorage.setItem("language2", language2.value)

   localStorage.setItem("profileSum", Bio.value)

   // 2nd
   localStorage.setItem("Job_titlem", Job_title2.value)
   localStorage.setItem("start_date2", start_date2.value)
   localStorage.setItem("end_date2", end_date2.value)
   localStorage.setItem("company2", company2.value)
   localStorage.setItem("location012", location012.value)

   localStorage.setItem("Achivement12", Achivement12.value)
   localStorage.setItem("Achivement22", Achivement22.value)
   localStorage.setItem("Achivement32", Achivement32.value)

   // 3rd
   localStorage.setItem("Job_title3", Job_title3.value)
   localStorage.setItem("start_date3", start_date3.value)
   localStorage.setItem("end_date3", end_date3.value)
   localStorage.setItem("company3", company3.value)
   localStorage.setItem("location013", location013.value)

   localStorage.setItem("Achivement13", Achivement13.value)
   localStorage.setItem("Achivement23", Achivement23.value)
   localStorage.setItem("Achivement33", Achivement33.value)







if (pic.files && pic.files[0]) {
      let reader = new FileReader()
      reader.addEventListener("load", () => {
         let textImage: any = reader.result
         localStorage.setItem("profile_pic", textImage)
      })
      reader.readAsDataURL(pic.files[0])
   }
   window.location.href = "./resume.html"
})