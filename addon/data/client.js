
$(document).ready(function() {
    $('#send_msg').click(function() {
        var m = $('#msg').val();
        console.log(m);
        self.postMessage(m);
    })
});

self.port.on("message", function(m) {
    $('#log').append(m+"\n");
});