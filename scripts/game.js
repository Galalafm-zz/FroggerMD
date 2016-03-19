var soundL1 = 0,
    soundL2 = 0,
    soundL3 = 0,
    soundL4 = 0,
    soundL5 = 0,
    soundUrl = 0,
    i = 0, // nombre aléatoire entre 0 et 10
    idYT = 0,
    idCover = 0,
    track = 0,
    artist = 0;


var tabLevel1 = [        // to stock 21 ID youtube tracks of level 1
'XlBJR7ZELAM',
'7-Taz8WTqLk',
'wczW3GqXs9U',
'-AZor70LmJ0',
'I2mZgvl21X4',
'kFMMQm-LCV4',
'HSD303pGFRA',
'VRASPkOr-RI',
'GdSdeq0iiEE',
'AJm9z8GBQ4M',
't64m5Lm7CrA',
'eDzlxz2F5qI',
'D0rsWCT-kXo',
'X1ONMVaZlhI',
'bVXofbZtAL8',
'84bwIcC1Brk',
'COTZGbcS5BQ',
'BzS2LbJXLz4',
'E7QJs6c_jk4',
'hdN66CS7d_E',
'XlBJR7ZELAM', // same que tab[0]
];

var tabLevel1_cover = [        // to stock cover ID of level 1
'https://i1.sndcdn.com/artworks-000108455053-eru97e-t500x500.jpg',
'http://is1.mzstatic.com/image/thumb/Music6/v4/cd/95/cc/cd95cc01-2f21-ea9c-6075-1cff17a669c4/source/300x300bb.jpg',
'https://api-media.beatport.com/240x240/sounds/kwfn7j2es2g7/1440435106.jpg',
'http://images.shazam.com/coverart/t113754291-i834648203_s400.jpg',
'https://pp.vk.me/c633119/v633119921/c5ec/l2m-_d0m9n0.jpg',
'https://i.ytimg.com/vi/98xvgCYBTyU/hqdefault.jpg',
'https://i.ytimg.com/vi/HSD303pGFRA/hqdefault.jpg',
'http://images.junostatic.com/full/CS575646-01B-BIG.jpg',
'https://i1.sndcdn.com/artworks-000095363840-o83gd2-t500x500.jpg',
'https://i1.sndcdn.com/artworks-000135913522-ombllf-t500x500.jpg',
'https://i.ytimg.com/vi/t64m5Lm7CrA/hqdefault.jpg',
'https://www.residentadvisor.net/images/reviews/2010/if1007.jpg',
'https://pbs.twimg.com/media/CdBndRpW0AEzsbq.jpg',
'https://i1.sndcdn.com/avatars-000117386401-gvhdq0-t500x500.jpg',
'https://i.ytimg.com/vi/ZSUyg99Yz28/hqdefault.jpg',
'https://i.ytimg.com/vi/84bwIcC1Brk/maxresdefault.jpg',
'https://i.ytimg.com/vi/COTZGbcS5BQ/maxresdefault.jpg',
'https://www.residentadvisor.net/images/reviews/2014/rms001-guygerberdixon.jpg',
'http://i.imgur.com/RkfUp27.jpg',
'http://images.junostatic.com/full/CS2935147-02A-BIG.jpg',
'https://i1.sndcdn.com/artworks-000108455053-eru97e-t500x500.jpg', // same que tab[0]
];

var tabLevel1_track = [        // to stock track name of level 1
'Timing (Original Mix)',
'Korrelig (Original Mix)',
'Room',
'Take Me To Your Paradise (Gregorythme Remix)',
'Ashtar (Original Mix)',
'The Song (Original Mix)',
'Foreign Guest',
'Under The Bridge',
'Under The River',
'Ebb and Flow',
'Moan (Trentemoller Remix)',
'Confessions of an English Opium Eater',
'Phalanx',
'Warg',
'Hydra (Original Mix)',
'Bang The Box (Original Mix)',
'Nonneo (Donato Dozzy Remix)',
'No Distance (Lake People Remix)',
'Work (Marcel Dettmann Remix)',
'Aches [Studio Barnhaus]',
'Timing (Original Mix)', // same que tab[0]
];

