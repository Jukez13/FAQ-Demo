var isactive = 1;
function drop() {
    if (isactive === 1) {
        $('span')[0].innerText = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.";
        document.querySelectorAll('p')[0].style.fontWeight = "bold";
        document.querySelectorAll('span')[0].classList.add('sp');
        isactive = 0;
    }
    else if (isactive === 0) {
        $('span')[0].innerText = "";
        isactive = 1;
    }

};

function drop1() {
    if (isactive === 1) {
        $('span')[1].innerText = " No more than 2GB. All files in your account must fit your allotted storage space.";
        document.querySelectorAll('p')[1].style.fontWeight = "bold";
        document.querySelectorAll('span')[1].classList.add('sp');
        isactive = 0;
    }
    else if (isactive === 0) {
        $('span')[1].innerText = "";
        isactive = 1;
    }

};

function drop2() {
    if (isactive === 1) {
        $('span')[2].innerText = "Click Forgot password from the login page or Change password from your profile page. A reset link will be emailed to you.";
        document.querySelectorAll('p')[2].style.fontWeight = "bold";
        document.querySelectorAll('span')[2].classList.add('sp');
        isactive = 0;
    }
    else if (isactive === 0) {
        $('span')[2].innerText = "";
        isactive = 1;
    }

};

function drop3() {
    if (isactive === 1) {
        $('span')[3].innerText = " Yes! Send us a message and we'll process your request no questions asked.";
        document.querySelectorAll('p')[3].style.fontWeight = "bold";
        document.querySelectorAll('span')[3].classList.add('sp');
        isactive = 0;
    }
    else if (isactive === 0) {
        $('span')[3].innerText = "";
        isactive = 1;
    }

};

function drop4() {
    if (isactive == 1) {
        $('span')[4].innerText = "Chat and email support is available 24/7. Phone lines are open during normal business hours.";
        document.querySelectorAll('p')[4].style.fontWeight = "bold";
        document.querySelectorAll('span')[4].classList.add('sp');
        isactive = 0;

    }
    else if (isactive === 0) {
        $('span')[4].innerText = "";
        isactive = 1;
    }


};
