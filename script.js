const Nav_tongger = document.querySelector(".nav-toggler");
Nav_tongger.addEventListener("click", toggleNav);
function toggleNav(){
    document.querySelector(".nav-toggler").classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}
document.addEventListener("click",function(a){
    if(a.target.closest(".nav-item")){
        toggleNav();
    }
})
window.addEventListener("scroll",function(){
    // console.log(this.pageYOffset)
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }
    else {
        document.querySelector(".header").classList.remove("sticky")
    }
})
const menuTabs = document.querySelector(".menu-taps") ;
menuTabs.addEventListener("click",function(e){
    if(e.target.classList.contains("menu-tap-item")&& !e.target.classList.contains("active"))
    {
        const target = e.target.getAttribute("data-target");
        // console.log(target);
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tap-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");

     }
})
const inputSearch = document.querySelector(".input-search")
const autoBox = document.querySelector(".autobox")

inputSearch.onkeyup = (e) => {
    let checkData = e.target.value;
    let dataArray = []
    if (checkData) {
        dataArray = recomentlist.filter((data)=>{
           return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase())
        })
        dataArray = dataArray.map((data)=>{
            return data = "<li>"+data+"</li>"
        })
        autoBox.classList.add("active")
        showadress (dataArray)
        let liItem = autoBox.querySelectorAll("li")
        for (let i=0;i<liItem.length;i++){
              liItem[i].addEventListener("click",function(){
           inputSearch.value = liItem[i].innerHTML
           autoBox.classList.remove("active")
         })
        }
        }
    else {
        autoBox.classList.remove("active")
    }
  
   
}
function showadress (list){
    let listData
    if(!list.length) {
        listData = "<li>"+inputSearch.value+"</li>"
    }
    else {
        listData = list.join("")
    }
    autoBox.innerHTML = listData
}



let recomentlist =[
    "Hà Nội",
    "Hải Phòng",
    "Hà Giang",
    "Hải Dương",
    "Hà Tĩnh",
    "Hà Nam",
    "Hồ Chí Minh",
    "Nghệ An",
    "Phú Quốc",
    "Phú Thọ",
    "Nha Trang",
    "Quảng Bình",
    "Quảng Trị",
    "Quảng Nam",
    "Đà Nẵng",
    "Đà Lạt",
]                        
//-----------------Animation-----------
AOS.init();

  
                        