var tabLevel1_artist = [        // to stock artist name of level 1
'Guy Gerber',
'Egbert',
'Alberto Ruiz',
'Miyagi',
'Kevin Lucas',
'Stimming',
'Rek',
'Martin Landsky',
'YokoO\'s (Above The Clouds Live Edit)',
'Archie Hamilton',
'Trentemoller',
'Danton Eeprom',
'Recondite',
'Recondite',
'Agents Of Time',
'Little By Little',
'Tin Man',
'Guy Gerber & Dixon',
'Junior Boys',
'Baba Stiltz',
'Guy Gerber', // same que tab[0]
];

var tabLevel2 = [        // to stock 16 tracks of level 2
'-hrWHQ1Yxlo',
'C0pACItGzpQ',
'G8uDFn-8ZXg',
'zI6fUMX6uKI',
'jqAXq-UAmys',
'KtoBDBAY6Z4',
'isSuEYFjiFk',
'0wvxnaQ5cbs',
'xiNsu6BCRu8',
'LO-p0got1vM',
'xiJVYJwuCic',
'4aSfIpzlGpQ',
'Go14fQGV8Zw',
'cr4bsdoZKxQ',
'IX-Ca9pe3vc',
'-hrWHQ1Yxlo'
];

var tabLevel2_cover = [        // to stock cover ID of level 2 PAS FAIT
'http://www.technique.co.jp:88/photo/img/201504/PHILOMENA11_1.JPG',
'http://1.bp.blogspot.com/-5RV6hLBhgZ4/UWuySZkB29I/AAAAAAAAAPo/P5hEqsyN9yc/s1600/533419_586869297998154_410433523_n.jpg',
'https://d1wtzzt4oxg683.cloudfront.net/images/covers/large/49/156049.jpg',
'https://www.residentadvisor.net/images/reviews/2007/marcromboyvsguiboratto-eurasia.jpg',
'https://i1.sndcdn.com/artworks-000060661922-197ysl-t300x300.jpg',
'https://oedipepurple.files.wordpress.com/2013/08/800071003005.jpg',
'https://i1.sndcdn.com/artworks-000025083141-pfj211-t500x500.jpg',
'https://f1.bcbits.com/img/a1930666487_16.jpg',
'http://coconutsdisk.com/ekoda/wp-content/uploads/2015/03/20150328ekdp-7.jpg',
'http://www.serendeepity.net/wp-content/uploads/SE03.jpg',
'https://www.residentadvisor.net/images/cover/tr-148988.jpg',
'http://www.deejay.de/images/xl/7/7/125777.jpg',
'http://4.bp.blogspot.com/-izQe3BICrlA/TsGLNN_stAI/AAAAAAAACgo/pc8wKmIbtrc/s320/retro-32c40509f1ecc634856c6a5882558619_h.jpg',
'http://www.futuresequence.com/Uploads/kiasmos-thrown-large.jpg',
'https://i1.sndcdn.com/artworks-000113584214-oqd4de-t500x500.jpg',
'http://www.technique.co.jp:88/photo/img/201504/PHILOMENA11_1.JPG'
];

var tabLevel2_track = [        // to stock TRACK name of level 2
'Machine (John Talabot\'s Synthedit)',
'Another earth',
'Silent Space',
'Eurasia (Gui\'s Version)',
'Ripe Traxx',
'Your Love',
'Boston',
'Concrete Groove',
'Luv Dancin\'',
'Inapropriate',
'Bonita',
'The Break Up |Heist Recordings|',
'Tranquilizer',
'Thrown',
'88888888',
'Machine (John Talabot\'s Synthedit)'
];

var tabLevel2_artist = [        // to stock ARTIST name of level 2
'John Talabot',
'Tale of Us',
'Tale of US',
'Marc Romboy & Gui Boratto',
'Mella Dee',
'Richy Ahmed',
'Detroit Swindle',
'De Sluwe Vos',
'THE UNDERGROUND SOLUTION',
'Siler & Dima, Thomas Zander',
'Philip Bader',
'Detroit Swindle',
'Jamie Jones',
'Kiasmos',
'Flavien Berger',
'John Talabot'
];
 
