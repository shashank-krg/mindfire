 $(document).ready(function(){
        // Countries
        var country_arr = new Array("Select Country","INDIA");

        $.each(country_arr, function (i, item) {
            $('#country').append($('<option>', {
                value: i,
                text : item,
            }, '</option>' ));
        });

        // States
        var s_a = new Array();
        s_a[0]="Select State";
        s_a[1]="Select State|ANDHRAPRADESH|KARNATAKA|TAMILNADU|DELHI|GOA|W-BENGAL|GUJARAT|MADHYAPRADESH|MAHARASHTRA|RAJASTHAN|ODISHA";
       

        // Cities
        var c_a = new Array();
        c_a['ANDHRAPRADESH']="HYDERABAD|VISHAKAPATNAM|SECUENDRABAD";
        c_a['KARNATAKA']="BANGLORE|MANGLORE|MYSORE";
        c_a['TAMILNADU']="CHENNAI|COIMBATORE|VELLORE";
        c_a['DELHI']="DELHI|NOIDA|GURGAON";
        c_a['GOA']="GOA|PANJI";
        c_a['W-BENGAL']="KOLKATA|ASANSOL|VARDAMAN|KHARAGPUR|HOWRAH";
        c_a['GUJARAT']="AHMEDABAD|BARODA|BHAVNAGAR|MEHSANA|RAJKOT|SURAT|UNA";
        c_a['MADHYAPRADESH']="INDORE|BHOPAL";
        c_a['MAHARASHTRA']="MUMBAI|PUNE|NAGPUR";
        c_a['RAJASTHAN']="ABU|JAIPUR";
        c_a['ODISHA']="BHUBANESHWAR|CUTTACK|ROURKELA|BEHRAMPUR|BARIPADA";
        


        $('#country').change(function(){
            var c = $(this).val();
            var state_arr = s_a[c].split("|");
            $('#state').empty();
            $('#city').empty();
            if(c==0){
                $('#state').append($('<option>', {
                    value: '0',
                    text: 'Select State',
                }, '</option>'));
            }else {
                $.each(state_arr, function (i, item_state) {
                    $('#state').append($('<option>', {
                        value: item_state,
                        text: item_state,
                    }, '</option>'));
                });
            }
            $('#city').append($('<option>', {
                value: '0',
                text: 'Select City',
            }, '</option>'));
        });

        $('#state').change(function(){
            var s = $(this).val();
            if(s=='Select State'){
                $('#city').empty();
                $('#city').append($('<option>', {
                    value: '0',
                    text: 'Select City',
                }, '</option>'));
            }
            var city_arr = c_a[s].split("|");
            $('#city').empty();

            $.each(city_arr, function (j, item_city) {
                $('#city').append($('<option>', {
                    value: item_city,
                    text: item_city,
                }, '</option>'));
            });


        });
    });