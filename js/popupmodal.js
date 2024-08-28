// I made this okay?

// Get the modal for modal with discription
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var modalProjectName = document.getElementById("modalProjectName");
var modalProjectType = document.getElementById("modalProjectType");
var modalProjectType = document.getElementById("modalProjectDate");
var modalProjectType = document.getElementById("modalProjectLink");
var modalProjectInfo = document.getElementById("modalProjectInfo");
var modalProjectType = document.getElementById("modalProjectTask");
var modalProjectTitle = document.getElementById("modalTitle");

// Get the modal for no discription
var modalNoCap = document.getElementById("myModalNoCap");
var modalImgNoCap = document.getElementById("img02");



function clickedImage (id) {
    var img = document.getElementById(id);

    const innerId = document.getElementById(id).children;
    const getinnerId = innerId[1].id;

    const informationImg = document.getElementById(getinnerId).children;

    var urlString = img.style.backgroundImage;
    var removeUrl1 = urlString.replace("url(", "");
    var removeUrl2 = removeUrl1.replace(")", "");
    var removeUrldone = removeUrl2.replaceAll("\"", "");

    modalImg.src = String(removeUrldone);
    // modalImg.style.backgroundImage = img.style.backgroundImage;
    modalProjectName.innerHTML = informationImg[0].innerText;
    modalProjectType.innerHTML = informationImg[1].innerText;
    modalProjectDate.innerHTML = informationImg[2].innerText;
    modalProjectInfo.innerHTML = informationImg[3].innerText;
    modalProjectTask.innerHTML = informationImg[4].innerText;
    modalProjectLink.innerHTML = informationImg[5].innerHTML;

    modalProjectTitle.innerHTML = informationImg[0].innerText;

} 

function clickedImageNoCap (id) {
    var img2 = document.getElementById(id);
    modalNoCap.style.display = "block";
    // console.log(img.style.backgroundImage);
    var urlString = img2.style.backgroundImage;
    var removeUrl1 = urlString.replace("url(", "");
    var removeUrl2 = removeUrl1.replace(")", "");
    var removeUrldone = removeUrl2.replaceAll("\"", "");
    // console.log(removeUrldone);
    modalImgNoCap.src = String(removeUrldone);
} 

function closeXX () {
  modalNoCap.style.display = "none";
} 