<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Bare - Start Bootstrap Template</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/customize.css">

    


</head>

<body>

     <?php include '../dbconnect.php'; ?>
     <?php include 'menu.php'; ?>

   
    <!-- Page Content -->
    <div class="container">

        <div class="row">
            <div class="col-lg-12 text-center">
            
                <div id="logo">
                    
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve">
                <style type="text/css">
                    @font-face {
                        font-family: 'Ubuntu';
                        src: url('fonts/Ubuntu-R.ttf') format('truetype');
                    }

                    @font-face {
                        font-family: 'Tahoma-Bold';
                        src: url('fonts/tahomabd.ttf') format('truetype');
                    }
                    .st0{fill:#EDE4D8;}
                    .st1{fill:#BAD877;}
                    .st2{font-family:'Tahoma-Bold';}
                    .st3{font-size:37.152px;}
                    .st4{font-family:'Ubuntu';}
                    .st5{font-size:17.3376px;}
                </style>
                <g>
                    <g>
                        
                        <rect x="165.2" y="46.1" transform="matrix(0.7071 0.7071 -0.7071 0.7071 98.5927 -110.5804)" class="st0" width="35.2" height="35.2"/>
                    
                        <rect x="102.3" y="108.9" transform="matrix(0.7071 0.7071 -0.7071 0.7071 124.622 -47.7402)" class="st1" width="35.2" height="35.2"/>
                        <polygon class="st0" points="131.3,65.4 150.5,46.2 157.2,52.8 168.5,41.5 150.5,23.5 108.6,65.5 119.9,76.8 141.8,98.7 
                            153.2,87.4      "/>
                        <polygon class="st0" points="193.8,89.5 200.3,96 187.1,109.2 198.4,120.5 223,96 205.1,78.2      "/>
                        <polygon class="st1" points="107.3,102.6 100.7,96 113.9,82.7 102.6,71.4 78,96 96,114        "/>
                        <polygon class="st1" points="181.1,115.2 159.1,93.3 147.8,104.6 169.8,126.6 150.5,145.8 144,139.3 132.7,150.6 150.5,168.5 
                            192.4,126.6         "/>
                    </g>


                    <text transform="matrix(1 0 0 1 7.5088 250.9069)" class="st0 st2 st3">TEAM BUILDER</text>
                    <text transform="matrix(1 0 0 1 6.4892 273.197)" class="st0 st4 st5">+manage your players in hand</text>
                </g>
                </svg>








                </div>

                 <!-- <p class="lead">title</p>
                 <p class="lead">Sub title</p> -->


                <form id="user_login" action="">

                    <ul class="user_info col-lg-12">
                    <li>EMAIL: </li>
                    <li><input type="text" class="user_input">
                    <input type="checkbox"></li>
                    <li>PASSWORD: </li>
                    <li><input type="password" class="user_input"></li>
                    </ul> 

                    <ul class="col-lg-12 user_submit">
                    <button type="button" class="user_btn">REGISTER</button>
                    <button type="button" class="user_btn">LOG IN</button>
                    </ul>  
                
                </form>
                
                
               
            
            </div>
        </div>
        <!-- /.row -->

    </div>
    <!-- /.container -->

    <!-- jQuery Version 1.11.1 -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

</body>

</html>
