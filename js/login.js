function dialog(title) {
    $.Dialog({
        shadow: true,
        overlay: false,
        title: '',
        width: 200,
        padding: 10,
        content: '<div style="text-align: center;">' + title + '</div>'
    });
}

$(function () {
    $("#login").click(function () { //hook function to onsubmit event
        var username = $("#username").val(); //get username
        var password = $("#password").val(); //get password
        if (username != "" && password != "") { //check they arent null
            $.post("http://marsn.web44.net/getsalt.php", { //make a post to get the salt from database or generate a new one
                username: username
            }, function (salt) {
                if (salt != "error") { //if no error
                    var pass = password + salt;
                    var hash = CryptoJS.SHA256(pass) + ''; // make password hash with salt
                    $.post("http://marsn.web44.net/login.php", { //post to login with username and hash
                        username: username,
                        password: hash
                    }, function (success) { //when request returns
                        if (success.indexOf("true") == -1) { //if login not successful
                            dialog("Invalid username or password");
                            username = null;
                            password = null;
                            hash = null;
                        } else {
                            dialog("Login successful");
                        }
                    });
                } else {
                    dialog("Database Error"); //if error throw database error
                }
            });
        } else
            dialog("You must enter a username and password");
        return false; //return false to prevent the page from refreshing
    });
    $("#register").click(function () { //hook function to onsubmit event
        var username = $("#username2").val(); //get username
        var password = $("#password2").val(); //get password
        if (username != "" && password != "") { //check they arent null
            $.post("http://marsn.web44.net/getsalt.php", { //make a post to get the salt from database or generate a new one
                username: username
            }, function (salt) {
                if (salt != "error") { //if no error
                    var pass = password + salt;
                    var hash = CryptoJS.SHA256(pass) + ''; // make password hash with salt
                    $.post("http://marsn.web44.net/newuser.php", { //post to login with username and hash
                        username: username,
                        password: hash
                    });
                } else {
                    dialog("Database Error"); //if error throw database error
                }
            });
        } else
            dialog("You must enter a username and password");
        return false; //return false to prevent the page from refreshing
    });
    $("#passwordchange").submit(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        if (username != "" && password != "") {

        } else {
            dialog("You must enter a username and password");
        }
    });
});
