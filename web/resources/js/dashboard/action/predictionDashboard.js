/**
 * Created by AdrianIonita on 10/4/2017.
 */

var PredictionDashboardAction = function() {
    this.editedSpecIds = [];
    this.specTableSelection = null;

}

PredictionDashboardAction.prototype.initRetailerPage = function(){
    var retailerCode = $("#comerciantForm_Comerciant").val();

    var self = this;
    $.ajax({
        url: flunkyWorkspace.urlPrefix + "/getRetailerAnalytics?retailerCode=" + retailerCode, type: 'GET',
        success: function (result) {
            $("#retailerForm_ClientsNumber").val(result.data.clientsNr);
            $("#retailerForm_Churn").val(result.data.churn);
            $("#retailerForm_NewCustomers").val(result.data.newCustomers);
            $("#retailerForm_NextMonthTx").val(result.data.nextMonthTx);

            new Chart(document.getElementById("sharePercChart"), {
                type: 'pie',
                data: {
                    labels: [retailerCode, 'others'],
                    datasets: [
                        {
                            label: "% ",
                            backgroundColor: ["#3e95cd", "#8e5ea2"],
                            data: [result.data.sharePerc, 100 - result.data.sharePerc]
                        }
                    ]
                },
                options: {
                    legend: {display: false},
                    title: {
                        display: true,
                        text: 'Market Share'
                    }
                }
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error retrieving clients statistics');
        }
    });
}

PredictionDashboardAction.prototype.initPredictionPage = function() {

    var categoryCode = $("#categorieForm_TipCategorie").val();

    var self = this;
    $.ajax({
        url: flunkyWorkspace.urlPrefix + "/getCategoryAnalytics?categoryCode=" + categoryCode, type: 'GET',
        success: function (result) {
            $("#categoryForm_TotalExpenditure").val(result.data.totalExp);
            $("#categoryForm_AvgBasketSize").val(result.data.avgBasketSize);
            $("#categoryForm_numberClients").val(result.data.clientsNr);
            $("#categoryForm_RaifClientPerc").val(result.data.clientPerc);

            new Chart(document.getElementById("top3Players"), {
                type: 'horizontalBar',
                data: {
                    labels: [result.data.topPlayer1, result.data.topPlayer2, result.data.topPlayer3],
                    datasets: [
                        {
                            label: "$ ",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
                            data: [result.data.topPlayer1Value, result.data.topPlayer3Value, result.data.topPlayer3Value]
                        }
                    ]
                },
                options: {
                    legend: {display: false},
                    title: {
                        display: true,
                        text: 'Top 3 Players'
                    }
                }
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error retrieving clients statistics');
        }
    });

    $.ajax({
        url: flunkyWorkspace.urlPrefix + "/getBasketSize?categoryCode=" + categoryCode, type: 'GET',
        success: function (result) {
            console.log(result);
            var labels = result.data.map(function(a) {return a.month;});
            var values = result.data.map(function(a) {return a.basketSize;});
            new Chart(document.getElementById("basketSize"), {
                type: 'horizontalBar',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "$ ",
                            data: values
                        }
                    ]
                },
                options: {
                    legend: {display: false},
                    title: {
                        display: true,
                        text: 'Basket Size'
                    }
                }
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error retrieving clients statistics');
        }
    });

}
