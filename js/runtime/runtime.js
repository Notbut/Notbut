var now = new Date;
function createtime() {
    var grt = new Date('03/03/2022 00:00:00');
    now.setTime(now.getTime() + 250);
    var days = (now - grt) / 1e3 / 60 / 60 / 24,
        dnum = Math.floor(days),
        hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
        hnum = Math.floor(hours);
    1 == String(hnum)
        .length && (hnum = '0' + hnum);
    var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
        mnum = Math.floor(minutes);
    1 == String(mnum)
        .length && (mnum = '0' + mnum);
    var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
        snum = Math.round(seconds);
    1 == String(snum)
        .length && (snum = '0' + snum);
    let currentTimeHtml = '';
    currentTimeHtml =
      hnum < 18 && hnum >= 9
        ? `< img class='boardsign' src='https://img.shields.io/badge/%E7%96%BC%E4%BA%8C%E6%9C%A8-%E4%B8%8A%E8%AF%BE%E6%91%B8%E9%B1%BC%E4%B8%AD~-blue.svg' 
        title='距离月入25k也就还差一个大佬带我~' >< span class='textTip' > < br > 本站居然运行了~ $ {
        dnum
    }
    天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span > < i class = 'fas fa-heartbeat' style = 'color:red' ></i>` : `<img class='boardsign' src='https://img.shields.io/badge/%E7%96%BC%E4%BA%8C%E6%9C%A8-%E4%B8%8B%E8%AF%BE%E4%BA%86~-blue.svg' title='下课了就该开开心心的睡觉，嘿嘿~'><span class='textTip'> <br> 本站居然运行了 ${dnum} 天</span><span
    id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa - heartbeat' style='color : red'></i>`,
        document.getElementById("workboard") && (document.getElementById("workboard")
            .innerHTML = currentTimeHtml)
}
setInterval(() => {
    createtime()
}, 250);