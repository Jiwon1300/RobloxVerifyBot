const randomtext = ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😲','😝','🤑','🤯','😭','😑','😶','😋','🙆','👉','👇','🧠','💼','👮🏻','👍🏼','👎🏼','🐵','🌨','☁️','💧','🎬','🎧','🎮','🎲','🏅','🥇','🥈','🥉','🏆','🏒','🍎','🍫','🍿','🍪','🥛','🍽','🍴','🐑','🦀','🐔','🐭','🦊','🐧','🐞','🌍','🌏','🌕','🌖','🌚','🌝','🌵','🎄','🌲','☀️','⛅️','☔️','🍋'];
module.exports.getRandomText = function(){
    var randomvalue = "";
    randomvalue += randomtext[Math.floor(Math.random() * randomtext.length)];
    randomvalue += randomtext[Math.floor(Math.random() * randomtext.length)];
    randomvalue += randomtext[Math.floor(Math.random() * randomtext.length)];
    randomvalue += randomtext[Math.floor(Math.random() * randomtext.length)];
    randomvalue += randomtext[Math.floor(Math.random() * randomtext.length)];
    randomvalue += randomtext[Math.floor(Math.random() * randomtext.length)];
    return randomvalue
}
