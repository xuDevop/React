//index.js是程序的入口文件，它引入了React，ReactDOM和组件App， 通过ReactDOM把组件App显示在ID为root的标签下面， 因为用到了JSX语法 所以引入了React

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';//借助网页去写手机APP的功能 

//ReactDOM是一个第三方的模块，它有一个方法叫render()，这个方法可以让我们把一个组件挂载到某一个DOM节点下
//<App / >这个是jsx语法， 一旦使用了jsx语法 就一定要在对应的文件里引入React
ReactDOM.render( < App / > , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();