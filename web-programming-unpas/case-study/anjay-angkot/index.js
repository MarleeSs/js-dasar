const statusCar = function () {
    let allCar = 10;
    let noCar = 1;

    while (noCar <= allCar) {
        if (noCar <= 6 && noCar !== 5) {
            console.info(`Angkot No. ${noCar} beroperasi dengan baik`);
        } else if (noCar === 7 || noCar === 9) {
            console.info(`Angkot No. ${noCar} tidak dapat beroperasi`);
        } else {
            console.info(`Angkot No. ${noCar} sedang lembur`);
        }
        noCar++;
    }
};

let carChairs = ['Coba', undefined, 'Aja'];

const addPeopleToCar = function (name, data) {
    if (data.length === 0) {
        data.push(name);
        return data;
    } else {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === undefined) {
                data[i] = name;
                return data;
            } else if (i === data.length - 1) {
                data.push = name;
                return data;
            }
        }
    }
};

