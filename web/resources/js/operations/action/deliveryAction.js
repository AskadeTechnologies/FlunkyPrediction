/**
 * Created by AdrianIonita on 10/5/2017.
 */

var DeliveryAction = function() {
    this.editedSpecIds = [];
    this.specTableSelection = null;
    this.table = "#delivery-table";
    this.getUrl = sunlightWorkspace.urlPrefix+"/operations/getDeliveries";
    this.postUrl = sunlightWorkspace.urlPrefix+"/operations/postDelivery";
}

DeliveryAction.prototype.clearDeliveryForm = function(){
     $("#clientInfoForm_NumeClient").val("");
     $("#livrareForm_NrFactura").val("");
     $("#livrareForm_DataFactura").val("");

     $("#livrareForm_serieSim").val("");
     $("#livrareForm_Pachet").val("");
     $("#livrareForm_Filiala").val("");
}

DeliveryAction.prototype.buildLOV = function (url, component, attValue, attLabel, parentAttribute, parentAttributeValue, onChange) {
    $.ajax({
        type: "GET",
        async: true,
        url: url,
        data: { 'parentAttribute': parentAttribute,
            'parentAttributeValue': parentAttributeValue
        },
        success: function (succes) {
            if (succes.status === 'SUCCESS') {
                //drawDesign = '<option value=\"-1\"> </option>';
                drawDesign="";
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

DeliveryAction.prototype.initPage = function() {
    this.getList();
}
DeliveryAction.prototype.initNewDelivery = function(){
    $("#livrareForm_DataFactura").datepicker({
        dateFormat: 'yyyy-mm-dd'});

    this.buildLOV(sunlightWorkspace.urlPrefix+'/config/app/getPartenerList', 'clientInfoForm_NumeClient', 'id', 'denumire'); //[optimoose] added category code lov
    this.buildLOV(sunlightWorkspace.urlPrefix+'/config/app/getFilialaList', 'livrareForm_Filiala', 'codFiliala', 'denumire'); //[optimoose] added category code lov
}

DeliveryAction.prototype.saveNewDelivery = function(){
    var deliveryObject = new DeliveryObject();
    deliveryObject.build();
    deliveryObject.id = "2";
    var self = this;
    console.log("delivery "+JSON.stringify(deliveryObject));
    $.ajax({
        url: this.postUrl,
        type: "POST",
        data: JSON.stringify(deliveryObject),
        dataType: 'json',
        async: false,
        contentType: "application/json",
        success: function (resultedData) {
            //sunlightWorkspace.clearPlataFacturaForms();
            self.clearDeliveryForm();
            sunlightWorkspace.showSuccess("Livrarea cartelei a fost efectuata cu succes");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //sunlightWorkspace.clearPlataFacturaForms();
            console.log('Error: ' + textStatus + ' ' + errorThrown);
        }
    });
}

DeliveryAction.prototype.getList = function(){

    if ($('#gview_delivery_table div.ui-jqgrid-bdiv').length > 0) {
        $(this.table).jqGrid('clearGridData');
        this.refreshList();
    } else {
        this.populateList();
    }
}

DeliveryAction.prototype.refreshList = function(){
    self = this;
    $.ajax({
        url: this.getUrl,
        type: "GET",
        data: [],
        dataType: 'json',
        contentType: "application/json",
        success: function (resultedData) {
            if(resultedData.status == "ERROR"){
                sunlightWorkspace.showError(resultedData.statusMessage);
            }else{
                $grid = $(this.table);
                $grid.jqGrid('clearGridData')
                    .jqGrid('setGridParam',{data:resultedData.data}).trigger('reloadGrid', [{ page: 1}]);

                self.afterGridLoad();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error: '+textStatus+' '+errorThrown);
        }
    });
}

DeliveryAction.prototype.afterGridLoad = function(){
}


DeliveryAction.prototype.populateList = function() {
    self = this;
    $grid = $(this.table);
    $grid.jqGrid({
        url: this.getUrl,
        styleUI : 'Bootstrap',
        datatype: "json",
        colNames:['Tip Oper','Data Exec','Partener', 'Nr Factura', 'Data factura', 'Cod produs', 'Sim', 'Package','Cod Filiala','Status'],
        colModel:[{name:'tipOper', index:'tipOper', hidden: false, editable: true},
            {name:'dataExec', index:'dataExec', hidden: false, editable: true},
            {name:'idPartener', index:'idPartener', hidden: false,editable: true },
            {name:'nrFactura', index:'nrFactura', hidden: false,editable: true },
            {name:'dataFactura',
                index:'dataIn',
                hidden: false,
                align: 'center',
                formatter: 'date',
                editable: true,
                editoptions: {
                    size: 20,
                    maxlengh: 10,
                    dataInit: function (element) {
                        $(element).datepicker({ dateFormat: 'd-m-yy' });//{ dateFormat: 'd-mm-yy' });
                    }
                }/*,
             editrules: {
             date: true,
             minValue: 0
             }*/
            } ,
            {name:'codTipProdus', index:'codTipProdus', hidden: false,editable: true },
            {name:'serialSim', index:'serialSim', hidden: false,editable: true },
            {name:'packageName', index:'package', hidden: false,editable: true },
            {name:'codFiliala', index:'codFiliala', hidden: false,editable: true },
            {name:'rowStatus', index:'rowStatus', hidden: true}],
        rowNum:10, rowList:[5,10,20],
        sortname: 'id',
        viewrecords: true,
        sortorder: "desc",
        autowidth:true,
        shrinkToFit: true,
        forceFit:true,
        height:"100%",
        width: '100%',
        loadonce: true,
        jsonReader: {
            root: "data"
        },
        gridComplete: function(){
            self.afterGridLoad();

        },
        loadComplete: function(data) {
            if(data.status == "ERROR"){
                sunlightWorkspace.showError(data.statusMessage);
            }

            $(this.table+' div.ui-jqgrid-bdiv').css({
                "height":"500px",
                "overflow":"hidden"
            });
            $(this.table+' div.ui-jqgrid-bdiv').perfectScrollbar();

        }
    });
}
