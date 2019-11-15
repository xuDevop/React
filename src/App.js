//App.js就是一个组件 它返回了一个内容 因为它是一个组件 所以它必须引入Component这个基类去继承他 才可以生成React的组件，因为render中用到了JSX语法，所以上面引入了React

//在js文件中 不加单引号 直接写 html的标签 在React中就是jsx语法 可以用html的传统标签 例如 <div><p><h1><h2>  也可自定义标签比如index.js中的<App /> 注意当要使用组件时 要大写字母开头
import React from 'react';

// import React, {Component} from 'react';  可以写成 =>  
//import React from 'react',  
//const Component = React.Component


class App extends React.Component { //创建了一个名叫App的类， 这个类继承了React.Component成为了React的一个组件
    render() {
		//render中的标签都是JSX语法，所以上面引入了React
        return ( 
            <div>
            hello world 
            </div>
        );
    }
}
export default App;