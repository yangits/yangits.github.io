export const GAME_CONFIG = {
  // 游戏区域配置
  GRID: {
    COLS: 10,
    ROWS: 20,
    SIZE: 30,  // 格子大小
    PADDING: 1 // 格子间距
  },

  // 方块配置
  BLOCKS: {
    I: { color: '#00f0f0', shape: [[1,1,1,1]], center: [0.5, 0.5] },
    O: { color: '#f0f000', shape: [[1,1],[1,1]], center: [0.5, 0.5] },
    T: { color: '#a000f0', shape: [[0,1,0],[1,1,1]], center: [1, 1] },
    L: { color: '#f0a000', shape: [[0,0,1],[1,1,1]], center: [1, 1] },
    J: { color: '#0000f0', shape: [[1,0,0],[1,1,1]], center: [1, 1] },
    S: { color: '#00f000', shape: [[0,1,1],[1,1,0]], center: [1, 1] },
    Z: { color: '#f00000', shape: [[1,1,0],[0,1,1]], center: [1, 1] }
  },

  // 游戏速度配置
  SPEED: {
    INITIAL: 800,    // 初始下落速度(ms)
    DECREASE: 50,    // 每级速度减少量
    MIN: 100,        // 最小下落速度
    SOFT_DROP: 50,   // 软降速度
    LOCK_DELAY: 500  // 锁定延迟
  },

  // 分数配置
  SCORE: {
    SINGLE: 100,        // 单行得分
    DOUBLE: 300,        // 双行得分
    TRIPLE: 500,        // 三行得分
    TETRIS: 800,        // 四行得分
    SOFT_DROP: 1,       // 软降得分
    HARD_DROP: 2,       // 硬降得分
    T_SPIN: 400,        // T-Spin得分
    T_SPIN_SINGLE: 800, // T-Spin消一行
    T_SPIN_DOUBLE: 1200,// T-Spin消两行
    T_SPIN_TRIPLE: 1600,// T-Spin消三行
    PERFECT_CLEAR: 3000,// 完美清除
    COMBO_BONUS: 50,    // 连击加成
    BACK_TO_BACK: 1.5   // Back-to-Back加成
  },

  // 游戏模式配置
  MODES: {
    classic: {
      name: '经典模式',
      desc: '无尽模式，速度逐渐加快'
    },
    sprint: {
      name: '冲刺模式',
      desc: '20行最快时间',
      targetLines: 20
    },
    marathon: {
      name: '马拉松模式',
      desc: '坚持到150行',
      targetLines: 150
    },
    timeAttack: {
      name: '限时模式',
      desc: '2分钟内获得最高分',
      duration: 120 // 秒
    }
  },

  // 动画配置
  ANIMATION: {
    DURATION: {
      MOVE: 100,
      ROTATE: 200,
      DROP: 500,
      CLEAR: 500,
      LEVEL_UP: 2000
    },
    EASING: {
      MOVE: 'ease-out',
      ROTATE: 'cubic-bezier(0.4, 0, 0.2, 1)',
      DROP: 'cubic-bezier(0.4, 0, 1, 1)'
    }
  },

  // 默认设置
  DEFAULT_SETTINGS: {
    showGrid: true,
    showGhost: true,
    showNext: true,
    showHold: true,
    sensitivity: 50,
    vibration: true,
    bgmVolume: 0.5,
    sfxVolume: 0.8
  }
};

// 导出BLOCK_TYPES作为BLOCKS的别名
export const BLOCK_TYPES = GAME_CONFIG.BLOCKS;

// 导出其他配置... 