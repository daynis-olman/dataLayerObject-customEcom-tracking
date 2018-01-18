//SETUP: KICKSTART CLICK LISTENERS / SCROLL LISTENERS / FORM IMPUT LISTENERS / FORM SUBMIT LISTENERS

window.onload = function() {
//  cookieDrupalID(); Cookie logic 
    discoverRegionNPush();
    checkForNewImpressions(); //check for assets in viewport on pageload
    addClickListenersGroup();
    window.addEventListener('scroll', function(){checkForNewImpressions();}, true);
};

/* REGISTER OF ASSETS FOR IMPRESSIONS / CLICKS / INPUTS (BY ELEMENT IDs)
-------------------------------------------------------------------------------------------------------------------------
HOME-A
-------------------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                       | Impression Function Name                    |  Click Function Name
-------------------------------------------------------------------------------------------------------------------------
HomeA-CTA-Hero-BookConsultation      | HomeA_CTA_Hero_BookConsultation_IMPSN       | HomeA_CTA_Hero_BookConsultation_CLK

HomeA-CTA-Hero-RequestCall           | HomeA_CTA_Hero_RequestCall_IMPSN            | HomeA_CTA_Hero_RequestCall_CLK

HomeA-Body-BookConsultation          | HomeA_Body_BookConsultation_IMPSN           | HomeA_Body_BookConsultation_CLK

HomeA-Body-RequestCall               | HomeA_Body_RequestCall_IMPSN                | HomeA_Body_RequestCall_CLK

HomeA-Body-FAQ                       | HomeA_Body_FAQ_IMPSN                        | HomeA_Body_FAQ_CLK

HomeA-Body-FindCentre                | HomeA_Body_FindCentre_IMPSN                 | HomeA_Body_FindCentre_CLK

-------------------------------------------------------------------------------------------------------------------------
HOME-B
-------------------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                       | Impression Function Name                    | Click Function Name
-------------------------------------------------------------------------------------------------------------------------  
HomeB-Body-BookConsultation          | HomeB_Body_BookConsultation_IMPSN           | HomeB_Body_BookConsultation_CLK

HomeB-Body-RequestCall               | HomeB_Body_RequestCall_IMPSN                | HomeB_Body_RequestCall_CLK

HomeB-Body-FindCentre                | HomeB_Body_FindCentre_IMPSN                 | HomeB_Body_FindCentre_CLK

HomeB-Body-FAQ                       | HomeB_Body_FAQ_IMPSN                        | HomeB_Body_FAQ_CLK

HomeB-Mob-Body-BookConsultation      | HomeB_Mob_Body_BookConsultation_IMPSN       | HomeB_Mob_Body_BookConsultation_CLK

HomeB-Mob-Body-RequestCall           | HomeB_Mob_Body_RequestCall_IMPSN            | HomeB_Mob_Body_RequestCall_CLK
  
HomeB-Mob-Body-FindCentre            | HomeB_Mob_Body_FindCentre_IMPSN             | HomeB_Mob_Body_FindCentre_CLK

HomeB-Mob-Body-FAQ                   | HomeB_Mob_Body_FAQ_IMPSN                    | HomeB_Mob_Body_FAQ_CLK

-------------------------------------------------------------------------------------------------------------------------
GLOBAL HEADER
-------------------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                       | Impression Function Name                    | Click Function Name
-------------------------------------------------------------------------------------------------------------------------  
GlobalHeader-CTA-StartNowOrange      | GlobalHeader_CTA_StartNowOrange_IMPSN       | GlobalHeader_CTA_StartNowOrange_CLK

GlobalHeader-CTA-ClickToCall         | GlobalHeader_CTA_ClickToCall_IMPSN          | GlobalHeader_CTA_ClickToCall_CLK

GlobalHeader-CTA-StartLiveChat       | GlobalHeader_CTA_StartLiveChat_IMPSN        | GlobalHeader_CTA_StartLiveChat_CLK

-------------------------------------------------------------------------------------------------------------------------
GLOBAL FOOTER
-------------------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                       | Impression Function Name                    | Click Function Name
-------------------------------------------------------------------------------------------------------------------------  
GlobalFooter-IconFacebook            | GlobalFooter_IconFacebook_IMPSN             | GlobalFooter_IconFacebook_CLK

GlobalFooter-IconInstagram           | GlobalFooter_IconInstagram_IMPSN            | GlobalFooter_IconInstagram_CLK

GlobalFooter-IconYouTube             | GlobalFooter_IconYouTube_IMPSN              | GlobalFooter_IconYouTube_CLK

GlobalFooter-JCAH-Delivery           | GlobalFooter_JCAH_Delivery_IMPSN            | GlobalFooter_JCAH_Delivery_CLK

GlobalFooter-IconBlog                | GlobalFooter_IconBlog_IMPSN                 | GlobalFooter_IconBlog_CLK

-------------------------------------------------------------------------------------------------------------------------
CONVERSION FORMS 
-------------------------------------------------------------------------------------------------------------------------
FORM #1 /book-now-ab
-------------------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function   | OnFocus Function     | Submit Function             
-------------------------------------------------------------------------------------------------------------------------  
mktoForm_2257 [au]    |  mktoForm_2257_IMPSN  | xmktoForm_2257_Focus | xmktoForm_2257_Submit                
mktoForm_2258 [nz]    |  mktoForm_2258_IMPSN  | xmktoForm_2258_Focus | xmktoForm_2258_Submit 
-------------------------------------------------------------------------------------------------------------------------
FORM #2 /book-now.html
-------------------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function   | OnFocus Function     | Submit Function             
-------------------------------------------------------------------------------------------------------------------------  
mktoForm_2259 [au]    |  mktoForm_2259_IMPSN  | xmktoForm_2259_Focus | xmktoForm_2259_Submit                
mktoForm_2260 [nz]    |  mktoForm_2260_IMPSN  | xmktoForm_2260_Focus | xmktoForm_2260_Submit 
-------------------------------------------------------------------------------------------------------------------------
FORM #3 /start-today.html
-------------------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function   | OnFocus Function     | Submit Function             
-------------------------------------------------------------------------------------------------------------------------  
mktoForm_1579 [au]    |  mktoForm_1579_IMPSN  | xmktoForm_1579_Focus | xmktoForm_1579_Submit                
mktoForm_1626 [nz]    |  mktoForm_1626_IMPSN  | xmktoForm_1626_Focus | xmktoForm_1626_Submit 
-------------------------------------------------------------------------------------------------------------------------
FORM #4 Subscribe to Inspire Magazine
-------------------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function   | OnFocus Function      | Submit Function             
-------------------------------------------------------------------------------------------------------------------------  
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
        
//Home A - Clicks listeners

  null!=document.getElementById("HomeA-CTA-Hero-BookConsultation")&&
  document.getElementById("HomeA-CTA-Hero-BookConsultation").addEventListener("click",HomeA_CTA_Hero_BookConsultation_CLK,!1);

  null!=document.getElementById("HomeA-CTA-Hero-RequestCall")&&
  document.getElementById("HomeA-CTA-Hero-RequestCall").addEventListener("click",HomeA_CTA_Hero_RequestCall_CLK,!1);

  null!=document.getElementById("HomeA-Body-BookConsultation")&&
  document.getElementById("HomeA-Body-BookConsultation").addEventListener("click",HomeA_Body_BookConsultation_CLK,!1);

  null!=document.getElementById("HomeA-Body-RequestCall")&&
  document.getElementById("HomeA-Body-RequestCall").addEventListener("click",HomeA_Body_RequestCall_CLK,!1);

  null!=document.getElementById("HomeA-Body-FAQ")&&
  document.getElementById("HomeA-Body-FAQ").addEventListener("click",HomeA_Body_FAQ_CLK,!1);

  null!=document.getElementById("HomeA-Body-FindCentre")&&
  document.getElementById("HomeA-Body-FindCentre").addEventListener("click",HomeA_Body_FindCentre_CLK,!1);

//Home B - Clicks listeners

  null!=document.getElementById("HomeB-Body-BookConsultation")&&
  document.getElementById("HomeB-Body-BookConsultation").addEventListener("click",HomeB_Body_BookConsultation_CLK,!1);

  null!=document.getElementById("HomeB-Body-RequestCall")&&
  document.getElementById("HomeB-Body-RequestCall").addEventListener("click",HomeB_Body_RequestCall_CLK,!1);

  null!=document.getElementById("HomeB-Body-FindCentre")&&
  document.getElementById("HomeB-Body-FindCentre").addEventListener("click",HomeB_Body_FindCentre_CLK,!1);

  null!=document.getElementById("HomeB-Body-FAQ")&&
  document.getElementById("HomeB-Body-FAQ").addEventListener("click",HomeB_Body_FAQ_CLK,!1);

  null!=document.getElementById("HomeB-Mob-Body-BookConsultation")&&
  document.getElementById("HomeB-Mob-Body-BookConsultation").addEventListener("click",HomeB_Mob_Body_BookConsultation_CLK,!1);

  null!=document.getElementById("HomeB-Mob-Body-RequestCall")&&
  document.getElementById("HomeB-Mob-Body-RequestCall").addEventListener("click",HomeB_Mob_Body_RequestCall_CLK,!1);

  null!=document.getElementById("HomeB-Mob-Body-FindCentre")&&
  document.getElementById("HomeB-Mob-Body-FindCentre").addEventListener("click",HomeB_Mob_Body_FindCentre_CLK,!1);

  null!=document.getElementById("HomeB-Mob-Body-FAQ")&&
  document.getElementById("HomeB-Mob-Body-FAQ").addEventListener("click",HomeB_Mob_Body_FAQ_CLK,!1);

//Global Header - Clicks listeners

  null!=document.getElementById("GlobalHeader-CTA-StartNowOrange")&&
  document.getElementById("GlobalHeader-CTA-StartNowOrange").addEventListener("click",GlobalHeader_CTA_StartNowOrange_CLK,!1);

  null!=document.getElementById("GlobalHeader-CTA-ClickToCall")&&
  document.getElementById("GlobalHeader-CTA-ClickToCall").addEventListener("click",GlobalHeader_CTA_ClickToCall_CLK,!1);

  null!=document.getElementById("GlobalHeader-CTA-StartLiveChat")&&
  document.getElementById("GlobalHeader-CTA-StartLiveChat").addEventListener("click",GlobalHeader_CTA_StartLiveChat_CLK,!1);

//Global Footer - Clicks listeners

  null!=document.getElementById("GlobalFooter-IconFacebook")&&
  document.getElementById("GlobalFooter-IconFacebook").addEventListener("click",GlobalFooter_IconFacebook_CLK,!1);

  null!=document.getElementById("GlobalFooter-IconInstagram")&&
  document.getElementById("GlobalFooter-IconInstagram").addEventListener("click",GlobalFooter_IconInstagram_CLK,!1);

  null!=document.getElementById("GlobalFooter-IconYouTube")&&
  document.getElementById("GlobalFooter-IconYouTube").addEventListener("click",GlobalFooter_IconYouTube_CLK,!1);

  null!=document.getElementById("GlobalFooter-JCAH-Delivery")&&
  document.getElementById("GlobalFooter-JCAH-Delivery").addEventListener("click",GlobalFooter_JCAH_Delivery_CLK,!1);

  null!=document.getElementById("GlobalFooter-IconBlog")&&
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
   
if (document.getElementById("HomeA-CTA-Hero-BookConsultation") !=null ) 
    {isElementInViewport(document.getElementById("HomeA-CTA-Hero-BookConsultation"))===!0&&count01===!0&&HomeA_CTA_Hero_BookConsultation_IMPSN(); }; */

    
