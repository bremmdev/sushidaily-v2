# Sushidaily

A sushi restaurant website built with React and Firebase. 

## Tech
- React 18
- Redux: state management
- Firebase: backend for storing the menu and orders
- Vite: build tool

## Description

This is a mock sushi restaurant wesbite built with React. It has a menu that is fetched from a Firebase real-time database using a custom hook. 
Meals can be ordered and are added to the cart. The cart is displayed in a modal. Cart data is managed by Redux. The cart has basic functionalities such as removing and adding items and placing an order.
The order form has client-side validation. The order is saved in the Firebase real-time database. 
There is a Notification component that indicates whether an order is successfully placed or not.

For the CSS I used both global styles and CSS modules.

As a fun bonus I added custom scrollbars that fit in the overall design.

## Project screen shots

![image](https://user-images.githubusercontent.com/76665118/173443908-8ec1ebdd-f103-4cde-afd8-47b739763c36.png)
![image](https://user-images.githubusercontent.com/76665118/173444017-355bc7c4-4c78-4fcb-8737-fc313f9013cc.png)

Shopping cart:

![image](https://user-images.githubusercontent.com/76665118/173444163-e064329a-a741-4e64-94a3-daa404e67177.png)

Notification component after a successful order:

![image](https://user-images.githubusercontent.com/76665118/173444095-5358cb0e-52d1-4559-bdff-35a031d7ac6e.png)

## Installation

You will need node and npm installed on your machine.

Install all required modules:

npm install

To start server:

npm start

To visit website:

localhost:3000
