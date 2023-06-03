$.get('https://openexchangerates.org/api/latest.json', {
    app_id: '5f218031eeb34a2f9d8308be70c21d82',   
    base: "EUR",
    symbols: 'RUB,USD',
}, function(data) {
    eur_to_rub_original = data["responseJSON"]["rates"]["RUB"]
    eur_to_usd_original = data["responseJSON"]["rates"]["USD"]
});
