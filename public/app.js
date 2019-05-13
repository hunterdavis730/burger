$(document).ready(() => {
    $(document).on("click", ".eat", function () {
        event.preventDefault()
        var id = $(this).attr("data-id")

        console.log(id)
        $.ajax("/api/eat/" + id, {
            type: "PUT"
        }).then(function (resp) {
            console.log(resp)
            location.reload()
        })
    })

    $("#add").click(() => {
        $("#addBurger").modal();
    })


    $('#modalClose').click(() => {
        var burger = $('#burgerName').val().trim()
        console.log(burger)
        var burgerNew = {
            name: burger
        }
        $.ajax("/api/add", {
            type: "POST",
            data: burgerNew
        }).then((resp) => {
            console.log(resp)
            location.reload()
        })
    })












})