var tabLevel3 = [        // to stock 11 ID youtube tracks of level 3
'vpOOQuV3S0U',
'ddnQl1QZCjg',
'-ht9O-z52Pg',
'66d2E6B5Yx0',
'GBA_mQQ31iU',
'IejqrcG41UU',
'Vq2SFsfWpX4',
'EM50Oj6rz1k',
'j3AVrxx3QoQ',
'5olq3S8yVaE',
'vpOOQuV3S0U'
];

var tabLevel3_cover = [        // to stock 11 cover ID of level 3
'http://blog1-30f8.kxcdn.com/wp-content/uploads/2013/06/Red-Axes-Caminho-De-Dreyfus-EP.jpg',
'https://pp.vk.me/c628419/v628419639/6541/py8ECfkxWLo.jpg',
'http://www.soul-kitchen.fr/wp/wp-content/uploads/2010/12/KZA-Le-Troublant-Acid.jpg',
'https://cdn.discogs.com/Gk_D2vCTb0wPCBwRtpbtoyyojcE=/300x300/filters:strip_icc():format(jpeg):mode_rgb()/discogs-images/R-5669713-1405079272-8177.jpeg.jpg',
'https://i1.sndcdn.com/artworks-000149476692-uj0cum-t500x500.jpg',
'http://s0.limitedrun.com/images/1166631/NighsInLimboRemix_600px.jpg',
'https://i1.sndcdn.com/avatars-000003657742-sab9fp-t500x500.jpg',
'http://www.catchthatbeat.com/wp-content/uploads/2016/03/Screen-Shot-2016-03-08-at-10.32.03-am.png',
'https://f1.bcbits.com/img/a3036727083_10.jpg',
'http://hotreleases.me/wp-content/uploads/2012/11/6178163.jpg',
'http://blog1-30f8.kxcdn.com/wp-content/uploads/2013/06/Red-Axes-Caminho-De-Dreyfus-EP.jpg'
];

var tabLevel3_track = [        // to stock TRACK name of level 2
'Caminho De Dreyfus (Marc Houle Remix)',
'Hot In The Fridge',
'Le Troublant Acid',
'Goingbackeast',
'J.B.Y.',
'Mind (Reprise)',
'Galaxy - Leena050',
'Horizons',
'Moonland (Barnt Remix)',
'Try (Original Mix)',
'Caminho De Dreyfus (Marc Houle Remix)'
];

var tabLevel3_artist = [        // to stock ARTIST name of level 2
'Red Axes feat. Abrão',
'Daniel Bortz',
'KZA',
'Domenico Rosa',
'David August',
'VIMES',
'Artifact',
'Autograf',
'Dream Weapons',
'Monoloc',
'Red Axes feat. Abrão'
];

var tabLevel4 = [        // to stock 6 ID youtube tracks of level 4
'c8R-420Yt2U',
'vz32qKNafns',
'tYm1gR7zprg',
'c4f7GtBR3RM',
'ABNn7aC8UtI',
'c8R-420Yt2U'
];

var tabLevel4_cover = [        // to stock 6 cover ID of level 4
'https://i1.sndcdn.com/artworks-000148862234-1wt5dk-t500x500.jpg',
'https://www.residentadvisor.net/images/cover/tr-733419.jpg',
'http://www.portalsmusic.com/wp-content/uploads/2014/08/Gidge_Norrland.jpg',
'https://soniscope.files.wordpress.com/2014/08/kiasmos-burnt.jpg',
'https://i1.sndcdn.com/artworks-000008996660-s21v5t-t500x500.jpg',
'https://i1.sndcdn.com/artworks-000148862234-1wt5dk-t500x500.jpg'
];

var tabLevel4_track = [        // to stock TRACK name of level 2
'Mistral (Stephan Bodzin Remix)',
'Cesio (Someone Outside Remix)',
'Norrland',
'Burnt',
'Irminsul le pilier du monde',
'Mistral (Stephan Bodzin Remix)'
];

var tabLevel4_artist = [        // to stock ARTIST name of level 2
'Rodriguez Jr.',
'Aquiver & Darse',
'Gidge',
'Kiasmos',
'Damabiah',
'Rodriguez Jr.'
];

var tabLevel5 = [        // to stock 6 ID youtube tracks of level 5
'VZI_nTnZghk',
'iUPKfwDLo5E',
'9JZSN-gmEyc',
'AAdGGLIxrwM',
'fMIoRU6zeeg',
'VZI_nTnZghk'
];

