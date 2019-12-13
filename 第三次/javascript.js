//动态获取系统时间
let displayTime;
let title = document.getElementById('title');
setInterval(function () {
    let date = new Date();
    displayTime = date.toLocaleString('zh', { hour12: true });
    title.innerHTML = displayTime;
}, 1000);
//计时显示部分
let hour = 0;
let minute = 0;
let second = 0;
let displayTimeText;
let flag;//用于判断setInterval是否为null
let time = document.getElementById('date');
function startClock() {//计时功能
    flag = setInterval(function () {
        if (second === 60) {
            minute++;
            second = 0;
        }
        if (minute === 60) {
            hour++;
            minute = 0;
        }
        second++;
        displayTimeText = hour + 'H ' + minute + 'M ' + second + 'S ';
        time.innerHTML = displayTimeText;

    }, 1000);
}

//为按钮添加事件监听
let btnStart = document.getElementById('start');
let btnStop = document.getElementById('stop');
btnStart.addEventListener('click', clickOnStartButton);
btnStop.addEventListener('click', clickOnStopButton);

//对点击事件进行处理
let startTimeRecord;//定义记录开始点击时的时间的变量
function clickOnStartButton() {
    if (flag != null)//
    {
        clearInterval(flag);
        hour = 0;
        minute = 0;
        second = 0;
        date.innerHTML = hour + 'H ' + minute + 'M ' + second + 'S ';//计时器置零
    }
    startClock();
    startTimeRecord = displayTime;//记录开始时间
}
let i = 0;//用于li标签的id
function clickOnStopButton() {
    let li;
    let ul;

    let span;
    clearInterval(flag);
    ul = document.getElementById('ul');
    li = document.createElement('li');//创建li标签
    ul.appendChild(li);
    span = document.createElement('span');
    li.appendChild(span);
    span.innerHTML = startTimeRecord + '-' + displayTime;
    let button = document.createElement('button');
    li.appendChild(button);
    button.innerHTML = '删除';
    li.setAttribute('id', 'li' + i);//添加li标签的id
    hour = 0;
    minute = 0;
    second = 0;
    time.innerHTML = hour + 'H ' + minute + 'M ' + second + 'S ';//计时器置零

    button.addEventListener('click', deleteBtn);
    let deleteElement = document.getElementById('li' + i);
    function deleteBtn() {
        ul.removeChild(deleteElement);
    }
    i++;
} 