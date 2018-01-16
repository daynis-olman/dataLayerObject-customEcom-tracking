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
HOME-A
-----------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                  | Impression Function Name              |  Click Function Name
-----------------------------------------------------------------------------------------------------------------  

HomeA-CTA-Hero-BookConsultation | HomeA_CTA_Hero_BookConsultation_IMPSN | xHomeA_CTA_Hero_BookConsultation_CLK
X-Impression X-Click

HomeA-CTA-Hero-RequestCall      | HomeA_CTA_Hero_RequestCall_IMPSN      | xHomeA_CTA_Hero_RequestCall_CLK
X-Impression X-Click

HomeA-Body-BookConsultation     | HomeA_Body_BookConsultation_IMPSN     | xHomeA_Body_BookConsultation_CLK
X-Impression X-Click

HomeA-Body-RequestCall          | HomeA_Body_RequestCall_IMPSN          | xHomeA_Body_RequestCall_CLK
X-Impression X-Click

HomeA-Body-FAQ                  | HomeA_Body_FAQ_IMPSN                  | xHomeA_Body_FAQ_CLK
X-Impression X-Click

HomeA-Body-FindCentre           | HomeA_Body_FindCentre_IMPSN           | xHomeA_Body_FindCentre_CLK
X-Impression X-Click

-----------------------------------------------------------------------------------------------------------------
HOME-B
-----------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                    | Impression Function Name                 | Click Function Name
-----------------------------------------------------------------------------------------------------------------  

HomeB-Body-BookConsultation       | HomeB_Body_BookConsultation_IMPSN        | xHomeB_Body_BookConsultation_CLK
X-Impression X-Click

HomeB-Body-RequestCall            | HomeB_Body_RequestCall_IMPSN             | xHomeB_Body_RequestCall_CLK
X-Impression X-Click

HomeB-Body-FindCentre             | HomeB_Body_FindCentre_IMPSN              | xHomeB_Body_FindCentre_CLK
X-Impression X-Click

HomeB-Body-FAQ                    | HomeB_Body_FAQ_IMPSN                     | xHomeB_Body_FAQ_CLK
X-Impression X-Click

HomeB-Mob-Body-BookConsultation   | HomeB_Mob_Body_BookConsultation_IMPSN    | xHomeB_Mob_Body_BookConsultation_CLK
X-Impression X-Click

HomeB-Mob-Body-RequestCall        | HomeB_Mob_Body_RequestCall_IMPSN         | HomeB_Mob_Body_RequestCall_CLK
X-Impression X-Click
  
HomeB-Mob-Body-FindCentre         | HomeB_Mob_Body_FindCentre_IMPSN          | xHomeB_Mob_Body_FindCentre_CLK
X-Impression X-Click

HomeB-Mob-Body-FAQ                | HomeB_Mob_Body_FAQ_IMPSN                 | xHomeB_Mob_Body_FAQ_CLK
X-Impression X-Click

-----------------------------------------------------------------------------------------------------------------
GLOBAL HEADER
-----------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                       | Impression Function Name                | Click Function Name
-----------------------------------------------------------------------------------------------------------------  

GlobalHeader-CTA-StartNowOrange      | GlobalHeader_CTA_StartNowOrange_IMPSN   | xGlobalHeader_CTA_StartNowOrange_CLK
X-Impression X-Click

GlobalHeader-CTA-ClickToCall         | GlobalHeader_CTA_ClickToCall_IMPSN      | xGlobalHeader_CTA_ClickToCall_CLK
X-Impression X-Click

GlobalHeader-CTA-StartLiveChat       | GlobalHeader_CTA_StartLiveChat_IMPSN    | xGlobalHeader_CTA_StartLiveChat_CLK
X-Impression X-Click

-----------------------------------------------------------------------------------------------------------------
GLOBAL FOOTER
-----------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                       | Impression Function Name                  | Click Function Name
-----------------------------------------------------------------------------------------------------------------  

GlobalFooter-IconFacebook            | GlobalFooter_IconFacebook_IMPSN          | xGlobalFooter_IconFacebook_CLK
X-Impression X-Click

