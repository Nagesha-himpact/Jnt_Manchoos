const { browser } = require('protractor');
const { TargetLocator } = require('selenium-webdriver');

describe('Create timings and calendar ',function(){
    
    'use strict';

    var testData = require('../resources/testData.json');
    var loginPage=new pages.loginPage();
    var leftNavigationPage= new pages.leftNavigationPage();
    var dashBoardPage=new pages.dashBoardPage();
    var timingsCalendarPage=new pages.timingsCalendarPage()

    it("Create timings and Calendar Availability",function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToRestaurantProfile()
        timingsCalendarPage.createTimgsCalendar(testData.timingsCalendar.breakFast)
        dashBoardPage.logout()
    })
})