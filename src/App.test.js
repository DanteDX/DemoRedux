import React from "react";
import {shallow} from "enzyme";
import App from "./App.js";

describe('Testing Essentials',function(){
    test('Single number of wrapper exists',function(){
        let component = shallow(<App />);
        let temp = component.find(`[data-testid='appWrapper']`);
        expect(temp.length).toBe(1);
    })

    test('Double number of button exists',function(){
        let component = shallow(<App />);
        let temp = component.find(`[data-testid='appButton']`);
        expect(temp.length).toBe(2);
    })
})