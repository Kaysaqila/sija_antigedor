import http from 'k6/http';
import {sleep} from 'k6';


export const options = {
    iterations:10, //menguji seberapa banyak ujicoba, simulasi user
};

export default function() {
    http.get("https://komdigi.go.id"); // mau uji dimana

    sleep(1); // berhenti seberapa lama tiap iterations 1 detik
}
