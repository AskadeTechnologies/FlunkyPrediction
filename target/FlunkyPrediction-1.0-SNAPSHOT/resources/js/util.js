/**
 * Created by AdrianIonita on 6/2/2017.
 */
var Util = function () {

}

Util.prototype.buildLOV = function (url, component, attValue, attLabel, parentAttribute, parentAttributeValue, onChange) {
    $.ajax({
        type: "GET",
        async: true,
        url: url,
        data: { 'parentAttribute': parentAttribute,
            'parentAttributeValue': parentAttributeValue
        },
        success: function (succes) {
            if (succes.status === 'SUCCESS') {
                drawDesign = '<option value=\"Select\"> </option>';
                //drawDesign="";
                var dataObject = succes.data;
                for (var i = 0; i < dataObject.length; i++) {
                    drawDesign += '<option value=\"' + dataObject[i][attValue] + '\">' + dataObject[i][attLabel] + '</option>';
                }
                $("#"+component).append(drawDesign);

                //We can add callbacks here for cascading LOVs
                $("#"+component).on('change', function(){
                    if (onChange !== undefined) {
                        onChange();
                    }
                });
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
}