var tabLevel5_cover = [        // to stock 6 ID youtube tracks of level 5
'http://obviously.fr/wp-content/uploads/2014/10/COVER_Idioma-Pandore.jpg',
'https://www.residentadvisor.net/images/cover/tr-630502.jpg',
'http://payload159.cargocollective.com/1/6/201452/5489982/agoria-lvi.jpg',
'http://www.tsugi.fr/sites/default/files/styles/article_full_normal_x1/public/capture_decran_2015-03-23_a_11.36.26.png?itok=3HJM3X87',
'https://i1.sndcdn.com/artworks-000079977355-g936on-t500x500.jpg',
'http://obviously.fr/wp-content/uploads/2014/10/COVER_Idioma-Pandore.jpg'
];

var tabLevel5_track = [        // to stock TRACK name of level 2
'Pandore',
'The Infamous (Robytek Vs Shield Cut)',
'Les violons ivres',
'Tout est Magnifique',
'Hawaii oh oui',
'Pandore'
];

var tabLevel5_artist = [        // to stock ARTIST name of level 2
'Idioma',
'Butch & C.Vogt',
'Agoria',
'Jacques',
'Romain Play',
'Idioma'
];

function start_game() {
    game = new Game();
   $(document).keydown(function(e) {
        if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
            e.preventDefault();
        }
        if (game.dead == -1 && game.lives > 0) {
            if (e.keyCode == 38){ 
                up();
            } else if (e.keyCode == 40){
                down();
            } else if (e.keyCode == 37){
                left();
            } else if (e.keyCode == 39){
                right();
            } 
        }
    });
    board = document.getElementById("game");
    context=board.getContext("2d");
    // sound = document.createElement('div');
    // sound.setAttribute('width', '0');
    // sound.setAttribute('height', '0');
    // sound.setAttribute('frameborder', '0');
    sprites = new Image();
    deadsprite = new Image();
    sprites.src = "assets/frogger_sprites.png"; 
    deadsprite.src = "assets/dead_frog.png";
    sprites.onload = function() {
        draw_bg();
        draw_info();
        make_cars();
        make_logs();
        draw_frog();
        setInterval(game_loop, 50);
        soundAlea(); // determine nombre aléatoire 
        iframe(idYT);
        document.getElementById('share').style.visibility='hidden';
        cover = document.getElementById('cover');
    }
}

function restart() {
    // game = new Game();
    // game_loop();
    // soundAlea(); // determine nombre aléatoire 
    // iframe(idYT);
    win();
}