//Home A - Impression listeners
    
    
  null!=document.getElementById("HomeA-CTA-Hero-BookConsultation")&&
  isElementInViewport(document.getElementById("HomeA-CTA-Hero-BookConsultation"))===!0&&count01===!0&&HomeA_CTA_Hero_BookConsultation_IMPSN();
   
  null!=document.getElementById("HomeA-CTA-Hero-BookConsultation")&&
  isElementInViewport(document.getElementById("HomeA-CTA-Hero-BookConsultation"))===!0&&count01===!0&&HomeA_CTA_Hero_BookConsultation_IMPSN();
  
  null!=document.getElementById("HomeA-CTA-Hero-RequestCall")&&
  isElementInViewport(document.getElementById("HomeA-CTA-Hero-RequestCall"))===!0&&count02===!0&&HomeA_CTA_Hero_RequestCall_IMPSN();
  
  null!=document.getElementById("HomeA-Body-BookConsultation")&&
  isElementInViewport(document.getElementById("HomeA-Body-BookConsultation"))===!0&&count03===!0&&HomeA_Body_BookConsultation_IMPSN();
 
  null!=document.getElementById("HomeA-Body-RequestCall")&&
  isElementInViewport(document.getElementById("HomeA-Body-RequestCall"))===!0&&count04===!0&&HomeA_Body_RequestCall_IMPSN();
  
  null!=document.getElementById("HomeA-Body-FAQ")&&
  isElementInViewport(document.getElementById("HomeA-Body-FAQ"))===!0&&count05===!0&&HomeA_Body_FAQ_IMPSN();
  
  null!=document.getElementById("HomeA-Body-FindCentre")&&
  isElementInViewport(document.getElementById("HomeA-Body-FindCentre"))===!0&&count06===!0&&HomeA_Body_FindCentre_IMPSN();

