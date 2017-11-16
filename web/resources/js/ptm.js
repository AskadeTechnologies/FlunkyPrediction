/**
 * Created by AdrianIonita on 5/1/2017.
 */
var flunkyWorkspace = new FlunkyWorkspace();

$(document).ready(function() {
    flunkyWorkspace.init();
});

$(document).ajaxStart(function() { Pace.restart(); });