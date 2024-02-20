// imageUtils.js

function convertImageToBase64(fileInput) {
    return new Promise((resolve, reject) => {
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            reject(new Error("No file selected"));
            return;
        }

        const reader = new FileReader();

        reader.onload = function () {
            resolve(reader.result.split(',')[1]);
        };

        reader.onerror = function (error) {
            reject(error);
        };

        const file = fileInput.files[0];
        if (file) {
            reader.readAsDataURL(file);
        } else {
            reject(new Error("Invalid file"));
        }
    });
}

module.exports = { convertImageToBase64 };


const getFromStore = (id) => {
    const storedUserData = localStorage.getItem('id');
    const parsedUserData = JSON.parse(storedUserData);
    return parsedUserData;
}

module.exports = getFromStore;