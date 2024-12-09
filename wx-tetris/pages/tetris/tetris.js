import GameHelper from './gameHelper';
import { GAME_CONFIG } from './gameConfig';

Page({
  data: {
    board: null,
    currentBlock: null,
    nextBlock: null,
    isGameOver: false,
    isPaused: false,
    score: 0,
    level: 1,
    lines: 0
  },

  onLoad() {
    // 初始化游戏状态
    this.gameState = {
      lastDropTime: 0,
      dropInterval: 800,    // 初始下落间隔(ms)
      gameStartTime: 0,
      animationTimer: null,
      ctx: null,
      canvasWidth: 0,
      canvasHeight: 0,
      blockSize: 0,
      offsetX: 0,
      offsetY: 0
    };
    
    this.initCanvas();
    this.initGame();
  },

  // 游戏循环
  startGameLoop() {
    const loop = () => {
      if (!this.data.isPaused && !this.data.isGameOver) {
        const now = Date.now();
        
        // 自动下落
        if (now - this.gameState.lastDropTime > this.gameState.dropInterval) {
          if (!this.moveBlock('down')) {
            this.lockBlock();
          }
          this.gameState.lastDropTime = now;
        }

        // 渲染游戏画面
        this.renderGame();
      }
      
      // 使用 setTimeout 替代 requestAnimationFrame
      this.gameState.animationTimer = setTimeout(loop, 16); // 约60fps
    };
    
    loop();
  },

  // 停止游戏循环
  stopGameLoop() {
    if (this.gameState.animationTimer) {
      clearTimeout(this.gameState.animationTimer);
      this.gameState.animationTimer = null;
    }
  },

  // 重新开始游戏
  onRestart() {
    // 停止当前游戏循环
    this.stopGameLoop();

    // 重置游戏状态
    this.setData({
      board: Array(GAME_CONFIG.GRID.ROWS).fill().map(() => Array(GAME_CONFIG.GRID.COLS).fill(0)),
      currentBlock: GameHelper.generateBlock(),
      nextBlock: GameHelper.generateBlock(),
      isGameOver: false,
      isPaused: false,
      score: 0,
      level: 1,
      lines: 0
    });

    // 重置下落速度
    this.gameState.dropInterval = 800;
    this.gameState.lastDropTime = Date.now();
    this.gameState.gameStartTime = Date.now();

    // 开始新的游戏循环
    this.startGameLoop();
  },

  // 暂停游戏
  onPause() {
    if (this.data.isGameOver) return;
    
    const isPaused = !this.data.isPaused;
    this.setData({ isPaused });
    
    if (isPaused) {
      this.stopGameLoop();
    } else {
      this.gameState.lastDropTime = Date.now();
      this.startGameLoop();
    }
  },

  onUnload() {
    this.stopGameLoop();
  },

  // 初始化画布
  async initCanvas() {
    try {
      // 获取系统信息
      const systemInfo = wx.getSystemInfoSync();
      const screenWidth = systemInfo.windowWidth;
      const screenHeight = systemInfo.windowHeight;
      
      // 控制区域高度（与CSS中保持一致）
      const controlHeight = 140 * (screenWidth / 750); // 将rpx转换为px
      
      // 计算可用的游戏区域高度
      const availableHeight = screenHeight - controlHeight;
      
      // 计算合适的方块大小
      const blockSizeFromWidth = screenWidth / GAME_CONFIG.GRID.COLS;
      const blockSizeFromHeight = availableHeight / GAME_CONFIG.GRID.ROWS;
      
      // 选择较小的值作为方块大小，确保完整显示
      const blockSize = Math.floor(Math.min(blockSizeFromWidth, blockSizeFromHeight));
      
      // 计算画布实际尺寸
      const canvasWidth = screenWidth;
      const canvasHeight = availableHeight;
      
      // 计算游戏区域的偏移量，使其居中
      const offsetX = (screenWidth - (blockSize * GAME_CONFIG.GRID.COLS)) / 2;
      const offsetY = (availableHeight - (blockSize * GAME_CONFIG.GRID.ROWS)) / 2;
      
      // 保存尺寸信息
      this.gameState.blockSize = blockSize;
      this.gameState.canvasWidth = canvasWidth;
      this.gameState.canvasHeight = canvasHeight;
      this.gameState.offsetX = offsetX;
      this.gameState.offsetY = offsetY;

      // 获取画布上下文
      const query = wx.createSelectorQuery();
      await new Promise(resolve => {
        query.select('#gameCanvas')
          .fields({ node: true, size: true })
          .exec((res) => {
            const canvas = res[0].node;
            const ctx = canvas.getContext('2d');
            
            // 设置画布尺寸
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            
            // 设置画布缩放以支持高清屏
            const dpr = systemInfo.pixelRatio;
            canvas.width = canvasWidth * dpr;
            canvas.height = canvasHeight * dpr;
            ctx.scale(dpr, dpr);
            
            this.gameState.ctx = ctx;
            resolve();
          });
      });
    } catch (error) {
      console.error('初始化画布失败:', error);
    }
  },

  // 渲染游戏画布
  renderGame() {
    const { ctx, blockSize, canvasWidth, canvasHeight, offsetX, offsetY } = this.gameState;
    const { board, currentBlock } = this.data;
    
    if (!ctx) return;

    // 清空画布
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // 设置背景色
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // 绘制背景网格
    ctx.strokeStyle = '#e5e5e5';
    ctx.lineWidth = 1;
    for (let row = 0; row < GAME_CONFIG.GRID.ROWS; row++) {
      for (let col = 0; col < GAME_CONFIG.GRID.COLS; col++) {
        ctx.strokeRect(
          offsetX + col * blockSize, 
          offsetY + row * blockSize, 
          blockSize, 
          blockSize
        );
      }
    }

    // 绘制已固定的方块
    for (let row = 0; row < GAME_CONFIG.GRID.ROWS; row++) {
      for (let col = 0; col < GAME_CONFIG.GRID.COLS; col++) {
        if (board[row][col]) {
          this.drawBlock(
            ctx, 
            offsetX + col * blockSize, 
            offsetY + row * blockSize, 
            blockSize, 
            board[row][col]
          );
        }
      }
    }

    // 绘制当前方块
    if (currentBlock) {
      const { shape, x, y, type } = currentBlock;
      
      // 绘制阴影
      const shadowY = this.getDropPosition();
      if (shadowY > y) {
        ctx.globalAlpha = 0.2;
        for (let row = 0; row < shape.length; row++) {
          for (let col = 0; col < shape[row].length; col++) {
            if (shape[row][col]) {
              this.drawBlock(
                ctx, 
                offsetX + (x + col) * blockSize, 
                offsetY + (shadowY + row) * blockSize, 
                blockSize, 
                type
              );
            }
          }
        }
        ctx.globalAlpha = 1;
      }

      // 绘制当前方块
      for (let row = 0; row < shape.length; row++) {
        for (let col = 0; col < shape[row].length; col++) {
          if (shape[row][col]) {
            this.drawBlock(
              ctx, 
              offsetX + (x + col) * blockSize, 
              offsetY + (y + row) * blockSize, 
              blockSize, 
              type
            );
          }
        }
      }
    }
  },

  // 绘制单个方块
  drawBlock(ctx, x, y, size, type) {
    const colors = {
      I: '#00f0f0', // 青色
      O: '#f0f000', // 黄色
      T: '#a000f0', // 紫色
      L: '#f0a000', // 橙色
      J: '#0000f0', // 蓝色
      S: '#00f000', // 绿色
      Z: '#f00000'  // 红色
    };

    const color = colors[type];
    const padding = 2;

    // 绘制方块主体（带渐变）
    const gradient = ctx.createLinearGradient(x, y, x, y + size);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, this.darkenColor(color, 20));
    ctx.fillStyle = gradient;
    ctx.fillRect(x + padding, y + padding, size - padding * 2, size - padding * 2);

    // 绘制高光效果
    const highlightGradient = ctx.createLinearGradient(x, y, x, y + size * 0.5);
    highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
    highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = highlightGradient;
    ctx.fillRect(x + padding, y + padding, size - padding * 2, size - padding * 2);

    // 添加深色边框
    ctx.strokeStyle = this.darkenColor(color, 30);
    ctx.lineWidth = 1;
    ctx.strokeRect(x + padding, y + padding, size - padding * 2, size - padding * 2);
  },

  // 辅助函数：调暗颜色
  darkenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max((num >> 16) - amt, 0);
    const G = Math.max((num >> 8 & 0x00FF) - amt, 0);
    const B = Math.max((num & 0x0000FF) - amt, 0);
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  },

  // 初始化游戏
  initGame() {
    // 初始化游戏状态
    const board = Array(GAME_CONFIG.GRID.ROWS).fill().map(() => Array(GAME_CONFIG.GRID.COLS).fill(0));
    const currentBlock = GameHelper.generateBlock();
    const nextBlock = GameHelper.generateBlock();

    this.setData({
      board,
      currentBlock,
      nextBlock,
      isGameOver: false,
      isPaused: false,
      score: 0,
      level: 1,
      lines: 0
    });

    this.gameState.gameStartTime = Date.now();
    this.gameState.lastDropTime = Date.now();
    this.gameState.dropInterval = 800;

    // 开始游戏循环
    this.startGameLoop();
  },

  // 移动方块
  moveBlock(direction) {
    let offsetX = 0;
    let offsetY = 0;

    switch (direction) {
      case 'left':
        offsetX = -1;
        break;
      case 'right':
        offsetX = 1;
        break;
      case 'down':
        offsetY = 1;
        break;
    }

    const { board, currentBlock } = this.data;
    if (!GameHelper.checkCollision(board, currentBlock, offsetX, offsetY)) {
      const newBlock = {
        ...currentBlock,
        x: currentBlock.x + offsetX,
        y: currentBlock.y + offsetY
      };
      this.setData({ currentBlock: newBlock });
      return true;
    }
    return false;
  },

  // 锁定方块并处理消行
  lockBlock() {
    const { board, currentBlock, nextBlock, score, level, lines } = this.data;
    const { shape, x, y, type } = currentBlock;

    // 将当前方块添加到游戏板
    const newBoard = board.map(row => [...row]);
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col] && y + row >= 0) {
          newBoard[y + row][x + col] = type;
        }
      }
    }

    // 检查并清除完整的行
    let clearedLines = 0;
    const finalBoard = [];
    for (let row = GAME_CONFIG.GRID.ROWS - 1; row >= 0; row--) {
      if (newBoard[row].every(cell => cell !== 0)) {
        clearedLines++;
      } else {
        finalBoard.unshift(newBoard[row]);
      }
    }

    // 添加新的空行
    while (finalBoard.length < GAME_CONFIG.GRID.ROWS) {
      finalBoard.unshift(Array(GAME_CONFIG.GRID.COLS).fill(0));
    }

    // 计算得分
    let addScore = 0;
    switch (clearedLines) {
      case 1: addScore = 100 * level; break;
      case 2: addScore = 300 * level; break;
      case 3: addScore = 500 * level; break;
      case 4: addScore = 800 * level; break;
    }

    // 更新总行数和等级
    const newLines = lines + clearedLines;
    const newLevel = Math.floor(newLines / 10) + 1;
    
    // 生成新方块
    const newCurrentBlock = nextBlock;
    const newNextBlock = GameHelper.generateBlock();

    // 检查游戏结束
    if (GameHelper.checkCollision(finalBoard, newCurrentBlock)) {
      this.setData({ 
        isGameOver: true,
        board: finalBoard,
        score: score + addScore,
        lines: newLines,
        level: newLevel
      });
      this.showGameOverModal();
      return;
    }

    // 更新游戏状态
    this.setData({
      board: finalBoard,
      currentBlock: newCurrentBlock,
      nextBlock: newNextBlock,
      score: score + addScore,
      lines: newLines,
      level: newLevel
    });

    // 更新下落速度
    this.gameState.dropInterval = Math.max(100, 800 - (newLevel - 1) * 50);
  },

  // 旋转方块
  onRotate() {
    const { board, currentBlock } = this.data;
    const rotatedBlock = GameHelper.rotateBlock(currentBlock);
    if (!GameHelper.checkCollision(board, rotatedBlock)) {
      this.setData({ currentBlock: rotatedBlock });
    }
  },

  // 移动相关事件处理
  onMoveLeft() {
    if (!this.data.isPaused && !this.data.isGameOver) {
      this.moveBlock('left');
    }
  },

  onMoveRight() {
    if (!this.data.isPaused && !this.data.isGameOver) {
      this.moveBlock('right');
    }
  },

  onMoveDown() {
    if (!this.data.isPaused && !this.data.isGameOver) {
      this.moveBlock('down');
    }
  },

  onHardDrop() {
    if (!this.data.isPaused && !this.data.isGameOver) {
      this.hardDrop();
    }
  },

  // 获取方块的最终下落位置
  getDropPosition() {
    const { board, currentBlock } = this.data;
    let dropY = currentBlock.y;
    
    while (!GameHelper.checkCollision(board, { ...currentBlock, y: dropY + 1 })) {
      dropY++;
    }
    
    return dropY;
  },

  // 触摸控制相关变量
  touchState: {
    startX: 0,
    startY: 0,
    lastMoveTime: 0,
    moveThreshold: 30,
    moveInterval: 100,
    isSwiping: false
  },

  // 触摸开始
  onTouchStart(e) {
    const touch = e.touches[0];
    this.touchState.startX = touch.clientX;
    this.touchState.startY = touch.clientY;
    this.touchState.lastMoveTime = Date.now();
    this.touchState.isSwiping = false;
  },

  // 触摸移动
  onTouchMove(e) {
    const touch = e.touches[0];
    const deltaX = touch.clientX - this.touchState.startX;
    const deltaY = touch.clientY - this.touchState.startY;
    const now = Date.now();

    // 检查是否达到移动间隔
    if (now - this.touchState.lastMoveTime < this.touchState.moveInterval) {
      return;
    }

    // 水平移动
    if (Math.abs(deltaX) > this.touchState.moveThreshold) {
      if (deltaX > 0) {
        this.onMoveRight();
      } else {
        this.onMoveLeft();
      }
      this.touchState.startX = touch.clientX;
      this.touchState.lastMoveTime = now;
      this.touchState.isSwiping = true;
    }

    // 垂直移动（下滑加速下落）
    if (deltaY > this.touchState.moveThreshold) {
      this.onMoveDown();
      this.touchState.startY = touch.clientY;
      this.touchState.lastMoveTime = now;
      this.touchState.isSwiping = true;
    }
  },

  // 触摸结束
  onTouchEnd(e) {
    if (this.touchState.isSwiping) {
      return; // 如果是滑动操作，不触发点击
    }

    // 获取点击位置
    const touch = e.changedTouches[0];
    const deltaY = touch.clientY - this.touchState.startY;
    const deltaTime = Date.now() - this.touchState.lastMoveTime;

    // 快速下滑触发硬降
    if (deltaY > this.touchState.moveThreshold && deltaTime < 200) {
      this.hardDrop();
    }
  },

  // 硬降（直接下落到底部）
  hardDrop() {
    const { board, currentBlock, score } = this.data;
    let dropDistance = 0;
    
    // 计算可以下落的距离
    while (!GameHelper.checkCollision(board, currentBlock, 0, dropDistance + 1)) {
      dropDistance++;
    }

    if (dropDistance > 0) {
      // 更新方块位置
      const newBlock = {
        ...currentBlock,
        y: currentBlock.y + dropDistance
      };
      
      // 更新分数（每下落一格得2分）
      this.setData({ 
        currentBlock: newBlock,
        score: score + dropDistance * 2
      });
    }

    // 锁定方块
    this.lockBlock();
    this.gameState.lastDropTime = Date.now();
  },

  // 显示游戏结束弹窗
  showGameOverModal() {
    const { score, level, lines } = this.data;
    wx.showModal({
      title: '游戏结束',
      content: `得分：${score}\n等级：${level}\n消除行数：${lines}`,
      confirmText: '再来一局',
      cancelText: '返回',
      success: (res) => {
        if (res.confirm) {
          this.onRestart();
        } else {
          // 可以添加返回逻辑
        }
      }
    });
  }
}); 