GlobalFooter-IconInstagram           | GlobalFooter_IconInstagram_IMPSN         | xGlobalFooter_IconInstagram_CLK
X-Impression X-Click

GlobalFooter-IconYouTube             | GlobalFooter_IconYouTube_IMPSN           | xGlobalFooter_IconYouTube_CLK
X-Impression X-Click

GlobalFooter-JCAH-Delivery           | GlobalFooter_JCAH_Delivery_IMPSN         | xGlobalFooter_JCAH_Delivery_CLK
X-Impression X-Click

GlobalFooter-IconBlog                | GlobalFooter_IconBlog_IMPSN              | xGlobalFooter_IconBlog_CLK
X-Impression X-Click

-----------------------------------------------------------------------------------------------------------------
CONVERSION FORMS 
-----------------------------------------------------------------------------------------------------------------
FORM #1 /book-now-ab
-----------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function   | OnFocus Function     | Submit Function             
-----------------------------------------------------------------------------------------------------------------  

mktoForm_2257 [au]    |  mktoForm_2257_IMPSN  | xmktoForm_2257_Focus | xmktoForm_2257_Submit                
mktoForm_2258 [nz]    |  mktoForm_2258_IMPSN  | xmktoForm_2258_Focus | xmktoForm_2258_Submit 

-----------------------------------------------------------------------------------------------------------------
FORM #2 /book-now.html
-----------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function   | OnFocus Function     | Submit Function             
-----------------------------------------------------------------------------------------------------------------  

mktoForm_2259 [au]    |  mktoForm_2259_IMPSN  | xmktoForm_2259_Focus | xmktoForm_2259_Submit                
mktoForm_2260 [nz]    |  mktoForm_2260_IMPSN  | xmktoForm_2260_Focus | xmktoForm_2260_Submit 

-----------------------------------------------------------------------------------------------------------------
FORM #3 /start-today.html
-----------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function   | OnFocus Function     | Submit Function             
-----------------------------------------------------------------------------------------------------------------  

mktoForm_1579 [au]    |  mktoForm_1579_IMPSN  | xmktoForm_1579_Focus | xmktoForm_1579_Submit                
mktoForm_1626 [nz]    |  mktoForm_1626_IMPSN  | xmktoForm_1626_Focus | xmktoForm_1626_Submit 

-----------------------------------------------------------------------------------------------------------------
FORM #4 Subscribe to Inspire Magazine
-----------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function   | OnFocus Function      | Submit Function             
-----------------------------------------------------------------------------------------------------------------  

mktoForm_1589 [au&nz] |  mktoForm_1589_IMPSN  | xmktoForm_1589_Focus | xmktoForm_1589_Submit                


               



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
        
//Home A - Clicks

  document.getElementById("HomeA-CTA-Hero-BookConsultation").addEventListener("click",HomeA_CTA_Hero_BookConsultation_CLK,!1);
  document.getElementById("HomeA-CTA-Hero-RequestCall").addEventListener("click",HomeA_CTA_Hero_RequestCall_CLK,!1);
  document.getElementById("HomeA-Body-BookConsultation").addEventListener("click",HomeA_Body_BookConsultation_CLK,!1);
  document.getElementById("HomeA-Body-RequestCall").addEventListener("click",HomeA_Body_RequestCall_CLK,!1);
  document.getElementById("HomeA-Body-FAQ").addEventListener("click",HomeA_Body_FAQ_CLK,!1);
  document.getElementById("HomeA-Body-FindCentre").addEventListener("click",HomeA_Body_FindCentre_CLK,!1);

//Home B - Clicks

  document.getElementById("HomeB-Body-BookConsultation").addEventListener("click",HomeB_Body_BookConsultation_CLK,!1);
  document.getElementById("HomeB-Body-RequestCall").addEventListener("click",HomeB_Body_RequestCall_CLK,!1);
  document.getElementById("HomeB-Body-FindCentre").addEventListener("click",HomeB_Body_FindCentre_CLK,!1);
  document.getElementById("HomeB-Body-FAQ").addEventListener("click",HomeB_Body_FAQ_CLK,!1);
  document.getElementById("HomeB-Mob-Body-BookConsultation").addEventListener("click",HomeB_Mob_Body_BookConsultation_CLK,!1);
  document.getElementById("HomeB-Mob-Body-RequestCall").addEventListener("click",HomeB_Mob_Body_RequestCall_CLK,!1);
  document.getElementById("HomeB-Mob-Body-FindCentre").addEventListener("click",HomeB_Mob_Body_FindCentre_CLK,!1);
  document.getElementById("HomeB-Mob-Body-FAQ").addEventListener("click",HomeB_Mob_Body_FAQ_CLK,!1);

