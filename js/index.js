var info = {};

const alert = function(text) {
    window.alert(text);
};

const updateInfo = function(info) {
    info = JSON.parse(info);
    console.log("Update info: %O", info);
}