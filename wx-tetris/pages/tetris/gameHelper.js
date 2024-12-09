import { GAME_CONFIG, BLOCK_TYPES } from './gameConfig';

class GameHelper {
  static blockBag = [];

  // 生成新方块
  static generateBlock() {
    // 如果方块袋为空，重新填充
    if (this.blockBag.length === 0) {
      this.blockBag = Object.keys(BLOCK_TYPES);
      // Fisher-Yates 洗牌算法
      for (let i = this.blockBag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.blockBag[i], this.blockBag[j]] = [this.blockBag[j], this.blockBag[i]];
      }
    }

    // 从方块袋中取出一个方块类型
    const type = this.blockBag.pop();
    const blockData = BLOCK_TYPES[type];
    
    return {
      type,
      shape: blockData.shape.map(row => [...row]),
      x: Math.floor((GAME_CONFIG.GRID.COLS - blockData.shape[0].length) / 2),
      y: 0
    };
  }

  // 检查碰撞
  static checkCollision(board, block, offsetX = 0, offsetY = 0) {
    const { shape, x, y } = block;
    
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          const newX = x + col + offsetX;
          const newY = y + row + offsetY;
          
          if (newX < 0 || newX >= GAME_CONFIG.GRID.COLS || newY >= GAME_CONFIG.GRID.ROWS) {
            return true;
          }
          
          if (newY >= 0 && board[newY][newX]) {
            return true;
          }
        }
      }
    }
    return false;
  }

  // 旋转方块
  static rotateBlock(block) {
    const { shape } = block;
    const newShape = [];
    
    for (let i = 0; i < shape[0].length; i++) {
      newShape[i] = [];
      for (let j = 0; j < shape.length; j++) {
        newShape[i][j] = shape[shape.length - 1 - j][i];
      }
    }
    
    return {
      ...block,
      shape: newShape
    };
  }

  // 清除完整的行
  static clearLines(board) {
    let linesCleared = 0;
    const newBoard = board.filter(row => {
      if (row.every(cell => cell !== 0)) {
        linesCleared++;
        return false;
      }
      return true;
    });
    
    while (newBoard.length < GAME_CONFIG.GRID.ROWS) {
      newBoard.unshift(Array(GAME_CONFIG.GRID.COLS).fill(0));
    }
    
    return {
      board: newBoard,
      linesCleared
    };
  }
}

export default GameHelper; 