//Global Header - Clicks

  document.getElementById("GlobalHeader-CTA-StartNowOrange").addEventListener("click",GlobalHeader_CTA_StartNowOrange_CLK,!1);
  document.getElementById("GlobalHeader-CTA-ClickToCall").addEventListener("click",GlobalHeader_CTA_ClickToCall_CLK,!1);
  document.getElementById("GlobalHeader-CTA-StartLiveChat").addEventListener("click",GlobalHeader_CTA_StartLiveChat_CLK,!1);

//Global Footer - Clicks

  document.getElementById("GlobalFooter-IconFacebook").addEventListener("click",GlobalFooter_IconFacebook_CLK,!1);
  document.getElementById("GlobalFooter-IconInstagram").addEventListener("click",GlobalFooter_IconInstagram_CLK,!1);
  document.getElementById("GlobalFooter-IconYouTube").addEventListener("click",GlobalFooter_IconYouTube_CLK,!1);
  document.getElementById("GlobalFooter-JCAH-Delivery").addEventListener("click",GlobalFooter_JCAH_Delivery_CLK,!1);
  document.getElementById("GlobalFooter-IconBlog").addEventListener("click",GlobalFooter_IconBlog_CLK,!1);
    
}

/*
LISTEN FOR IMPRESSIONS ON UNIQUE ASSETS
IMPRESSION COUNTERS
Impressions are triggered once per page-load. Upon first trigger counters change to "false"
*/

//Home A - Impressions counters

var count01=!0     // impression counter HomeA_CTA_Hero_BookConsultation_IMPSN();
var count02=!0     // impression counter HomeA_CTA_Hero_RequestCall_IMPSN();
var count03=!0     // impression counter HomeA_Body_BookConsultation_IMPSN();
var count04=!0     // impression counter HomeA_Body_RequestCall_IMPSN();
var count05=!0     // impression counter HomeA_Body_FAQ_IMPSN(); 
var count06=!0     // impression counter HomeA_Body_FindCentre_IMPSN(); 

//Home B - Impressions counters

var count07=!0     // impression counter HomeB_Body_BookConsultation_IMPSN();
var count08=!0     // impression counter HomeB_Body_RequestCall_IMPSN();
var count09=!0     // impression counter HomeB_Body_FindCentre_IMPSN();
var count10=!0     // impression counter HomeB_Body_FAQ_IMPSN();
var count11=!0     // impression counter HomeB_Mob_Body_BookConsultation_IMPSN(); 
var count12=!0     // impression counter HomeB_Mob_Body_FindCentre_IMPSN(); 
var count13=!0     // impression counter HomeB_Mob_Body_FAQ_IMPSN(); 

//Global Header - Impressions counters

var count14=!0     // impression counter GlobalHeader_CTA_StartNowOrange_IMPSN(); 
var count15=!0     // impression counter GlobalHeader_CTA_ClickToCall_IMPSN(); 
var count16=!0     // impression counter GlobalHeader_CTA_StartLiveChat_IMPSN(); 

//Global Footer - Impressions counters

var count17=!0     // impression counter GlobalFooter_IconFacebook_IMPSN(); 
var count18=!0     // impression counter GlobalFooter_IconInstagram_IMPSN(); 
var count19=!0     // impression counter GlobalFooter_IconYouTube_IMPSN(); 
var count20=!0     // impression counter GlobalFooter_JCAH_Delivery_IMPSN(); 
var count21=!0     // impression counter GlobalFooter_IconBlog_IMPSN(); 

//Form #1 - Impressions counters

var count22=!0     // impression counter mktoForm_2257_IMPSN(); 
var count23=!0     // impression counter mktoForm_2258_IMPSN 

