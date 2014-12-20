$("#element_form :input").change(function () {
    return Formdata(this.form);

    function Formdata(data) {

        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        var a, b, c, d = false;
        if (pattern.test($("#element_form input[name=f1]").val())) {
            $("#element_form input[name=f1]").parent().addClass("galochka");
            a = true;
        } else {
            $("#element_form input[name=f1]").parent().removeClass("galochka");
        }

        if (data.f3 != null && data.f3.value.length > 2) {
            $("#element_form input[name=f3]").parent().addClass("galochka");
            b = true;
        } else {
            $("#element_form input[name=f3]").parent().removeClass("galochka");
        }

        if (data.f4 != null && data.f4.value.length > 3) {
            $("#element_form input[name=f4]").parent().addClass("galochka");
            c = true;
        } else {
            $("#element_form input[name=f4]").parent().removeClass("galochka");
        }

        if ($('#element_form').find('input[type=radio]').is(':checked')) {
            $("#element_form input[type=radio]").parent().addClass("galochka");
            d = true;
        } else {
            $("#element_form input[type=radio]").parent().removeClass("galochka");
        }

        if (a && b && c && d) {
            $("#element_form .elementsubmit").removeClass("cantpress");
        } else {
            $("#element_form .elementsubmit").addClass("cantpress");
        }
    }
});