import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';


function generateUniqueID(fname, lname) {
    var str = "";
    var random = uuidv4();
    str += fname.charAt(0).toLowerCase();
    str += lname.toLowerCase();
    str += random.slice(0, 8);
    return str;
}

function addAccount(array) {
    if (array.length == 4) {
        if (array[0] != "" && array[1] != "" && array[2] != "") {
            if (validator.isEmail(array[2]) == true) {
                if (array[3] >= 18) {
                    // create object
                    var ans = "";
                    ans += array[0] + ",";
                    ans += array[1] + ",";
                    ans += array[2] + ",";
                    ans += array[3] + ",";
                    ans += generateUniqueID(array[0], array[1]) + "\n";
                    appendFileSync("users.txt", ans);
                    return true;
                } return false;
            } return false;
        } return false;
    } return false;
}   

export default {generateUniqueID, addAccount};