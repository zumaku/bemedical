// HUMBERGER MENU
const humb = document.querySelector('.checkbox');
const menu = document.querySelector('.menu');

humb.addEventListener('click', function () {
    menu.classList.toggle('slide');
});




// SERVICE NAVBAR
const filterItem = document.querySelector(".navService");
const mainServiceTitle = document.querySelector(".msLeft .mainServiceTitle");
const mainServiceParagraph = document.querySelector(".msLeft .mainServiceParagraph");
const mainServiceBtn = document.querySelector(".msLeft .mainServiceBtn");
const msRight = document.querySelector(".msRight");

window.onload = () => { //after window loaded
    filterItem.onclick = (selectedItem) => { //if user click on filterItem div
        if (selectedItem.target.classList.contains("item")) { //if user selected item has .item class
            filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
            selectedItem.target.classList.add("active"); //add that active class on user selected item
            let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
            
            if(filterName == "jantung"){
                mainServiceTitle.innerHTML = "Hai.. Ini adalah Jantung";
                mainServiceParagraph.innerHTML = "Lorem Bukan Ispum Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem ad qui eius. Neque veritatis fugiat nobis error voluptatibus perspiciatis quo. Ipsam, expedita. Ipsa voluptatem tempora quam veniam natus at?";
                mainServiceBtn.setAttribute("href", "https://cdn.hellosehat.com/wp-content/uploads/2018/03/shutterstock_356968148.jpg");
                msRight.setAttribute("style", "background-image: url(img/service2.jpg);");
            } else if(filterName == "gigi"){
                mainServiceTitle.innerHTML = "Dentist with surgical mask holding scaler near potient";
                mainServiceParagraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis aperiam rem harum? Aspernatur molestias eos hic minus nostrum unde obcaecati, voluptatum neque placeat doloribus culpa officiis, quas repellat expedita.";
                mainServiceBtn.setAttribute("href", "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/ilustrasi-gigi-cara-memutihkan-gigi.jpg");
                msRight.setAttribute("style", "background-image: url(img/service1.jpg);");
            } else if(filterName == "telinga"){
                mainServiceTitle.innerHTML = "Hazihi Telinga";
                mainServiceParagraph.innerHTML = "To Linga ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis aperiam rem harum? Aspernatur molestias eos hic minus nostrum unde obcaecati, voluptatum neque placeat doloribus culpa officiis, quas repellat expedita.";
                mainServiceBtn.setAttribute("href", "https://asset.kompas.com/crops/i3gArY8JijPck_Mjo5c_e7JDIlY=/178x0:763x390/750x500/data/photo/2014/03/02/2015111telinga780x390.jpg");
                msRight.setAttribute("style", "background-image: url(img/service3.jpg);");
            } else if(filterName == "tulang"){
                mainServiceTitle.innerHTML = "Inni Tulang Arenna";
                mainServiceParagraph.innerHTML = "To TUUUU LAAAAANGGG ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis aperiam rem harum? Aspernatur molestias eos hic minus nostrum unde obcaecati, voluptatum neque placeat doloribus culpa officiis, quas repellat expedita.";
                mainServiceBtn.setAttribute("href", "https://static.republika.co.id/uploads/images/inpicture_slide/demi-tulang-yang-kuat-dibutuhkan-asupan-kalsium-dan-vitamin-_140528073450-974.jpg");
                msRight.setAttribute("style", "background-image: url(img/service4.jpg);");
            } else if(filterName == "paru"){
                mainServiceTitle.innerHTML = "PARU PARU SEHAT";
                mainServiceParagraph.innerHTML = "To TUUUU LAAAAANGGG ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis aperiam rem harum? Aspernatur molestias eos hic minus nostrum unde obcaecati, voluptatum neque placeat doloribus culpa officiis, quas repellat expedita. iwfnhamou,zpaurc n98y 98y98 yni7r 87n98 t98m";
                mainServiceBtn.setAttribute("href", "https://asset.kompas.com/crops/m5nY5W5ron0RJkZTjekkZaA7ryM=/0x80:1000x747/750x500/data/photo/2018/03/02/1881076005.jpg");
                msRight.setAttribute("style", "background-image: url(img/service5.jpg);");
            } else{
                mainServiceTitle.innerHTML = "DARAH KU MERAH BUKAN BIRU";
                mainServiceParagraph.innerHTML = "Darah Merah Putih ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis aperiam rem harum? Aspernatur molestias eos hic minus nostrum unde obcaecati, voluptatum neque placeat doloribus culpa officiis, quas repellat expedita. iwfnhamou,zpaurc n98y 98y98 yni7r 87n98 t98m";
                mainServiceBtn.setAttribute("href", "https://asset.kompas.com/crops/w_aQbqXh7sOVXWKIQTcS3a_4e-o=/155x0:755x400/750x500/data/photo/2022/07/08/62c7e4e9ddaea.jpg");
                msRight.setAttribute("style", "background-image: url(img/service6.jpg);");
            }
            
        }
    }
    // for (let i = 0; i < filterImg.length; i++) {
    //     filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
    // }
}





// BLOG SIDEBAR HUMB MENU
const blogCheck = document.querySelector('.blogCheckbox');
const sidebar = document.querySelector('.sideBar');

blogCheck.addEventListener('click', function () {
    sidebar.classList.toggle('blogSlide');
});




// FUNGSI MEMBUAT PANGGILAN
function makeCall(){
    let tanya = confirm("Melakukan panggilan ke +62-85757115194?");
    // if(tanya){ window.open('tel:085757115194'); }
    if(tanya){ window.open('tel:085299068400'); }
}