/**
 * Created by AdrianIonita on 10/5/2017.
 */
var DeliveryObject = function(rowStatus){
    this.id = "";
    this.voucherOper = "";
    this.tipOper = "";
    this.dataExec = null;
    this.idPartener = "";
    this.nrFactura = "";
    this.dataFactura = null;
    this.codTipProdus = "";
    this.serialSim = null;
    this.packageName = null;
    this.codFiliala = null;
    this.rowStatus = rowStatus;
}

DeliveryObject.prototype.build = function(){
    this.idPartener = $("#clientInfoForm_NumeClient").val();
    this.nrFactura = $("#livrareForm_NrFactura").val();
    this.dataFactura = $("#livrareForm_DataFactura").val();
    this.codTipProdus = "Cartela";
    this.serialSim = $("#livrareForm_serieSim").val();
    this.packageName = $("#livrareForm_Pachet").val();
    this.codFiliala = $("#livrareForm_Filiala").val();
}