//Form #2 - Impressions counters

var count24=!0     // impression counter mktoForm_2259_IMPSN(); 
var count25=!0     // impression counter mktoForm_2260_IMPSN(); 

//Form #3 - Impressions counters

var count26=!0     // impression counter mktoForm_1579_IMPSN(); 
var count27=!0     // impression counter mktoForm_1626_IMPSN(); 

//Form #4 - Impressions counters

var count28=!0     // impression counter mktoForm_1689_IMPSN(); 


function checkForNewImpressions() {
    
/* Impression logic re-written to fit in one line for readability. Previous longer version below.
if (isElementInViewport(document.getElementById("HomeA-CTA-Hero-BookConsultation")) === true && count01 === true) {HomeA_CTA_Hero_BookConsultation_IMPSN();} */

//Home A - Impressions

  isElementInViewport(document.getElementById("HomeA-CTA-Hero-BookConsultation"))===!0&&count01===!0&&HomeA_CTA_Hero_BookConsultation_IMPSN();
  isElementInViewport(document.getElementById("HomeA-CTA-Hero-RequestCall"))===!0&&count02===!0&&HomeA_CTA_Hero_RequestCall_IMPSN();
  isElementInViewport(document.getElementById("HomeA-Body-BookConsultation"))===!0&&count03===!0&&HomeA_Body_BookConsultation_IMPSN();
  isElementInViewport(document.getElementById("HomeA-Body-RequestCall"))===!0&&count04===!0&&HomeA_Body_RequestCall_IMPSN();
  isElementInViewport(document.getElementById("HomeA-Body-FAQ"))===!0&&count05===!0&&HomeA_Body_FAQ_IMPSN();
  isElementInViewport(document.getElementById("HomeA-Body-FindCentre"))===!0&&count06===!0&&HomeA_Body_FindCentre_IMPSN();

//Home B - Impressions

  isElementInViewport(document.getElementById("HomeB-Body-BookConsultation"))===!0&&count07===!0&&HomeB_Body_BookConsultation_IMPSN();
  isElementInViewport(document.getElementById("HomeB-Body-RequestCall"))===!0&&count08===!0&&HomeB_Body_RequestCall_IMPSN();
  isElementInViewport(document.getElementById("HomeB-Body-FindCentre"))===!0&&count09===!0&&HomeB_Body_FindCentre_IMPSN();
  isElementInViewport(document.getElementById("HomeB-Body-FAQ"))===!0&&count10===!0&&HomeB_Body_FAQ_IMPSN();
  isElementInViewport(document.getElementById("HomeB-Mob-Body-BookConsultation"))===!0&&count11===!0&&HomeB_Mob_Body_BookConsultation_IMPSN();
  isElementInViewport(document.getElementById("HomeB-Mob-Body-FindCentre"))===!0&&count12===!0&&HomeB_Mob_Body_FindCentre_IMPSN();
  isElementInViewport(document.getElementById("HomeB-Mob-Body-FAQ"))===!0&&count13===!0&&HomeB_Mob_Body_FAQ_IMPSN();

//Global Header - Impressions

  isElementInViewport(document.getElementById("GlobalHeader-CTA-StartNowOrange"))===!0&&count14===!0&&GlobalHeader_CTA_StartNowOrange_IMPSN();
  isElementInViewport(document.getElementById("GlobalHeader-CTA-ClickToCall"))===!0&&count15===!0&&GlobalHeader_CTA_ClickToCall_IMPSN();
  isElementInViewport(document.getElementById("GlobalHeader-CTA-StartLiveChat"))===!0&&count16===!0&&GlobalHeader_CTA_StartLiveChat_IMPSN();

//Global Footer - Impressions

  isElementInViewport(document.getElementById("GlobalFooter-IconFacebook"))===!0&&count17===!0&&GlobalFooter_IconFacebook_IMPSN();
  isElementInViewport(document.getElementById("GlobalFooter-IconInstagram"))===!0&&count18===!0&&GlobalFooter_IconInstagram_IMPSN();
  isElementInViewport(document.getElementById("GlobalFooter-IconYouTube"))===!0&&count19===!0&&GlobalFooter_IconYouTube_IMPSN();
  isElementInViewport(document.getElementById("GlobalFooter-JCAH-Delivery"))===!0&&count20===!0&&GlobalFooter_JCAH_Delivery_IMPSN();
  isElementInViewport(document.getElementById("GlobalFooter-IconBlog"))===!0&&count21===!0&&GlobalFooter_IconBlog_IMPSN();

//Form 1 Impressions

  isElementInViewport(document.getElementById("mktoForm_2257"))===!0&&count22===!0&&mktoForm_2257_IMPSN();
  isElementInViewport(document.getElementById("mktoForm_2258"))===!0&&count23===!0&&mktoForm_2258_IMPSN();

//Form 2 Impressions

  isElementInViewport(document.getElementById("mktoForm_2259"))===!0&&count24===!0&&mktoForm_2259_IMPSN();
  isElementInViewport(document.getElementById("mktoForm_2260"))===!0&&count25===!0&&mktoForm_2260_IMPSN();

//Form 3 Impressions

  isElementInViewport(document.getElementById("mktoForm_1579"))===!0&&count26===!0&&mktoForm_1579_IMPSN();
  isElementInViewport(document.getElementById("mktoForm_1626"))===!0&&count27===!0&&mktoForm_1626_IMPSN();

//Form 4 Impressions

  isElementInViewport(document.getElementById("mktoForm_1589"))===!0&&count28===!0&&mktoForm_1589_IMPSN();
    
}


