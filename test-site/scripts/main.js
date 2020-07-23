
// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'hello world!'


//页面点击事件
// document.querySelector('html').onclick = function(){
//     alert('点点点点点点点点');
// }


///切换图片
let image = document.querySelector('img');
let firstImage = true;
image.onclick = function () {
    let imageSrc = image.getAttribute('src');
    if (firstImage) {
        image.setAttribute('src', 'images/1555690250205.png');
        firstImage = false;
    } else {
        image.setAttribute('src', 'images/IMG_20190327_112351.png');
        firstImage = true;
    }
}

let btn = document.querySelector('button');
let heading = document.querySelector('h1');
btn.onclick = function () {
    setUserName();
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    heading.textContent = '帅呆了，' + storeName;
}

function setUserName() {
    ///输入对话框
    let name = prompt('请输入你的名字');
    if (!name || name == null) {
        setUserName();
    } else {
        ///保存name到浏览器中
        localStorage.setItem('name', name);
        ///给h1标签设置新文字
        heading.textContent = '帅呆了，' + name;
    }

}

///创建一个标签
const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = '点击页面输入内容，并添加到列表中';
///添加标签到页面中
document.body.appendChild(info);
document.body.appendChild(list);
//点击弹出输入框
// html.onclick = function () {
//     const listItem = document.createElement('li');
//     const listContent = prompt('添加电脑什么');
//     listItem.textContent = listContent;
//     //ul中添加li标签
//     list.appendChild(listItem);
//     //点击li标签，弹出输入框，修改当前item的内容
//     listItem.onclick = function (e) {
//         e.stopPropagation();
//         const listContent = prompt('修改当前内容');
//         this.textContent = listContent;
//     }
// } 