//Home B - Impression listeners
    
  null!=document.getElementById("HomeB-Body-BookConsultation")&&
  isElementInViewport(document.getElementById("HomeB-Body-BookConsultation"))===!0&&count07===!0&&HomeB_Body_BookConsultation_IMPSN();

  null!=document.getElementById("HomeB-Body-RequestCall")&&
  isElementInViewport(document.getElementById("HomeB-Body-RequestCall"))===!0&&count08===!0&&HomeB_Body_RequestCall_IMPSN();

  null!=document.getElementById("HomeB-Body-FindCentre")&&
  isElementInViewport(document.getElementById("HomeB-Body-FindCentre"))===!0&&count09===!0&&HomeB_Body_FindCentre_IMPSN();
  
  null!=document.getElementById("HomeB-Body-FAQ")&&
  isElementInViewport(document.getElementById("HomeB-Body-FAQ"))===!0&&count10===!0&&HomeB_Body_FAQ_IMPSN();
  
  null!=document.getElementById("HomeB-Mob-Body-BookConsultation")&&
  isElementInViewport(document.getElementById("HomeB-Mob-Body-BookConsultation"))===!0&&count11===!0&&HomeB_Mob_Body_BookConsultation_IMPSN();

  null!=document.getElementById("HomeB-Mob-Body-FindCentre")&&  
  isElementInViewport(document.getElementById("HomeB-Mob-Body-FindCentre"))===!0&&count12===!0&&HomeB_Mob_Body_FindCentre_IMPSN();
  
  null!=document.getElementById("HomeB-Mob-Body-FAQ")&&
  isElementInViewport(document.getElementById("HomeB-Mob-Body-FAQ"))===!0&&count13===!0&&HomeB_Mob_Body_FAQ_IMPSN();

