/**
 * 说明：
 * row 代表行
 * column 代表列
 * block 代表 3×3 的方块，一个数独里有 9 个 block，
 * 从左到右，从上到下，从 1 开始编号，即：
 * 1 2 3
 * 4 5 6
 * 7 8 9
 */

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var difficulty = 3;
var randomComparator = function (a, b) {
  return 0.5 - Math.random();
};
var sudoku = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var flagnum = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var sudoku0 = [];
var answer = [];
var table = [[], [], [], [], [], [], [], [], []];
var selectindex=[9,9]
var timeStart;
var countTime = false;
var count = 0;
var timerId = -1;
bindTable();
var timeArea = document.getElementById("timer");
var easybt = document.getElementById("easybt");
var hardbt = document.getElementById("hardbt");
var disgustbt = document.getElementById("disgustbt");
gameStart();
Array.from(document.getElementsByTagName('li')).forEach(function(li) {
  if (window.innerWidth>=500) {
   li.style.height = '50px'; // 设置高度
   li.style.lineHeight = '50px'; 
  }else{
   li.style.height = window.innerWidth/10+ 'px';
   li.style.lineHeight = window.innerWidth/10+ 'px';
  }
});
function checkColumn(col, x) {
  for (var i = 0; i < 9; i++) {
    if (sudoku[i][col] === x) {
      return false;
    }
  }
  return true;
}

function checkRow(row, x) {
  for (var j = 0; j < 9; j++) {
    if (sudoku[row][j] === x) {
      return false;
    }
  }
  return true;
}

function checkBlock(row, col, x) {
  var startRow = Math.floor(row / 3) * 3;
  var startCol = Math.floor(col / 3) * 3;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (sudoku[startRow + i][startCol + j] === x) {
        return false;
      }
    }
  }
  return true;
}

function check(i, j, x) {
  return checkRow(i, x) && checkColumn(j, x) && checkBlock(i, j, x);
}

function columnOK(col) {
  var sum = 0;
  for (var i = 0; i < 9; i++) {
    sum += sudoku[i][col];
  }
  return sum === 45;
}

function columnsOK() {
  for (var j = 0; j < 9; j++) {
    if (!columnOK(j)) {
      return false;
    }
  }
  return true;
}

function rowOK(row) {
  var sum = 0;
  for (var j = 0; j < 9; j++) {
    sum += sudoku[row][j];
  }
  return sum === 45;
}

function rowsOK() {
  for (var i = 0; i < 9; i++) {
    if (!rowOK(i)) {
      return false;
    }
  }
  return true;
}

function blockOK(n) {
  var startRow = Math.floor((n - 1) / 3) * 3;
  var startCol = (n - 1) % 3 * 3;
  var sum = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      sum += sudoku[startRow + i][startCol + j];
    }
  }
  return sum === 45;
}

function blocksOK() {
  for (var i = 1; i <= 9; i++) {
    if (!blockOK(i)) {
      return false;
    }
  }
  return true;
}

function sudokuOK() {
  return columnsOK() && rowsOK() && blocksOK();
}

function tryit(i, j) {
  if (i >= 9) {
    return true;
  }
  var s = i;
  var t = j + 1;
  if (t >= 9) {
    t -= 9;
    s++;
  }
  if (sudoku[i][j] !== 0) {
    var success = tryit(s, t);
    if (success) {
      return true;
    }
  }
  for (var k = 0; k < 9; k++) {
    if (check(i, j, a[k])) {
      sudoku[i][j] = a[k];
      var success = tryit(s, t);
      if (success) {
        return true;
      }
      sudoku[i][j] = 0;
    }
  }
  return false;
}

/**
 * 将 1-9 随机排序后，填充到 n 号 block 中
 */
function setBlockRandomly(n) {
  var startRow = Math.floor((n - 1) / 3) * 3;
  var startCol = (n - 1) % 3 * 3;
  a.sort(randomComparator);
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      sudoku[startRow + i][startCol + j] = a[i * 3 + j];
    }
  }
}

