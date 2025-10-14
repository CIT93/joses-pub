## Personal Decision Making App - Step 1: UI Setup, Basic Input Handling & Modular Output

## Description
This app helps me tack and analyze my decision about choosing a car that is affordable within a salary range. It takes the current salary and estimate mileage. <br>

## Decision Focus
This app is tailored for people who want an idea on what kind of car payments and car they want. Based on income, mileage, miles per gallon, and if the price matters.
- Income: How much income you make yearly
- Mileage: How many mileage you drive 
- Does MPG matter: Does the amount you drive concerns you or not
- Price Matter?: is money a big factor to you or not

### My Decisoin Logic 
1. Yearly Income Logic
    - *When* the yearly income is less than $25,000, *then* the return payment is $208 per month.
    - *When* the yearly income is less than $50,000, *then* the return payment is $416 per month.
    - *When* the yearly income is less than $75,000, *then* the return payment is $625 per month.
    - *When* the yearly income is less than $100,000, *then* the return payment is $833 per month.
    - *When* the yearly income is less than $125,000, *then* the return payment is $1,042 per month.
    - *When* the yearly income is less than $150,000, *then* the return payment is $1,250 per month.

2. Mileage Logic
    - *When* the mileage is less than or equal to 10,000, *then* it will say "No need for a Highest MPG  car"
    - *When* the mileage is less than or equal to 15,000, *then* it will say "Buy a used or fuel-effecient car"
    - *When* the mileage is greater than 15,000, *then* it will say "Hybrid or a fuel car"

3. Does MPG matter Logic
    - If yes then it will recomend a specific car type or brand
    - If no then it will recommemd a not a fuel efficient car

4. Does Price Matter Logic
    - If yes, then it wiil return "Low mateniace and good fuel economy"
    - If no, then it will return "Any car will do based on your decion"

## Example Output
Example 1:
- if the input are the following:
    - Income: 20,000
    - Mileage: 4,000
    - Does MPG matter: Yes
    - does Price matter: Yes
- ...the output will be the following:
```
Best Car Affordability:
$208 per month

Alternative decisions:
Decision Based on Mileage: No need for a Higest MPG car
Decision based on MPG: Toyota, Honda Compact cars
Decision Based on Price: Low mateniace and good fuel economy
```
Example 2:
- if the input are the following:
    - Income: 70,000
    - Mileage: 6,000
    - Does MPG matter: No
    - does Price matter: Yes
- ...the output will be the following:
```
Best Car Affordability:
$625 per month

Alternative decisions:
Decision Based on Mileage: No need for a Higest MPG car
Decision based on MPG: Sports cars or Trucks
Decision Based on Price: Low mateniace and good fuel economy
```
Example 3:
- if the input are the following:
    - Income: 100,000
    - Mileage: 2,000
    - Does MPG matter: No
    - does Price matter: No
- ...the output will be the following:
```
Best Car Affordability:
$833 per month

Alternative decisions:
Decision Based on Mileage: No need for a Higest MPG car
Decision based on MPG: Sports cars or Trucks
Decision Based on Price: Any car will do based on your decision
```

## Input Types Used
- Number input for Income and Mileage yearly: allows user to input their salary and mileage 
- Radio Button for MPG and price priority: gives to option a *Yes* or *No* to user if they make it a priority for them.


## Color Palette 
- Color palette that i chose was a pastel color that was called Natural Elegance:
```    - #463F3A
    - #8A817C
    - #BCB8B1
    - #F4F3EE
    - #E0AFA0
```