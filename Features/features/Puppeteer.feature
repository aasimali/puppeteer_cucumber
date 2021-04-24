Feature: Test the Puppeteer website

@TC1
Scenario: To check the Run Checks button functionality

Given Open "Puppeteer" website
When User click on "Run Checks" button
Then Verify that User is redirected to the "GitHub" page

@TC2
Scenario: To check the Auction button functionality
Given Open "Osians" website
When User click on "Auction" button
Then Verify that User is redirected to the "Auction" page