function soundAlea() {
    if (game.level == 1) {
        i = Math.ceil(Math.random()*20);
        soundL1 = tabLevel1[i];
        artist = tabLevel1_artist[i];
        track = tabLevel1_track[i];
        idCover = tabLevel1_cover[i];
    }
    else if (game.level == 2) {
        i = Math.ceil(Math.random()*15);
        soundL2 = tabLevel2[i];
        console.log(i, soundL2);
        artist = tabLevel2_artist[i];
        track = tabLevel2_track[i];
        idCover = tabLevel2_cover[i];
    }
    else if (game.level == 3) {
        i = Math.ceil(Math.random()*10);
        soundL3 = tabLevel3[i];
        artist = tabLevel3_artist[i];
        track = tabLevel3_track[i];
        idCover = tabLevel3_cover[i];
    }
    else if (game.level == 4) {
        i = Math.ceil((Math.random()*10)/2);
        soundL4 = tabLevel4[i];
        artist = tabLevel4_artist[i];
        track = tabLevel4_track[i];
        idCover = tabLevel4_cover[i];
    }
    else {
        i = Math.ceil((Math.random()*10)/2);
        soundL5 = tabLevel5[i];
        artist = tabLevel5_artist[i];
        track = tabLevel5_track[i];
        idCover = tabLevel5_cover[i];
    }
}
function game_loop() {
    draw_bg();
    draw_info();
    draw_cars();
    draw_logs();
    draw_wins();
    if (game.lives > 0) { 
        draw_frog();
    }
    else {
        game_over();
        document.getElementById('player').innerHTML = '#';
        var canvas = document.getElementById('game');
        canvas.addEventListener('click', function(){
            restart();
        })
        // canvas.setAttribute('on')
    }
}
// drawing functions: bg, info, frogger, cars, logs, wins
function draw_bg()  {
    context.fillStyle="#1B5582"; //"#191970";
    context.fillRect(0,0,399,284);
    context.fillStyle="#022331"; //"#191970";
    context.fillRect(0,0,399,73);
    context.fillStyle="#000000";
    context.fillRect(0,284,399,283);
    context.drawImage(sprites, 0, 0, 399, 113, 0, 0, 399, 113);
    context.drawImage(sprites, 0, 119, 399, 34, 0, 283, 399, 34);
    context.drawImage(sprites, 0, 119, 399, 34, 0, 495, 399, 34);
}
function draw_info() {
    draw_lives();
    context.font = "bold 12pt montserrat";
    context.fillStyle = "#3B8E6B"; //"#3B8E6B";
    context.fillText(" Level ", 74, 545);
    draw_level();
    context.font = "bold 10pt montserrat";
    context.fillText("Score  ", 4, 560);
    context.fillText("Highscore  ", 200, 560);
    draw_score();
}
function draw_lives() {
    var x = 4;
    var y = 532;
    if ((game.score - (game.extra * 10000)) >= 10000 && game.lives < 4) {
        game.extra++;
    }
    for (var i = 0; i<(game.lives + game.extra); i++){ 
        context.drawImage(sprites, 13, 334, 17, 23, x, y, 11, 15);
        x += 14;
    }
}
function draw_level() {
    context.font = "bold 15pt montserrat";
    context.fillStyle = "#3B8E6B";
    context.fillText(game.level, 131, 545);
}
function draw_score () {
    context.font = "bold 10pt montserrat";
    context.fillStyle = "#FFFFFF";
    context.fillText(game.score, 49, 560);
    if (window.localStorage['highscore']) {
        highscore = localStorage['highscore'];
    } else highscore = 0;
    context.fillText(highscore, 272, 560);
}
function draw_frog() {
    game.log = log_collision();
    if (game.dead > 0) {
            // @4,2 ; 19x24
        context.drawImage(deadsprite, 0, 0, 30, 30, game.posX, game.posY, 30, 30);
        game.dead--;
    }
    else if (game.dead == 0) {
        game.reset();
    }
    else if (game.win > 0) {
        game.win--;
    }
    else if (game.win == 0) {
        game.reset();
    }
    else if (car_collision()) {
        sploosh();
    }
    else if (water_collision() && game.log == -1) {
        sploosh();
    }
    else if (check_win()){
        win();
        console.log('gagné');
    }
    else {
        if (game.log >= 0) {
            var tempX = game.posX - (logs[game.log].dir * logs[game.log].speed);
            if (bounds_check(tempX, game.posY)) {
                game.posX = tempX;
            }
        }
        if (game.facing == 'u') {
            context.drawImage(sprites, 12, 369, 23, 17, game.posX, game.posY, 23, 17);
        }
        else if (game.facing == 'd') {
            context.drawImage(sprites, 80, 369, 23, 17, game.posX, game.posY, 23, 17);
        }
        else if (game.facing == 'l') {
            context.drawImage(sprites, 80, 335, 19, 23, game.posX, game.posY, 19, 23);
        }
        else if (game.facing == 'r') {
            context.drawImage(sprites, 12, 335, 19, 23, game.posX, game.posY, 19, 23);
        }
    }
}
function draw_wins() {
    for (var i=0; i<game.won.length; i++) {
        if(game.won[i]) {
            switch (i) {
                case 0:
                    context.drawImage(sprites, 80, 369, 23, 17, 15, 80, 23, 17);
                    break;
                case 1:
                    context.drawImage(sprites, 80, 369, 23, 17, 101, 80, 23, 17);
                    break;
                case 2:
                    context.drawImage(sprites, 80, 369, 23, 17, 187, 80, 23, 17);
                    break;
                case 3:
                    context.drawImage(sprites, 80, 369, 23, 17, 270, 80, 23, 17);
                    break;
                case 4:
                    context.drawImage(sprites, 80, 369, 23, 17, 354, 80, 23, 17);
                    break;                    
            }
        }
    }
}
function draw_cars() {
    for (var i=0; i<cars.length; i++) {
        cars[i].move();
        if (cars[i].out_of_bounds()) {
            cars[i] = make_car(cars[i].lane, null, cars[i].model);
        }
        cars[i].draw();
    }
}
function draw_logs() {
    for (var i=0; i< logs.length; i++) {
        logs[i].move();
        if (logs[i].out_of_bounds()) {
            logs[i] = make_log(logs[i].row)
        }
        logs[i].draw();
    }
}
function game_over() {
    context.fillStyle="#022331"; //"#191970";
    context.fillRect(0,50,399,445);
    context.fillStyle="#3B8E6B"; //"#191970";
    context.fillRect(0,135,500,140);
    context.font = "bold 42pt montserrat";
    context.fillStyle = "#FFFFFF";
    context.fillText("GAME OVER", 20, 200);
    context.drawImage(sprites, 12, 369, 23, 17, 187, 503, 23, 17);
    if (game.score >= highscore) {
        localStorage['highscore'] = game.score;
        context.font = "bold 20pt montserrat";
        context.fillStyle = "#FFFFFF";
        context.fillText("YOU GOT A HIGHSCORE !", 30, 250);
    }
    else {
        context.font = "bold 20pt montserrat";
        context.fillStyle = "#FFFFFF";
        context.fillText("TRY AGAIN !", 120, 250);
    }
}
// movement functions
function up() {
    if (bounds_check(game.posX, game.posY-30)) {
        game.posY -= 30;
        game.current++;
    }
    if (game.current > game.highest) {
        game.score += 10;
        game.highest++;
    }
    game.facing = 'u';
}
function down() {
    if (bounds_check(game.posX, game.posY+30)) {
        game.posY += 30;
        game.current--;
    }
    game.facing = 'd';
}
function left() {
    if (bounds_check(game.posX-30, game.posY)) game.posX -= 30;
    game.facing = 'l';
}
function right() {
    if (bounds_check(game.posX+30, game.posY)) game.posX += 30;
    game.facing = 'r';
}
function bounds_check(x, y) {
    if (y > 90 && y < 510 && x > 0 && x < 369) {
        return true;
    }
    else if (y > 60 && y < 100 && ((x > 5 && x < 40 && !game.won[0]) || 
                (x > 92 && x < 128 && !game.won[1]) || (x > 178 && x < 214 && !game.won[2]) ||
                (x > 263 && x < 299 && !game.won[3]) || (x > 347 && x < 383 && !game.won[4]))) {
        return true;
    }
    return false;
}
function check_win() {
    if(game.posY > 60 && game.posY < 100){
        if(game.posX > 5 && game.posX < 40 && !game.won[0]){
            game.won[0] = true;
            return true;
        } else if (game.posX > 92 && game.posX < 128 && !game.won[1]){
            game.won[1] = true;
            return true;
        } else if (game.posX > 178 && game.posX < 214 && !game.won[2]){
            game.won[2] = true;
            return true;
        } else if (game.posX > 263 && game.posX < 299 && !game.won[3]){
            game.won[3] = true;
            return true;
        } else if (game.posX > 347 && game.posX < 383 && !game.won[4]){
            game.won[4] = true;
            return true;
        }
    }
    return false;
}