//Global Header - Impression listeners

  null!=document.getElementById("GlobalHeader-CTA-StartNowOrange")&&
  isElementInViewport(document.getElementById("GlobalHeader-CTA-StartNowOrange"))===!0&&count14===!0&&GlobalHeader_CTA_StartNowOrange_IMPSN();

  null!=document.getElementById("GlobalHeader-CTA-ClickToCall")&&
  isElementInViewport(document.getElementById("GlobalHeader-CTA-ClickToCall"))===!0&&count15===!0&&GlobalHeader_CTA_ClickToCall_IMPSN();

  null!=document.getElementById("GlobalHeader-CTA-StartLiveChat")&&
  isElementInViewport(document.getElementById("GlobalHeader-CTA-StartLiveChat"))===!0&&count16===!0&&GlobalHeader_CTA_StartLiveChat_IMPSN();

//Global Footer - Impression listeners

  null!=document.getElementById("GlobalFooter-IconFacebook")&&
  isElementInViewport(document.getElementById("GlobalFooter-IconFacebook"))===!0&&count17===!0&&GlobalFooter_IconFacebook_IMPSN();

  null!=document.getElementById("GlobalFooter-IconInstagram")&&
  isElementInViewport(document.getElementById("GlobalFooter-IconInstagram"))===!0&&count18===!0&&GlobalFooter_IconInstagram_IMPSN();

  null!=document.getElementById("GlobalFooter-IconYouTube")&&
  isElementInViewport(document.getElementById("GlobalFooter-IconYouTube"))===!0&&count19===!0&&GlobalFooter_IconYouTube_IMPSN();

  null!=document.getElementById("GlobalFooter-JCAH-Delivery")&&
  isElementInViewport(document.getElementById("GlobalFooter-JCAH-Delivery"))===!0&&count20===!0&&GlobalFooter_JCAH_Delivery_IMPSN();

  null!=document.getElementById("GlobalFooter-IconBlog")&&
  isElementInViewport(document.getElementById("GlobalFooter-IconBlog"))===!0&&count21===!0&&GlobalFooter_IconBlog_IMPSN();

