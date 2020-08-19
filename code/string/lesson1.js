/*
 * @Descripttion:
 * @Author: Jason
 * @LastEditTime: 2020-07-05 17:06:28
 */
// 557 反转字符串中的单词 III
// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
/** 
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc" 
*/

// 方法一
// export default (oldStr) => {
//     // 1.字符串按空格进行分割，保存数组，数组的先后顺序就是单词的顺序
//     // 2.对数组进行遍历，然后每个元素进行反转
//     return oldStr.split(' ').map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

// 方法二

// export default (oldStr) => {
//     return oldStr.split(/\s/g).map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

// 方法三

export default (oldStr) => {
    return oldStr.match(/[\S]+/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}