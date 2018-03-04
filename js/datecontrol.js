var oH = document.getElementById('txt');
var st = document.getElementById('st');
var end = document.getElementById('end');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var DateControl = (function () {
    function DateControl(_a) {
        var datel = _a[0], dater = _a[1], btnl = _a[2], btnr = _a[3], btnw = _a[4], btnm = _a[5], btny = _a[6];
        this.showClass = 'week'; //展示的日期类型 0周 1月 2年
        this.dateNum = new Array(2); //日期
        this.now = new Date(); //当前日期
        this.nowDayOfWeek = this.now.getDay(); //今天本周的第几天
        this.nowDay = this.now.getDate(); //当前日
        this.nowMonth = this.now.getMonth(); //当前月
        this.nowYear = this.now.getFullYear() < 2000 ? (this.now.getFullYear() + 1900) : this.now.getFullYear(); //当前年
        // console.log(datel);
        this.dateLeft = document.getElementById(datel);
        this.dateRight = document.getElementById(dater);
        this.btnLeft = document.getElementById(btnl);
        this.btnRight = document.getElementById(btnr);
        this.btnWeek = document.getElementById(btnw);
        this.btnMonth = document.getElementById(btnm);
        this.btnYear = document.getElementById(btny);
        this.init();
    }
    DateControl.prototype.init = function () {
        var self = this;
        var _a = [self.getDates('stW'), self.getDates('edW'), self.getDates('stM'), self.getDates('edM'), self.getDates('stY'), self.getDates('edY')], nowStWeek = _a[0], nowEdWeek = _a[1], nowStMonth = _a[2], nowEdMonth = _a[3], nowStYear = _a[4], nowEdYear = _a[5];
        window.onload = function () {
            self.applyDate(nowStYear, nowEdYear);
            // self.dateLeft.innerHTML = nowStYear;
            // self.dateRight.innerHTML = nowEdYear;
        };
        self.dateLeft.onclick = function () {
            // self.control();
            console.log(self.getDates('stW'));
            // alert(0)
            console.log(self.getDates('edW'));
        };
        self.btnWeek.onclick = function () {
            self.applyDate(nowStWeek, nowEdWeek);
            self.showClass = 'week';
        };
        self.btnMonth.onclick = function () {
            // console.log(self.getDates('edM'),nowEdMonth)
            self.applyDate(nowStMonth, self.getDates('edM'));
            self.showClass = 'month'; //设置显示类型为月
        };
        self.btnYear.onclick = function () {
            self.applyDate(nowStYear, nowEdYear);
            self.showClass = 'year'; //设置显示类型为年
        };
        self.btnLeft.onmouseup = function () {
            // console.log(self.dateNum)
            self.control(this, 'back');
        };
        self.btnRight.onmouseup = function () {
            self.control(this, 'next');
        };
        // console.log(1,this.dateLeft);
    };
    DateControl.prototype.applyDate = function (leftdate, rightdate) {
        this.dateNum[0] = leftdate;
        this.dateNum[1] = rightdate;
        this.dateLeft.innerHTML = leftdate;
        this.dateRight.innerHTML = rightdate;
    };
    DateControl.prototype.control = function (obj, category) {
        var self = this;
        // console.log(self.nowDay)
        if (category === 'back') {
            var showdate = self.dateNum[0].split('-');
        }
        else {
            var showdate = self.dateNum[1].split('-');
        }
        var showYear = showdate[0], showMonth = (showdate[1] - 1), showDay = showdate[2];
        var show = new Date(showYear, showMonth, showDay); //当前展示的时间戳
        // console.info(now)
        /*改*/
        // switch (self.showClass) {
        //     case "week":
        //         self.applyDate(self.getDates('stPrevW'),self.getDates('edPrevW'));
        //         break;
        //     case "month":
        //         self.applyDate(formatDate(lastMonthDate),showYear + '-' + nowMonth + '-' + getMonthDays(nowMonth - 1));
        //         break;
        //     case "year":
        //         self.applyDate(self.getDates('stPrevY'),self.getDates('edPrevY'));
        //         break;
        //     default:
        //         // statements_def
        //         break;
        // }
        if (category === 'back') {
            switch (self.showClass) {
                case "week":
                    self.applyDate(self.getDates('stPrevW'), self.getDates('edPrevW'));
                    break;
                case "month":
                    self.applyDate(formatDate(lastMonthDate), showYear + '-' + nowMonth + '-' + getMonthDays(nowMonth - 1));
                    break;
                case "year":
                    self.applyDate(self.getDates('stPrevY'), self.getDates('edPrevY'));
                    break;
                default:
                    // statements_def
                    break;
            }
        }
        else {
            switch (self.showClass) {
                case "week":
                    self.applyDate(getDates('stNextW'), self.getDates('edNextW'));
                    break;
                case "month":
                    self.applyDate(formatDate(lastMonthDate), showYear + '-' + nowMonth + '-' + getMonthDays(nowMonth - 1));
                    break;
                case "year":
                    self.applyDate(self.getDates('stNextY'), self.getDates('edNextY'));
                    break;
                default:
                    // statements_def
                    break;
            }
        }
        self.nowDayOfWeek = show.getDay(),
            self.nowDay = show.getDate(),
            self.nowMonth = show.getMonth(),
            self.nowYear = show.getFullYear() < 2000 ? (show.getFullYear() + 1900) : show.getFullYear(); //当前年
        console.log(self.nowYear);
        self.lastMonthDate = new Date(showYear, showMonth, showDay); //上月日期
        self.lastMonthDate.setDate(1);
        self.lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
        self.nextMonthDate = new Date(showYear, showMonth, showDay); //下月日期
        self.nextMonthDate.setDate(1);
        self.nextMonthDate.setMonth(self.nextMonthDate.getMonth() + 1);
        if (category === 'back') {
            var endMonth = new Date(showYear, (nowMonth - 1), getMonthDays(nowMonth + 1));
        }
        else {
            var endMonth = new Date(showYear, (nowMonth + 1), getMonthDays(nowMonth + 1));
        }
        console.info(self.showClass);
        // self.applyDate(self.getDates('stPrevW'),self.getDates('edPrevW'));
        /*
        * 方法需要对象的数据，上面的数据需要this指定
        * */
        return;
        var onOff = obj.getAttribute('id').toLowerCase();
        var arrDate = onOff == 'prev' ? st.innerHTML.split('-') : end.innerHTML.split('-');
        now = new Date(arrDate[0], (arrDate[1] - 1), arrDate[2]);
        nowDayOfWeek = now.getDay(); //今天本周的第几天
        nowDay = now.getDate(); //当前日
        nowMonth = now.getMonth(); //当前月
        nowYear = now.getYear(); //当前年
        nowYear += (nowYear < 2000) ? 1900 : 0;
        lastMonthDate = new Date(arrDate[0], (arrDate[1] - 1), arrDate[2]); //上月日期
        lastMonthDate.setDate(1);
        lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
        nextMonthDate = new Date(arrDate[0], (arrDate[1] - 1), arrDate[2]); //下月日期
        nextMonthDate.setDate(1);
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
        var endMonth = onOff == 'prev' ? new Date(arrDate[0], (nowMonth - 1), getMonthDays(nowMonth + 1)) : new Date(arrDate[0], (nowMonth + 1), getMonthDays(nowMonth + 1));
        for (var i = 0; i < $('.change_timelength>a').length; i++) {
            if ($('.change_timelength>a').eq(i).attr('class') == 'active') {
                if (i == 0) {
                    st.innerHTML = onOff == 'prev' ? getDates('stPrevW') : getDates('stNextW');
                    end.innerHTML = onOff == 'prev' ? getDates('edPrevW') : getDates('edNextW');
                    // week();//    ajax
                    ajaxApply(st.innerHTML, end.innerHTML, 'week', (i + 1));
                    return;
                }
                if (i == 1) {
                    if (nowMonth == 0) {
                        nowMonth = 12;
                        arrDate[0]--;
                    }
                    st.innerHTML = onOff == 'prev' ? formatDate(lastMonthDate) : formatDate(nextMonthDate);
                    end.innerHTML = onOff == 'prev' ? arrDate[0] + '-' + nowMonth + '-' + getMonthDays(nowMonth - 1) : formatDate(endMonth);
                    // month();//     ajax
                    ajaxApply(st.innerHTML, end.innerHTML, 'month', (i + 1));
                    return;
                }
                if (i == 2) {
                    st.innerHTML = onOff == 'prev' ? getDates('stPrevY') : getDates('stNextY');
                    end.innerHTML = onOff == 'prev' ? getDates('edPrevY') : getDates('edNextY');
                    ajaxApply(st.innerHTML, end.innerHTML, 'year', (i + 1));
                    // year();//       ajax
                    return;
                }
            }
        }
    };
    DateControl.prototype.getDates = function (D) {
        var json = {
            'stW': new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek + 1),
            'edW': new Date(this.nowYear, this.nowMonth, this.nowDay + (7 - this.nowDayOfWeek)),
            'stPrevW': new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek - 6),
            'edPrevW': new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek),
            'stNextW': new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek + 1),
            'edNextW': new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek + 7),
            'stM': new Date(this.nowYear, this.nowMonth, 1),
            'edM': new Date(this.nowYear, this.nowMonth, getMonthDays(this.nowMonth)),
            'stY': new Date(this.nowYear, 0, 1),
            'edY': new Date(this.nowYear, 11, 31),
            'stPrevY': new Date(this.nowYear - 1, 0, 1),
            'edPrevY': new Date(this.nowYear - 1, 11, 31),
            'stNextY': new Date(this.nowYear + 1, 0, 1),
            'edNextY': new Date(this.nowYear + 1, 11, 31)
        };
        return this.formatDate(json[D]);
    };
    DateControl.prototype.formatDate = function (date) {
        var myyear = date.getFullYear();
        var mymonth = date.getMonth() + 1;
        var myweekday = date.getDate();
        if (mymonth < 10) {
            mymonth = "0" + mymonth;
        }
        if (myweekday < 10) {
            myweekday = "0" + myweekday;
        }
        return (myyear + "-" + mymonth + "-" + myweekday);
    };
    return DateControl;
}());
var oo = new DateControl(['st', 'end', 'prev', 'next', 'week', 'month', 'year']);
// oo.fn()
var now = new Date(); //当前日期
var nowDayOfWeek = now.getDay(); //今天本周的第几天
var nowDay = now.getDate(); //当前日
var nowMonth = now.getMonth(); //当前月
var nowYear = now.getFullYear() < 2000 ? (now.getFullYear() + 1900) : now.getFullYear(); //当前年
// nowYear += (nowYear < 2000) ? 1900 : 0; //
var lastMonthDate = new Date(); //上月日期
lastMonthDate.setDate(1);
lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
st.innerHTML = getDates('stW');
end.innerHTML = getDates('edW');
var nowStWeek = getDates('stW'), nowEdWeek = getDates('edW'), nowStMonth = getDates('stM'), nowEdMonth = getDates('edM'), nowStYear = getDates('stY'), nowEdYear = getDates('edY');
$('.box>input').each(function (index, el) {
    $(this).mousedown(function (event) {
        $('.box>input').attr('class', '');
        $(this).addClass('active');
        /*if (index == 0) {   //切换为周
            st.innerHTML = nowStWeek;
            end.innerHTML = nowEdWeek;
        }
        if (index == 1) {  //切换为月
            st.innerHTML = nowStMonth;
            end.innerHTML = nowEdMonth;
        }
        if (index == 2) {  //切换为年
            st.innerHTML = nowStYear;
            end.innerHTML = nowEdYear;
        }*/
        disable();
    });
});
prev.onclick = function () {
    runIt(this);
    disable();
};
next.onclick = function () {
    runIt(this);
    disable();
};
disable();
function disable() {
    var nowReal = new Date();
    var thisDate = end.innerHTML.split('-');
    var thisnow = new Date(thisDate[0], (thisDate[1] - 1), thisDate[2]);
    if (thisnow >= nowReal) {
        next.disabled = true;
    }
    else {
        next.disabled = false;
    }
}
function runIt(obj) {
    var onOff = obj.getAttribute('id').toLowerCase();
    var arrDate = onOff == 'prev' ? st.innerHTML.split('-') : end.innerHTML.split('-');
    now = new Date(arrDate[0], (arrDate[1] - 1), arrDate[2]);
    nowDayOfWeek = now.getDay(); //今天本周的第几天
    nowDay = now.getDate(); //当前日
    nowMonth = now.getMonth(); //当前月
    nowYear = now.getYear(); //当前年
    nowYear += (nowYear < 2000) ? 1900 : 0;
    lastMonthDate = new Date(arrDate[0], (arrDate[1] - 1), arrDate[2]); //上月日期
    lastMonthDate.setDate(1);
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
    nextMonthDate = new Date(arrDate[0], (arrDate[1] - 1), arrDate[2]); //下月日期
    nextMonthDate.setDate(1);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    var endMonth = onOff == 'prev' ? new Date(arrDate[0], (nowMonth - 1), getMonthDays(nowMonth + 1)) : new Date(arrDate[0], (nowMonth + 1), getMonthDays(nowMonth + 1));
    for (var i = 0; i < $('.box>input').length; i++) {
        if ($('.box>input').eq(i).attr('class') == 'active') {
            if (i == 0) {
                st.innerHTML = onOff == 'prev' ? getDates('stPrevW') : getDates('stNextW');
                end.innerHTML = onOff == 'prev' ? getDates('edPrevW') : getDates('edNextW');
                return;
            }
            if (i == 1) {
                st.innerHTML = onOff == 'prev' ? formatDate(lastMonthDate) : formatDate(nextMonthDate);
                end.innerHTML = onOff == 'prev' ? formatDate(endMonth) : formatDate(endMonth);
                return;
            }
            if (i == 2) {
                st.innerHTML = onOff == 'prev' ? getDates('stPrevY') : getDates('stNextY');
                end.innerHTML = onOff == 'prev' ? getDates('edPrevY') : getDates('edNextY');
                return;
            }
        }
    }
}
//格式化日期：yyyy-MM-dd
function formatDate(date) {
    var myyear = date.getFullYear();
    var mymonth = date.getMonth() + 1;
    var myweekday = date.getDate();
    if (mymonth < 10) {
        mymonth = "0" + mymonth;
    }
    if (myweekday < 10) {
        myweekday = "0" + myweekday;
    }
    return (myyear + "-" + mymonth + "-" + myweekday);
}
//获得某月的天数
function getMonthDays(myMonth) {
    var monthStartDate = new Date(nowYear, myMonth, 1);
    var monthEndDate = new Date(nowYear, myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
}
// 获取各种时间
function getDates(D) {
    var json = {
        'stW': new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 1),
        'edW': new Date(nowYear, nowMonth, nowDay + (7 - nowDayOfWeek)),
        'stPrevW': new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 6),
        'edPrevW': new Date(nowYear, nowMonth, nowDay - nowDayOfWeek),
        'stNextW': new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 1),
        'edNextW': new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 7),
        'stM': new Date(nowYear, nowMonth, 1),
        'edM': new Date(nowYear, nowMonth, getMonthDays(nowMonth)),
        'stY': new Date(nowYear, 0, 1),
        'edY': new Date(nowYear, 11, 31),
        'stPrevY': new Date(nowYear - 1, 0, 1),
        'edPrevY': new Date(nowYear - 1, 11, 31),
        'stNextY': new Date(nowYear + 1, 0, 1),
        'edNextY': new Date(nowYear + 1, 11, 31)
    };
    return formatDate(json[D]);
}