//Form 1 Impression listeners

  null!=document.getElementById("mktoForm_2257")&&
  isElementInViewport(document.getElementById("mktoForm_2257"))===!0&&count22===!0&&mktoForm_2257_IMPSN();

  null!=document.getElementById("mktoForm_2258")&&
  isElementInViewport(document.getElementById("mktoForm_2258"))===!0&&count23===!0&&mktoForm_2258_IMPSN();

//Form 2 Impression listeners

  null!=document.getElementById("mktoForm_2259")&&
  isElementInViewport(document.getElementById("mktoForm_2259"))===!0&&count24===!0&&mktoForm_2259_IMPSN();

  null!=document.getElementById("mktoForm_2260")&&
  isElementInViewport(document.getElementById("mktoForm_2260"))===!0&&count25===!0&&mktoForm_2260_IMPSN();

//Form 3 Impression listeners

  null!=document.getElementById("mktoForm_1579")&&
  isElementInViewport(document.getElementById("mktoForm_1579"))===!0&&count26===!0&&mktoForm_1579_IMPSN();

  null!=document.getElementById("mktoForm_1626")&&
  isElementInViewport(document.getElementById("mktoForm_1626"))===!0&&count27===!0&&mktoForm_1626_IMPSN();

//Form 4 Impression listeners

  null!=document.getElementById("mktoForm_1589")&&
  isElementInViewport(document.getElementById("mktoForm_1589"))===!0&&count28===!0&&mktoForm_1589_IMPSN();
    
}

//////////////////////////
//START IMPRESSION FUNCTIONS
//////////////////////////


//IMPRESSION FUNCTIONS - HOME-A
function HomeA_CTA_Hero_BookConsultation_IMPSN() {
    
    dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeA_CTA_Hero_BookConsultation',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });   
    
count01=!1; // set counter to false
}

function HomeA_CTA_Hero_RequestCall_IMPSN() {

    dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeA_CTA_Hero_RequestCall',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count02=!1; // set counter to false

}

function HomeA_Body_BookConsultation_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeA_Body_BookConsultation',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count03=!1; // set counter to false

}

function HomeA_Body_RequestCall_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeA_Body_RequestCall',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count04=!1; // set counter to false

}

function HomeA_Body_FAQ_IMPSN() {
    
     dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeA_Body_FAQ',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count05=!1; // set counter to false

}

function HomeA_Body_FindCentre_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeA_Body_FindCentre',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count06=!1; // set counter to false

}



//IMPRESSION FUNCTIONS - HOME-B

function HomeB_Body_BookConsultation_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeB_Body_BookConsultation',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count07=!1; // set counter to false

}

function HomeB_Body_RequestCall_IMPSN() {
    
     dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeB_Body_RequestCall',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       
    count08=!1; // set counter to false

}

function HomeB_Body_FindCentre_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeB_Body_FindCentre',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count09=!1; // set counter to false

}

function HomeB_Body_FAQ_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeB_Body_FAQ',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count10=!1; // set counter to false

}

function HomeB_Mob_Body_BookConsultation_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeB_Mob_Body_BookConsultation',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count11=!1; // set counter to false

}

function HomeB_Mob_Body_RequestCall_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeB_Mob_Body_RequestCall',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count12=!1; // set counter to false

}

function HomeB_Mob_Body_FindCentre_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeB_Mob_Body_FindCentre',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count12=!1; // set counter to false

}

function HomeB_Mob_Body_FAQ_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'HomeB_Mob_Body_FAQ',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count13=!1; // set counter to false

}


//IMPRESSION FUNCTIONS - GLOBAL HEADER

function GlobalHeader_CTA_StartNowOrange_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'GlobalHeader_CTA_StartNowOrange',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count14=!1; // set counter to false

}

function GlobalHeader_CTA_ClickToCall_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'GlobalHeader_CTA_ClickToCall',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count15=!1; // set counter to false

}

function GlobalHeader_CTA_StartLiveChat_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'GlobalHeader_CTA_StartLiveChat',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count16=!1; // set counter to false

}


//IMPRESSION FUNCTIONS - GLOBAL FOOTER

function GlobalFooter_IconFacebook_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'GlobalFooter_IconFacebook',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count17=!1; // set counter to false

}

function GlobalFooter_IconInstagram_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'GlobalFooter_IconInstagram',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count18=!1; // set counter to false

}

function GlobalFooter_IconYouTube_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'GlobalFooter_IconYouTube',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       


    count19=!1; // set counter to false

}

