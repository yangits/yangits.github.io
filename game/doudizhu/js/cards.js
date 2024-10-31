let all = [
    {
        huase: '🃏',
        pname: '大王',
        bijiao: 15
    },
    {
        huase: '🃏',
        pname: '小王',
        bijiao: 14
    },
    // ----------------------------
    {
        huase: '♠',
        pname: '2',
        bijiao: 13
    },
    {
        huase: '♥',
        pname: '2',
        bijiao: 13
    },
    {
        huase: '♣',
        pname: '2',
        bijiao: 13
    },
    {
        huase: '♦',
        pname: '2',
        bijiao: 13
    },
    // ----------------------------
    {
        huase: '♠',
        pname: 'A',
        bijiao: 12
    },
    {
        huase: '♥',
        pname: 'A',
        bijiao: 12
    },
    {
        huase: '♣',
        pname: 'A',
        bijiao: 12
    },
    {
        huase: '♦',
        pname: 'A',
        bijiao: 12
    },
    // ----------------------------
    {
        huase: '♠',
        pname: 'K',
        bijiao: 11
    },
    {
        huase: '♥',
        pname: 'K',
        bijiao: 11
    },
    {
        huase: '♣',
        pname: 'K',
        bijiao: 11
    },
    {
        huase: '♦',
        pname: 'K',
        bijiao: 11
    },
    // ----------------------------
    {
        huase: '♠',
        pname: 'Q',
        bijiao: 10
    },
    {
        huase: '♥',
        pname: 'Q',
        bijiao: 10
    },
    {
        huase: '♣',
        pname: 'Q',
        bijiao: 10
    },
    {
        huase: '♦',
        pname: 'Q',
        bijiao: 10
    },
    // ----------------------------
    {
        huase: '♠',
        pname: 'J',
        bijiao: 9
    },
    {
        huase: '♥',
        pname: 'J',
        bijiao: 9
    },
    {
        huase: '♣',
        pname: 'J',
        bijiao: 9
    },
    {
        huase: '♦',
        pname: 'J',
        bijiao: 9
    },
    // ----------------------------
    {
        huase: '♠',
        pname: '10',
        bijiao: 8
    },
    {
        huase: '♥',
        pname: '10',
        bijiao: 8
    },
    {
        huase: '♣',
        pname: '10',
        bijiao: 8
    },
    {
        huase: '♦',
        pname: '10',
        bijiao: 8
    },
    // ----------------------------
    {
        huase: '♠',
        pname: '9',
        bijiao: 7
    },
    {
        huase: '♥',
        pname: '9',
        bijiao: 7
    },
    {
        huase: '♣',
        pname: '9',
        bijiao: 7
    },
    {
        huase: '♦',
        pname: '9',
        bijiao: 7
    },
    // ----------------------------
    {
        huase: '♠',
        pname: '8',
        bijiao: 6
    },
    {
        huase: '♥',
        pname: '8',
        bijiao: 6
    },
    {
        huase: '♣',
        pname: '8',
        bijiao: 6
    },
    {
        huase: '♦',
        pname: '8',
        bijiao: 6
    },
    // ----------------------------
    {
        huase: '♠',
        pname: '7',
        bijiao: 5
    },
    {
        huase: '♥',
        pname: '7',
        bijiao: 5
    },
    {
        huase: '♣',
        pname: '7',
        bijiao: 5
    },
    {
        huase: '♦',
        pname: '7',
        bijiao: 5
    },
    // ----------------------------
    {
        huase: '♠',
        pname: '6',
        bijiao: 4
    },
    {
        huase: '♥',
        pname: '6',
        bijiao: 4
    },
    {
        huase: '♣',
        pname: '6',
        bijiao: 4
    },
    {
        huase: '♦',
        pname: '6',
        bijiao: 4
    },
    // ----------------------------
    {
        huase: '♠',
        pname: '5',
        bijiao: 3
    },
    {
        huase: '♥',
        pname: '5',
        bijiao: 3
    },
    {
        huase: '♣',
        pname: '5',
        bijiao: 3
    },
    {
        huase: '♦',
        pname: '5',
        bijiao: 3
    },
    // ----------------------------
    {
        huase: '♠',
        pname: '4',
        bijiao: 2
    },
    {
        huase: '♥',
        pname: '4',
        bijiao: 2
    },
    {
        huase: '♣',
        pname: '4',
        bijiao: 2
    },
    {
        huase: '♦',
        pname: '4',
        bijiao: 2
    },
    // ----------------------------
    {
        huase: '♠',
        pname: '3',
        bijiao: 1
    },
    {
        huase: '♥',
        pname: '3',
        bijiao: 1
    },
    {
        huase: '♣',
        pname: '3',
        bijiao: 1
    },
    {
        huase: '♦',
        pname: '3',
        bijiao: 1
    },
];
// 玩家余额
let user1Money = 5509;
let user2Money = 6165;
let user3Money = 600;
// 首次运行存浏览器缓存
let moneyObj = {
    user1Money: 0,
    user2Money: 0,
    user3Money: 0
};
function setLocalStorageMoney() {
    moneyObj.user1Money = user1Money;
    moneyObj.user2Money = user2Money;
    moneyObj.user3Money = user3Money;
    localStorage.setItem('douDiZhuPMoney', JSON.stringify(moneyObj));
}
if (localStorage.getItem('douDiZhuPMoney')) {
    [user1Money, user2Money, user3Money] = [...Object.values(JSON.parse(localStorage.getItem('douDiZhuPMoney')))];
}else {
    setLocalStorageMoney();
}
// 当前倍数
let nowBeiShu = 1;
// 当前底注
let nowDizhu = 200;
// 洗牌
function xiPai(arr) {
    arr = [...arr];// 解决栈与堆问题，这样下面的操作不会改变原数组
    for (const key in arr) {
        let index = parseInt(Math.random() * arr.length);
        [arr[key], arr[index]] = [arr[index], arr[key]];
    }
    // arr.reverse();
    return arr;
}
let newAll = xiPai(all);
// 发牌
function faPai(arr) {
    let player1 = arr.slice(0,17);
    let player2 = arr.slice(17,34);
    let player3 = arr.slice(34,51);//34
    let diPai = arr.slice(51,54);
    return { player1, player2, player3, diPai };
}
let { player1, player2, player3, diPai } = faPai(newAll);
// 排序
function paiXu(arr){ // 这里会改变原数组（栈内引用地址复制），后面不用返回值
    // 排大小
    arr.sort((a, b) => b.bijiao - a.bijiao);
    // 排花色
    function setHuaseBijiao(huase) {
        switch (huase) {
            case '♠':
                return 4;
            case '♥':
                return 3;
            case '♣':
                return 2;
            case '♦':
                return 1;
            default:
                break;
        }
    }
    for (let i = 0; i < 4; i++) {
        for (const key in arr) {
            if (key != arr.length - 1) { // 不用遍历最后一次
                let huaseBijiao1 = setHuaseBijiao(arr[key].huase);
                let huaseBijiao2 = setHuaseBijiao(arr[+key + 1].huase);
                if (arr[key].pname == arr[+key + 1].pname && huaseBijiao1 < huaseBijiao2) {
                    [arr[key], arr[+key + 1]] = [arr[+key + 1], arr[key]];
                }
            }
        }
    }
}
window.addEventListener('load', function(){
    const audioYinXiaoBox = document.querySelectorAll('audio');
    audioYinXiaoBox[0].src = 'audio/bg.mp3';
    // 音效状态
    function yinXiaoZhuangTaiChange(arg, sex = true) {
        let srcAudio = '';
        if (sex) {
            switch (arg[0]) {
                case '单牌':
                    switch (arg[1]) {
                        case 1:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/3.ogg';
                            break;
                        case 2:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/4.ogg';
                            break;
                        case 3:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/5.ogg';
                            break;
                        case 4:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/6.ogg';
                            break;
                        case 5:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/7.ogg';
                            break;
                        case 6:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/8.ogg';
                            break;
                        case 7:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/9.ogg';
                            break;
                        case 8:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/10.ogg';
                            break;
                        case 9:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/J.ogg';
                            break;
                        case 10:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/Q.ogg';
                            break;
                        case 11:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/K.ogg';
                            break;
                        case 12:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/A.ogg';
                            break;
                        case 13:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/2.ogg';
                            break;
                        case 14:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/小王.ogg';
                            break;
                        case 15:
                            srcAudio = 'audio/斗地主音效/斗地主音效/A_K女声/大王.ogg';
                            break;
                    
                        default:
                            break;
                    }
                    break;
                case '对子':
                    switch (arg[1]) {
                        case 1:
                            srcAudio = 'audio/斗地主音效/斗地主音效/对子/女声/对3.ogg';
                            break;
                        case 2:
                            srcAudio = 'audio/斗地主音效/斗地主音效/对子/女声/对4.ogg';
                            break;
                        case 3:
                            srcAudio = 'audio/斗地主音效/斗地主音效/对子/女声/对5.ogg';
                            break;
                        case 4:
                            srcAudio = 'audio/斗地主音效/斗地主音效/对子/女声/对6.ogg';
                            break;
                        case 5:
                            srcAudio = 'audio/斗地主音效/斗地主音效/对子/女声/对7.ogg';
                            break;
                        case 6:
                            srcAudio = 'audio/斗地主音效/斗地主音效/对子/女声/对8.ogg';
                            break;
                        case 7:
                            srcAudio = 'audio/斗地主音效/斗地主音效/对子/女声/对9.ogg';
                            break;
                        case 8:
                            srcAudio = 'audio/斗地主音效/斗地主音效/对子/女声/对10.ogg';;
                            break;
                        case 9:
                            srcAudio = 'audio/斗地主音效/斗地主音效/对子/女声/对J.ogg';
                            break;
                        case 10:
                            srcAudio = 'audio/斗地主音效/斗地主音效/对子/女声/对Q.ogg';
                            break;
                        case 11:
                            srcAudio = 'audio/斗地主音效/斗地主音效/对子/女声/对K.ogg';
                            break;
                        case 12:
                            srcAudio = 'audio/斗地主音效/斗地主音效/对子/女声/对A.ogg';
                            break;
                        case 13:
                            srcAudio = 'audio/斗地主音效/斗地主音效/对子/女声/对2.ogg';
                            break;
                    
                        default:
                            break;
                    }
                    break;
                case '三带一':
                    srcAudio = 'audio/斗地主音效/斗地主音效/三带一/三带一-女.ogg';
                    break;
                case '三带对子':
                    srcAudio = 'audio/斗地主音效/斗地主音效/三带一对/三带一对-女.ogg';
                    break;
                case '三不带':
                    switch (arg[1]) {
                        case 1:
                            srcAudio = 'audio/斗地主音效/斗地主音效/三个/女声/三个3.ogg';
                            break;
                        case 2:
                            srcAudio = 'audio/斗地主音效/斗地主音效/三个/女声/三个4.ogg';
                            break;
                        case 3:
                            srcAudio = 'audio/斗地主音效/斗地主音效/三个/女声/三个5.ogg';
                            break;
                        case 4:
                            srcAudio = 'audio/斗地主音效/斗地主音效/三个/女声/三个6.ogg';
                            break;
                        case 5:
                            srcAudio = 'audio/斗地主音效/斗地主音效/三个/女声/三个7.ogg';
                            break;
                        case 6:
                            srcAudio = 'audio/斗地主音效/斗地主音效/三个/女声/三个8.ogg';
                            break;
                        case 7:
                            srcAudio = 'audio/斗地主音效/斗地主音效/三个/女声/三个9.ogg';
                            break;
                        case 8:
                            srcAudio = 'audio/斗地主音效/斗地主音效/三个/女声/三个10.ogg';;;
                            break;
                        case 9:
                            srcAudio = 'audio/斗地主音效/斗地主音效/三个/女声/三个J.ogg';
                            break;
                        case 10:
                            srcAudio = 'audio/斗地主音效/斗地主音效/三个/女声/三个Q.ogg';
                            break;
                        case 11:
                            srcAudio = 'audio/斗地主音效/斗地主音效/三个/女声/三个K.ogg';
                            break;
                        case 12:
                            srcAudio = 'audio/斗地主音效/斗地主音效/三个/女声/三个A.ogg';
                            break;
                        case 13:
                            srcAudio = 'audio/斗地主音效/斗地主音效/三个/女声/三个2.ogg';
                            break;
                    
                        default:
                            break;
                    }
                    break;
                case '四带二':
                        srcAudio = 'audio/斗地主音效/斗地主音效/四带二/四带二-女.ogg';
                        break;
                case '连子':
                        srcAudio = 'audio/斗地主音效/斗地主音效/顺子/顺子-女.ogg';
                        break;
                case '连对':
                        srcAudio = 'audio/斗地主音效/斗地主音效/连对/连对-女.ogg';
                        break;
                case '炸弹':
                        srcAudio = 'audio/斗地主音效/斗地主音效/炸弹/炸弹-女.ogg';
                        audioYinXiaoBox[3].src = 'audio/斗地主音效/斗地主音效/炸弹/炸弹-Duang~.ogg';
                        audioYinXiaoBox[3].play();
                        break;
                case '王炸':
                        srcAudio = 'audio/斗地主音效/斗地主音效/王炸/王炸-女.ogg';
                        audioYinXiaoBox[3].src = 'audio/斗地主音效/斗地主音效/王炸/honghong.mp3';
                        audioYinXiaoBox[3].play();
                        break;
                case '四带二大飞机':
                case '飞机0':
                case '飞机1':
                case '飞机2':
                    srcAudio = 'audio/斗地主音效/斗地主音效/飞机/飞机-女.ogg';
                    audioYinXiaoBox[3].src = 'audio/斗地主音效/斗地主音效/飞机/飞机-呜呜.ogg';
                    audioYinXiaoBox[3].play();
                default:
                    break;
            }
        }else {

        }
        audioYinXiaoBox[2].src = srcAudio;
        audioYinXiaoBox[2].play();
    }
    function otherYinXiao(arg) {
        let srcAudio = '';
        switch (arg) {
            case '过':
                let key = parseInt(Math.random() * 3);
                switch (key) {
                    case 0:
                        srcAudio = 'audio/斗地主音效/斗地主音效/要不起/要不起-女声.ogg';
                        break;
                    case 1:
                        srcAudio = 'audio/斗地主音效/斗地主音效/过/过-女声.ogg';
                        break;
                    case 2:
                        srcAudio = 'audio/斗地主音效/斗地主音效/不要/不要-女.ogg';
                        break;
                    default:
                        break;
                }
                break;
            case '报双':
                srcAudio = 'audio/斗地主音效/斗地主音效/我就两张牌了/我就两张牌了-女声.ogg';
                break;
            case '报单':
                srcAudio = 'audio/斗地主音效/斗地主音效/我就一张牌了/我就一张牌了-女声.ogg';
            default:
                break;
        }
        audioYinXiaoBox[1].src = srcAudio;
        audioYinXiaoBox[1].play();
    }
    // 开始游戏
    function startGame() {
        tangZi = {};
        myShouPai = {};
        newAll = xiPai(all);
        let faPaiArr = faPai(newAll);
        [player1, player2, player3, diPai] = [faPaiArr.player1, faPaiArr.player2, faPaiArr.player3, faPaiArr.diPai];
        shuaXinShouPai();
        shuaXinTangZi();
        btnBox.children[0].style.display = 'inline-block';
        btnBox.children[1].style.display = 'none';
        btnBox.children[2].style.display = 'none';
        shuiChuDePaiJianTou[0].style.display = 'none';
        shuiChuDePaiJianTou[1].style.display = 'none';
        shuiChuDePaiJianTou[2].style.display = 'none';
        zhengZaiChuPaiTile[0].style.display = 'none';
        zhengZaiChuPaiTile[1].style.display = 'none';
        zhengZaiChuPaiTile[2].style.display = 'none';
        p1IsDizhu = p2IsDizhu = p3IsDizhu = false;
        isP1 = isP2 = isP3 = false;
        nowBeiShu = 1;
        wanduoda[1].children[0].innerHTML = `倍数: ${nowBeiShu}`;
        p1ChuPaiLeMaA = p2ChuPaiLeMaA = true;
        userBox[0].querySelector('div').style.display = 'none';
        userBox[1].querySelector('div').style.display = 'none';
        userBox[0].querySelector('span').innerHTML = `剩余牌数:17`;
        userBox[1].querySelector('span').innerHTML = `剩余牌数:17`;
    }
    // 胜利判断
    function canGameOver() {
        if (player1.length == 0 || player2.length == 0) {
            gameOverShuaXinPlayerShouPai();
            setTimeout(() => {
                user1Money += nowBeiShu * nowDizhu;
                user2Money += nowBeiShu * nowDizhu;
                user3Money -= nowBeiShu * nowDizhu * 2;
                alert2(
                    `失败,您余额-${nowDizhu * nowBeiShu * 2}<br/>
                    玩家1余额+${nowDizhu * nowBeiShu}<br/>
                    玩家2余额+${nowDizhu * nowBeiShu}`, startGame
                );
                userBox[0].querySelector('h4').innerHTML = `余额:${user1Money}`;
                userBox[1].querySelector('h4').innerHTML = `余额:${user2Money}`;
                userBox[2].querySelector('h4').innerHTML = `余额:${user3Money}`;
                setLocalStorageMoney();
            },1000);
            return true;
        }else if (player3.length == 0) {
            gameOverShuaXinPlayerShouPai();
            setTimeout(() => {
                user1Money -= nowBeiShu * nowDizhu;
                user2Money -= nowBeiShu * nowDizhu;
                user3Money += nowBeiShu * nowDizhu * 2;
                alert2(
                    `胜利,您余额+${nowDizhu * nowBeiShu * 2}<br/>
                    玩家1余额-${nowDizhu * nowBeiShu}<br/>
                    玩家2余额-${nowDizhu * nowBeiShu}`, startGame
                );
                userBox[0].querySelector('h4').innerHTML = `余额:${user1Money}`;
                userBox[1].querySelector('h4').innerHTML = `余额:${user2Money}`;
                userBox[2].querySelector('h4').innerHTML = `余额:${user3Money}`;
                setLocalStorageMoney();
            },1000);
            return true;
        }
        return false;
    }
    const zhengZaiChuPaiTile = document.querySelector('.whatPlayer').children;
    const shuiChuDePaiJianTou = document.querySelector('.iconShow').children;
    const player1Box = document.querySelector('.box > .box-left');
    const player2Box = document.querySelector('.box > .box-right');
    const player3Box = document.querySelector('.my');
    const diPaiBox = document.querySelector('.box > .box-mid');
    const userBox = document.querySelector('.user').children;
    const wanduoda = document.querySelectorAll('.wanduoda');
    userBox[0].querySelector('h4').innerHTML = `余额:${user1Money}`;
    userBox[1].querySelector('h4').innerHTML = `余额:${user2Money}`;
    userBox[2].querySelector('h4').innerHTML = `余额:${user3Money}`;
    wanduoda[0].children[0].innerHTML = `底注: ${nowDizhu}`;
    wanduoda[1].children[0].innerHTML = `倍数: ${nowBeiShu}`;
    // 出牌箭头显示
    function chuPaiLeJianTouShow(key) {
        shuiChuDePaiJianTou[2].style.display = 'none';
        shuiChuDePaiJianTou[1].style.display = 'none';
        shuiChuDePaiJianTou[0].style.display = 'none';
        switch (key) {
            case 2:
                setTimeout(() => {
                    shuiChuDePaiJianTou[1].style.display = 'block';
                },40);
                break;
            case 1:
                setTimeout(() => {
                    shuiChuDePaiJianTou[0].style.display = 'block';
                },40);
                break;
            case 3:
                setTimeout(() => {
                    shuiChuDePaiJianTou[2].style.display = 'block';
                },40);
                break;
            default:
                break;
        }
    }
    // 出牌桥接对象
    let tangZi = {};
    // 我的手牌
    let myShouPai = {};
    // 刷新点击
    function shuaXinShouPaiDianJi() {
        for (const iterator of player3Box.children) {
            iterator.onclick = e => {
                if (iterator.getAttribute('data-index') == '1') {
                    iterator.style.transform = 'translateY(-20px)';
                    iterator.setAttribute('data-index','0');
                    myShouPai[iterator.getAttribute('data-key')] = player3[iterator.getAttribute('data-key')];
                }else if(iterator.getAttribute('data-index') == '0') {
                    iterator.style.transform = 'translateY(0)';
                    iterator.setAttribute('data-index','1');
                    delete myShouPai[iterator.getAttribute('data-key')];
                }
            };
        }
    }
    // 刷新人机1手牌
    function shuaXinPlayer1ShouPai() {
        player1Box.innerHTML = '';
        paiXu(player1);
        for (let i = 0; i < player1.length; i++) {
            const card1 = document.createElement('div');
            if (player1[i].huase == '♥' || player1[i].huase == '♦' || player1[i].pname == '大王') {
                card1.style.color = 'red';
            }
            card1.className = 'card';
            card1.setAttribute('data-key', i);
            // card1.innerHTML = `
            //     <div class="card-leftTitle absBox">
            //         <h3>${player1[i].pname}</h3>
            //         <h3>${player1[i].huase}</h3>
            //     </div>
            //     <div class="card-rightTitle absBox">
            //         <h3>${player1[i].pname}</h3>
            //         <h3>${player1[i].huase}</h3>
            //     </div>
            //     <div class="card-content">
            //         <h1>${player1[i].huase}</h1>
            //     </div>
            // `;
            player1Box.appendChild(card1);
        }
    }
    // 游戏结束刷新人机手牌
    function gameOverShuaXinPlayerShouPai() {
        player1Box.innerHTML = '';
        paiXu(player1);
        for (let i = 0; i < player1.length; i++) {
            const card1 = document.createElement('div');
            if (player1[i].huase == '♥' || player1[i].huase == '♦' || player1[i].pname == '大王') {
                card1.style.color = 'red';
            }
            card1.className = 'card';
            card1.setAttribute('data-key', i);
            card1.style.backgroundImage = 'none';
            card1.innerHTML = `
                <div class="card-leftTitle absBox">
                    <h3>${player1[i].pname}</h3>
                    <h3>${player1[i].huase}</h3>
                </div>
                <div class="card-rightTitle absBox">
                    <h3>${player1[i].pname}</h3>
                    <h3>${player1[i].huase}</h3>
                </div>
                <div class="card-content">
                    <h1>${player1[i].huase}</h1>
                </div>
            `;
            player1Box.appendChild(card1);
        }
        player2Box.innerHTML = '';
        paiXu(player2);
        for (let i = 0; i < player2.length; i++) {
            const card2 = document.createElement('div');
            if (player2[i].huase == '♥' || player2[i].huase == '♦' || player2[i].pname == '大王') {
                card2.style.color = 'red';
            }
            card2.className = 'card';
            card2.setAttribute('data-key', i);
            card2.style.backgroundImage = 'none';
            card2.innerHTML = `
                <div class="card-leftTitle absBox">
                    <h3>${player2[i].pname}</h3>
                    <h3>${player2[i].huase}</h3>
                </div>
                <div class="card-rightTitle absBox">
                    <h3>${player2[i].pname}</h3>
                    <h3>${player2[i].huase}</h3>
                </div>
                <div class="card-content">
                    <h1>${player2[i].huase}</h1>
                </div>
            `;
            player2Box.appendChild(card2);
        }
    }
    // 刷新人机2手牌
    function shuaXinPlayer2ShouPai() {
        player2Box.innerHTML = '';
        paiXu(player2);
        for (let i = 0; i < player2.length; i++) {
            const card2 = document.createElement('div');
            if (player2[i].huase == '♥' || player2[i].huase == '♦' || player2[i].pname == '大王') {
                card2.style.color = 'red';
            }
            card2.className = 'card';
            card2.setAttribute('data-key', i);
            // card2.innerHTML = `
            //     <div class="card-leftTitle absBox">
            //         <h3>${player2[i].pname}</h3>
            //         <h3>${player2[i].huase}</h3>
            //     </div>
            //     <div class="card-rightTitle absBox">
            //         <h3>${player2[i].pname}</h3>
            //         <h3>${player2[i].huase}</h3>
            //     </div>
            //     <div class="card-content">
            //         <h1>${player2[i].huase}</h1>
            //     </div>
            // `;
            player2Box.appendChild(card2);
        }
    }
    // 刷新手牌
    function shuaXinShouPai() {
        shuaXinPlayer1ShouPai();
        shuaXinPlayer2ShouPai();
        player3Box.innerHTML = '';
        paiXu(player3);
        for (let i = 0; i < player3.length; i++) {
            const card3 = document.createElement('div');
            if (player3[i].huase == '♥' || player3[i].huase == '♦' || player3[i].pname == '大王') {
                card3.style.color = 'red';
            }
            card3.className = 'card';
            card3.setAttribute('data-index','1');
            card3.setAttribute('data-key', i);
            card3.innerHTML = `
                <div class="card-leftTitle absBox">
                    <h3>${player3[i].pname}</h3>
                    <h3>${player3[i].huase}</h3>
                </div>
                <div class="card-rightTitle absBox">
                    <h3>${player3[i].pname}</h3>
                    <h3>${player3[i].huase}</h3>
                </div>
                <div class="card-content">
                    <h1>${player3[i].huase}</h1>
                </div>
            `;
            player3Box.appendChild(card3);
        }
        shuaXinShouPaiDianJi();
    }
    shuaXinShouPai();
    // 刷新堂子
    function shuaXinTangZi() {
        diPaiBox.innerHTML = '';
        for (let i = 0; i < diPai.length; i++) {
            const card = document.createElement('div');
            card.className = 'card';
            if (diPai[i].huase == '♥' || diPai[i].huase == '♦' || diPai[i].pname == '大王') {
                card.style.color = 'red';
            }
            card.innerHTML = `
                <div class="card-leftTitle absBox">
                    <h3>${diPai[i].pname}</h3>
                    <h3>${diPai[i].huase}</h3>
                </div>
                <div class="card-rightTitle absBox">
                    <h3>${diPai[i].pname}</h3>
                    <h3>${diPai[i].huase}</h3>
                </div>
                <div class="card-content">
                    <h1>${diPai[i].huase}</h1>
                </div>
            `;
            diPaiBox.appendChild(card);
        }
    }
    // 刷新底牌
    function shuaXinDiPai() {
        diPaiBox.innerHTML = '';
        for (let i = 0; i < diPai.length; i++) {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.backgroundImage = "url('img/pai.jpg')";
            card.style.backgroundSize = '100% 100%';
            if (diPai[i].huase == '♥' || diPai[i].huase == '♦' || diPai[i].pname == '大王') {
                card.style.color = 'red';
            }
            diPaiBox.appendChild(card);
        }
    }
    shuaXinDiPai();
    // 谁是地主
    let p1IsDizhu = false, p2IsDizhu = false, p3IsDizhu = false;
    const btnBox = document.querySelector('main > div.btnBox');
    // 要不起（过）（用于人机判定，不能误伤队友）// 淘汰,不再使用
    let p1YaoBuQi = false, p2YaoBuQi = false, p3YaoBuQi = false; // 淘汰
    // 现在是谁出的牌
    let isP1 = false, isP2 = false, isP3 = false;
    // 用于报单人机智商问题
    let p1ChuPaiLeMaA = true, p2ChuPaiLeMaA = true;
    // 人机出牌流程
    function renJiLiuCheng(flag) { // true人机无敌随意出牌 false正常流程
        // ---------------人机2出牌-----------------
        btnBox.children[1].style.display = 'none';
        btnBox.children[2].style.display = 'none';
        setTimeout(() => {
            if (p3IsDizhu || !isP3) { // p3是地主或p3要不起p1就出牌
                if (flag) {
                    if (player1.length == 1 && p1ChuPaiLeMaA) {
                        // 如果p1报单，p2放单牌,如果下轮p1没出牌，p2放弃p1
                        p2YaoBuQi = renJiPlay(player2, 'p2', false, true, '单牌');
                        p1ChuPaiLeMaA = false;
                    }else {
                        p2YaoBuQi = renJiPlay(player2, 'p2', false, true);
                    }
                }else {
                    p2YaoBuQi = renJiPlay(player2, 'p2');
                }
                shuaXinPlayer2ShouPai();
                if (canGameOver()) {
                    return;
                }
            }else {
                renJiPlay(player2, 'p2', true);
            }
            zhengZaiChuPaiTile[1].style.display = 'none';
            zhengZaiChuPaiTile[0].style.display = 'block';
            zhengZaiChuPaiTile[2].style.display = 'none';
            // ---------------人机1出牌-----------------
            setTimeout(() => {
                if (p2IsDizhu || !isP2 || true) { // p2是地主或p2要不起p1就出牌 ----------暂时开启见人就轰模式,关闭删除true-------------------------
                    // 优化人机算法，防止误伤队友-----------------------------------
                    let flag = true;
                    let num = 0;
                    let tangZiCardType =  getTangZiPaiType();
                    if (tangZiCardType[0] == '炸弹') {
                        flag = false;
                    }else {
                        if (tangZiCardType[0] == '单牌' || tangZiCardType[0] == '对子' || tangZiCardType[0] == '三不带') {
                            for (const iterator of Object.values(tangZi)) {
                                if (iterator.bijiao > 10) { // p2出大于Q的p1就放
                                    flag = false;
                                }
                            }
                        }else if(tangZiCardType[0] == '三带一' || tangZiCardType[0] == '三带对子') {
                            for (const iterator of Object.values(tangZi)) {
                                if (iterator.bijiao > 6) { // P2出大于8的三带*p1就放
                                    num++;
                                    if (num > 2) {
                                        flag = false;
                                    }
                                }
                            }
                        }
                        
                    }
                    // -----------如果地主出的牌，直接干--------------------
                    if (isP3 && p3IsDizhu) {
                        flag = true;
                    }
                    // -------------------------------
                    if (flag) {
                        p1YaoBuQi = renJiPlay(player1, 'p1');
                    }else {
                        p1YaoBuQi = renJiPlay(player1, 'p1', true);
                    }
                    // -------------------------------------------------------------
                    shuaXinPlayer1ShouPai();
                    if (canGameOver()) {
                        return;
                    }
                }else {
                    renJiPlay(player1, 'p1', true);
                }
                
                // tangZi = {};
                btnBox.children[1].style.display = 'inline-block';
                if (!isP3) {
                    btnBox.children[2].style.display = 'inline-block';
                }
                zhengZaiChuPaiTile[0].style.display = 'none';
                zhengZaiChuPaiTile[1].style.display = 'none';
                zhengZaiChuPaiTile[2].style.display = 'block';
                p1YaoBuQi = p2YaoBuQi = p3YaoBuQi = false;
            },2000);
        },2000);
        // --------------------------------
    }
    function renJiLiuCheng1(flag) { // true人机无敌随意出牌 false正常流程
        btnBox.children[1].style.display = 'none';
        btnBox.children[2].style.display = 'none';
            // ---------------人机1出牌-----------------
            setTimeout(() => {
                renJiPlay(player2, 'p2', true);
                zhengZaiChuPaiTile[1].style.display = 'none';
                zhengZaiChuPaiTile[0].style.display = 'block';
                zhengZaiChuPaiTile[2].style.display = 'none';
                setTimeout(() => {
                    if (p2IsDizhu || !isP2) { // p2是地主或p2要不起p1就出牌---------------这里不开启见人就轰模式,让下家(p1)走提高人机胜率----------
                        if (flag) {
                            if (player2.length == 1 && p2ChuPaiLeMaA) {
                                // 如果p2报单，p1放单牌,如果下轮p2没出牌，p1放弃p2
                                p1YaoBuQi = renJiPlay(player1, 'p1', false, true, '单牌');
                                p2ChuPaiLeMaA = false;
                            }else {
                                p1YaoBuQi = renJiPlay(player1, 'p1', false, true);
                            }
                        }else {
                            p1YaoBuQi = renJiPlay(player1, 'p1');
                        }
                        shuaXinPlayer1ShouPai();
                        if (canGameOver()) {
                            return;
                        }
                    }else {
                        renJiPlay(player1, 'p1', true);
                    }
                    
                    // tangZi = {};
                    btnBox.children[1].style.display = 'inline-block';
                    if (!isP3) {
                        btnBox.children[2].style.display = 'inline-block';
                    }
                    zhengZaiChuPaiTile[0].style.display = 'none';
                    zhengZaiChuPaiTile[1].style.display = 'none';
                    zhengZaiChuPaiTile[2].style.display = 'block';
                    p1YaoBuQi = p2YaoBuQi = p3YaoBuQi = false;
                },2000);
            },2000);
        // --------------------------------
    }
    // 检索我是否能出牌压住上家
    function canIPlayCard(myShouPai) {
        console.log('上家堂子',tangZi);
        let tangZiCardType = getTangZiPaiType();
        let myCardType = getTangZiPaiType(myShouPai);
        console.log(tangZiCardType,'tangZiCardType');
        console.log(myCardType,'myCardType');
        if (tangZiCardType == 0) {
            return true;
        }
        if (!isP3) {
            if (tangZiCardType[0] != myCardType[0]) {
                if (tangZiCardType[0] != '炸弹' && tangZiCardType[0] != '王炸' && myCardType[0] == '炸弹') {
                    return true;
                }
                if ((myCardType[0] == '炸弹' && myCardType[1] > tangZiCardType[1]) || myCardType[0] == '王炸') {
                    return true;
                }
                return false;
            }else {
                if (myCardType[1] > tangZiCardType[1]) {
                    return true;
                }
                return false;
            }
        }
        return true;
    }
    btnBox.addEventListener('click',e => {
        // 抢地主
        if (e.target.value == '抢地主') {
            audioYinXiaoBox[0].play();
            isP3 = true;
            zhengZaiChuPaiTile[2].style.display = 'block';
            p3IsDizhu = true;
            tangZi = {};
            myShouPai = {};
            e.target.style.display = 'none';
            btnBox.children[1].style.display = 'inline-block';
            // btnBox.children[2].style.display = 'inline-block';
            diPaiBox.innerHTML = '';
            for (const iterator of diPai) {
                player3.push(iterator);
            }
            shuaXinShouPai();
        }
        // 出牌
        if (e.target.value == '出牌') {
            // e.target.style.display = 'none';
            let shangJiaTangZi = canIPlayCard(myShouPai);
            if (shangJiaTangZi) {
                tangZi = myShouPai;
            }
            console.log('我当前出牌类型：',getTangZiPaiType());
            let cardType = getTangZiPaiType();
            if (cardType && shangJiaTangZi) {
                for (const key in tangZi) {
                    player3[key] = '0';
                }
                for (let i = 0; i < player3.length; ) {
                    if (player3[i] == '0') {
                        player3.splice(i, 1);
                    }else {
                        i++;
                    }
                }
                if (player3.length == 2) {
                    otherYinXiao('报双');
                }else if (player3.length == 1) {
                    otherYinXiao('报单');
                }
                diPai = Object.values(tangZi);
                shuaXinTangZi();
                zhengZaiChuPaiTile[2].style.display = 'none';
                zhengZaiChuPaiTile[0].style.display = 'none';
                zhengZaiChuPaiTile[1].style.display = 'block';
                shuaXinShouPai();
                chuPaiLeJianTouShow(3);
                isP3 = true;
                isP1 = isP2 = false;
                let srcAudio = getTangZiPaiType();
                yinXiaoZhuangTaiChange(srcAudio);
                if (cardType[0] == '王炸' || cardType[0] == '炸弹') {
                    nowBeiShu *= 2;
                    wanduoda[1].children[0].innerHTML = `倍数: ${nowBeiShu}`;
                }
                if (canGameOver()) {
                    return;
                }
                renJiLiuCheng();
            }else {
                alert('当前出牌不正确，请重新出牌');
                setTimeout(function() {
                    document.body.removeChild(document.body.childNodes[document.body.childNodes.length - 1]);
                }, 1000);
                return;
            }
            
            
            myShouPai = {};
            
        }
        // 过
        if (e.target.value == '过') {
            otherYinXiao('过');
            zhengZaiChuPaiTile[2].style.display = 'none';
            zhengZaiChuPaiTile[0].style.display = 'none';
            zhengZaiChuPaiTile[1].style.display = 'block';
            alert1('过', 300, 60, 'left');
            p3YaoBuQi = true;
            if (isP2) {
                renJiLiuCheng(true);
            }else if(isP1) {
                renJiLiuCheng1(true);
            }
        }
    });



    // 重复数量检查,返回出牌的牌名和对应数量
    function getChongFu(arr) {
        arr = [...arr];
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            let pname = arr[i].pname;
            let bijiao = arr[i].bijiao;
            let ciShu = 1;
            newArr[i] = { pname, ciShu, bijiao };
            for (let j = i+1; j <arr.length; ) {
                if (arr[i].pname == arr[j].pname) {
                    newArr[i].ciShu++;
                    arr.splice(j, 1);
                }else {
                    j++;
                }
            }
        }
        return newArr;
    }
    // 出牌类型判断
    function getTangZiPaiType(arg = false) {
        let typeArr = [];
        let tangZiValues;
        if (arg) {
            tangZiValues = Object.values(arg);
        }else {
            tangZiValues = Object.values(tangZi);
        }
        const regE = /\W/;
        const chongFuWrapArr = getChongFu(tangZiValues);
        // ------------------------单牌-------------------------
        if (tangZiValues.length == 1) {
            typeArr[0] = '单牌';
            typeArr[1] = tangZiValues[0].bijiao;
            return typeArr;
        }
        // ------------------------对子-------------------------
        if (tangZiValues.length == 2 && tangZiValues[0].pname == tangZiValues[1].pname) {
            typeArr[0] = '对子';
            typeArr[1] = tangZiValues[0].bijiao;
            return typeArr;
        }
        // ------------------------王炸-------------------------
        if (tangZiValues.length == 2 && regE.test(tangZiValues[0].pname) && regE.test(tangZiValues[1].pname)) {
            typeArr[0] = '王炸';
            return typeArr;
        }
        // ------------------------三不带-------------------------
        if (tangZiValues.length == 3 && tangZiValues[0].pname == tangZiValues[1].pname && tangZiValues[1].pname == tangZiValues[2].pname) {
            typeArr[0] = '三不带';
            typeArr[1] = tangZiValues[0].bijiao;
            return typeArr;
        }
        // ------------------------三带一或炸弹（4张牌）-------------------
        if (tangZiValues.length == 4) {
            for (const iterator of chongFuWrapArr) {
                if (iterator.ciShu == 3) {
                    typeArr[0] = '三带一';
                    typeArr[1] = iterator.bijiao;
                    return typeArr;
                }
                if (iterator.ciShu == 4) {
                    typeArr[0] = '炸弹';
                    typeArr[1] = iterator.bijiao;
                    return typeArr;
                }
            }
        }
        // ------------------------三带对子-------------------------
        if (tangZiValues.length == 5) {
            if (chongFuWrapArr.length == 2) {
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 3) {
                        typeArr[0] = '三带对子';
                        typeArr[1] = iterator.bijiao;
                        return typeArr;
                    }
                }
            }
        }
        // ------------------------连子-------------------------
        if (tangZiValues.length >= 5 && chongFuWrapArr.length == tangZiValues.length) {
            let flag = true;
            tangZiValues.sort((a, b) => a.bijiao - b.bijiao);
            for (let i = 0; i < tangZiValues.length; i++) {
                if (tangZiValues[i].bijiao == '13' || tangZiValues[i].bijiao == '14' || tangZiValues[i].bijiao == '15') {//剔除出大小王和2
                    flag = false;
                }
                if (tangZiValues.length - 1 != i && tangZiValues[i].bijiao + 1 != tangZiValues[i + 1].bijiao) {// 判断是否连号
                    flag = false;
                }
            }
            if (flag) {
                typeArr[0] = '连子';
                typeArr[1] = tangZiValues[0].bijiao;
                typeArr[2] = tangZiValues.length;
                return typeArr;
            }
        }
        // ------------------------飞机0（三不带飞机）-------------------------
        if (tangZiValues.length % 3 == 0 && tangZiValues.length != 0) {
            let flag = true;
            // 三不带飞机判断
            let fly3 = 0;
            // 保存3张牌的出现判断是否连子
            const fly3Arr = [];
            // 初始化准备
            for (const iterator of chongFuWrapArr) {
                if (iterator.pname == '2') {
                    flag = false;
                }
                if (iterator.ciShu == 3) {
                    fly3++;
                    fly3Arr.push(iterator.bijiao);
                }
            }
            if (tangZiValues.length - fly3 * 3 == 0) {
                fly3Arr.sort((a, b) => a - b);
                for (let i = 0; i < fly3Arr.length - 1; i++) {
                    if (fly3Arr[i] + 1 != fly3Arr[i + 1]) {
                        flag = false;
                    }
                }
                if (flag) {
                    typeArr[0] = '飞机0';
                    typeArr[1] = fly3Arr[0];
                    typeArr[2] = fly3Arr.length;
                    return typeArr;
                }
            }
        }
        // ------------------------飞机1（三带一飞机）或滚炸-------------------------
        if (tangZiValues.length % 4 == 0 && tangZiValues.length != 0) {
            let flag = true;
            let flagBoom = true;
            // 滚炸判断开关
            let gunZha = true;
            // 三带1飞机判断
            let fly3 = 0;
            // 保存3张牌的出现判断是否连子
            const fly3Arr = [];
            // 炸弹出现判断连号
            const boomArr = [];
            // 初始化准备
            for (const iterator of chongFuWrapArr) {
                if (iterator.pname == '2') {
                    flag = false;
                    gunZha = false;
                }
                if (iterator.ciShu != 4) {
                    gunZha = false;
                }
                if (iterator.ciShu == 3) {
                    fly3++;
                    fly3Arr.push(iterator.bijiao);
                }
                if (iterator.ciShu == 4) {
                    boomArr.push(iterator.bijiao);
                }
            }
            // 开始滚炸判断
            // if (gunZha) {
            //     boomArr.sort((a, b) => a - b);
            //     for (let i = 0; i < boomArr.length - 1; i++) {
            //         if (boomArr[i] + 1 != boomArr[i + 1]) {
            //             flagBoom = false;
            //         }
            //     }
            //     if (flagBoom) {
            //         typeArr[0] = '滚炸';
            //         typeArr[1] = boomArr[0];
            //         typeArr[2] = boomArr.length;
            //         return typeArr;
            //     }
            // }
            // 开始三带一飞机判断
            if (tangZiValues.length - fly3 * 3 == fly3 || (tangZiValues.length - (fly3 - 1) * 3 == fly3 - 1 && (fly3 == 4 || fly3 == 5 || fly3 == 6))) {
                fly3Arr.sort((a, b) => a - b);
                if (fly3 < 4) {
                    typeArr[2] = fly3Arr.length;
                    typeArr[1] = fly3Arr[0];
                    for (let i = 0; i < fly3Arr.length - 1; i++) {
                        if (fly3Arr[i] + 1 != fly3Arr[i + 1]) {
                            flag = false;
                        }
                    }
                }
                if (fly3 >= 4) {
                    typeArr[2] = fly3Arr.length - 1;
                    let flag1 = false, flag2 = false;
                    for (let i = 0; i < fly3Arr.length - 2; i++) {
                        if (fly3Arr[i] + 1 != fly3Arr[i + 1]) {
                            flag1 = true;
                            typeArr[1] = fly3Arr[1];
                        }
                    }
                    for (let i = 1; i < fly3Arr.length - 1; i++) {
                        if (fly3Arr[i] + 1 != fly3Arr[i + 1]) {
                            flag2 = true;
                            typeArr[1] = fly3Arr[0];
                        }
                    }
                    if (flag1 && flag2) {// 只要首尾有能连上的就不会进入这个条件 例如333/444/555/888也是三带一飞机
                        flag = false;
                    }
                }
                if (flag) {
                    typeArr[0] = '飞机1';
                    return typeArr;
                }
            }
        }
        // ------------------------飞机2（三带对子飞机）-------------------------
        if (tangZiValues.length % 5 == 0 && tangZiValues.length != 0) {
            let flag = true;
            // 三带2飞机判断
            let fly3 = 0;
            // 保存3张牌的出现判断是否连子
            const fly3Arr = [];
            // 带的牌是对子出现的次数
            let fly2 = 0;
            // 初始化准备
            for (const iterator of chongFuWrapArr) {
                if (iterator.pname == '2') {
                    flag = false;
                }
                if (iterator.ciShu == 3) {
                    fly3++;
                    fly3Arr.push(iterator.bijiao);
                }
                if (iterator.ciShu == 2) {
                    fly2++;
                }
            }
            if (tangZiValues.length - fly3 * 3 == fly2 * 2) {
                fly3Arr.sort((a, b) => a - b);
                for (let i = 0; i < fly3Arr.length - 1; i++) {
                    if (fly3Arr[i] + 1 != fly3Arr[i + 1]) {
                        flag = false;
                    }
                }
                if (flag) {
                    typeArr[0] = '飞机2';
                    typeArr[1] = fly3Arr[0];
                    typeArr[2] = fly3Arr.length;
                    return typeArr;
                }
            }
        }
        // ------------------------连对-------------------------
        if (tangZiValues.length % 2 == 0 && tangZiValues.length > 5) {
            let flag = true;
            // 保存对子的出现
            const douBle2Arr = [];
            // 初始化准备
            for (const iterator of chongFuWrapArr) {
                if (iterator.pname == '2') {
                    flag = false;
                }
                if (iterator.ciShu == 2) {
                    douBle2Arr.push(iterator.bijiao);
                }
            }
            if (tangZiValues.length - douBle2Arr.length * 2 == 0) {
                douBle2Arr.sort((a, b) => a - b);
                for (let i = 0; i < douBle2Arr.length - 1; i++) {
                    if (douBle2Arr[i] + 1 != douBle2Arr[i + 1]) {
                        flag = false;
                    }
                }
                if (flag) {
                    typeArr[0] = '连对';
                    typeArr[1] = douBle2Arr[0];
                    typeArr[2] = douBle2Arr.length;
                    return typeArr;
                }
            }
        }
        // ------------------------四带二-------------------------
        if (tangZiValues.length == 6) {
            for (const iterator of chongFuWrapArr) {
                if (iterator.ciShu == 4) {
                    typeArr[0] = '四带二';
                    typeArr[1] = iterator.bijiao;
                    return typeArr;
                }
            }
        }
        // ------------------------四带二大飞机-------------------------
        if (tangZiValues.length % 6 == 0 && tangZiValues.length > 5) {
            let flag = true;
            let flagBoom = true;
            // 炸弹出现判断连号
            const boomArr = [];
            // 初始化准备
            for (const iterator of chongFuWrapArr) {
                if (iterator.pname == '2') {
                    flag = false;
                }
                if (iterator.ciShu == 4) {
                    boomArr.push(iterator.bijiao);
                }
            }
            if (flag && ((tangZiValues.length - (boomArr.length - 1) * 4 == (boomArr.length - 1) * 2 && tangZiValues.length > 11) || tangZiValues.length - boomArr.length * 4 == boomArr.length * 2)) {
                boomArr.sort((a, b) => a - b);
                let flag1 = false, flag2 = false;

                if (boomArr.length < 3) {
                    typeArr[1] = boomArr[0];
                    typeArr[2] = boomArr.length;
                    for (let i = 0; i < boomArr.length - 1; i++) {
                        if (boomArr[i] + 1 != boomArr[i + 1]) {
                            flagBoom = false;
                        }
                    }
                }
                if (boomArr.length >= 3) {
                    typeArr[2] = boomArr.length - 1;
                    for (let i = 0; i < boomArr.length - 2; i++) {
                        if (boomArr[i] + 1 != boomArr[i + 1]) {
                            typeArr[1] = boomArr[1];
                            flag1 = true;
                        }
                    }
                    for (let i = 1; i < boomArr.length - 1; i++) {
                        if (boomArr[i] + 1 != boomArr[i + 1]) {
                            typeArr[1] = boomArr[0];
                            flag2 = true;
                        }
                    }
                    if (flag1 && flag2) {// 同理三带一飞机
                        flagBoom = false;
                    }
                }
                if (flagBoom) {
                    typeArr[0] = '四带二大飞机';
                    return typeArr;
                }
            }
        }

        return 0;
    }
    // 手牌查询(获取可出牌区桥接数组)
    //                     手牌  牌型  最小牌值    连号量（可选）
    function shouPaiChaXun(arr, type, bijiao = 0, more) {
        // 手牌重复检索
        const chongFuWrapArr = getChongFu(arr);
        chongFuWrapArr.reverse();
        // 可出牌区桥接数组
        const canIPlay = [];
        // 有无双王判断
        let jokerFlag = false;
        let bigJoker = false, smallJoker = false;
        for (const iterator of chongFuWrapArr) {
            if (iterator.bijiao == 14) {
                smallJoker = true;
            }
            if (iterator.bijiao == 15) {
                bigJoker = true;
            }
        }
        if (bigJoker && smallJoker) {
            jokerFlag = true;
        }
        // 王炸查询
        function haveJoker() {
            if (jokerFlag) {
                let pname = '王';
                let bijiao = 20;
                let ciShu = 1;
                canIPlay.push({ pname, ciShu, bijiao });
            }
        }
        // ---------------------------------------------------
        // 单牌查询 用于三带一
        function getOneCard() {
            for (const iterator of chongFuWrapArr) {
                if (iterator.ciShu == 1 && iterator.bijiao < 14) {
                    for (let i = 0; i < arr.length; i++) {
                        if (iterator.pname == arr[i].pname) {
                            return 1;
                        }
                    }
                }
            }
            for (const iterator of chongFuWrapArr) {
                if (iterator.ciShu == 2) {
                    for (let i = 0; i < arr.length; i++) {
                        if (iterator.pname == arr[i].pname) {
                            return 1;
                        }
                    }
                }
            }
            return 0;
        }
        // 单牌、对子查询 用于四带二
        function getDoubleCard() {
            let num = 0;
            for (const iterator of chongFuWrapArr) {
                if (iterator.ciShu == 1 && iterator.bijiao < 14) {
                    for (let i = 0; i < arr.length; i++) {
                        if (iterator.pname == arr[i].pname) {
                            num++;
                            if (num == 2) {
                                return 1;
                            }
                        }
                    }
                }
            }
            for (const iterator of chongFuWrapArr) {
                if (iterator.ciShu == 2) {
                    for (let i = 0; i < arr.length; i++) {
                        if (iterator.pname == arr[i].pname) {
                            return 1;
                        }
                    }
                }
            }
            return 0;
        }
        function getDuiZiCard() {
            for (const iterator of chongFuWrapArr) {
                if (iterator.ciShu == 2) {
                    for (let i = 0; i < arr.length; i++) {
                        if (iterator.pname == arr[i].pname) {
                            return 1;
                        }
                    }
                }
            }
            return 0;
        }
        switch (type) {
            case '单牌':
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 1 && iterator.bijiao > bijiao) {
                        if (jokerFlag) { // 有双王的话就不要拆单
                            if (iterator.bijiao < 14) {
                                canIPlay.push(iterator);
                            }
                        }else {
                            canIPlay.push(iterator);
                        }
                    }
                }
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 2 && iterator.bijiao > bijiao) {
                        canIPlay.push(iterator);
                    }
                }
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 3 && iterator.bijiao > bijiao) {
                        canIPlay.push(iterator);
                    }
                }
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 4) {
                        canIPlay.push(iterator);
                    }
                }
                haveJoker();
                break;
            case '对子':
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 2 && iterator.bijiao > bijiao) {
                        canIPlay.push(iterator);
                    }
                }
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 3 && iterator.bijiao > bijiao) {
                        canIPlay.push(iterator);
                    }
                }
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 4) {
                        canIPlay.push(iterator);
                    }
                }
                haveJoker();
                break;
            case '三不带':
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 3 && iterator.bijiao > bijiao) {
                        canIPlay.push(iterator);
                    }
                }
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 4) {
                        canIPlay.push(iterator);
                    }
                }
                haveJoker();
                break;
            case '三带一':
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 3 && iterator.bijiao > bijiao) {
                        if (getOneCard()) {
                            canIPlay.push(iterator);
                        }
                    }
                }
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 4) {
                        canIPlay.push(iterator);
                    }
                }
                haveJoker();
                break;
            case '炸弹':
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 4 && iterator.bijiao > bijiao) {
                        canIPlay.push(iterator);
                    }
                }
                haveJoker();
                break;
            case '四带二':
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 4 && iterator.bijiao > bijiao) {
                        if (getDoubleCard()) {
                            iterator.can4 = '可压';
                            canIPlay.push(iterator);
                        }
                    }
                }
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 4) {
                        canIPlay.push(iterator);
                    }
                }
                haveJoker();
                break;
            case '三带对子':
                    for (const iterator of chongFuWrapArr) {
                        if (iterator.ciShu == 3 && iterator.bijiao > bijiao) {
                            if (getDuiZiCard()) {
                                canIPlay.push(iterator);
                            }
                        }
                    }
                    for (const iterator of chongFuWrapArr) {
                        if (iterator.ciShu == 4) {
                            canIPlay.push(iterator);
                        }
                    }
                    haveJoker();
                    break;
            case '连对':
                let tempArr = [];
                let flagt1 = true, flagt2 = true, flagt3 = false;
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu >= 2 && iterator.bijiao > bijiao && iterator.ciShu < 4 && iterator.bijiao < 13) {
                        tempArr.push(iterator);
                    }
                }
                if (tempArr.length >= more) {
                    for (let i = 0; i < more - 1; i++) {
                        if (tempArr[i].bijiao + 1 != tempArr[i + 1].bijiao) {
                            flagt1 = false;
                        }
                    }
                    for (let i = tempArr.length - more; i < tempArr.length - 1; i++) {
                        if (tempArr[i].bijiao + 1 != tempArr[i + 1].bijiao) {
                            flagt2 = false;
                        }
                    }
                    if (tempArr.length - more == 2 && tempArr.length > 4) {
                        flagt3 = true;
                        for (let i = 1; i < more; i++) {
                            if (tempArr[i].bijiao + 1 != tempArr[i + 1].bijiao) {
                                flagt3 = false;
                            }
                        }
                    }
                    if (flagt1) {
                        let tarr = tempArr.slice(0, more);
                        tarr.unshift(true);
                        canIPlay.push(tarr);
                    }else if (flagt2) {
                        let tarr = tempArr.slice(tempArr.length - more, tempArr.length);
                        tarr.unshift(true);
                        canIPlay.push(tarr);
                    }else if (flagt3) {
                        let tarr = tempArr.slice(1, tempArr.length - 1);
                        tarr.unshift(true);
                        canIPlay.push(tarr);
                    }
                }
                for (const iterator of chongFuWrapArr) {
                    if (iterator.ciShu == 4) {
                        canIPlay.push(iterator);
                    }
                }
                haveJoker();
                break;
            case '连子':
                {
                    let tempArr = [];
                    let flagt1 = true, flagt2 = true, flagt3 = false;
                    for (const iterator of chongFuWrapArr) {
                        if (iterator.ciShu >= 1 && iterator.bijiao > bijiao && iterator.ciShu < 4 && iterator.bijiao < 13) {
                            tempArr.push(iterator);
                        }
                    }
                    if (tempArr.length >= more) {
                        for (let i = 0; i < more - 1; i++) {
                            if (tempArr[i].bijiao + 1 != tempArr[i + 1].bijiao) {
                                flagt1 = false;
                            }
                        }
                        for (let i = tempArr.length - more; i < tempArr.length - 1; i++) {
                            if (tempArr[i].bijiao + 1 != tempArr[i + 1].bijiao) {
                                flagt2 = false;
                            }
                        }
                        if (tempArr.length - more == 2 && tempArr.length > 6) {
                            flagt3 = true;
                            for (let i = 1; i < more; i++) {
                                if (tempArr[i].bijiao + 1 != tempArr[i + 1].bijiao) {
                                    flagt3 = false;
                                }
                            }
                        }
                        if (flagt1) {
                            let tarr = tempArr.slice(0, more);
                            tarr.unshift(true);
                            canIPlay.push(tarr);
                        }else if (flagt2) {
                            let tarr = tempArr.slice(tempArr.length - more, tempArr.length);
                            tarr.unshift(true);
                            canIPlay.push(tarr);
                        }else if (flagt3) {
                            let tarr = tempArr.slice(1, tempArr.length - 1);
                            tarr.unshift(true);
                            canIPlay.push(tarr);
                        }
                    }
                    for (const iterator of chongFuWrapArr) {
                        if (iterator.ciShu == 4) {
                            canIPlay.push(iterator);
                        }
                    }
                    haveJoker();
                }
                break;
            case '王炸':
                break;
            default:
                break;
        }

        return canIPlay;
    }
    // 获取待出牌     arr:shouPaiChaXun的返回值，player：玩家手牌，index：shouPaiChaXun的返回值数组的下标（往下可依次提示），type：牌型
    function getTempCardArr(arr, player, index, type) {
        let cardObj = {};
        // 获取单牌，供三带一
        function getOneCard() {
            const chongFuWrapArr = getChongFu(player);
            chongFuWrapArr.reverse();
            for (const iterator of chongFuWrapArr) {
                if (iterator.ciShu == 1 && iterator.bijiao < 14) {
                    for (let i = 0; i < player.length; i++) {
                        if (iterator.pname == player[i].pname) {
                            let tempObj = {};
                            tempObj[i] = player[i];
                            return tempObj;
                        }
                    }
                }
            }
            for (const iterator of chongFuWrapArr) {
                if (iterator.ciShu == 2) {
                    for (let i = 0; i < player.length; i++) {
                        if (iterator.pname == player[i].pname) {
                            let tempObj = {};
                            tempObj[i] = player[i];
                            return tempObj;
                        }
                    }
                }
            }
            return 0;
        }
        // 获取2张单牌或对子，供四带二
        function getDoubleCard() {
            const chongFuWrapArr = getChongFu(player);
            chongFuWrapArr.reverse();
            let num = 0;
            let tempObj = {};
            for (const iterator of chongFuWrapArr) {
                if (iterator.ciShu == 1 && iterator.bijiao < 14) {
                    for (let i = 0; i < player.length; i++) {
                        if (iterator.pname == player[i].pname) {
                            num++;
                            tempObj[i] = player[i];
                            if (num == 2) {
                                return tempObj;
                            }
                        }
                    }
                }
            }
            for (const iterator of chongFuWrapArr) {
                if (iterator.ciShu == 2) {
                    for (let i = 0; i < player.length; i++) {
                        if (iterator.pname == player[i].pname) {
                            num++;
                            tempObj[i] = player[i];
                            if (num == 2) {
                                return tempObj;
                            }
                        }
                    }
                }
            }
            return 0;
        }
        // 获取对子，供三带对子
        function getDuiZiCard() {
            const chongFuWrapArr = getChongFu(player);
            chongFuWrapArr.reverse();
            let num = 0;
            let tempObj = {};
            for (const iterator of chongFuWrapArr) {
                if (iterator.ciShu == 2) {
                    for (let i = 0; i < player.length; i++) {
                        if (iterator.pname == player[i].pname) {
                            num++;
                            tempObj[i] = player[i];
                            if (num == 2) {
                                return tempObj;
                            }
                        }
                    }
                }
            }
            return 0;
        }
        switch (type) {
            case '单牌':
                for (let i = 0; i < player.length; i++) {
                    if (arr[index].pname == player[i].pname) {
                        if (arr[index].ciShu != 4) {
                            cardObj[i] = player[i];
                            return cardObj;
                        }else if (arr[index].ciShu == 4) {
                            cardObj[i] = player[i];
                        }
                    }else if(arr[index].pname == '王' && player[i].bijiao >= 14) {
                        cardObj[i] = player[i];
                    }
                }
                return cardObj;
            case '对子':
                for (let i = 0; i < player.length; i++) {
                    if (arr[index].pname == player[i].pname) {
                        if (arr[index].ciShu != 4) {
                            cardObj[i] = player[i];
                            if (Object.keys(cardObj).length == 2) {
                                return cardObj;
                            }
                        }else if (arr[index].ciShu == 4) {
                            cardObj[i] = player[i];
                        }
                    }else if(arr[index].pname == '王' && player[i].bijiao >= 14) {
                        cardObj[i] = player[i];
                    }
                }
                return cardObj;
            case '三不带':
                for (let i = 0; i < player.length; i++) {
                    if (arr[index].pname == player[i].pname) {
                        if (arr[index].ciShu != 4) {
                            cardObj[i] = player[i];
                            if (Object.keys(cardObj).length == 3) {
                                return cardObj;
                            }
                        }else if (arr[index].ciShu == 4) {
                            cardObj[i] = player[i];
                        }
                    }else if(arr[index].pname == '王' && player[i].bijiao >= 14) {
                        cardObj[i] = player[i];
                    }
                }
                return cardObj;
            case '三带一':
                for (let i = 0; i < player.length; i++) {
                    if (arr[index].pname == player[i].pname) {
                        if (arr[index].ciShu != 4) {
                            cardObj[i] = player[i];
                            if (Object.keys(cardObj).length == 3) {
                                let oneCard = getOneCard();
                                cardObj[Object.keys(oneCard)[0]] = Object.values(oneCard)[0];
                                return cardObj;
                            }
                        }else if (arr[index].ciShu == 4) {
                            cardObj[i] = player[i];
                        }
                    }else if(arr[index].pname == '王' && player[i].bijiao >= 14) {
                        cardObj[i] = player[i];
                    }
                }
                return cardObj;
            case '炸弹':
                for (let i = 0; i < player.length; i++) {
                    if (arr[index].pname == player[i].pname) {
                        cardObj[i] = player[i];
                    }else if(arr[index].pname == '王' && player[i].bijiao >= 14) {
                        cardObj[i] = player[i];
                    }
                }
                return cardObj;
            case '四带二':
                for (let i = 0; i < player.length; i++) {
                    if (arr[index].pname == player[i].pname) {
                        if (arr[index].can4 == '可压') {
                            cardObj[i] = player[i];
                            if (Object.keys(cardObj).length == 4) {
                                let doubleCard = getDoubleCard();
                                cardObj[Object.keys(doubleCard)[0]] = Object.values(doubleCard)[0];
                                cardObj[Object.keys(doubleCard)[1]] = Object.values(doubleCard)[1];
                                return cardObj;
                            }
                        }else if (arr[index].ciShu == 4) {
                            cardObj[i] = player[i];
                        }
                    }else if(arr[index].pname == '王' && player[i].bijiao >= 14) {
                        cardObj[i] = player[i];
                    }
                }
                return cardObj;
            case '三带对子':
                for (let i = 0; i < player.length; i++) {
                    if (arr[index].pname == player[i].pname) {
                        if (arr[index].ciShu != 4) {
                            cardObj[i] = player[i];
                            if (Object.keys(cardObj).length == 3) {
                                let duiZiObj = getDuiZiCard();
                                cardObj[Object.keys(duiZiObj)[0]] = Object.values(duiZiObj)[0];
                                cardObj[Object.keys(duiZiObj)[1]] = Object.values(duiZiObj)[1];
                                return cardObj;
                            }
                        }else if (arr[index].ciShu == 4) {
                            cardObj[i] = player[i];
                        }
                    }else if(arr[index].pname == '王' && player[i].bijiao >= 14) {
                        cardObj[i] = player[i];
                    }
                }
                return cardObj;
            case '连对':
                let num = 0;
                let j = 1;
                if (arr[index][0]) {
                    arr[index].reverse();
                    arr[index].unshift(arr[index][arr[index].length - 1]);
                    arr[index].pop();
                }
                for (let i = 0; i < player.length; i++) {
                    if (arr[index].pname == player[i].pname || arr[index][0]) {
                        if (arr[index][0]) {
                            if (arr[index][j].pname == player[i].pname) {
                                cardObj[i] = player[i];
                                if (++num == 2) {
                                    num = 0;
                                    j++;
                                }
                                if (Object.keys(cardObj).length == (arr[index].length - 1) * 2) {
                                    return cardObj;
                                }
                            }
                        }else if (arr[index].ciShu == 4) {
                            cardObj[i] = player[i];
                        }
                    }else if(arr[index].pname == '王' && player[i].bijiao >= 14) {
                        cardObj[i] = player[i];
                    }
                }
                return cardObj;
            case '连子':
                {
                    let j = 1;
                    if (arr[index][0]) {
                        arr[index].reverse();
                        arr[index].unshift(arr[index][arr[index].length - 1]);
                        arr[index].pop();
                    }
                    for (let i = 0; i < player.length; i++) {
                        if (arr[index].pname == player[i].pname || arr[index][0]) {
                            if (arr[index][0]) {
                                if (arr[index][j].pname == player[i].pname) {
                                    cardObj[i] = player[i];
                                    j++;
                                    if (Object.keys(cardObj).length == arr[index].length - 1) {
                                        return cardObj;
                                    }
                                }
                            }else if (arr[index].ciShu == 4) {
                                cardObj[i] = player[i];
                            }
                        }else if(arr[index].pname == '王' && player[i].bijiao >= 14) {
                            cardObj[i] = player[i];
                        }
                    }
                }
                return cardObj;
            default:
                break;
        }
    }
    console.log(shouPaiChaXun(player3, '单牌'));

    console.log(getTempCardArr(shouPaiChaXun(player3, '单牌'), player3, 0, '单牌'));


    // 随机获取牌型（用于人机无敌后自动出牌型）
    function getChuShenMePaiNe(whatPlayer, suijima = false) {
        let key = 100;
        if (suijima) {// 优化算法，规定算法也无法选牌则进行switch随机选牌
            key = parseInt(Math.random() * 7);
        }else {
            const chongFuWrapArr = getChongFu(whatPlayer);
            chongFuWrapArr.reverse();
            let oneArr = [];
            let twoArr = [];
            let threeArr = [];
            for (const iterator of chongFuWrapArr) {
                if (iterator.ciShu == 1) {
                    oneArr.push(iterator);
                }else if (iterator.ciShu == 2) {
                    twoArr.push(iterator);
                }else if (iterator.ciShu == 3) {
                    threeArr.push(iterator);
                }
            }
            // -----------------这里人机作弊,监视偷看我报单或报双的牌,注释掉即可关闭作弊-------------
            if (player3.length == 2 && whatPlayer.length > 2) {
                let typeCard = [];
                let renjikey;
                if (player3[0].bijiao == player3[1].bijiao) {
                    renjikey = parseInt(Math.random() * 6);
                    typeCard = renjizuobi(renjikey);
                    let canTemp = shouPaiChaXun(whatPlayer, typeCard[0], typeCard[1], typeCard[2]);
                    let num = 0;
                    while (true) {
                        if (canTemp.length > 0 || ++num == 30) {
                            break;
                        }else {
                            renjikey = parseInt(Math.random() * 6);
                            typeCard = renjizuobi(renjikey);
                            canTemp = shouPaiChaXun(whatPlayer, typeCard[0], typeCard[1], typeCard[2]);
                        }
                    }
                    return typeCard;
                }
                function renjizuobi(key) {
                    switch (key) {
                        case 0:
                            return ['单牌', 0];
                        case 1:
                            return ['三带一', 0];
                        case 2:
                            return ['三带对子', 0];
                        case 3:
                            return ['连对', 0, 3];
                        case 4:
                            return ['连子', 0, 5];
                        case 5:
                            return ['对子', player3[0].bijiao - 1];
                        default:
                            break
                    }
                }
            }else if (player3.length == 1 && whatPlayer.length > 1) {
                let typeCard = [];
                let renjikey;
                renjikey = parseInt(Math.random() * 6);
                typeCard = renjizuobi(renjikey);
                let canTemp = shouPaiChaXun(whatPlayer, typeCard[0], typeCard[1], typeCard[2]);
                let num = 0;
                while (true) {
                    if (canTemp.length > 0 || ++num == 30) {
                        break;
                    }else {
                        renjikey = parseInt(Math.random() * 6);
                        typeCard = renjizuobi(renjikey);
                        canTemp = shouPaiChaXun(whatPlayer, typeCard[0], typeCard[1], typeCard[2]);
                    }
                }
                return typeCard;
                function renjizuobi(key) {
                    switch (key) {
                        case 0:
                            return ['单牌', player3[0].bijiao - 1];
                        case 1:
                            return ['三带一', 0];
                        case 2:
                            return ['三带对子', 0];
                        case 3:
                            return ['连对', 0, 3];
                        case 4:
                            return ['连子', 0, 5];
                        case 5:
                            return ['对子', 0];
                        default:
                            break
                    }
                }
            }
            // ------------------------------------------------------------------------------
            if (oneArr.length > 4) {
                let flagL = true;
                for (let i = 0; i < 4; i++) {
                    if (oneArr[i].bijiao + 1 != oneArr[i + 1].bijiao) {
                        flagL = false;
                    }
                }
                if (flagL) {
                    return ['连子', 0, 5];
                }
            }
            if (twoArr.length > 2) {
                let flagL = true;
                for (let i = 0; i < 2; i++) {
                    if (twoArr[i].bijiao + 1 != twoArr[i + 1].bijiao) {
                        flagL = false;
                    }
                }
                if (flagL) {
                    return ['连对', 0, 3];
                }
                if (twoArr.length > 3) {
                    let flagL = true;
                    for (let i = 1; i < 3; i++) {
                        if (twoArr[i].bijiao + 1 != twoArr[i + 1].bijiao) {
                            flagL = false;
                        }
                    }
                    if (flagL) {
                        return ['连对', 0, 3];
                    }
                }
            }
            if (threeArr.length > 0 && whatPlayer.length > 6 && threeArr[0].bijiao < 9) { // 手里有三张的，手牌大于6张，三张的小于J
                if (oneArr.length < twoArr.length) {
                    return ['三带对子', 0];
                }else {
                    return ['三带一', 0];
                }
            }
            if (threeArr.length > 0 && whatPlayer.length <= 6) {
                return ['三带一', 0];
            }
            if (twoArr.length >= oneArr.length) {
                return ['对子', 0];
            }
            if (twoArr.length < oneArr.length) {
                return ['单牌', 0];
            }
        }
        switch (key) {
            case 0:
                return ['单牌', 0];
            case 1:
                return ['对子', 0];
            case 2:
                return ['三不带', 0];
            case 3:
                return ['三带一', 0];
            case 4:
                return ['三带对子', 0];
            case 5:
                return ['连对', 0, 3];
            case 6:
                return ['连子', 0, 5];
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
        
            default:
                break;
        }
        return ['王炸', 20];
    }
    // 人机1出牌
    function renJiPlay(whatPlayer, p, guo, isWuDi, danpai) { // p:true人机1， guo:true人机过，用于不误伤队友，isWuDi:true人机无敌进入随机出牌
        let typeCard; // 可出牌区桥接数组
        if (isWuDi) {
            typeCard = getChuShenMePaiNe(whatPlayer);
            while (true) {
                if (shouPaiChaXun(whatPlayer, typeCard[0], typeCard[1], typeCard[2]).length > 0) {
                    break;
                }else {
                    typeCard = getChuShenMePaiNe(whatPlayer, true);
                }
            }
            if (danpai == '单牌') {
                typeCard = ['单牌', 0];
            }
            console.log('当前随机获取牌--------------------------------',typeCard);
        }else {
            typeCard = getTangZiPaiType(); // 牌型
        }
        let canTemp = shouPaiChaXun(whatPlayer, typeCard[0], typeCard[1], typeCard[2]);
        console.log('可出牌区桥接数组',canTemp);
        if (canTemp.length == 0 || guo) {
            if (p == 'p1') {
                alert1('过', 300, 10, 'left');
            }else if (p == 'p2') {
                alert1('过', 300, 10, 'right');
            }
            otherYinXiao('过');
            return true;
        }
        let cardObj = getTempCardArr(canTemp, whatPlayer, 0, typeCard[0]); // 根据可出牌区桥接数组获取待出牌
        for (const key in cardObj) {
            whatPlayer[key] = '0';
        }
        for (let i = 0; i < whatPlayer.length; ) {
            if (whatPlayer[i] == '0') {
                whatPlayer.splice(i, 1);
            }else {
                i++;
            }
        }
        diPai = Object.values(cardObj);
        if (diPai.length == 4) {
            let isZhaDan = true;
            for (let i = 0; i < diPai.length - 1; i++) {
                if (diPai[i].pname != diPai[i + 1].pname) {
                    isZhaDan = false;
                }
            }
            if (isZhaDan) {
                nowBeiShu *= 2;
                wanduoda[1].children[0].innerHTML = `倍数: ${nowBeiShu}`;
            }
        }else if (diPai.length == 2) {
            let isZhaDan = true;
            for (let i = 0; i < diPai.length; i++) {
                if (diPai[i].bijiao < 14) {
                    isZhaDan = false;
                }
            }
            if (isZhaDan) {
                nowBeiShu *= 2;
                wanduoda[1].children[0].innerHTML = `倍数: ${nowBeiShu}`;
            }
        }
        tangZi = diPai;
        console.log(tangZi);
        let srcAudio = getTangZiPaiType();
        yinXiaoZhuangTaiChange(srcAudio);
        shuaXinTangZi();
        if (p == 'p1') {
            userBox[0].querySelector('span').innerHTML = `剩余牌数:${whatPlayer.length}`;
            if (whatPlayer.length < 3) {
                userBox[0].querySelector('div').style.display = 'block';
                if (whatPlayer.length == 2) {
                    userBox[0].querySelector('div > h6').innerHTML = '报双';
                    otherYinXiao('报双');
                }else if (whatPlayer.length == 1) {
                    userBox[0].querySelector('div > h6').innerHTML = '报单';
                    otherYinXiao('报单');
                }
            }
            chuPaiLeJianTouShow(1);
            isP1 = true;
            isP3 = isP2 = false;
        }else if (p == 'p2') {
            if (whatPlayer.length < 3) {
                userBox[1].querySelector('div').style.display = 'block';
                if (whatPlayer.length == 2) {
                    userBox[1].querySelector('div > h6').innerHTML = '报双';
                    otherYinXiao('报双');
                }else if (whatPlayer.length == 1) {
                    userBox[1].querySelector('div > h6').innerHTML = '报单';
                    otherYinXiao('报单');
                }
            }
            userBox[1].querySelector('span').innerHTML = `剩余牌数:${whatPlayer.length}`;
            chuPaiLeJianTouShow(2);
            isP2 = true;
            isP1 = isP3 = false;
        }
        return false;
    }
});