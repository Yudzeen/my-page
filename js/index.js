var info = {};

const alert = function(text) {
    window.alert(text);
};

const updateInfo = function(newInfo) {
    info = JSON.parse(newInfo);
    console.log("Update info: %O", info);
}