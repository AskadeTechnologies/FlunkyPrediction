/**
 * Created by AdrianIonita on 5/1/2017.
 */
var FlunkyWorkspace = function() {
    this.utilActions = new Util();
    this.predictionDashboardAction = new PredictionDashboardAction();
}

FlunkyWorkspace.prototype.init = function() {
    this.urlPrefix = "";
    this.showDashboard();

}

FlunkyWorkspace.prototype.replaceSpaceString = function(key, value){
    if(typeof value === 'string'){
        if(key == 'rowStatus'){
            return undefined;
        }
        if(isEmpty(value.trim())){
            return undefined;
        }
        return value.trim();
    }
    return value;
}

function isEmpty(value){
    return (value == null || value.length === 0);
}

FlunkyWorkspace.prototype.showError = function(errorMessage) {
    document.getElementById("error-message-text").innerHTML = errorMessage;
    $('#success-message').hide();
    $('#error-message').show();
}

FlunkyWorkspace.prototype.showSuccess = function(successMessage) {
    document.getElementById("success-message-text").innerHTML = successMessage;
    $('#success-message').show();
    $('#error-message').hide();
}

FlunkyWorkspace.prototype.hideMessages = function() {
    $('#success-message').hide();
    $('#error-message').hide();
}

FlunkyWorkspace.prototype.showDashboard = function(){
    $("#categorieForm_TipCategorie").empty();
    flunkyWorkspace.utilActions.buildLOV(flunkyWorkspace.urlPrefix+'/getCustomerCategories', 'categorieForm_TipCategorie', 'code', 'description'); //[optimoose] added category code lov

    $("#comerciantForm_Comerciant").empty();
    flunkyWorkspace.utilActions.buildLOV(flunkyWorkspace.urlPrefix+'/getDepartmentStores', 'comerciantForm_Comerciant', 'code', 'description'); //[optimoose] added category code lov

    this.hideAllPages();
    $("#dashboard-page").show();
    $("#statistics_page").show();
}

FlunkyWorkspace.prototype.loadCategory = function(){

    this.predictionDashboardAction.initPredictionPage();
}

FlunkyWorkspace.prototype.loadRetailer = function(){
    this.predictionDashboardAction.initRetailerPage();
}

FlunkyWorkspace.prototype.hideAllPages = function(){
    $("#dashboard-page").hide();
    $("#statistics_page").hide();
    $("#appConfig-page").hide();
    $("#agent-config").hide();
    $("#filiala-config").hide();
    $("#tipProdus-config").hide();
    $("#partener-config").hide();
    $("#operations-page").hide();
    $("#delivery-list").hide();
    $("#phoneType-config").hide();
    $("#operationType-config").hide();
}

FlunkyWorkspace.prototype.showAgentConfig = function(){
    this.agentAction = new AgentAction();
    this.agentAction.initAgentPage();
    this.hideAllPages();
    $("#appConfig-page").show();
    $("#agent-config").show();
}

FlunkyWorkspace.prototype.showFilialaConfig = function(){
    this.filialaAction = new FilialaAction();
    this.filialaAction.initPage();
    this.hideAllPages();
    $("#appConfig-page").show();
    $("#filiala-config").show();
}

FlunkyWorkspace.prototype.showTipProdusConfig = function(){
    this.tipProdusAction = new TipProdusAction();
    this.tipProdusAction.initPage();
    this.hideAllPages();
    $("#appConfig-page").show();
    $("#tipProdus-config").show();
}

FlunkyWorkspace.prototype.showPartenerConfig = function(){
    this.partenerAction = new PartenerAction();
    this.partenerAction.initPage();
    this.hideAllPages();
    $("#appConfig-page").show();
    $("#partener-config").show();
}

FlunkyWorkspace.prototype.showDeliveries = function(){
    this.deliveryAction = new DeliveryAction();
    this.deliveryAction.initPage();
    this.hideAllPages();
    $("#operations-page").show();
    $("#delivery-list").show();
}

FlunkyWorkspace.prototype.showNewDelivery = function(){
    this.deliveryAction = new DeliveryAction();
    this.deliveryAction.initNewDelivery();
    this.hideAllPages();
    $("#operations-page").show();
    $("#new-delivery").show();
}

FlunkyWorkspace.prototype.uploadActivations = function(){
    this.hideAllPages();
    $("#operations-page").show();
    $("#upload-activations").show();
}

FlunkyWorkspace.prototype.uploadActivationFile = function(){
    var fileControl = $("#activationFile");

    var formData = new FormData();
    formData.append("activationFile",fileControl[0].files[0]);
    var self = this;
    jQuery.ajax({
        url : '/operations/activationsFile',
        type: 'POST',
        enctype: 'multipart/form-data',
        contentType: false,
        processData: false,
        data:formData,
        success: function(data,status,xhr){
            self.showSuccess('File has been Uploded');
        },
        error: function(xhr,status,e){
            //alert('Error');
        }
    });
}