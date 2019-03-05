// Функция для вычисления чисел Фибоначчи :)
const F = (n) => {
    if (n < 0) {
        throw new Error('WTF IS GOING ON?');
    }

    if (n === 1 || n === 0) {
        return 1;
    }
    return F(n-1) + F(n-2);
};
// Функция из задания
const f = (x) => {
    return 2*Math.pow(x, 3) + 9*Math.pow(x,2) - 21;
};

const findMinN = (L, l) => {
    let N = null;
    for (let i = 1; F(i) < Math.abs(L)/l; i++) {
        N = i;
    }
    return N+1;
};


// Начальные значения
const a0 = -1;
const b0 = 3;
const eps = 0.3;
const l = 1;
const L0 = b0 - a0;

const N = findMinN(L0, l);
const y0 = a0 + (b0-a0)*(F(N-2)/F(N));
const z0 = a0 + (b0-a0)*(F(N-1)/F(N));

console.log(`Начальные значения: L0=${L0}, N=${N}, y0=${y0}, z0=${z0}`);


(function quickMath(y,z,a,b,k) {
    let ak;
    let bk;
    let yk;
    let zk;
    console.log(`Get params: y=${y}, z=${z}, a=${a}, b=${b}, k=${k}`);
    console.log(`y=${y}; f(y) = ${f(y)}; z=${z}; f(z) = ${f(z)}`);
    if (f(y) <= f(z)) {
        ak = a;
        bk = z;
        zk = y;
        yk = ak + (bk-ak)*(F(N-k-3)/F(N-k-1));
    } else {
        ak = y;
        bk = b;
        yk = z;
        zk = ak + (bk-ak)*(F(N-k-2)/F(N-k-1));
    }

    console.log(`ak=${ak}, bk=${bk}, yk=${yk}, zk=${zk}`);

    let Y;
    let Z;
    let A;
    let B;
    if (k === N-3) {
        Y = zk;
        Z = Y + eps;
        console.log(`f(Y) = ${f(Y)}; f(Z) = ${f(Z)}`);
        if (f(Y) <= f(Z)) {
            A = ak;
            B = zk;
        } else {
            A = yk;
            B = bk;
        }
        console.log(`Result: x∈[${A};${B}]; x*≈${(A+B)/2}; f(x*)=${f((A+B)/2)}`);
    } else {
        quickMath(yk, zk, ak, bk, k+1);
    }
})(y0,z0,a0,b0,0);
