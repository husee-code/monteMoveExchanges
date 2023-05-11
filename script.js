

fetch('https://iss.moex.com/iss/statistics/engines/currency/markets/selt/rates.json?iss.meta=off')
.then((response) => {
    if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
    }
    return response.json();
})
.then((json) => {
    // Текущий курс доллара ЦБРФ
    window.usd_to_rub = json.cbrf.data[0][json.cbrf.columns.indexOf('CBRF_USD_LAST')];
})
.catch((error) => {
    console.error(error);
});

fetch('https://iss.moex.com/iss/statistics/engines/currency/markets/selt/rates.json?iss.meta=off')
.then((response) => {
    if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
    }
    return response.json();
})
.then((json) => {
    // Текущий курс доллара ЦБРФ
    
    window.eur_to_rub = json.cbrf.data[0][json.cbrf.columns.indexOf('CBRF_EUR_LAST')];
    eur_to_usd = window.eur_to_rub / window.usd_to_rub;
    usd_to_eur = 1 / eur_to_usd;

    eur_to_usdt = 1 / eur_to_usd * 0.982;

    eur_to_rub = window.eur_to_rub * 1.01 * 1.017 * 1.011 * 1.005;

    document.getElementById("rub1").innerHTML = (eur_to_rub * 1.05).toFixed(3);
    document.getElementById("rub2").innerHTML = (eur_to_rub * 1.048).toFixed(3);
    document.getElementById("rub3").innerHTML = (eur_to_rub * 1.045).toFixed(3);
    document.getElementById("rub4").innerHTML = (eur_to_rub * 1.04).toFixed(3);
    document.getElementById("rub5").innerHTML = (eur_to_rub * 1.037).toFixed(3);
    document.getElementById("rub6").innerHTML = (eur_to_rub * 1.035).toFixed(3);
    document.getElementById("rub7").innerHTML = (eur_to_rub * 1.033).toFixed(3);
    document.getElementById("rub8").innerHTML = (eur_to_rub * 1.031).toFixed(3);
    document.getElementById("rub9").innerHTML = (eur_to_rub * 1.029).toFixed(3);
    document.getElementById("rub10").innerHTML = (eur_to_rub * 1.027).toFixed(3);
    document.getElementById("rub11").innerHTML = (eur_to_rub * 1.025).toFixed(3);

    document.getElementById('usdt1').innerHTML = (eur_to_usdt * 0.95).toFixed(3);
    document.getElementById('usdt2').innerHTML = (eur_to_usdt * 0.952).toFixed(3);
    document.getElementById('usdt3').innerHTML = (eur_to_usdt * 0.955).toFixed(3);
    document.getElementById('usdt4').innerHTML = (eur_to_usdt * 0.96).toFixed(3);
    document.getElementById('usdt5').innerHTML = (eur_to_usdt * 0.963).toFixed(3);
    document.getElementById('usdt6').innerHTML = (eur_to_usdt * 0.965).toFixed(3);
    document.getElementById('usdt7').innerHTML = (eur_to_usdt * 0.967).toFixed(3);
    document.getElementById('usdt8').innerHTML = (eur_to_usdt * 0.969).toFixed(3);
    document.getElementById('usdt9').innerHTML = (eur_to_usdt * 0.971).toFixed(3);
    document.getElementById('usdt10').innerHTML = (eur_to_usdt * 0.973).toFixed(3);
    document.getElementById('usdt11').innerHTML = (eur_to_usdt * 0.975).toFixed(3);

    
})
.catch((error) => {
    console.error(error);
});

