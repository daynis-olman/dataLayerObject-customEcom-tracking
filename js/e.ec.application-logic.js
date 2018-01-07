//SETUP: KICKSTART CLICK LISTENERS / SCROLL LISTENERS / FORM IMPUT LISTENERS / FORM SUBMIT LISTENERS

window.onload = function() {
    addClickListenersGroup();
    window.addEventListener('scroll', function(){checkForNewImpressions();}, true)
    document.getElementById('appointmentFunnelTest').addEventListener("input", function (){dataLayerFormInput();} );
    document.getElementById('appointmentFunnelTest').addEventListener("submit", function (){dataLayerFormSubmit();} );
};

//LISTEN FOR CLICKS ON UNIQUE ASSETS 

function addClickListenersGroup(){
  document.getElementById("e-ec-testButtonA").addEventListener('click', dataLayerProductClick, false);
  document.getElementById("e-ec-testButtonB").addEventListener('click', dataLayerCheckoutComplete, false);
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
   if (isElementInViewport(document.getElementById("e-ec-testButton1")) === true && count01 === true) {dataLayerAssetImpression01();}
   if (isElementInViewport(document.getElementById("e-ec-testButton2")) === true && count02 === true) {dataLayerAssetImpression02();}
   if (isElementInViewport(document.getElementById("e-ec-testButton3")) === true && count03 === true) {dataLayerAssetImpression03();}
}

//FUNCTION: Determine if an element is in the visible viewport
function isElementInViewport(el) {var rect = el.getBoundingClientRect();return (rect.top >= 0 && rect.left >= 0 && rect.bottom
<= (window.innerHeight || document. documentElement.clientHeight) && rect.right <= (window.innerWidth || document. documentElement.clientWidth)
);}


//FUNCTION: DataLayer.push - ASSET IMPRESSION TEST #1

function dataLayerAssetImpression01 () {
        if (count01 === true) {
        
     
                dataLayer.push({
                    'event': 'productImpressions',
                    'ecommerce': {
                        'currencyCode': 'AUD',
                        'impressions':[
                            {
                                'name': 'Asset-Impression-Test-01',
                                'id': '1',
                                'price': '',
                                'brand': 'Jenny Craig',
                                'category': 'lead',
                                'variant': '',
                                'list': '/home',
                                'position': 1
                            },
                        ]
                    }  
                    });
        
            
        console.log("Completed: DataLayer.push - ASSET IMPRESSION TEST #1");
        count01 = false;
    }    
}

//FUNCTION: DataLayer.push - ASSET IMPRESSION TEST #2

function dataLayerAssetImpression02 () {
        if (count02 === true) {
        
            
                dataLayer.push({
                    'event': 'productImpressions',
                    'ecommerce': {
                        'currencyCode': 'AUD',
                        'impressions':[
                            {
                                'name': 'Asset-Impression-Test-02',
                                'id': '1',
                                'price': '',
                                'brand': 'Jenny Craig',
                                'category': 'lead',
                                'variant': '',
                                'list': '/home',
                                'position': 1
                            },
                        ]
                    }  
                    });
        
            
        
        console.log("Completed: DataLayer.push - ASSET IMPRESSION TEST #2");
        count02 = false;
    }    
}

//FUNCTION: DataLayer.push - ASSET IMPRESSION TEST #3

function dataLayerAssetImpression03 () {
    
        if (count03 === true) {
        
     
                  dataLayer.push({
                    'event': 'productImpressions',
                    'ecommerce': {
                        'currencyCode': 'AUD',
                        'impressions':[
                            {
                                'name': 'Asset-Impression-Test-03',
                                'id': '1',
                                'price': '',
                                'brand': 'Jenny Craig',
                                'category': 'lead',
                                'variant': '',
                                'list': '/home',
                                'position': 1
                            },
                        ]
                    }  
                    });
        
        
        console.log("Completed: DataLayer.push - ASSET IMPRESSION TEST #3");
        count03 = false;
    }    
}

//FUNCTION: DataLayer.push - CTA Click

function dataLayerProductClick() {
dataLayer.push({
    'event': 'productClick',
    'ecommerce': {
        'currencyCode': 'AUD', 
        'click': {
            'actionField': {'list': '/weight-loss'}, // Same as impression location
            'products': [{
                'name': 'Book Consultation - CTA Click TEST',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'position': 1
                }]}}}); 

console.log("Completed: DataLayer.push - CTA Click");
}

//FUNCTION: DataLayer.push - Checkout Complete

function dataLayerCheckoutComplete() {


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
                        'name': 'Book Consultation - Checkout Complete TEST',
                        'id': '1',
                        'price': '',
                        'brand': 'Jenny Craig',
                        'category': 'lead',
                        'quantity': 1,
                        'variant': ''
                    }]
            }
        }
    });


console.log("Completed: DataLayer.push - Checkout Complete");
}




//FUNCTION: DataLayer.push - Product Add - User form input

function dataLayerFormInput() {
    if (formCount01 === true) {
        

      dataLayer.push({
        'event': 'productAdd',
        'ecommerce': {
            'currencyCode': 'AUD',
            'add': {
                'actionField': {'list': undefined },
                'products': [{
                    'name': 'Product Add - User form input - TEST',
                    'id': '1',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'quantity': 1,
                    'variant': ''
                    }]}}});
    

        console.log("Completed: DataLayer.push - Product Add - User form input");
        formCount01 = false;
    }    
}


//FUNCTION: DataLayer.push - Checkout - Form Submit  

function dataLayerFormSubmit() {

    if (formCount02 === true) {
        
     
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
                            'name': 'Checkout - Form Submit - TEST',
                            'id': '1',
                            'price': '',
                            'brand': 'Jenny Craig',
                            'category': 'lead',
                            'quantity': 1,
                            'variant': ''
                        }]
                }
            }
        });
        
        
        console.log("Completed: DataLayer.push - Checkout - Form Submit");
        formCount02 = false;
    }    
}

