let nb = 0;
let res = 0;
let lastSignal = 0;
/* 
lastSignal:
0 = nothing;
1 = plus;
2 = minus;
3 = mult;
4 = div;
5 = power 2;
6 = percent;
7 = power 3;
8 = square root;
*/

function my_sqrt() {
    let count = 0;
    let oddNum = 1;
    while (res > 0) {
        res -= oddNum;
        oddNum += 2;
        count++;
    }
    if (res != 0)
        return (count - 1);
    return (count);
}

function calculate() {
    if (lastSignal == 0) {
        res = nb;
    }
    else if (lastSignal == 1) {
        res += nb;
    }
    else if (lastSignal == 2) {
        res -= nb;
    }
    else if (lastSignal == 3) {
        res *= nb;
    }
    else if (lastSignal == 4) {
        res /= nb;
    }
    else if (lastSignal == 5) {
        res *= res;
    }
    else if (lastSignal == 6) {
        res /= 100;
    }
    else if (lastSignal == 7) {
        res *= res * res;
    }
    else if (lastSignal == 8) {
        res = my_sqrt();
    }
}

document.getElementById("equal").addEventListener("click", function() {
    calculate();
    document.getElementById("screen").textContent = res;
    res = 0;
    nb = 0;
    lastSignal = 0;
});

document.getElementById("n1").addEventListener("click", function() {
   document.getElementById("screen").textContent += "1";
   nb *= 10;
   nb += 1;
});

document.getElementById("n2").addEventListener("click", function() {
    document.getElementById("screen").textContent += "2";
    nb *= 10;
    nb += 2;
});

document.getElementById("n3").addEventListener("click", function() {
    document.getElementById("screen").textContent += "3";
    nb *= 10;
    nb += 3;
});

document.getElementById("cancel").addEventListener("click", function() {
    document.getElementById("screen").textContent = "";
    nb = 0;
    res = 0;
    lastSignal = 0;
 });
 
document.getElementById("n4").addEventListener("click", function() {
    document.getElementById("screen").textContent += "4";
    nb *= 10;
    nb += 4;
});
 
document.getElementById("n5").addEventListener("click", function() {
    document.getElementById("screen").textContent += "5";
    nb *= 10;
    nb += 5;
});

document.getElementById("n6").addEventListener("click", function() {
    document.getElementById("screen").textContent += "6";
    nb *= 10;
    nb += 6;
});
 
document.getElementById("n7").addEventListener("click", function() {
    document.getElementById("screen").textContent += "7";
    nb *= 10;
    nb += 7;
});
 
document.getElementById("n8").addEventListener("click", function() {
    document.getElementById("screen").textContent += "8";
    nb *= 10;
    nb += 8;
});

document.getElementById("n9").addEventListener("click", function() {
    document.getElementById("screen").textContent += "9";
    nb *= 10;
    nb += 9;
});
 
document.getElementById("n0").addEventListener("click", function() {
    document.getElementById("screen").textContent += "0";
    nb *= 10;
    nb += 0;
});
 
document.getElementById("plus").addEventListener("click", function() {
    document.getElementById("screen").textContent += "+";
    calculate();
    nb = 0;
    lastSignal = 1;
});

document.getElementById("minus").addEventListener("click", function() {
    document.getElementById("screen").textContent += "-";
    calculate();
    nb = 0;
    lastSignal = 2;
});

document.getElementById("mult").addEventListener("click", function() {
    document.getElementById("screen").textContent += "x";
    calculate();
    nb = 0;
    lastSignal = 3;
});

document.getElementById("div").addEventListener("click", function() {
    document.getElementById("screen").textContent += "÷";
    calculate();
    nb = 0;
    lastSignal = 4;
});

document.getElementById("power2").addEventListener("click", function() {
    document.getElementById("screen").textContent += "^2";
    calculate();
    nb = 0;
    lastSignal = 5;
});

document.getElementById("percent").addEventListener("click", function() {
    document.getElementById("screen").textContent += "%";
    calculate();
    nb = 0;
    lastSignal = 6;
});

document.getElementById("power3").addEventListener("click", function() {
    document.getElementById("screen").textContent += "^3";
    calculate();
    nb = 0;
    lastSignal = 7;
});

document.getElementById("sqrt").addEventListener("click", function() {
    document.getElementById("screen").textContent += "√";
    calculate();
    nb = 0;
    lastSignal = 8;
});