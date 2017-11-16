/**
 * Created by AdrianIonita on 10/4/2017.
 */

var PartenerAction = function() {
    this.editedSpecIds = [];
    this.specTableSelection = null;
    this.table = "#partener-table";
    this.getUrl = sunlightWorkspace.urlPrefix+"/config/app/getPartenerList";
    this.postUrl = sunlightWorkspace.urlPrefix+"/config/app/postPartener";
}

PartenerAction.prototype.initPage = function() {
    this.getList();
}

PartenerAction.prototype.addNew = function(){
    var rowId = $.jgrid.randId();
    jQuery(this.table).addRowData( rowId, new PartenerObject("INSERT"));
    $(this.table).jqGrid('editRow', rowId,true);
}

PartenerAction.prototype.getList = function(){

    if ($('#gview_filiala_table div.ui-jqgrid-bdiv').length > 0) {
        $(this.table).jqGrid('clearGridData');
        this.refreshList();
    } else {
        this.populateList();
    }
}

PartenerAction.prototype.refreshList = function(){
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

PartenerAction.prototype.afterGridLoad = function(){
}


PartenerAction.prototype.populateList = function() {
    self = this;
    $grid = $(this.table);
    $grid.jqGrid({
        url: this.getUrl,
        styleUI : 'Bootstrap',
        datatype: "json",
        colNames:['Cod Partener Sap','Cod Fiscal','Nr Inreg.','Denumire','Adresa','Data in', 'Data out', 'Save'],
        colModel:[
            {name:'codClientSap', index:'codClientSap', hidden: false, editable: true},
            {name:'codFiscal', index:'codFiscal', hidden: false, editable: true},
            {name:'nrInreg', index:'nrInreg', hidden: false, editable: true},
            {name:'denumire', index:'denumire', hidden: false,editable: true },
            {name:'adresa', index:'adresa', hidden: false,editable: true },
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


PartenerAction.prototype.save = function(){

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
            console.log("partener  "+JSON.stringify(_row, sunlightWorkspace.replaceSpaceString, ["codClientSap","codFiscal","nrInreg","denumire","adresa","dataIn","dataOut"]));
            $.ajax({
                url: this.postUrl, type: 'POST',
                data: JSON.stringify(_row, sunlightWorkspace.replaceSpaceString, ["codClientSap","codFiscal","nrInreg","denumire","adresa", "dataIn","dataOut"]), dataType: 'json', contentType: "application/json",
                success: function (result) {
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('Error setting new Partener');
                    console.log(jqXHR);
                }
            });
        }
    }

}