function win() {
    game.score += 50;
    game.win = 15;
    // if(game.won[0] && game.won[1] && game.won[2] && game.won[3] && game.won[4]){
        cover.innerHTML = '<img src="'+idCover+'">';
        level();
        drawSong();
        document.getElementById('share').style.visibility='visible';
        soundAlea();
        levelUrl();
        iframe(idYT);
        var enfant = document.getElementById('msg');
        var parent = document.getElementById('container3');
        parent.removeChild(enfant);
    // }    
}

function drawSong() {
    song = document.createElement("li");
    song.setAttribute('class', 'song');
    document.getElementById('playlist').appendChild(song);
    trackCover(idCover);
    trackName(track);
    trackArtist(artist);
}

function levelUrl() {
    var soundLevel = game.level;
    if (soundLevel == 2) {
        soundUrl = soundL2;
    }
    else if (soundLevel == 3) {
        soundUrl = soundL3;
    }
    else if (soundLevel == 4) {
        soundUrl = soundL4;
    }
    else {
        soundUrl = soundL5;
    }
}
function level() {
    for (var i=0; i<game.won.length; i++) {
        game.won[i] = false;
    }
    game.score += 1000;
    game.level ++;
}
// collision detection
// create boxes around two sprites and compare for overlap
function collides(x1, y1, w1, h1, x2, y2, w2, h2) {
    return (((x1 <= x2+w2 && x1 >=x2) && (y1 <= y2+h2 && y1 >= y2)) ||
            ((x1+w1 <= x2+w2 && x1+w1 >= x2) && (y1 <= y2+h2 && y1 >= y2)) ||
            ((x1 <= x2+w2 && x1 >=x2) && (y1+h1 <= y2+h2 && y1+h1 >= y2)) ||
            ((x1+w1 <= x2+w2 && x1+w1 >= x2) && (y1+h1 <= y2+h2 && y1+h1 >= y2)));
}
function car_collision() {
    if (game.posY < 505 && game.posY > 270) {
        for (var i=0; i<cars.length; i++) {
            if (collides(game.posX, game.posY, game.width, game.height, cars[i].posX, cars[i].posY, cars[i].width, cars[i].height)) return true;
        }
    }
    return false;
}
function log_collision() {
    if (game.posY < 270) {
        for (var i=0; i<logs.length; i++) {
            if (collides(game.posX, game.posY, game.width, game.height, logs[i].posX, logs[i].posY, logs[i].width, logs[i].height)) return i;
        }
    }
    return -1;
}
function water_collision() {
    return (game.posY > 105 && game.posY < 270);
}
function sploosh() {
    game.lives--;
    game.dead = 20;
}
// object initializers - cars, logs
function make_cars() {
    cars = [make_car(0), make_car(0, 130, 3), make_car(0, 260, 3), make_car(1), make_car(2), make_car(2, 150, 0), make_car(3, 200), make_car(4), make_car(5), make_car(5, 80), make_car(5, 240)];
}
function make_car(row, x, model) {
    switch(row) {
        case 0:
            return new Car(x==null?-25:x, rows[row], row, 3, model==null?1:model);
            break;
        case 1:
            return new Car(x==null?399:x, rows[row], row, 2, model==null?0:model);
            break;
        case 2:
            return new Car(x==null?399:x, rows[row], row, 4, model==null?2:model);
            break;
        case 3:
            return new Car(x==null?-25:x, rows[row], row, 3, model==null?3:model);
            break;
        case 4:
            return new Car(x==null?399:x, rows[row], row, 3, model==null?0:model);
            break;
        case 5:
            return new Car(x==null?399:x, rows[row], row, 4, model==null?4:model);
            break;
    }
}
function make_logs() {
    logs = [make_log(7), make_log(7, 170), make_log(8), make_log(8, 200), make_log(9), make_log(10), make_log(11), make_log(11, 100, 0), make_log(12)];
}
function make_log(row, x, len) {
    switch(row) {
        case 7:
            return new Log(x==null?399:x, rows[row], row, 1, 1, len==null?1:len);
            break;
        case 8:
            return new Log(x==null?-85:x, rows[row], row, 4, -1, len==null?2:len);
            break;
        case 9:
            return new Log(x==null?399:x, rows[row], row, 2, 1, len==null?0:len);
            break;
        case 10:
            return new Log(x==null?-85:x, rows[row], row, 2, -1, len==null?1:len);
            break;
        case 11:
            return new Log(x==null?399:x, rows[row], row, 3, 1, len==null?1:len);
            break;
        case 12:
            return new Log(x==null?-85:x, rows[row], row, 3, -1, len==null?2:len);
            break;
    }
}
/* game "classes" - game, car, log
 * Car models:
 *   0: pink sedan
 *   1: white sedan
 *   2: yellow sedan
 *   3: white bulldozer
 *   4: white truck
 * Log lengths:
 *   0: long
 *   1: medium
 *   2: small
 */