function GlobalFooter_JCAH_Delivery_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'GlobalFooter_JCAH_Delivery',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count20=!1; // set counter to false

}

function GlobalFooter_IconBlog_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'GlobalFooter_IconBlog',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count21=!1; // set counter to false

}



//IMPRESSION FUNCTIONS - FORM #1 /book-now-ab

function mktoForm_2257_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'mktoForm_2257',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count22=!1; // set counter to false

}

function mktoForm_2258_IMPSN() {

       dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'mktoForm_2258',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count23=!1; // set counter to false

}

//IMPRESSION FUNCTIONS - FORM #2 /book-now.html

function mktoForm_2259_IMPSN() {

       dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'mktoForm_2259',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    
    count24=!1; // set counter to false

}

function mktoForm_2260_IMPSN() {
    
       dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'mktoForm_2260',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count25=!1; // set counter to false

}

//IMPRESSION FUNCTIONS - FORM #3 /start-today.html

function mktoForm_1579_IMPSN() {
    
       dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'mktoForm_1579',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count26=!1; // set counter to false

}

function mktoForm_1626_IMPSN() {
    
       dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'mktoForm_1626',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count27=!1; // set counter to false

}

//IMPRESSION FUNCTIONS - FORM #4 Subscribe to Inspire Magazine

function mktoForm_1589_IMPSN() {
    
       dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': '',
            'impressions':[
                {
                'name': 'mktoForm_1589',
                'id': '1',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 1
                }
            ]
        }
    });       

    count28=!1; // set counter to false

}

//////////////////////////
//END IMPRESSION FUNCTIONS
//////////////////////////







//////////////////////////
//START CLICK FUNCTIONS
//////////////////////////



//CLICK FUNCTIONS - HOME-A
function HomeA_CTA_Hero_BookConsultation_CLK() {

   //INSERT dataLayer.push here
    

}

function HomeA_CTA_Hero_RequestCall_CLK() {
    
   //INSERT dataLayer.push here


}

function HomeA_Body_BookConsultation_CLK() {
    
   //INSERT dataLayer.push here


}

function HomeA_Body_RequestCall_CLK() {
    
   //INSERT dataLayer.push here


}

function HomeA_Body_FAQ_CLK() {
    
   //INSERT dataLayer.push here


}

function HomeA_Body_FindCentre_CLK() {
    
   //INSERT dataLayer.push here


}



//CLICK FUNCTIONS - HOME-B

function HomeB_Body_BookConsultation_CLK() {
    
   //INSERT dataLayer.push here


}

function HomeB_Body_RequestCall_CLK() {
    
   //INSERT dataLayer.push here


}

function HomeB_Body_FindCentre_CLK() {
    
   //INSERT dataLayer.push here


}

function HomeB_Body_FAQ_CLK() {
    
   //INSERT dataLayer.push here


}

function HomeB_Mob_Body_BookConsultation_CLK() {
    
   //INSERT dataLayer.push here


}

function HomeB_Mob_Body_RequestCall_CLK() {

   //INSERT dataLayer.push here
    

}

function HomeB_Mob_Body_FindCentre_CLK() {
    
   //INSERT dataLayer.push here


}

function HomeB_Mob_Body_FAQ_CLK() {
    
   //INSERT dataLayer.push here


}


//CLICK FUNCTIONS - GLOBAL HEADER

function GlobalHeader_CTA_StartNowOrange_CLK() {
    
   //INSERT dataLayer.push here


}

function GlobalHeader_CTA_ClickToCall_CLK() {
    
   //INSERT dataLayer.push here


}

function GlobalHeader_CTA_StartLiveChat_CLK() {
    
   //INSERT dataLayer.push here


}


//CLICK FUNCTIONS - GLOBAL FOOTER

function GlobalFooter_IconFacebook_CLK() {
    
   //INSERT dataLayer.push here


}

function GlobalFooter_IconInstagram_CLK() {
    
   //INSERT dataLayer.push here


}

function GlobalFooter_IconYouTube_CLK() {
    
   //INSERT dataLayer.push here


}

function GlobalFooter_JCAH_Delivery_CLK() {
    
   //INSERT dataLayer.push here


}

function GlobalFooter_IconBlog_CLK() {
    
   //INSERT dataLayer.push here


}


//////////////////////////
//END CLICK FUNCTIONS
//////////////////////////




//FUNCTION: Determine if an element is in the visible viewport
function isElementInViewport(el) {
  if (!!el) { 
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
  }
}


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
