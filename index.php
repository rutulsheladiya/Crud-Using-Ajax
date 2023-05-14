<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crud Operation</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>

<body>
    <section class="container">
        <h3 class="text-center">Crud Operation </h3>
        <div class="row d-flex align-item-center justify-content-center">
            <div class="col-md-6">

                <form action="" id="form">
                    <div class="form-group mt-5 mb-4">
                        <label for="" class="mb-2">Enter Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter Name" class="form-control">
                    </div>
                    <div class="form-group mb-4">
                        <label for="" class="mb-2">Enter Mobile Number</label>
                        <input type="text" name="mobile" id="mobile" placeholder="Enter Mobile Number" class="form-control">
                    </div>

                    <div class="form-group mb-4 text-center">
                        <button type="submit" name="submit" id="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
                <div class="alert alert-success alert-dismissible fade show d-none" role="alert" id="success-alert">
                    <strong id="msg">New Record Inserted...</strong> 
                    <button type="button" class="btn-close" id="btn-close"></button>
                </div>
                <div class="alert alert-danger alert-dismissible fade show d-none" role="alert" id="error-alert">
                    <strong>Record Not Inserted...</strong> 
                    <button type="button" class="btn-close" id="btn-close-danger"></button>
                </div>
            </div>
        </div>


 
        <!-- load table data  -->
        <div class="my-5 text-center" id="table-data">
          
        </div>
    </section>
</body>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/jquery-3.6.4.js"></script>
<script src="js/script.js "></script>

</html>