var models = [{width: 30, height: 22, dir: 1}, {width: 29, height: 24, dir: -1}, {width:24, height: 26, dir: 1}, {width: 24, height: 21, dir: -1}, {width: 46, height: 19, dir: 1}];
function Car(x, y, lane, speed, model) {
    this.posX = x;
    this.posY = y;
    this.lane = lane;
    this.speed = speed;
    this.model = model;
    this.width = models[model].width;
    this.height = models[model].height;
    this.move = function() {
        if (game.level == 1) {
            this.posX = this.posX - (models[model].dir * this.speed * game.level);
        }
        else {
            this.posX = this.posX - (models[model].dir * this.speed * (game.level/1.2));
        }
    }
    this.draw = function() {
        switch(this.model) {
            case 0:
                context.drawImage(sprites, 8, 265, 30, 22, this.posX, this.posY, 30, 22);
                break;
            case 1: 
                context.drawImage(sprites, 45, 264, 29, 24, this.posX, this.posY, 29, 24);
                break;
            case 2: 
                context.drawImage(sprites, 81, 263, 28, 26, this.posX, this.posY, 24, 26);
                break;
            case 3: 
                context.drawImage(sprites, 9, 300, 30, 21, this.posX, this.posY, 24, 21);
                break;
            case 4: 
                context.drawImage(sprites, 105, 301, 46, 19, this.posX, this.posY, 46, 19);
                break;         
        }
    }
    this.out_of_bounds = function() {
        return ((this.posX + this.width) < 0 || this.posX > 399);
    }
}
var lengths = [{width: 179, height: 21}, {width: 118, height: 21}, {width: 85, height: 22}];

