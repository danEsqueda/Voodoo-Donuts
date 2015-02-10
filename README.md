# Voodoo-Donuts

I created the DonutShop class with perameters for the location, minimum and maximum hourly foot traffic,
percentage of customers who come into the store, the average order, and I added one for the price of a donut. 
It has location, average order, percentage of customers who come in and donut price properties invoked with 
this.property. I decided to create two array properties. One holds strings of each hour the store is open 
ex: "7am", "4pm", ... The other is an empty array that will hold the the amount of people who come in the store each of those hours. 
I fill that array by choosing a random number between the min and max foot traffic and then multiply that by the percentage of people who come in to that particular store. I used a for loop to do this for every hour and add the foot traffic for each hour into the trafficPerHour array. Then in the function getHourlyTraffic, I console.log the results along with the hour that they came.

For getting the total donuts sold, I made a function that loops through the trafficPerHour array and then multiplies that by the average amount sold and then adds that onto a totalDonuts variable. I decided to add a donutPrice property so I could show how much money the shop made on that day. I just added that to this function. It made sense to me to do that. 

Here is an example result from the downtown donut store object: (this is with the price set at $1.25 per donut)

Downtown Voodoo Donuts had 
11 customers at 7am
15 customers at 8am
13 customers at 9am
13 customers at 10am
8 customers at 11am
16 customers at 12pm
18 customers at 1pm
14 customers at 2pm
9 customers at 3pm
21 customers at 4pm
17 customers at 5pm
Today, the Downtown Voodoo Donuts sold 620 donuts and made 775 dollars!
