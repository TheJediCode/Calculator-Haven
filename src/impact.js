function impactForce() {
    const output = document.querySelector(".impact-output");
    let m = document.getElementById('m-impact').value;
    let v = document.getElementById('v-impact').value;
    let d = document.getElementById('d-impact').value;
    let F = (m / 2) * (v ** 2) / d;
    let o = Math.round((F + Number.EPSILON) * 100) / 100;
    if (isNaN(o) || !isFinite(o)) {
        return;
    } else {
        output.innerText = `${o} Newtons of Force`;
        console.log(F);
    };
}

function potentialEnergy() {
    const output = document.querySelector(".potential-output");
    let m = document.getElementById("m-potential").value;
    let g = document.getElementById("g-potential").value;
    let h = document.getElementById("h-potential").value;
    let d = document.getElementById("d-potential").value;
    let F = (m * g * h) / d;
    let o = Math.round((F + Number.EPSILON) * 100) / 100;
    if (isNaN(o) || !isFinite(o)) {
        return;
    } else {
        output.innerText = `${o} Newtons of Force`;
        console.log(F);
    };
}

function bmiImperial() {
    const output = document.querySelector(".bmi-output");
    let w = document.getElementById("w-body").value;
    let h = document.getElementById("h-body").value;
    let b = 703 * w / (h ** 2);
    let BMI = Math.round((b + Number.EPSILON) * 100) / 100;
    if (isNaN(BMI) || !isFinite(BMI)) {
        return;
    } else {
        output.innerText = `${BMI}`;
        console.log(b);
    };
}

function bmiStandard() {
    const output = document.querySelector(".bmi-output-standard");
    let m = document.getElementById("m-body").value;
    let h = document.getElementById("h-body-meters").value;
    let b = m / (h ** 2);
    let BMI = Math.round((b + Number.EPSILON) * 100) / 100;
    if (isNaN(BMI) || !isFinite(BMI)) {
        return;
    } else {
        output.innerText = `${BMI}`;
        console.log(b);
    };
}

function poundToKilogram () {
    const output = document.querySelector(".mass-output");
    let w = document.getElementById("w-pounds").value;
    let m = w * 0.45359237;
    let M = Math.round((m + Number.EPSILON) * 100) / 100;
    if (isNaN(M) || !isFinite(M)){
        return;
    } else {
        output.innerText = `${M} kg`;
        console.log(m);
    };
}

function inchesToMeters() {
    const output = document.querySelector(".meters-output");
    let i = document.getElementById("i-inches").value;
    let m = i * 0.0254;
    let M = Math.round((m + Number.EPSILON) * 100) / 100;
    if (isNaN(M) || !isFinite(M)) {
        return;
    } else {
        output.innerText = `${M} meters`;
        console.log(m);
    };
}

function taxDollars() {
    const output = document.querySelector(".tax-output");
    let d = document.getElementById("d-dollars").value;
    let t = d * 1.06;
    let T = Math.round((t + Number.EPSILON) * 100) / 100;
    if (isNaN(T) || !isFinite(T)) {
        return;
    } else {
        output.innerText = `$${T}`
        console.log(t);
    };
}

function pressure() {
    const output = document.querySelector(".pressure-output");
    let F = document.getElementById("f-force").value;
    let A = document.getElementById("a-area").value;
    let p = F / A;
    let P = Math.round((p + Number.EPSILON) * 100) / 100;
    if (isNaN(P) || !isFinite(P)){
        return;
    } else {
        output.innerText = `${P} Pascals`;
        console.log(p);
    };
}

function triangleArea() {
    const output = document.querySelector(".triangle-output");
    let b = document.getElementById("b-triangle").value;
    let h = document.getElementById("h-triangle").value;
    let a = 0.5 * b * h;
    let A = Math.round((a + Number.EPSILON) * 100) / 100;
    if (isNaN(A) || !isFinite(A)) {
        return;
    } else {
        output.innerText = `${A} units`;
        console.log(a);
    }
}

function restMass() {
    const output = document.querySelector(".restMass-output");
    let m = document.getElementById("m-restMass").value;
    let c = 299792458;
    let e = m * (c ** 2);
    let E = Math.ceil(e);
    if (isNaN(E) || !isFinite(E)) {
        return;
    } else {
        output.innerText = `${E} Joules`;
        console.log(E);
    }
}


function gamma() {
    const output = document.querySelector(".gamma-output");
    let v0 = document.getElementById("v-gamma").value;
    let c = 299792458;
    let v = v0 * c;
    let γ = (1) / (Math.sqrt(1 - (v ** 2)/(c ** 2)));
    if (isNaN(γ) || !isFinite(γ)) {
        return;
    } else {
        output.innerText = `${γ}`;
        console.log(γ);
    }
}

function timeDilation() {
    const output = document.querySelector(".time-output");
    let t0 = document.getElementById("t0-time").value;
    let γ = document.getElementById("γ-time").value;
    let t = γ * t0;
    if (isNaN(t) || !isFinite(t)) {
        return;
    } else {
        output.innerText = `${t} seconds`;
        console.log(t);
    }
} 