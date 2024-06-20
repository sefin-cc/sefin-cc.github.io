// I made this okay?

// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var modalProjectName = document.getElementById("modalProjectName");
var modalProjectType = document.getElementById("modalProjectType");
var modalProjectInfo = document.getElementById("modalProjectInfo");
var modalProjectTitle = document.getElementById("modalTitle");

function clickedImage (id) {
    var img = document.getElementById(id);

    const innerId = document.getElementById(id).children;
    const getinnerId = innerId[1].id;

    const informationImg = document.getElementById(getinnerId).children;

    modalImg.style.backgroundImage = img.style.backgroundImage;
    modalProjectName.innerHTML = informationImg[0].innerText;
    modalProjectType.innerHTML = informationImg[1].innerText;
    modalProjectInfo.innerHTML = informationImg[2].innerText;
    modalProjectTitle.innerHTML = informationImg[0].innerText;

  } 