// 获取文档中所有的<li>元素并转换为数组
function bindTable() {
  var e = document.getElementById("sudoku").firstElementChild;
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      table[i].push(e);
      e = e.nextElementSibling;
    }
  }
}
function select(x,y){
  selectindex=[x,y]
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if(sudoku[i][j]==sudoku[x][y] && sudoku[x][y]!=""){
        table[i][j].style.background="aqua"
      }else if (i== x) {
        table[i][j].style.background="linear-gradient(to bottom, #73FF96 0%, #fff 20%, #fff 80%, #73FF96 100%)"
      }else if(j==y){
        table[i][j].style.background="linear-gradient(to right, #73FF96 0%, #fff 20%, #fff 80%, #73FF96 100%)"
      }else{
        table[i][j].style.background=""
      }
      if(flagnum[i][j]==1){
        table[i][j].style.background="yellow"
      }
    }
  }
  if(sudoku[x][y]==""){
    table[x][y].style.background="cadetblue"
  }
}
function clear_select(){
  selectindex=[9,9]
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
        table[i][j].style.background=""
        flagnum[i][j]=0
    }
  }
}
function checkall(){
  clear_select()
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if(sudoku0[i][j]==""){
        let su=sudoku[i][j]
        sudoku[i][j]=0
        table[i][j].style.background= check(i, j, su) ? "" : "yellow"
        sudoku[i][j]=su
      }
    }
  }
}
function flag(){
  if (selectindex[0]==9){return}
  let i=selectindex[0]
  let j=selectindex[1]
  if(sudoku0[i][j]==""){
    flagnum[i][j]= flagnum[i][j]==0 ? 1 : 0
  }
  setTable(sudoku)
}
function inputnum(value){
  if (selectindex[0]==9){return}
  let i=selectindex[0]
  let j=selectindex[1]
  if (sudoku0[i][j]!=0){return}
  table[i][j].innerHTML = value;
  // flagnum[i][j]=check(i, j, value)?0:1
  sudoku[i][j] = value;
  select(i,j)
  if (sudokuOK()) {
    setTimeout(gameOver,10)
  }
}
function setTable(a) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      table[i][j].innerHTML=a[i][j] !== 0 ? a[i][j] : ''
      table[i][j].style.color=sudoku0[i][j] == 0 ? "green" : "red"
      if(flagnum[i][j]==1){
        table[i][j].style.background="yellow"
      }
    }
  }
}

function createSudoku() {
  clear(sudoku);
  setBlockRandomly(3);
  setBlockRandomly(5);
  setBlockRandomly(7);
  a.sort(randomComparator);
  var success = tryit(0, 0);
  return success;
}

function clear(arr) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      arr[i][j] = 0;
    }
  }
}

function copy(arr) {
  var a = [[], [], [], [], [], [], [], [], []];
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      a[i].push(arr[i][j]);
    }
  }
  return a;
}

function createGame() {
  while (!createSudoku());
  // 保存答案
  answer = copy(sudoku);
  // 每行随机挖去几个数，挖的个数与难度有关
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < difficulty + Math.floor(Math.random() * 2); j++) {
      sudoku[i][Math.floor(Math.random() * 9)] = 0;
    }
  }
  sudoku0=copy(sudoku)
}
// 设置难度为简答
function easy() {
  difficulty = 3;
  easybt.className="input0"
  hardbt.className="input1"
  disgustbt.className="input1"
}
//设置难度为困难
function hard() {
  difficulty = 5;
  easybt.className="input1"
  hardbt.className="input0"
  disgustbt.className="input1"
}
// 设置难度为变态
function disgust() {
  difficulty = 7;
  easybt.className="input1"
  hardbt.className="input1"
  disgustbt.className="input0"
}
// 换一个数独
function change() {
  createGame();
  setTable(sudoku);
}
// 查看答案
function showAnswer() {
  setTable(answer);
  sudoku= copy(answer);
}
function claer_num() {
  setTable(sudoku0);
  sudoku=copy(sudoku0)
  clear_select()
}
function del_num() {
  let i=selectindex[0]
  let j=selectindex[1]
  if (sudoku0[i][j]!=0){return}
  sudoku[i][j] = "";
  table[i][j].innerHTML = '';
  flagnum[i][j]= 0
  select(i,j)
}

function startTimer() {
  timeStart = new Date();
  countTime = true;
  count = 0;
  timeArea.innerHTML =  "00 : 00 : 00";
  timerId = setTimeout(timer, 1000);
  // console.log(timerId);
}

function timer() {
  count++;
  var h = pad(parseInt(count / 3600));
  var m = pad(parseInt(count / 60));
  var s = pad(parseInt(count % 60));
  timeArea.innerHTML = h + " : " + m + " : " + s;
  if (countTime) {
    timerId = setTimeout(timer, 1000);
  }
}

function pad(i) {
  if (i < 10) {
    return "0" + i;
  }
  return i;
}

function endTimer() {
  countTime = false;
  clearTimeout(timerId);
  // console.log(timerId);
}

function gameStart() {
  endTimer();
  change();
  startTimer();
  clear_select()
}

function gameOver() {
  endTimer();
  var restart = confirm('恭喜过关,点击开始新的游戏');
  if(restart) {
    gameStart();
  }
}
