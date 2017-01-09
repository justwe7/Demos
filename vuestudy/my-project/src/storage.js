const STORAGE_KEY = 'storageNAME';
export default {
    fetch: function () {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '[]');
    },
    save: function (json) {
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(json));
    }
}