//IMPRESSION FUNCTIONS - HOME-A
function HomeA_CTA_Hero_BookConsultation_IMPSN() {
    

}

function HomeA_CTA_Hero_RequestCall_IMPSN() {
    

}

function HomeA_Body_BookConsultation_IMPSN() {
    

}

function HomeA_Body_RequestCall_IMPSN() {
    

}

function HomeA_Body_FAQ_IMPSN() {
    

}

function HomeA_Body_FindCentre_IMPSN() {
    

}



//IMPRESSION FUNCTIONS - HOME-B

function HomeB_Body_BookConsultation_IMPSN() {
    

}

function HomeB_Body_RequestCall_IMPSN() {
    

}

function HomeB_Body_FindCentre_IMPSN() {
    

}

function HomeB_Body_FAQ_IMPSN() {
    

}

function HomeB_Mob_Body_BookConsultation_IMPSN() {
    

}

function HomeB_Mob_Body_RequestCall_IMPSN() {
    

}

function HomeB_Mob_Body_FindCentre_IMPSN() {
    

}

function HomeB_Mob_Body_FAQ_IMPSN() {
    

}


//IMPRESSION FUNCTIONS - GLOBAL HEADER

function GlobalHeader_CTA_StartNowOrange_IMPSN() {
    

}

function GlobalHeader_CTA_ClickToCall_IMPSN() {
    

}

function GlobalHeader_CTA_StartLiveChat_IMPSN() {
    

}


//IMPRESSION FUNCTIONS - GLOBAL FOOTER

function GlobalFooter_IconFacebook_IMPSN() {
    

}

function GlobalFooter_IconInstagram_IMPSN() {
    

}

function GlobalFooter_IconYouTube_IMPSN() {
    

}

function GlobalFooter_JCAH_Delivery_IMPSN() {
    

}

function GlobalFooter_IconBlog_IMPSN() {
    

}



//IMPRESSION FUNCTIONS - FORM #1 /book-now-ab

function mktoForm_2257_IMPSN() {
    

}

function mktoForm_2258_IMPSN() {
    

}

//IMPRESSION FUNCTIONS - FORM #2 /book-now.html

function mktoForm_2259_IMPSN() {
    

}

function mktoForm_2260_IMPSN() {
    

}

//IMPRESSION FUNCTIONS - FORM #3 /start-today.html

function mktoForm_1579_IMPSN() {
    

}

function mktoForm_1626_IMPSN() {
    

}

//IMPRESSION FUNCTIONS - FORM #4 Subscribe to Inspire Magazine

function mktoForm_1589_IMPSN() {
    

}

//////////////////////////
//END IMPRESSION FUNCTIONS
//////////////////////////

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



