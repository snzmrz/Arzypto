$(function() {
    $(".sidebar-toggle-box").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(window).resize(function(e) {
        if ($(window).width() <= 768) {
            $("#wrapper").removeClass("toggled");
        } else {
            $("#wrapper").addClass("toggled");
        }
    });
});
$("form").submit(function(e) {
    e.preventDefault();
});
$(document).ready(function() {
    var unique_id = $.gritter.add({
        // (string | mandatory) the heading of the notification
        title: 'Welcome to Dashio!',
        // (string | mandatory) the text inside the notification
        text: 'Hover me to enable the Close Button. You can hide the left sidebar clicking on the button next to the logo.',
        // (string | optional) the image to display on the left
        image: 'img/ui-sam.jpg',
        // (bool | optional) if you want it to fade out on its own or just sit there
        sticky: false,
        // (int | optional) the time you want it to be alive for before fading out
        time: 8000,
        // (string | optional) the class name you want to apply to that specific message
        class_name: 'my-sticky-class'
    });

    return false;
});
$('#user-all-tasks .remove-duty').click(function() {
    $(this).parent().parent().fadeOut();
});
$('#user-new-task .reject-duty').click(function() {
    $(this).parent().parent().fadeOut();
});

$('#content .category-btn').click(function() {
    $('#content .categorylist').fadeToggle();
});

$('.sidebar-toggle-box').click(function() {
    $('#sidebar').fadeToggle();
});
$('.dcjq-parent-o').click(function() {
    $(this).find('i.arrows').toggleClass('fa-caret-down , fa-caret-left')
    $(this).parent().siblings().children().find('i.arrows').removeClass('fa-caret-down').addClass('fa-caret-left');

});

$('#pricePlan #SlideCategory').click(function() {
    $('#pricePlan .slideCat').fadeToggle();
});
$('.block-user').click(function() {
    $(this).parent().parent().css('background', '#ff000052')
});
$('.show-user').click(function() {
    $(this).parent().parent().css('background', 'unset')
});
$('.sub .tablinks').click(function() {
    $(this).css({
        'background': '#FCB322',
        'color': 'white'
    });
    $(this).siblings().css('background', 'unset');
});

function UploadCV(event) {
    let input = event.target.value;
    console.log(input);
    $('.UploadedCv').append(input);
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        let image = event.target.files[0];
        reader.onload = (e) => {

            let images = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function UploadVideo(event) {
    let input = event.target.value;
    console.log(input);
    $('.UploadedVideo').append(input);
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        let image = event.target.files[0];
        reader.onload = (e) => {

            let images = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function PortfolioImg(event) {
    let input = event.target.value;
    console.log(input);
    $('.PortfolioImg').append(input);
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        let image = event.target.files[0];
        reader.onload = (e) => {

            let images = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function DisplaySocial() {
    $('#profile .social-media-address').slideDown();
}
// ----open tabs-----
function openTab(evt, TabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += "active";
}
// document.getElementById("defaultOpen").click();
$(function() {
    $('ul li').on('click', function() {
        $(this).parent().find('li.active').removeClass('active');
        $(this).addClass('active');
    });
});

// ----add tags----
$('#content .add-tag').click(function(e) {
    let tagName = $('#tag').val();
    if (tagName != '') {
        $('#Taglist').append('<li><span><i class="fa fa-close removetag" style="color:black"></i></span>' + tagName + '</li>');
    }
    $('#tag').val('');
    $('.removetag').click(function() {
        $(this).parent().parent().remove();
    })
});

$('#pricePlan .add-plan-tag').click(function(e) {
    let tagName = $('#Plantag').val();
    if (tagName != '') {
        $('#PlanTaglist').append('<li><span><i class="fa fa-close removePlantag" style="color:black"></i></span>' + tagName + '</li>');
    }
    $('#Plantag').val('');
    $('.removePlantag').click(function() {
        $(this).parent().parent().remove();
    })
});


function SearchUser() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("UserSearchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("userTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function filterSendType() {
    var rex = new RegExp($('#filterText').val());
    if (rex == "/همه/") { clearFilter() } else {
        $('.content').hide();
        $('.content').filter(function() {
            return rex.test($(this).text());
        }).show();
    }
}

function clearFilter() {
    $('.filterText').val('');
    $('.content').show();
}


// setActiveStyleSheet("Aqua");
// var flatCal = Calendar.setup({
//     flat: "flat_calendar",
//     inputField: "date_input_field", // id of the input field
//     ifFormat: "%Y-%m-%d", // format of the input field
//     dateType: "jalali",
//     weekNumbers: false
// });
var popupCal = Calendar.setup({
    inputField: "date_input_field", // id of the input field
    button: "date_btn", // trigger for the calendar (button ID)
    ifFormat: "%Y-%m-%d", // format of the input field
    dateType: "jalali",
    weekNumbers: false
});

$(document).ready(function() {
    $("#date-popover").popover({
        html: true,
        trigger: "manual"
    });
    $("#date-popover").hide();
    $("#date-popover").click(function(e) {
        $(this).hide();
    });

    // $("#my-calendar").zabuto_calendar({
    //     action: function() {
    //         return myDateFunction(this.id, false);
    //     },
    //     action_nav: function() {
    //         return myNavFunction(this.id);
    //     },
    //     ajax: {
    //         url: "show_data.php?action=1",
    //         modal: true
    //     },
    //     legend: [{
    //         type: "text",
    //         label: "Special event",
    //         badge: "00"
    //     }, {
    //         type: "block",
    //         label: "Regular event",
    //     }]
    // });
});

function myNavFunction(id) {
    $("#date-popover").hide();
    var nav = $("#" + id).data("navigation");
    var to = $("#" + id).data("to");
    console.log('nav ' + nav + ' to: ' + to.month + '/' + to.year);
}