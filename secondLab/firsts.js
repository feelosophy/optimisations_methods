const f = (x) => {
    return 4*Math.pow(x[1], 2) + 2*x[1]*x[2] + 6*Math.pow(x[2],2);
};

const df1 = (x) => {
    return 8*x[1] + 2*x[2];
};

const df2 = (x) => {
    return 2*x[1] + 12*x[2];
};

const grad = (x) => {
    const result = [];
    result[1] = df1(x);
    result[2] = df2(x);
    console.log(`grad(x) = (${result[1]}; ${result[2]})`);
    return result;
};

const normalin = (x) => {
    const result = Math.sqrt(Math.pow(x[1],2) + Math.pow(x[2],2));
    console.log(`Norma = ${result};`);
    return result;
};

const x = [];
x[0] = [];
x[0][1] = 0;
x[0][2] = 0.5;

const e = 0.1;
const e1 = 0.15;
const e2 = 0.2;

const M = 10;

let tk = 0.1;

(function quickMath(k) {
    const gradient = grad(x[k]);
    console.log(`gradient = (${gradient[1]}; ${gradient[2]})`);
    if(normalin(gradient) < e1) {
        console.log(`Result: x*=(${x[k][1]};${x[k][2]});`);
        return true;
    } else {
        if (k >= M) {
            console.log(`Result: x*=(${x[k][1]};${x[k][2]});`);
            return true;
        } else {
            while (true) {
                x[k+1] = [];
                x[k+1][1] = x[k][1] - tk*gradient[1];
                x[k+1][2] = x[k][2] - tk*gradient[2];
                console.log(`x[k+1] = (${x[k+1][1]}; ${x[k+1][2]})`);

                if ((f(x[k+1]) - f(x[k]) < 0) || (f(x[k+1]) - f(x[k]) < (-1*e*Math.pow(normalin(grad(x[k])),2)))) {
                    break;
                } else {
                    tk = tk/2;
                }
            }

            const toCheck = [];
            toCheck[1] = x[k+1][1] - x[k][1];
            toCheck[2] = x[k+1][2] - x[k][2];

            if ((normalin(toCheck) < e2) && (Math.abs(f(x[k+1]) - f(x[k])) < e2)) {
                console.log(`Result: x*=(${x[k][1].toFixed(2)}; ${x[k+1][2].toFixed(2)}); f(x*) = ${f(x[k+1]).toFixed(2)}`);
                return true;
            } else {
                quickMath(k+1);
            }
        }
    }
})(0);
