let arr = [];

for(i = 0; i < 10; i++) {
    arr[i] = function() {
        return i;
    }
}
export { arr };