function Log (x, y, row, speed, dir, length) {
    this.posX = x;
    this.posY = y;
    this.row = row;
    this.speed = speed;
    this.dir = dir;
    this.length = length;
    this.width = lengths[length].width;
    this.height = lengths[length].height;
    this.move = function() {
        this.posX = this.posX - (this.dir * this.speed);
    }
    this.draw = function () {
        switch(this.length) {
            case 0:
                context.drawImage(sprites, 6, 165, 179, 21, this.posX, this.posY, 179, 21);
                break;
            case 1:
                context.drawImage(sprites, 5, 197, 118, 21, this.posX, this.posY, 118, 21);
                break;
            case 2:
                context.drawImage(sprites, 6, 229, 85, 22, this.posX, this.posY, 85, 22);
                break;
        }
    }
    this.out_of_bounds = function() {
        return ((this.posX + this.width) < 0 || this.posX > 399);
    }
}
// y-coords of rows starting with first traffic row
var rows = [473, 443, 413, 383, 353, 323, 288, 261, 233, 203, 173, 143, 113];
function Game() {
    this.lives = 5;
    this.extra = 0;
    this.level = 1;
    this.score = 0;   
    this.posX = 187;
    this.posY = 503;
    this.facing = 'u';
    this.log = -1;
    this.current = -1;
    this.highest = -1;
    this.dead = -1;
    this.win = -1;
    this.won = [false, false, false, false, false];
    this.reset = function () {
        this.posY = 503;
        this.posX = 187;
        this.facing = 'u';
        this.log = -1;
        this.current = -1;
        this.highest = -1;
        this.dead = -1;
        this.win = -1;
    }
}
// initialize playlist
function trackCover (idCover) {
    lastSong = playlist.lastChild;
    console.log(lastSong);
    lastSong.innerHTML = '<div class="view"><img alt="Pochette de l\'album" src="'+idCover+'"></div>';

    document.getElementById('cover').innerHTML = '<img src="'+idCover+'">';
}

function trackName (track) {
    lastSong = playlist.lastChild;
    console.log(lastSong);
    lastSong.innerHTML += '<div class="name"><p style="color:#B2B2B2">'+track+'</p></div>';
}

function trackArtist (artist) {
    lastSong = playlist.lastChild;
    console.log(lastSong);
    lastSong.innerHTML += '<div class="artist"><p style="color:#B2B2B2">'+artist+'</p></div>';
}

// initialize iframe
function iframe(idYT) {
    if (game.level == 1) {
        idYT=soundL1;
    }
    else {
         idYT=soundUrl; 
    }
    console.log(idYT);
    document.getElementById('player').innerHTML = '<iframe width="0" height="0" src="https://www.youtube.com/embed/'+ idYT +'?rel=0&amp;autoplay=1"'+' frameborder="0"></iframe>';
}



// initialize level div
// function writeLevel () {
//     document.getElementById('level').innerHTML = '<h2>Niveau '+game.level+'</h2>';
// }
