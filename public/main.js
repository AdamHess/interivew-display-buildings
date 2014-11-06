define(['handlebars',
        'jquery',
        'css!./styling.css',
        'text!./template.html'
    ],
    function(Handlebars,
        $,
        CssStyling,
        TableTemplate) {

        $('#request_buildings_btn').click(function() {
            $('#data_table').empty();
            $('#loading_wheel').show();
            $.ajax({
                type: 'GET',
                url:location.origin + "/buildings",
                contentType: 'application/json',
                success: function(data) {           
                    var results = Handlebars.compile(TableTemplate)(data);      
                    $('#data_table').html(results);
                },
                failure: function(errorMsg) {
                    
                    $('#data_table').html(JSON.stringify(errorMsg));
                }
            }).always(function() {
                $('#loading_wheel').hide();
            });
        });



    });