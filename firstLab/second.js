const f = (x) => {
    return 2*Math.pow(x, 3) + 9*Math.pow(x,2) - 21;
};

const a0 = -1;
const b0 = 3;
const eps = 0.3;

const y0 = a0 + (b0-a0)*((3-2.24)/2);
const z0 = a0 + b0 - y0;

console.log(`y0 = ${y0.toFixed(2)}; z0 = ${z0.toFixed(2)}`);


(function quickMath(y,z,a,b,k) {
    let ak;
    let bk;
    let yk;
    let zk;

    console.log(`y = ${y.toFixed(2)}; z = ${z.toFixed(2)}; a = ${a.toFixed(2)}; b = ${b.toFixed(2)}; k = ${k.toFixed(2)}`);
    console.log(`f(y) = ${f(y).toFixed(2)}; f(z) = ${f(z).toFixed(2)}`);
    if (f(y) <= f(z)) {
        ak = a;
        bk = z;
        yk = ak + bk - y;
        zk = y;
    } else {
        ak = y;
        bk = b;
        yk = z;
        zk = ak + bk - z;
    }
    if (Math.abs(ak - bk) <= eps) {
        const x = (ak+bk)/2;
        console.log(`x∈[${ak.toFixed(2)}; ${bk.toFixed(2)}]; x=${x.toFixed(2)}; f(x*)=${f(x).toFixed(2)}`);
    } else {
        quickMath(yk, zk, ak, bk, k+1);
    }
})(y0, z0, a0, b0, 0);

