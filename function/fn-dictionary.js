/**
 * Created by WebStorm.
 * Project: jsdsa
 * Author: Administrator
 * Date: 2019/1/21 0021
 * Time: 15:44
 */

// 获取随机数 (lower <= range < upper)
function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
}

