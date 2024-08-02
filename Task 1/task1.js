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

const obj = {};
for (let i = a; i < b; i++) {
    if (isPrime(i)) {
        obj[i] = binary(i);
    }
    else{
        obj[i]=factors(i);
    }
}
console.log(obj);



