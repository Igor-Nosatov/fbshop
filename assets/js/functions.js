$( document ).ready(function() {

  $("#slider").slider({
            min: 0,
            max: 15000,
            step: 10,
            values: [0, 15000],
            range: true,
            stop: function(event, ui) {
                $("input#minCost").val($("#slider").slider("values", 0));
                $("input#maxCost").val($("#slider").slider("values", 1));
            },
            slide: function(event, ui) {
                $("input#minCost").val($("#slider").slider("values", 0));
                $("input#maxCost").val($("#slider").slider("values", 1));
            }
        });

        $("input#minCost").keyup(function() {
            var value1 = $("input#minCost").val();
            var value2 = $("input#maxCost").val();

            if (parseInt(value1) > parseInt(value2)) {
                value1 = value2;
                $("input#minCost").val(value1);
            }

            if (value1.match(/[^0-9]/g)) {
                $("input#minCost").val(0);
                value1 = $("input#minCost").val();
            }

            $("#slider").slider("values", 0, value1);
        });


        $("input#maxCost").keyup(function() {
            var value1 = $("input#minCost").val();
            var value2 = $("input#maxCost").val();

            if (value2 > 15000) {
                value2 = 15000;
                $("input#maxCost").val(15000);
                value2 = $("input#maxCost").val();
            }

            if (parseInt(value1) > parseInt(value2)) {
                value2 = value1;
                $("input#maxCost").val(value2);
            }

            if (value2.match(/[^0-9]/g)) {
                $("input#maxCost").val(15000);
                value2 = $("input#maxCost").val();
            }

            $("#slider").slider("values", 1, value2);
        });

 $("#slider").slider({
            min: 0,
            max: 15000,
            step: 10,
            values: [0, 15000],
            range: true,
            stop: function(event, ui) {
                $("input#minCost").val($("#slider").slider("values", 0));
                $("input#maxCost").val($("#slider").slider("values", 1));
            },
            slide: function(event, ui) {
                $("input#minCost").val($("#slider").slider("values", 0));
                $("input#maxCost").val($("#slider").slider("values", 1));
            }
        });

        $("input#minCost").keyup(function() {
            var value1 = $("input#minCost").val();
            var value2 = $("input#maxCost").val();

            if (parseInt(value1) > parseInt(value2)) {
                value1 = value2;
                $("input#minCost").val(value1);
            }

            if (value1.match(/[^0-9]/g)) {
                $("input#minCost").val(0);
                value1 = $("input#minCost").val();
            }

            $("#slider").slider("values", 0, value1);
        });


        $("input#maxCost").keyup(function() {
            var value1 = $("input#minCost").val();
            var value2 = $("input#maxCost").val();

            if (value2 > 15000) {
                value2 = 15000;
                $("input#maxCost").val(15000);
                value2 = $("input#maxCost").val();
            }

            if (parseInt(value1) > parseInt(value2)) {
                value2 = value1;
                $("input#maxCost").val(value2);
            }

            if (value2.match(/[^0-9]/g)) {
                $("input#maxCost").val(15000);
                value2 = $("input#maxCost").val();
            }

            $("#slider").slider("values", 1, value2);
        });



});


