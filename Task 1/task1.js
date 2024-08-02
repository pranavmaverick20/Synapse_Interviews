const a = prompt("Enter lower limit");
const b = prompt("Enter upper limit");

const isPrime = (n) => {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            cnt++;
        }
    }
    if (cnt == 2) {
        return true;
    }
    else {
        return false;
    }
};

const binary = (n) => {
    let out = "";
    while (n > 0) {
        out = out.concat((n % 2).toString());
        n = Math.floor(n / 2);
    }
    return out;
};

const factors = (n) => {
    {
        let cnt = [];
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                cnt.push(i);
            }
        }
        return cnt;
    }

};

const obj = {}; //to store outputs in an object
for (let i = a; i < b; i++) {
    if (isPrime(i)) {
        obj[i] = binary(i);
    }
    else{
        obj[i]=factors(i);
    }
}
console.log(obj);
//output if range is 2 to 8{2: '10', 3: '11', 4: [1, 2, 4], 5: '101', 6: [1, 2, 3, 6], 7: '111' }


