function FS(x1, y1, x2, y2, xp, yp) {
    // 计算直线AB的向量
    const dx = x2 - x1;
    const dy = y2 - y1;
    const LL =  dx ** 2 + dy ** 2;
    const t = ((xp - x1) * dx + (yp - y1) * dy) / LL;
    // 投影点坐标
    const xp0 = x1 + t * dx; 
    const yp0 = y1 + t * dy;
    // 计算里程（沿AB方向）
    const K = t * Math.sqrt(LL);
    // 计算偏距（带方向左负右正）叉积判断方向
    const ds = (dx * ( yp - yp0) - dy * (xp - xp0)) > 0 ? 1 : -1;
    const D = ds * Math.sqrt((xp - xp0) ** 2 + (yp - yp0) ** 2);
    return [K, D];
}
function ZS(x1, y1, x2, y2, K, D) {
    // 计算直线AB的方向角
    const dx = x2 - x1;
    const dy = y2 - y1;
    const fwj = Math.atan2(dy, dx);
    // 计算投影点坐标
    const t = K / Math.sqrt(dx ** 2 + dy ** 2);
    const xp0 = x1 + t * dx;
    const yp0 = y1 + t * dy;
    // 沿垂直方向偏移
    const xp = xp0 - D * Math.sin(fwj);
    const yp = yp0 + D * Math.cos(fwj);
    return [xp, yp];
}
// 示例数据
const A = { x: 0, y: 0 }; // 起点
const B = { x: 1, y: 1 }; // 终点
// 正算
const [K, D] = FS(A.x, A.y, B.x, B.y, 0,2);
console.log('里程K='+K.toFixed(3)+',偏距D='+D.toFixed(3));
// 反算
const [x, y] = ZS(A.x, A.y, B.x, B.y, K, D);
console.log('坐标X='+x.toFixed(3)+',坐标Y='+y.toFixed(3));