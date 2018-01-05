//SETUP: KICKSTART CLICK AND SCROLL LISTENERS 

window.onload = function() {
    addClickListeners();
    window.addEventListener('scroll', function(){ console.log("Scrolling..."); checkForNewImpressions();  }, true)
};

//LISTEN FOR CLICKS ON UNIQUE ASSETS 

function addClickListeners(){
  document.getElementById("e-ec-testButtonA").addEventListener('click', simulateProductClick, false);
  document.getElementById("e-ec-testButtonB").addEventListener('click', simulateCheckoutComplete, false);
}

/*
LISTEN FOR IMPRESSIONS ON UNIQUE ASSETS
IMPRESSION COUNTERS
Impressions are triggered once per page-load. Upon first trigger counters change to "false"
*/

var count01 = true; 
var count02 = true; 
var count03 = true; 

function checkForNewImpressions() {
   if (isElementInViewport(document.getElementById("e-ec-testButton1")) === true && count01 === true) {window.alert("IMPRESSION TEST #1 TRIGGERED"); count01=false;}
   if (isElementInViewport(document.getElementById("e-ec-testButton2")) === true && count02 === true) {window.alert("IMPRESSION TEST #2 TRIGGERED"); count02=false;}
   if (isElementInViewport(document.getElementById("e-ec-testButton3")) === true && count03 === true) {window.alert("IMPRESSION TEST #3 TRIGGERED"); count03=false;}
}

//FUNCTION: Determine if an element is in the visible viewport
function isElementInViewport(el) {var rect = el.getBoundingClientRect();return (rect.top >= 0 && rect.left >= 0 && rect.bottom
<= (window.innerHeight || document. documentElement.clientHeight) && rect.right <= (window.innerWidth || document. documentElement.clientWidth)
);}


//FUNCTION: Simulating Product Click
function simulateProductClick() {
window.alert("Starting Simulating Product Click");
dataLayer.push({
    'event': 'productClick',
    'ecommerce': {
        'currencyCode': 'AUD', 
        'click': {
            'actionField': {'list': '/weight-loss'}, // Same as impression location
            'products': [{
                'name': 'Book Consultation',
                'id': '1',
                'price': '1119.88',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'position': 1
}]}}}); 
window.alert("Simulating Product Click Completed");
}

//FUNCTION: Checkout Complete
function simulateCheckoutComplete() {
window.alert("Starting Checkout Complete Simulation");
dataLayer.push({
    'event': 'purchase',
    'ecommerce': {
        'currencyCode': 'AUD', 
        'purchase': {
            'actionField': {
                'id': 'T12345',
                'affiliation': undefined, 
                'revenue': '',
                'tax':'',
                'shipping': '2000.00',
                'coupon': 'NewYear'
                },
                'products': [{
                    'name': 'Book Consultation',
                    'id': '1',
                    'price': '999.83',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'quantity': 1,
                    'variant': ''
}]}}});
window.alert("Finished Simulating Checkout-Complete Completed");
}
