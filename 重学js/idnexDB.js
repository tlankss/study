/**
 * cookie： 某些网站为了辨别用户身份而存储在用户本地终端，浏览器在特定情况下会带上cookie发送请求
 * 
 * cookie主要分为内存cookie 和硬盘cookie
 *  内存cookie由浏览器维护，保存在内存中，浏览器关闭的时cookie也会消失，其时间短暂
 *  硬盘cookie保存在硬盘中，有一个过期时间，用户手动清理或者过期时间已到才会清理
 * 它们主要的区别是 是否设置过期时间max-age，默认的是内存cookie，过期时间为0或负数会自动删除
 * 
 * cookie的作用域： 允许cookie发送给哪些url
 *  Domain：指定哪些主机可以接受cookie，不包括子域名，默认是不指定，是origin，不包括子域名
 *  Path: 指定哪些路径可以接收cookie
 */
// 获取cookie
document.cookie
// 设置cookie
document.cookie = 'name=age;max-age=10'