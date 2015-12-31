# ComputerKeyboardComboCalculator
<p>For Shopify's Shopicruit challenge as a part of their internship application.</p>
<b> Description of the task: </b>
<p>You've discovered the Shopify Store 'Shopicruit'. Since you're obsessed with computers, you want to buy every 
single computer and keyboard variant they have to offer. Unfortunately you can only carry up to 100kg and may not 
be able to buy all of them. By inspecting the JavaScript calls on the store you discovered that the shop lists 
products at http://shopicruit.myshopify.com/products.json. Write a program that calculates what the maximum amount 
of computers and keyboards that you could carry would cost you. Attach your answer (in dollars) and your program 
(any language) and answer in your reply.</p>

<b> Installation </b>
<p>Node.js is required to run this web application.</p>

<b> Usage </b>
<p>Simply run the server.js on node which is configured to listen to PORT 3000. Access the application through localhost:3000</p>

<b> Algorithm Choice </b>
<p> To generate the list of items to maximize the profit, I chose to pursue a "Greedy" approach in which I initially sort the items by ratio of price-to-mass (in descending order). I then traverse the sorted items and include all items that are able to fit in the bag until the whole list has been traversed. I decided to use this approach because I am relatively new to JavaScript and this was a good way for me to practice my JavaScript and also implement a (generally) good algorithm. Had time permitted, I would try to implement a Branch and Bound algorithm that would produce a "more accurately optimal" solution.</p>

<b> Screenshot </b>
![Alt text](/img/demo.png?raw=true)
