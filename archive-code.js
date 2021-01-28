<!DOCTYPE html>
<html>
  <head>
    <title>{Title}</title>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--jquery-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <!--sheetrock-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-sheetrock/1.1.4/dist/sheetrock.min.js"></script>
  <!--handlebars-->
<script type = "text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.js"></script>
  <!--bootstrap css-->
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
</script>
<!-- Font Awesome -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
<!--Datatables-->
<link rel="stylesheet" href="//cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">

<style>
  body {
    padding:100px 30px 70px 30px;
    background-color: #fafafa;
    font-family:"Trebuchet MS", Helvetica, sans-serif;
  }

table {
    width: 100%;
}

@media(max-width: 768px){
	table, thead, tbody, td, tr { 
		display: block; 
		text-align:center;
		table-layout: fixed;
	}
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
		min-height:25px;
	}
}

.dataTables_wrapper .dataTables_filter {
float: right;
text-align: right;
visibility: hidden;
}

.row {
    width: 100%;
}

</style>

  </head>
  
<body>
    <div>
        <div class="input-group mb-3">
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <input type="text" class="form-control m-1" id="searchID" onkeyup="searchID()" placeholder="Search by ID...">
                </div>
                <div class="col-lg-6 col-sm-12">
                    <input type="text" class="form-control m-1" id="searchOwner" onkeyup="searchOwner()" placeholder="Search by owner...">
                </div>
                <div class="col-lg-6 col-sm-12">
                    <input type="text" class="form-control m-1" id="searchArtist" onkeyup="searchArtist()" placeholder="Search by artist...">
                </div>
                <div class="col-lg-6 col-sm-12">
                    <input type="text" class="form-control m-1" id="searchNotes" onkeyup="searchNotes()" placeholder="Search by notes...">
                </div>
                <div class="col-lg-12 col-sm-12">
                    <input type="text" class="form-control m-1" id="searchObtained" onkeyup="searchObtained()" placeholder="Search by obtained...">
                </div>
            </div>
        </div>
    </div>    
        <table class="table table-responsive-stack" id="database">
            <thead class="thead-light">
                <tr>
                    <th style="min-width: 20%;">Image</th>
                    <th style="max-width: 10%;">ID</th>
                    <th syle="width: 10%;">Owner</th>
                    <th syle="width: 10%;">Artist</th>
                    <th style="width: 20%;">Notes</th>
                    <th style="width: 20%;">Obtained through</th>
                </tr>
            </thead>
            <script id="cutie-table" type="text/x-handlebars-template">
                <tr>
                    {{#if num}}
                    <td><img class="lazyload" data-src={{cellsArray.[0]}}></td>
                    <td>{{cellsArray.[1]}}</td>
                    <td>{{cellsArray.[2]}}</td>
                    <td>{{cellsArray.[3]}}</td>
                    <td>{{cellsArray.[4]}}</td>
                    <td>{{cellsArray.[5]}}</td>
                    {{/if}}
                </tr>
            </script>
        </table>

    </div>

    <script type="application/javascript">
    function lazyLoad() {
        lazyload();
    }
    
        var cutieTemplate = Handlebars.compile($('#cutie-table').html());
        var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1xjAMmb3MCe9uELFj6B_WoQcqPFKeqF8W9K836nvw3d8/edit#gid=0';

        $('#database').sheetrock({
            url: mySpreadsheet,
            query: "select A,B,C,D,E,F order by B asc",
            labels: ['Image', 'IDNumber', 'Owner', 'Artist', 'Notes', 'Obtained'],
            rowTemplate: cutieTemplate,
            callback: makeSortable,
        });

        function makeSortable(error, options, response) {
            lazyLoad();
            
            var table = $(options.user.target).DataTable({
                "ordering": false,
                "paging": true,
                "pagingType": "first_last_numbers",
                "fnRowCallback": lazyLoad,
            });

            $('.dataTables_length').addClass('bs-select');

            $('#searchID').on('keyup', function() {
                table
                    .columns(1)
                    .search(this.value)
                    .draw();
            });

            $('#searchOwner').on('keyup', function() {
                table
                    .columns(2)
                    .search(this.value)
                    .draw();
            });

            $('#searchArtist').on('keyup', function() {
                table
                    .columns(3)
                    .search(this.value)
                    .draw();
            });
            
            $('#searchNotes').on('keyup', function() {
                table
                    .columns(4)
                    .search(this.value)
                    .draw();
            });
            
            $('#searchObtained').on('keyup', function() {
                table
                    .columns(5)
                    .search(this.value)
                    .draw();
            });

        }
    </script>

    </script>
    <!-- JQuery -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.13.0/js/mdb.min.js"></script>
    <!--datatables-->
    <script type="text/javascript" src="//cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
    <!--lazy load-->
<script src="https://cdn.jsdelivr.net/npm/lazyload@2.0.0-rc.2/lazyload.js"></script>


</body>
</html>
