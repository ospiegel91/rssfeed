$(document).ready(function() {
    window.addEventListener("load", getNewsFeed);
    function getNewsFeed(){
        $.ajax({
            type: "GET",
            url: "/newslist",
        }).done(function (data) {
            var title = document.createElement("h2");
            title.innerHTML = ("News:");
            $("#newsFeedContainer").append(title);
            $("#newsFeedContainer").append($("<ul/>"));
            var newsFeeds = JSON.parse(data);
            console.log(newsFeeds);
            newsFeeds.forEach(function (element) {
                var link = document.createElement('a')
                link.href = element.link;
                link.innerHTML = element.title;

                $("#newsFeedContainer ul").append($("<li/>").html(link));
            });
        });
    }


//    $("#addUserbtn").click(function () {
//        $.ajax({
//            type: "POST",
//            url: "/users/add",
//            contentType: "application/json",
//            data: JSON.stringify({ "name": $("#users input[name='user']").val()}),
//            success: function (msg) {
//                console.log("success");
//            },
//            error: function (msg) {
//                console.log("error");
//            },
//            complete: function (response, status) {
//                $("#users .error").text(response.responseText);
//            }
//        });
//    });
//    $("#removeUser").click(function () {
//        $.ajax({
//            type: "DELETE",
//            url: "/users/remove",
//            contentType: "application/json",
//            data: JSON.stringify({ "name": $("#users input[name='user']").val()}),
//            success: function (msg) {
//                console.log("success");
//            },
//            error: function (msg) {
//                console.log("error");
//            },
//            complete: function (response, status) {
//                $("#users .error").text(response.responseText);
//            }
//        });
//    });

        
   
});