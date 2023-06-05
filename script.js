$.get('https://openexchangerates.org/api/latest.json', {
    app_id: 'c8ec220a99b348de9c11e92d43234c9c',   
    base: "EUR",
    symbols: 'RUB,USD',
}, function(data) {
    console.log(data)
    window.eur_to_rub_original = data["rates"]["RUB"]
    window.eur_to_usd_original = data["rates"]["USD"]
    eur_to_rub = eur_to_rub * window.eur_to_rub_original
    eur_to_usdt = eur_to_usdt / window.eur_to_usd_original
        
    document.getElementById("rub1").innerHTML = (eur_to_rub*rub1).toFixed(1);
    document.getElementById("rub2").innerHTML = (eur_to_rub*rub2).toFixed(1);
    document.getElementById("rub3").innerHTML = (eur_to_rub*rub3).toFixed(1);
    document.getElementById("rub4").innerHTML = (eur_to_rub*rub4).toFixed(1);
    document.getElementById("rub5").innerHTML = (eur_to_rub*rub5).toFixed(1);
    document.getElementById("rub6").innerHTML = (eur_to_rub*rub6).toFixed(1);
    document.getElementById("rub7").innerHTML = (eur_to_rub*rub7).toFixed(1);
    document.getElementById("rub8").innerHTML = (eur_to_rub*rub8).toFixed(1);
    document.getElementById("rub9").innerHTML = (eur_to_rub*rub9).toFixed(1);
    document.getElementById("rub10").innerHTML = (eur_to_rub*rub10).toFixed(1);
    document.getElementById("rub11").innerHTML = (eur_to_rub*rub11).toFixed(1);

    document.getElementById('usdt1').innerHTML = (eur_to_usdt*usdt1).toFixed(3);
    document.getElementById('usdt2').innerHTML = (eur_to_usdt*usdt2).toFixed(3);
    document.getElementById('usdt3').innerHTML = (eur_to_usdt*usdt3).toFixed(3);
    document.getElementById('usdt4').innerHTML = (eur_to_usdt*usdt4).toFixed(3);
    document.getElementById('usdt5').innerHTML = (eur_to_usdt*usdt5).toFixed(3);
    document.getElementById('usdt6').innerHTML = (eur_to_usdt*usdt6).toFixed(3);
    document.getElementById('usdt7').innerHTML = (eur_to_usdt*usdt7).toFixed(3);
    document.getElementById('usdt8').innerHTML = (eur_to_usdt*usdt8).toFixed(3);
    document.getElementById('usdt9').innerHTML = (eur_to_usdt*usdt9).toFixed(3);
    document.getElementById('usdt10').innerHTML = (eur_to_usdt*usdt10).toFixed(3);
    document.getElementById('usdt11').innerHTML = (eur_to_usdt*usdt11).toFixed(3);
});
