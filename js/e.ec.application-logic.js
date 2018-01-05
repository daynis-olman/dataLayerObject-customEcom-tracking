//SETUP: KICKSTART CLICK LISTENERS / SCROLL LISTENERS / FORM IMPUT LISTENERS / FORM SUBMIT LISTENERS

window.onload = function() {
    addClickListenersGroup();
    window.addEventListener('scroll', function(){checkForNewImpressions();}, true)
    document.getElementById('appointmentFunnelTest').addEventListener("input", function() {console.log("Form has changed!")});
    document.getElementById('appointmentFunnelTest').addEventListener("submit", function() {console.log("Form was submitted!")});

};


//LISTEN FOR CLICKS ON UNIQUE ASSETS 

function addClickListenersGroup(){
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
   if (isElementInViewport(document.getElementById("e-ec-testButton1")) === true && count01 === true) {console.log("IMPRESSION TEST #1 TRIGGERED"); count01=false;}
   if (isElementInViewport(document.getElementById("e-ec-testButton2")) === true && count02 === true) {console.log("IMPRESSION TEST #2 TRIGGERED"); count02=false;}
   if (isElementInViewport(document.getElementById("e-ec-testButton3")) === true && count03 === true) {console.log("IMPRESSION TEST #3 TRIGGERED"); count03=false;}
}

//FUNCTION: Determine if an element is in the visible viewport
function isElementInViewport(el) {var rect = el.getBoundingClientRect();return (rect.top >= 0 && rect.left >= 0 && rect.bottom
<= (window.innerHeight || document. documentElement.clientHeight) && rect.right <= (window.innerWidth || document. documentElement.clientWidth)
);}

//FUNCTION: Simulating Product Click
function simulateProductClick() {
console.log("Starting: DataLayer.push - CTA Click");
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
console.log("Completed: DataLayer.push - CTA Click");
}

//FUNCTION: Checkout Complete
function simulateCheckoutComplete() {
console.log("Starting: DataLayer.push - Checkout Complete");
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
console.log("Completed: DataLayer.push - Checkout Complete");
}Add Events Listeners for form input changes and form submit
