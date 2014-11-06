define(['handlebars',
        'jquery',
        'css!./styling.css'
    ],
    function(Handlebars,
        $,
        CssStyling) {

        $('#request_buildings_btn').click(function() {
            $('#data_table').empty();
            $('#loading_wheel').show();
            $.ajax({
                type: 'GET',
                url:location.origin + "/buildings",
                //contentType: 'application/json',
                success: function(data) {           
                    $('#data_table').html(JSON.stringify(data));
                },
                failure: function(errorMsg) {
                    $('#data_table').html(JSON.stringify(errorMsg));
                }
            }).always(function() {
                $('#loading_wheel').hide();
            });
        });



    });