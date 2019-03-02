const f = (x) => {
    return 2*Math.pow(x, 3) + 9*Math.pow(x,2) - 21;
};

const a0 = -1;
const b0 = 3;
const eps = 0.3;

(function quickMath(a,b,k) {
    let x = (a+b)/2;
    const L = Math.abs(b-a);
    let y = a + L/4;
    let z = b - L/4;

    let bk;
    let ak;
    let xk;
    let Lk;
    if (f(y) < f(x)) {
        console.log(`${f(y)} < ${f(x)}`);
        bk = x;
        ak = a;
        xk = y;
    } else {
        if (f(z) < f(x)) {
            console.log(`${f(z)} < ${f(x)}`);
            ak = x;
            bk = b;
            xk = z;
        } else {
            console.log(`${f(z)} > ${f(x)}`);
            ak = y;
            bk = z;
            xk = x;
        }
    }

    Lk = Math.abs(bk-ak);
    console.log(bk, ak, xk, Lk);
    if (Lk <= eps) {
        console.log(`x*=${xk}, f(x*)=${f(xk)}, k+1=${k+1}`);
        return xk;
    } else {
        quickMath(ak, bk, k+1);
    }
})(a0, b0, 0);
