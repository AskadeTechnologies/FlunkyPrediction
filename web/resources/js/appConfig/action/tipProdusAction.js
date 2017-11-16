/**
 * Created by AdrianIonita on 10/4/2017.
 */

var TipProdusAction = function() {
    this.editedSpecIds = [];
    this.specTableSelection = null;
    this.table = "#tipProdus-table";
    this.getUrl = sunlightWorkspace.urlPrefix+"/config/app/getTipProdusList";
    this.postUrl = sunlightWorkspace.urlPrefix+"/config/app/postTipProdus";
}

TipProdusAction.prototype.initPage = function() {
    this.getList();
}

TipProdusAction.prototype.addNew = function(){
    var rowId = $.jgrid.randId();
    jQuery(this.table).addRowData( rowId, new TipProdusObject("INSERT"));
    $(this.table).jqGrid('editRow', rowId,true);
}

TipProdusAction.prototype.getList = function(){

    if ($('#gview_filiala_table div.ui-jqgrid-bdiv').length > 0) {
        $(this.table).jqGrid('clearGridData');
        this.refreshList();
    } else {
        this.populateList();
    }
}

TipProdusAction.prototype.refreshList = function(){
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

TipProdusAction.prototype.afterGridLoad = function(){
}


TipProdusAction.prototype.populateList = function() {
    self = this;
    $grid = $(this.table);
    $grid.jqGrid({
        url: this.getUrl,
        styleUI : 'Bootstrap',
        datatype: "json",
        colNames:['Id','Cod Produs','Denumire','Data in', 'Data out', 'Save'],
        colModel:[{name:'id', index:'id', hidden: false, editable: true},
            {name:'codProdus', index:'codProdus', hidden: false, editable: true},
            {name:'denumire', index:'denumire', hidden: false,editable: true },
            {name:'dataIn',
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
            {name:'dataOut', index:'dataOut', hidden: false,
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
             date: fa,
             minValue: 0
             }*/
            },
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


TipProdusAction.prototype.save = function(){

    //var _row = jQuery("#documentType-table").jqGrid("getRowData", rowid);
    var ids = jQuery(this.table).jqGrid('getDataIDs');
    for(var i=0;i <ids.length; i++) {
        jQuery(this.table).jqGrid('saveRow', ids[i], false, 'clientArray');
    }
    ids = jQuery(this.table).jqGrid('getDataIDs');
    for(var i=0;i <ids.length; i++) {
        var _row = null;
        _row = jQuery(this.table).jqGrid("getRowData", ids[i]);
        if(_row.rowStatus == "INSERT"){
            console.log("produs  "+JSON.stringify(_row, sunlightWorkspace.replaceSpaceString, ["id", "codProdus","denumire","dataIn","dataOut"]));
            $.ajax({
                url: "/config/app/postTipProdus", type: 'POST',
                data: JSON.stringify(_row, sunlightWorkspace.replaceSpaceString, ["id", "codProdus","denumire","dataIn","dataOut"]), dataType: 'json', contentType: "application/json",
                success: function (result) {
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('Error setting new Produs');
                    console.log(jqXHR);
                }
            });
        }
    }

}

