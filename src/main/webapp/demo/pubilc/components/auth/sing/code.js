import React, { Component } from 'react';

// var React = require('react');
var AMR = require('amazeui-react');
var Input = AMR.Input;

class Code extends Component{
    constructor(props) {
        super(props);
        this.state = {
            expression: '',
            validate: '',
            validateInput: '',

            bgImage: "",
            size: "4",
            captchaType: "Normal",
        };
    }
    renderCode(){
        //定义expression和result，expression是字符串，result可能是字符串也可能是数字
        var expression = '', result;
        //判断验证码类型
        if (this.state.captchaType === 'Calculation') {
            result = 0;//计算类型则result为数字，初始化为0
            //获取随机的两个两位数
            var Calpre = Math.round(Math.random()*100);
            var Calafter = Math.round(Math.random()*100);

            var codeCal = ['-','+','x'];//运算符
            var i = Math.round(Math.random()*2);//获得随机运算符

            switch (codeCal[i]) {//判断运算符并计算
                case '-':
                    expression = Calpre + '-' + Calafter;
                    result = Calpre - Calafter;
                    break;
                case '+':
                    expression = Calpre + '+' + Calafter;
                    result = Calpre + Calafter;
                    break;
                case 'x':
                    expression = Calpre + 'x' + Calafter;
                    result = Calpre * Calafter;
                    break;
            }
        } else if (this.state.captchaType === 'Normal'){
            result = '';
            var codeNormal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';//字母库
            for (var i =0; i < this.state.size; i ++) {
                result = result + codeNormal[Math.round(Math.random()*(codeNormal.length-1))];
            }//随机获取字母四个

            expression = result.toLowerCase();//忽略大小写
        }

        this.setState({//设置更新状态
            expression: expression,
            validate: result
        });
    }
    componentDidMount(){
        this.renderCode();
    }
    handleChange(){
        this.setState({
            validateInput: this.refs.field.getValue()
        })
    }
    // validate(){
    //     console.log("21");
    //     let inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写
    //     if(inputCode.length <= 0) { //若输入的验证码长度为0
    //         alert("请输入验证码！"); //则弹出请输入验证码
    //     } else if(inputCode !== code) { //若输入的验证码与产生的验证码不一致时
    //         alert("验证码输入错误！"); //则弹出验证码输入错误
    //         createCode(); //刷新验证码
    //     } else { //输入正确时
    //         alert("^-^"); //弹出^-^
    //     }
    // }
    render(){
        var inlineStyle = {
            color: this.props.color,
            backgroundImage: 'url(' + this.props.bgImage + ')'
        };
        return(
            <div>
                <Input value={this.state.validateInput} placeholder="请输入验证码" validation={this.validate()} ref="field" onChange={this.handleChange} hasFeedback/>
                <AMR.Button style={inlineStyle} className="am-btn" onClick={this.renderCode}>{this.state.expression}</AMR.Button>
            </div>
        )
    }
}
export default Code;