$(document).ready(function() {
    function loadTable() {
        $.ajax({
            url: "fetch-data.php",
            type: "POST",
            success: function(data) {
                //console.log(data)
                $("#table-data").html(data)
            }
        });
    }
    loadTable();

    // insert data into table with alert
    $("#submit").on("click", function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var mobileNo = $("#mobile").val();
        $.ajax({
            url: 'insert-data.php',
            type: "post",
            data: {
                name: name,
                mobile: mobileNo
            },
            success: function(data) {
                //console.log(data);
                if (data == 1) {
                    $("#form").trigger("reset");
                    $("#success-alert").removeClass("d-none");
                    loadTable();
                } else {
                    $("#error-alert").removeClass("d-none");
                }

            }
        })
    })
    $("#btn-close").on("click", function() {
        $(".alert").addClass('d-none');
    })
    $("#btn-close-danger").on("click", function() {
        $(".alert").addClass('d-none');
    })
});