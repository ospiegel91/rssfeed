$(document).ready(function() {
    $("#getUserList").click(function () {
        console.log("went to get list")
        $.ajax({
            type: "GET",
            url: "http://localhost:7000/usersList",
        }).done(function (data) {
            var title = document.createElement("h2");
            title.innerHTML = ("user list:");
            $("#users").append(title);
            $("#users").append($("<ul/>"));
            var users = JSON.parse(data);
            users.forEach(function (element) {
                var user = element.name;
                $("#users ul").append($("<li/>").html(user));
            });
        });
    });
    $("#addUserbtn").click(function () {
        $.ajax({
            type: "POST",
            url: "/users/add",
            contentType: "application/json",
            data: JSON.stringify({ "name": $("#users input[name='user']").val()}),
            success: function (msg) {
                console.log("success");
            },
            error: function (msg) {
                console.log("error");
            },
            complete: function (response, status) {
                $("#users .error").text(response.responseText);
            }
        });
    });
    $("#removeUser").click(function () {
        $.ajax({
            type: "DELETE",
            url: "/users/remove",
            contentType: "application/json",
            data: JSON.stringify({ "name": $("#users input[name='user']").val()}),
            success: function (msg) {
                console.log("success");
            },
            error: function (msg) {
                console.log("error");
            },
            complete: function (response, status) {
                $("#users .error").text(response.responseText);
            }
        });
    });

        
   
});