$(document).ready(function () {

    $("#terms").on('click', function () {
        $("#terms_and_conditions_modal").modal();
    });

    $("#createTeamButton").on('click', function () {
        $("#createTeam").modal();
    });

});
$("#createTeamButton").on("click", function () {
   var token = $("#token");
    var button = $("#createTeamButton");
   var team_name = $("#team_name");
    if(token.attr("class") == 'hidden'){
       team_name.addClass("hidden");
       token.removeClass("hidden").prop('required',true);
        button.text("Yeni Takım");
   }else{
        token.addClass("hidden");
       team_name.removeClass("hidden").prop('required',true);
        button.text("Takıma Gir");
    }
});
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});