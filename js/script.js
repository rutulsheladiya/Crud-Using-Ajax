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
                // console.log(data);
                if (data == 1) {
                    $("#form").trigger("reset");
                    $("#success-alert").removeClass('d-none');
                    $("#success-msg").html("Record Inserted...");
                    loadTable();
                } else {
                    $("#error-alert").removeClass("d-none");
                    $("#error-msg").html("Record Not Inserted...");
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



    // for delete the data
    $(document).on("click", ".delete-btn", function() {
        var sid = $(this).data("did");
        //alert(sid);
        $.ajax({
            url: "delete-data.php",
            type: "post",
            data: { studentId: sid },
            success: function(data) {
                //console.log(data);
                if (data == 1) {
                    $("#success-alert").removeClass('d-none');
                    $("#success-msg").html("Record Deleted..");
                    loadTable();
                } else {
                    $("#error-msg").removeClass("d-none");
                    $("#error-msg").html("Record Is Not Deleted..");
                }

            }
        });
    })



    // for update modal
    $(document).on("click", ".update-btn", function() {
        console.log("click");
        var fff = $(this).data("uid");
        alert(fff);
    })

});