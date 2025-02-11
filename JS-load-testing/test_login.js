import http from 'k6/http';
import {sleep} from 'k6';

export const options={
    iterations: 5,
    vus:2
}

export default function() {
    let res = http.get("http://10.201.1.138:800/eazyn/login.php"); // mau uji dimana

    res = res.submitForm({ //proses login
        formSelector: 'form',
        fields: {username:"mutiara", password:"123456"}
    });

    sleep(3); // berhenti seberapa lama tiap iterations 1 detik
}