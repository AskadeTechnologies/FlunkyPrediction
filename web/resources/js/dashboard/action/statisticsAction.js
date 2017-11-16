/**
 * Created by AdrianIonita on 6/4/2017.
 */
var StatisticsAction = function() {
    this.all_clients_stat = null;
}

StatisticsAction.prototype.initStatisticsPage = function() {
    this.allClientsStat();
    selfForTab = this;
}

StatisticsAction.prototype.allClientsStat = function() {
    var self = this;
    $.ajax({
        url: sunlightWorkspace.urlPrefix + "/clientStatistics", type: 'GET',
        success: function (result) {
            self.all_clients_stat = new Morris.Bar({
                element: 'all_clients_chart',
                resize: true,
                data: [
                    {y: 'Parteneri ('+result.data.partnerCount+')', a: result.data.partnerCount},
                    {y: 'Beneficiari ('+result.data.beneficiaryCount+')', b: result.data.beneficiaryCount}
                ],
                barColors: ['red', 'green'],
                xkey: 'y',
                ykeys: ['a','b'],
                labels: ['Parteneri', 'Beneficiari'],
                hideHover: 'auto'
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error retrieving clients statistics');
        }
    });
}
