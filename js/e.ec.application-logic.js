//SETUP: KICKSTART CLICK LISTENERS / SCROLL LISTENERS / FORM IMPUT LISTENERS / FORM SUBMIT LISTENERS

window.onload = function() {
    addClickListenersGroup();
    window.addEventListener('scroll', function(){checkForNewImpressions();}, true)
    document.getElementById('appointmentFunnelTest').addEventListener("input", function (){FormInputInitiated();} );
    document.getElementById('appointmentFunnelTest').addEventListener("submit", function (){FormSubmitInitiated();} );

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

var count01 = true;     //Asset impression test #1
var count02 = true;     //Asset impression test #2
var count03 = true;     //Asset impression test #3
var formCount01 = true; //form impression 
var formCount02 = true; //form submit 


function checkForNewImpressions() {
   if (isElementInViewport(document.getElementById("e-ec-testButton1")) === true && count01 === true) {assetImpressionTest1();}
   if (isElementInViewport(document.getElementById("e-ec-testButton2")) === true && count02 === true) {assetImpressionTest2();}
   if (isElementInViewport(document.getElementById("e-ec-testButton3")) === true && count03 === true) {assetImpressionTest3();}
}

//FUNCTION: Determine if an element is in the visible viewport
function isElementInViewport(el) {var rect = el.getBoundingClientRect();return (rect.top >= 0 && rect.left >= 0 && rect.bottom
<= (window.innerHeight || document. documentElement.clientHeight) && rect.right <= (window.innerWidth || document. documentElement.clientWidth)
);}





//FUNCTION: DataLayer.push - ASSET IMPRESSION TEST #1

function assetImpressionTest1 () {
    
        if (count01 === true) {
        console.log("Starting: DataLayer.push - ASSET IMPRESSION TEST #1");
        
     
                //ADD CODE FOR DATA LAYER PUSH HERE
                //Form completion initiated by user
        
        
        console.log("Completed: DataLayer.push - ASSET IMPRESSION TEST #1");
        count01 = false;
    }    
}

//FUNCTION: DataLayer.push - ASSET IMPRESSION TEST #2

function assetImpressionTest2 () {
    
        if (count02 === true) {
        console.log("Starting: DataLayer.push - ASSET IMPRESSION TEST #2");
        
     
                //ADD CODE FOR DATA LAYER PUSH HERE
                //Form completion initiated by user
        
        
        console.log("Completed: DataLayer.push - ASSET IMPRESSION TEST #2");
        count02 = false;
    }    
}

//FUNCTION: DataLayer.push - ASSET IMPRESSION TEST #3

function assetImpressionTest3 () {
    
        if (count03 === true) {
        console.log("Starting: DataLayer.push - ASSET IMPRESSION TEST #3");
        
     
                //ADD CODE FOR DATA LAYER PUSH HERE
                //Form completion initiated by user
        
        
        console.log("Completed: DataLayer.push - ASSET IMPRESSION TEST #3");
        count03 = false;
    }    
}




//FUNCTION: DataLayer.push - CTA Click

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
                'price': '0.00',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'position': 1
}]}}}); 
console.log("Completed: DataLayer.push - CTA Click");
}

//FUNCTION: DataLayer.push - Checkout Complete

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
                'shipping': '0.00',
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
}




//FUNCTION: DataLayer.push - Product Add - User form input

function FormInputInitiated() {

    if (formCount01 === true) {
        console.log("Starting: DataLayer.push - Product Add - User form input");
        
     
                //ADD CODE FOR DATA LAYER PUSH HERE
                //Form completion initiated by user
        
        
        console.log("Completed: DataLayer.push - Product Add - User form input");
        formCount01 = false;
    }    
}


//FUNCTION: Form completion initiated by user || Product Adds (Lead Form Starts)  
function FormSubmitInitiated() {

    if (formCount02 === true) {
        console.log("Starting: DataLayer.push - Checkout - Form Submit");
        
     
                //ADD CODE FOR DATA LAYER PUSH HERE
                //Form completion initiated by user
        
        
        console.log("Completed: DataLayer.push - Checkout - Form Submit");
        formCount02 = false;
    }    
}

