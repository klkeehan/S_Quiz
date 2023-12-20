function validateData(event) {
    event.preventDefault();

    var fName = document.querySelector('#firstName').value;
    var lName = document.querySelector('#lastName').value;
    var pNum = document.querySelector('#phoneNumber').value;
    var email = document.querySelector('#email').value;
    var website = document.querySelector('#website').value;

    var card = document.getElementById("card");
    var allNameText = document.createElement("p");
    var allEmailText = document.createElement("p");
    var allNumText = document.createElement("p");
    var allWebText = document.createElement("p");

    while (card.hasChildNodes()) {
        card.removeChild(card.lastChild);
    }

    var checkImg = document.createElement("img");
    checkImg.setAttribute("src", "img/check.png");
    checkImg.setAttribute("height", "20");
    checkImg.setAttribute("width", "20");

    var checkImg2 = document.createElement("img");
    checkImg2.setAttribute("src", "img/check.png");
    checkImg2.setAttribute("height", "20");
    checkImg2.setAttribute("width", "20");

    var checkImg3 = document.createElement("img");
    checkImg3.setAttribute("src", "img/check.png");
    checkImg3.setAttribute("height", "20");
    checkImg3.setAttribute("width", "20");

    var checkImg4 = document.createElement("img");
    checkImg4.setAttribute("src", "img/check.png");
    checkImg4.setAttribute("height", "20");
    checkImg4.setAttribute("width", "20");

    var checkImg5 = document.createElement("img");
    checkImg5.setAttribute("src", "img/check.png");
    checkImg5.setAttribute("height", "20");
    checkImg5.setAttribute("width", "20");

    // fname val
    var nameRegExp = /[a-z]/i;
    var nameCapsRegExp = /[A-Z]/;

    var hint1 = document.getElementById("hint1");

    var indicator = 0;

    if (nameRegExp.test(fName) && nameCapsRegExp.test(fName[0])) {
        indicator = 1;

        hint1.appendChild(checkImg2);
    }

    else {
        var hint1Text = document.createTextNode("Capitalize your name. Only letters are permitted.");
        hint1.appendChild(hint1Text);        
    }

    // lname val
    var lNameRegExp = /[a-z ']/i;

    var hint2 = document.getElementById("hint2");

    if (lNameRegExp.test(lName) && nameCapsRegExp.test(lName[0]) && indicator == 1) {
        hint2.appendChild(checkImg3);
        
        var nameText = document.createTextNode("Name: ");
        var nameText2 = document.createTextNode(fName);
        var nameText3 = document.createTextNode(" ");
        var nameText4 = document.createTextNode(lName);

        allNameText.appendChild(nameText);
        allNameText.appendChild(nameText2);
        allNameText.appendChild(nameText3);
        allNameText.appendChild(nameText4);

        card.appendChild(allNameText);
    }

    else {
        var hint2Text = document.createTextNode("Capitalize your name. Only letters, apostrophes, and spaces are permitted.");
        hint2.appendChild(hint2Text);
    }

    // email val
    var emailRegExp = /[a-z][@][a-z][.edu]/i;
    var emailRegExp2 = /[a-z][@][a-z][.com]/i;

    var hint4 = document.getElementById("hint4");

    if (emailRegExp.test(email) || emailRegExp2.test(email)) {
        hint4.appendChild(checkImg4);

        var emailText = document.createTextNode("Email: ");
        var emailText2 = document.createTextNode(email);

        allEmailText.appendChild(emailText);
        allEmailText.appendChild(emailText2);

        card.appendChild(allEmailText);
    }

    else {
        var hint4Text = document.createTextNode("Follow the format text@text.edu or text@text.com.");
        hint4.appendChild(hint4Text);
    }

    // num val
    var numRegExp = /[\d]{3} [\d]{3}-[\d]{4}/;

    var hint3 = document.getElementById("hint3");

    if (numRegExp.test(pNum)) {
        hint3.appendChild(checkImg5);

        var numText = document.createTextNode("Phone: ");
        var numText2 = document.createTextNode(pNum);

        allNumText.appendChild(numText);
        allNumText.appendChild(numText2);

        card.appendChild(allNumText);
    }

    else {
        var hint3Text = document.createTextNode("Enter only numbers in the format XXX XXX-XXXX");
        hint3.appendChild(hint3Text);
    }

    // web val
    var webRegExp = /["https://"][a-z . / ~]/i;

    var hint5 = document.getElementById("hint5");

    if (webRegExp.test(website)) {
        hint5.appendChild(checkImg);

        var webText = document.createTextNode("Website URL: ");
        var webText2 = document.createTextNode(website);

        allWebText.appendChild(webText);
        allWebText.appendChild(webText2);

        card.appendChild(allWebText);
    }

    else {
        var hint5Text = document.createTextNode("Enter a valid url that begins with https:// and also contains a tilde and backslash.");
        hint5.appendChild(hint5Text);
    }
}

function cardSelection(event) {
    event.preventDefault();

    var q1r = document.querySelector('input[type=radio][name=q1r]:checked');
    var q2r = document.querySelector('input[type=radio][name=q2r]:checked');
    var q3r = document.querySelector('input[type=radio][name=q3r]:checked');

    var q1rx = parseInt(q1r.value);
    var q2rx = parseInt(q2r.value);
    var q3rx = parseInt(q3r.value);

    total = q1rx + q2rx + q3rx;
    
    if(total<=5) {
        var img1 = document.createElement("img");
        img1.setAttribute("src", "img/spongebob.jpg");
        img1.setAttribute("height", "175");
        img1.setAttribute("width", "326");

        card.appendChild(img1);
    }

    else if(total>5 && total<=7) {
        var img2 = document.createElement("img");
        img2.setAttribute("src", "img/patrick.jpg");
        img2.setAttribute("height", "175");
        img2.setAttribute("width", "325")

        card.appendChild(img2);
    }

    else if(total>7 && total<=10) {
        var img3 = document.createElement("img");
        img3.setAttribute("src", "img/squidward.jpg");
        img3.setAttribute("height", "175");
        img3.setAttribute("width", "303");

        card.appendChild(img3);
    }

    else if(total>10 && total<=12) {
        var img4 = document.createElement("img");
        img4.setAttribute("src", "img/sandy.jpg");
        img4.setAttribute("height", "175");
        img4.setAttribute("width", "350");

        card.appendChild(img4);
    }    
}

function init() {
    var button1 = document.getElementById("submit");
    button1.addEventListener("click", validateData, false);
    button1.addEventListener("click", cardSelection, false);
}

window.addEventListener("load", init, false);