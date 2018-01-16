//SETUP: KICKSTART CLICK LISTENERS / SCROLL LISTENERS / FORM IMPUT LISTENERS / FORM SUBMIT LISTENERS

window.onload = function() {
//  cookieDrupalID(); Cookie logic 
    discoverRegionNPush();
    checkForNewImpressions(); //check for assets in viewport on pageload
    addClickListenersGroup();
    window.addEventListener('scroll', function(){checkForNewImpressions();}, true);
    document.getElementById('appointmentFunnelTest').addEventListener("input", function (){dataLayerFormInput();} );
    document.getElementById('appointmentFunnelTest').addEventListener("submit", function (){dataLayerFormSubmit();} );
};

/* REGISTER OF ASSETS FOR IMPRESSIONS / CLICKS / INPUTS (BY ELEMENT IDs)

-----------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                    Impression Function Name                  Click Function Name
-----------------------------------------------------------------------------------------------------------------  
HOME-A
-----------------------------------------------------------------------------------------------------------------
HomeA-CTA-Hero-BookConsultation | HomeA_CTA_Hero_BookConsultation_Impress | HomeA_CTA_Hero_BookConsultation_Click
X-Impression X-Click

HomeA-CTA-Hero-RequestCall
X-Impression X-Click

HomeA-Body-BookConsultation
X-Impression X-Click

HomeA-Body-RequestCall
X-Impression X-Click

HomeA-Body-FAQ 
X-Impression X-Click

HomeA-Body-FindCentre
X-Impression X-Click

-----------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                    Impression Function Name                  Click Function Name
-----------------------------------------------------------------------------------------------------------------  
HOME-B
-----------------------------------------------------------------------------------------------------------------

HomeB-Body-BookConsultation
X-Impression X-Click

HomeB-Body-RequestCall
X-Impression X-Click

HomeB-Body-FindCentre
X-Impression X-Click

HomeB-Body-FAQ
X-Impression X-Click

HomeB-Mobile-Body-BookConsultation
X-Impression X-Click

HomeB-Mobile-Body-RequestCall
X-Impression X-Click

HomeB-Mobile-Body-FindCentre
X-Impression X-Click

HomeB-Mobile-Body-FAQ
X-Impression X-Click

-----------------------------------------------------------------------------------------------------------------
GLOBAL HEADER
-----------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                    Impression Function Name                  Click Function Name
-----------------------------------------------------------------------------------------------------------------  


GlobalHeader-CTA-StartNowOrange
X-Impression X-Click

GlobalHeader-CTA-ClickToCall (class: click-to-call - noID)
X-Impression X-Click

GlobalHeader-CTA-StartLiveChat (class: livechat_button - noID)
X-Impression X-Click


-----------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                    Impression Function Name                  Click Function Name
-----------------------------------------------------------------------------------------------------------------  
GLOBAL FOOTER
-----------------------------------------------------------------------------------------------------------------
X-Impression X-InputInitiated X-SubmitInitiated

GlobalFooter-IconFacebook
X-Impression X-Click

GlobalFooter-IconInstagram
X-Impression X-Click

GlobalFooter-IconYouTube
X-Impression X-Click

GlobalFooter-JCAH-Delivery
X-Impression X-Click

GlobalFooter-IconYouTube
X-Impression X-Click

GlobalFooter-IconBlog
X-Impression X-Click


--FORM-1------/book-now-ab-------------------
X-Impression X-InputInitiated X-SubmitInitiated

mktoForm_2257 [AU]
mktoForm_2258 [NZ]

--FORM-2------/book-now.html-----------------
X-Impression X-InputInitiated X-SubmitInitiated

mktoForm_2259 [AU]
mktoForm_2260 [NZ]

--FORM-3------/start-today.html-----------------
X-Impression X-InputInitiated X-SubmitInitiated

mktoForm_1579 [AU]
mktoForm_1626 [NZ]

--FORM-3------/INSPIRE-Subscribe-----------------
X-Impression X-InputInitiated X-SubmitInitiated

mktoForm_1589 [AU+NZ Subscribe Inspire]


*/

//FUNCTION: Discover region + dataLayer push
function discoverRegionNPush() {

    (function($) {
// Required to override html content inside a view 
        $(window).load(function() {
            if(window.location.href.indexOf(".co.nz") > -1) {
                dataLayer.push({'region' : 'NZ'});
                console.log("NZ Region Pushed to Datalayer");
            }
            else if(window.location.href.indexOf(".com.au") > -1) { 
                dataLayer.push({'region' : 'AU'});
                console.log("AU Region Pushed to Datalayer");
}
});  
})(jQuery);
    
}

//Discover Page URL + store as String
var currentUrl = window.location.href;

/*
DRUPAL ID COOKIE LOGIC
push to dataLayer. If missing: create + push to dataLayer

function cookieDrupalID() {
console.log("STARTING COOKIE MONSTER");
    
    //Check if cookie exists. Return Cookie-value or null.
    value_or_null = (document.cookie.match(/^(?:.*;)?\s*MyCookie\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
    //If cookie exists push it's value to dataLayer
    if (value_or_null == null) {
        console.log("COOKIE EXISTS"); 
                
        //push to dataLayer
        dataLayer.push({
            'userSegment' = 'New',
            'userid' = String(value_or_null);
        });
        console.log("COOKIE VALUE HAS BEEN PUSHED TO DATALAYER"); 

    } 
    //If cookie does not exist plant cookie and repeat function
    console.log("COOKIE DOES NOT EXIST");
     if (value_or_null === null) {

        //TODO --- plant cookie 
        drupalIDCookie();

    }
*/
    
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

   //below are new

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




