//SETUP: KICKSTART CLICK LISTENERS / SCROLL LISTENERS / FORM IMPUT LISTENERS / FORM SUBMIT LISTENERS

window.onload = function() {
    retrieve_or_make_Cookie();             // Check if cookie exists. !=, plant it and store value. 
    discoverCurrencyPlusRegionNPush();     // Derive and push currency from TLD index window.localtion.href. Also push DrupalID from cookie.
    checkForNewImpressions();              // Check for assets immediately in viewport on pageload
    addClickListenersGroup();              // Start listening for asset clicks 
    checkFormExistence_nTrackFocus_nTrackSubmit(); // Start listening and actioning form hover, input & submit events (all forms)
    window.addEventListener('scroll', function(){checkForNewImpressions();}, true); // Re-check form & asset impressions on scroll
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
ELEMENT-ID            | Impression Function   | OnFocus Function    | onInput Function    | onSubmit Function           
-------------------------------------------------------------------------------------------------------------------------  
mktoForm_2257 [au]    |  mktoForm_2257_IMPSN  | mktoForm_2257_Focus | mktoForm_2257_Input | mktoForm_2257_Submit             
mktoForm_2258 [nz]    |  mktoForm_2258_IMPSN  | mktoForm_2258_Focus | mktoForm_2258_Input | mktoForm_2258_Submit
-------------------------------------------------------------------------------------------------------------------------
FORM #2 /book-now.html
-------------------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function   | OnFocus Function    | onInput Function    | onSubmit Function             
----------------------------------------------------------------------------------------------- --------------------------  
mktoForm_2259 [au]    |  mktoForm_2259_IMPSN  | mktoForm_2259_Focus | mktoForm_2259_Input | mktoForm_2259_Submit            
mktoForm_2260 [nz]    |  mktoForm_2260_IMPSN  | mktoForm_2260_Focus | mktoForm_2260_Input | mktoForm_2260_Submit
-------------------------------------------------------------------------------------------------------------------------
FORM #3 /start-today.html
-------------------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function   | OnFocus Function    | onInput Function    | onSubmit Function            
-------------------------------------------------------------------------------------------------------------------------  
mktoForm_1579 [au]    |  mktoForm_1579_IMPSN  | mktoForm_1579_Focus | mktoForm_1579_Input | mktoForm_1579_Submit             
mktoForm_1626 [nz]    |  mktoForm_1626_IMPSN  | mktoForm_1626_Focus | mktoForm_1626_Input | mktoForm_1626_Submit
-------------------------------------------------------------------------------------------------------------------------
FORM #4 Subscribe to Inspire Magazine
-------------------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function   | OnFocus Function    | onInput Function    | onSubmit Function      
-------------------------------------------------------------------------------------------------------------------------  
mktoForm_1589 [au&nz] |  mktoForm_1589_IMPSN  | mktoForm_1589_Focus | mktoForm_1589_Input | mktoForm_1589_Submit            


ENHANCED E-COMMERCE LOGIC FOR THIS APPLICATION:

DOM Element IMPSN  =  GTM dataLayer.push {'event': 'productImpressions'};   
DOM Element CLICK  =  GTM dataLayer.push {'event': 'productClick'};        =  ProductID:
DOM FORM Impressn  =  GTM dataLayer.push {'event': 'productDetail'};       =  ProductID:               
DOM FORM Input     =  GTM dataLayer.push {'event': 'productAdd'};          =  ProductID:
DOM FORM Submit    =  GTM dataLayer.push {'event': 'checkout'};            =  ProductID:
DOM THANKU PAGE    =  GTM dataLayer.push {'event': 'purchase'};            =  ProductID:


PRODUCT ID REGISTER:

ProductID = 10001 = Book Consultation
ProductID = 20001 = Request Call
ProductID = 30001 = Centre Locator
ProductID = 40001 = Direct dial
ProductID = 50001 = Live Chat
ProductID = 60001 = GetInspired Subscribe

*/


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

//Discover Region Currency + store as String
var currencyByRegion = "RussianRuble"; 

//Discover Page Path + store as String
var currentUrl = window.location.pathname;

//DrupalCookie ID + store as String
var drupalCookieID = 'RusskiID123';

//////////////
//COOKIE LOGIC
//////////////

//check if cookie exists. Returns cookie value or null
value_or_null = (document.cookie.match(/^(?:.*;)?\s*DrupalID\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1] 

function retrieve_or_make_Cookie() {
    //If cookie exists already, drupalCookieID is set to existing cookie value
    if (value_or_null !== null) {drupalCookieID = value_or_null;}
    //If cookie does not exist, generate new DrupalID, Plant Cookie, drupalCookieID is set to cookie value
    else {drupalCookieID = generateDrupalID(); SetCookie("DrupalID",drupalCookieID,365);}
}

//Drupal ID Generator function
function generateDrupalID() {
    var date = Date.now(); if (date <= generateDrupalID.previous) {date = ++generateDrupalID.previous;
    } else {generateDrupalID.previous = date; }return date;}generateDrupalID.previous = 0; 

//Drupal ID Cookie Planting function
function SetCookie(cookieName,cookieValue,nDays) {
    var today = new Date(); var expire = new Date();
    if (nDays==null || nDays==0) nDays=1;expire.setTime(today.getTime() + 3600000*24*nDays);
    document.cookie = cookieName+"="+escape(cookieValue)+ ";expires="+expire.toGMTString();}



//FUNCTION: Discover region + dataLayer push
function discoverCurrencyPlusRegionNPush() {

    (function($) {
        // Required to override html content inside a view 
        $(window).load(function() {
            if(window.location.href.indexOf(".co.nz") > -1) {
                
                dataLayer.push({
                    'event': 'gaEvent',
                    'userid' : drupalCookieID,
                    'userCrmId' : '',
                    'userSegment' : '',
                    'region' : 'NZ',
                    'pageType' : currentUrl
                });

                currencyByRegion = "NZD"; //sets currency value for all events on the page
                console.log("NZ Region set");
                console.log("NZ Currency set");
            }
            
            if(window.location.href.indexOf(".com.au") > -1) { 

                dataLayer.push({
                    'event': 'gaEvent',
                    'userid' : drupalCookieID,
                    'userCrmId' : '',
                    'userSegment' : '',
                    'region' : 'AU',
                    'pageType' : currentUrl
                });

                currencyByRegion = "AUD"; //sets currency value for all events on the page
                console.log("NZ Region set");
                console.log("NZ Currency set");

            }
        });  
    })(jQuery);
    
}


    
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
    
/* Impression logic re-written to fit in one line for readability. Previous longer versions included below.
   
if (document.getElementById("HomeA-CTA-Hero-BookConsultation") !=null ) 
    {isElementInViewport(document.getElementById("HomeA-CTA-Hero-BookConsultation"))===!0&&count01===!0&&HomeA_CTA_Hero_BookConsultation_IMPSN(); }; 

    FURTHER SIMPLIFIED 
    if (document.getElementById("HomeA-CTA-Hero-BookConsultation") !=null ) 
    {
        if (count23 !== false) {
            document.getElementById("mktoForm_2257").addEventListener("input",function(){mktoForm_2257_Focus()})
            }
    }
    */
    
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

////////////////////////////
//START IMPRESSION FUNCTIONS
//////////////////////////


//IMPRESSION FUNCTIONS - HOME-A
function HomeA_CTA_Hero_BookConsultation_IMPSN() {
    
    dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Book Consultation',
                'id': '10001',
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
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Request Call',
                'id': '20001',
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
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Book Consultation',
                'id': '10001',
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
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Request Call',
                'id': '20001',
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

    /*
        dataLayer.push({
        'event': 'non-cta-assets',
        'eventCategory': 'Impression', 
        'eventAction':   'Impression',
        'eventLabel': 'FAQ'
        });

    */

    count05=!1; // set counter to false

}

function HomeA_Body_FindCentre_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Centre Locator',
                'id': '30001',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 2
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
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Book Consultation',
                'id': '10001',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 2
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
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Request Call',
                'id': '20001',
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
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Centre Locator',
                'id': '30001',
                'price': '',
                'brand': 'Jenny Craig',
                'category': 'lead',
                'variant': '',
                'list': currentUrl,
                'position': 2
                }
            ]
        }
    });       

    count09=!1; // set counter to false

}

function HomeB_Body_FAQ_IMPSN() {
    
    /*
        dataLayer.push({
        'event': 'non-cta-assets',
        'eventCategory': 'Impression', 
        'eventAction':   'Impression',
        'eventLabel': 'FAQ'
        });

    */

    count10=!1; // set counter to false

}

function HomeB_Mob_Body_BookConsultation_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Book Consultation',
                'id': '10001',
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
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Request Call',
                'id': '20001',
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
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Centre Locator',
                'id': '30003',
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
    
    /*
        dataLayer.push({
        'event': 'non-cta-assets',
        'eventCategory': 'Impression', 
        'eventAction':   'Impression',
        'eventLabel': 'FAQ'
        });

    */

    count13=!1; // set counter to false

}


//IMPRESSION FUNCTIONS - GLOBAL HEADER

function GlobalHeader_CTA_StartNowOrange_IMPSN() {
    
        dataLayer.push({
        'event': 'productImpressions',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Book Consultation',
                'id': '10001',
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
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Direct dial',
                'id': '40001',
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
            'currencyCode': currencyByRegion,
            'impressions':[
                {
                'name': 'Live Chat',
                'id': '50001',
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
        'event': 'social',
        'socialNetwork': 'Facebook',
        'socialAction': 'Icon seen',
        'socialTarget': 'https://www.facebook.com/jennycraigausnz?sk=wall'
        });

    count17=!1; // set counter to false

}

function GlobalFooter_IconInstagram_IMPSN() {
    
        dataLayer.push({
        'event': 'social',
        'socialNetwork': 'Instagram',
        'socialAction': 'Icon seen',
        'socialTarget': 'http://instagram.com/jennycraigausnz'
        });

    count18=!1; // set counter to false

}

function GlobalFooter_IconYouTube_IMPSN() {
    
        dataLayer.push({
        'event': 'social',
        'socialNetwork': 'YouTube',
        'socialAction': 'Icon seen',
        'socialTarget': 'https://www.youtube.com/user/jennycraigausnz'
        });


    count19=!1; // set counter to false

}

function GlobalFooter_JCAH_Delivery_IMPSN() {
    
    /*
        dataLayer.push({
        'event': 'non-cta-assets',
        'eventCategory': 'Impression', 
        'eventAction':   'Impression',
        'eventLabel': 'JCAH-Footer'
        });

    */

    count20=!1; // set counter to false

}

function GlobalFooter_IconBlog_IMPSN() {
    
        dataLayer.push({
        'event': 'social',
        'socialNetwork': 'JC Blog',
        'socialAction': 'Icon seen',
        'socialTarget': '/blog'
        });

    count21=!1; // set counter to false

}



//IMPRESSION FUNCTIONS - FORM #1 /book-now-ab

function mktoForm_2257_IMPSN() {
    
        dataLayer.push({
            'pageType': 'Booking Form',
            'event': 'productDetail',
            'ecommerce': {
                'currencyCode': currencyByRegion,
                'detail': {
                    'actionField': {'list': ''},
                    'products': [{
                        'name': 'Book Consultation',
                        'id': '10001',
                        'price': '',
                        'brand': 'Jenny Craig',
                        'category': 'lead',
                        'variant': ''
                    }]
                }
            }
        });

    count22=!1; // set counter to false

}

function mktoForm_2258_IMPSN() {

       dataLayer.push({
            'pageType': 'Booking Form',
            'event': 'productDetail',
            'ecommerce': {
                'currencyCode': currencyByRegion,
                'detail': {
                    'actionField': {'list': ''},
                    'products': [{
                        'name': 'Book Consultation',
                        'id': '10001',
                        'price': '',
                        'brand': 'Jenny Craig',
                        'category': 'lead',
                        'variant': ''
                    }]
                }
            }
        });

    count23=!1; // set counter to false

}

//IMPRESSION FUNCTIONS - FORM #2 /book-now.html

function mktoForm_2259_IMPSN() {

       dataLayer.push({
            'pageType': 'Booking Form',
            'event': 'productDetail',
            'ecommerce': {
                'currencyCode': currencyByRegion,
                'detail': {
                    'actionField': {'list': ''},
                    'products': [{
                        'name': 'Book Consultation',
                        'id': '10001',
                        'price': '',
                        'brand': 'Jenny Craig',
                        'category': 'lead',
                        'variant': ''
                    }]
                }
            }
        });
    
    count24=!1; // set counter to false

}

function mktoForm_2260_IMPSN() {
    
      dataLayer.push({
            'pageType': 'Booking Form',
            'event': 'productDetail',
            'ecommerce': {
                'currencyCode': currencyByRegion,
                'detail': {
                    'actionField': {'list': ''},
                    'products': [{
                        'name': 'Book Consultation',
                        'id': '10001',
                        'price': '',
                        'brand': 'Jenny Craig',
                        'category': 'lead',
                        'variant': ''
                    }]
                }
            }
        });

    count25=!1; // set counter to false

}

//IMPRESSION FUNCTIONS - FORM #3 /start-today.html

function mktoForm_1579_IMPSN() {
    
     dataLayer.push({
            'pageType': 'Booking Form',
            'event': 'productDetail',
            'ecommerce': {
                'currencyCode': currencyByRegion,
                'detail': {
                    'actionField': {'list': ''},
                    'products': [{
                        'name': 'Request Call',
                        'id': '20001',
                        'price': '',
                        'brand': 'Jenny Craig',
                        'category': 'lead',
                        'variant': ''
                    }]
                }
            }
        });

    count26=!1; // set counter to false

}

function mktoForm_1626_IMPSN() {
    
       dataLayer.push({
            'pageType': 'Booking Form',
            'event': 'productDetail',
            'ecommerce': {
                'currencyCode': currencyByRegion,
                'detail': {
                    'actionField': {'list': ''},
                    'products': [{
                        'name': 'Request Call',
                        'id': '20001',
                        'price': '',
                        'brand': 'Jenny Craig',
                        'category': 'lead',
                        'variant': ''
                    }]
                }
            }
        });

    count27=!1; // set counter to false

}

//IMPRESSION FUNCTIONS - FORM #4 Subscribe to Inspire Magazine

function mktoForm_1589_IMPSN() {
    

dataLayer.push({
            'pageType': 'Booking Form',
            'event': 'productDetail',
            'ecommerce': {
                'currencyCode': currencyByRegion,
                'detail': {
                    'actionField': {'list': ''},
                    'products': [{
                        'name': 'GetInspired Subscribe',
                        'id': '60001',
                        'price': '',
                        'brand': 'Jenny Craig',
                        'category': 'lead',
                        'variant': ''
                    }]
                }
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

   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Book Consultation',
                    'id': '10001',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 1
                }]
            }
        }
   }); 

}

function HomeA_CTA_Hero_RequestCall_CLK() {
    
   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Request Call',
                    'id': '20001',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 1
                }]
            }
        }
   }); 

}

function HomeA_Body_BookConsultation_CLK() {
    
   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Book Consultation',
                    'id': '10001',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 2
                }]
            }
        }
   }); 

}

function HomeA_Body_RequestCall_CLK() {
    
   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Request Call',
                    'id': '20001',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 2
                }]
            }
        }
   }); 

}

function HomeA_Body_FAQ_CLK() {
    
    /*
        dataLayer.push({
        'event': 'non-cta-assets',
        'eventCategory': 'Click', 
        'eventAction':   'Click',
        'eventLabel': 'JCAH-Footer'
        });

    */

}

function HomeA_Body_FindCentre_CLK() {
    
   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Centre Locator',
                    'id': '30003',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 2
                }]
            }
        }
   }); 

}



//CLICK FUNCTIONS - HOME-B

function HomeB_Body_BookConsultation_CLK() {
    
   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Book Consultation',
                    'id': '10001',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 2
                }]
            }
        }
   }); 


}

function HomeB_Body_RequestCall_CLK() {
    
   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Request Call',
                    'id': '20001',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 2
                }]
            }
        }
   }); 


}

function HomeB_Body_FindCentre_CLK() {
    
   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Centre Locator',
                    'id': '30001',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 1
                }]
            }
        }
   }); 

    
}

function HomeB_Body_FAQ_CLK() {
    


}

function HomeB_Mob_Body_BookConsultation_CLK() {
    
   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Book Consultation',
                    'id': '10001',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 2
                }]
            }
        }
   }); 


}

function HomeB_Mob_Body_RequestCall_CLK() {

   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Request Call',
                    'id': '20001',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 2
                }]
            }
        }
   }); 

    
}

function HomeB_Mob_Body_FindCentre_CLK() {
    
   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Centre Locator',
                    'id': '30001',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 1
                }]
            }
        }
   }); 


}

function HomeB_Mob_Body_FAQ_CLK() {
    


}


//CLICK FUNCTIONS - GLOBAL HEADER

function GlobalHeader_CTA_StartNowOrange_CLK() {
    
   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Book Consultation',
                    'id': '10001',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 1
                }]
            }
        }
   }); 


}

function GlobalHeader_CTA_ClickToCall_CLK() {
    
   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Direct dial',
                    'id': '40001',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 1
                }]
            }
        }
   }); 


}

function GlobalHeader_CTA_StartLiveChat_CLK() {
    
   dataLayer.push({
       'event': 'productClick',
        'ecommerce': {
            'currencyCode': currencyByRegion,
            'click': {
                'actionField': {'list': currentUrl}, // Same as impression location
                'products': [{
                    'name': 'Live Chat',
                    'id': '50001',
                    'price': '',
                    'brand': 'Jenny Craig',
                    'category': 'lead',
                    'variant': '',
                    'position': 1
                }]
            }
        }
   }); 


}


//CLICK FUNCTIONS - GLOBAL FOOTER

function GlobalFooter_IconFacebook_CLK() {
    
        dataLayer.push({
        'event': 'social',
        'socialNetwork': 'Facebook',
        'socialAction': 'Click',
        'socialTarget': 'https://www.facebook.com/jennycraigausnz?sk=wall'
        });


}

function GlobalFooter_IconInstagram_CLK() {
    
        dataLayer.push({
        'event': 'social',
        'socialNetwork': 'Instagram',
        'socialAction': 'Click',
        'socialTarget': 'http://instagram.com/jennycraigausnz'
        });


}

function GlobalFooter_IconYouTube_CLK() {
    
        dataLayer.push({
        'event': 'social',
        'socialNetwork': 'YouTube',
        'socialAction': 'Click',
        'socialTarget': 'https://www.youtube.com/user/jennycraigausnz'
        });


}

function GlobalFooter_JCAH_Delivery_CLK() {
    
    

}

function GlobalFooter_IconBlog_CLK() { 
    
        dataLayer.push({
        'event': 'social',
        'socialNetwork': 'JC Blog',
        'socialAction': 'Click',
        'socialTarget': '/blog'
        });


}

//////////////////////////
//END CLICK FUNCTIONS
//////////////////////////





//////////////////////////////////////////////////
//START CONVERSION FORMS | TRACKING FOCUS & SUBMIT
//////////////////////////////////////////////////


//focus counters are part of onFocus functionality that is not part of
//the scope yet however added in for 
var focusCounter01=!0;     // form focus counter mktoForm_2257_Focus
var focusCounter02=!0;     // form focus counter mktoForm_2258_Focus
var focusCounter03=!0;     // form focus counter mktoForm_2259_Focus
var focusCounter04=!0;     // form focus counter mktoForm_2260_Focus
var focusCounter05=!0;     // form focus counter mktoForm_1579_Focus
var focusCounter06=!0;     // form focus counter mktoForm_1626_Focus
var focusCounter07=!0;     // form focus counter mktoForm_1589_Focus

var inputCounter01=!0;     // form input counter mktoForm_2257_Input
var inputCounter02=!0;     // form input counter mktoForm_2258_Input
var inputCounter03=!0;     // form input counter mktoForm_2259_Input
var inputCounter04=!0;     // form input counter mktoForm_2260_Input
var inputCounter05=!0;     // form input counter mktoForm_1579_Input
var inputCounter06=!0;     // form input counter mktoForm_1626_Input
var inputCounter07=!0;     // form input counter mktoForm_1589_Input


function checkFormExistence_nTrackFocus_nTrackSubmit() {
       
  //////////////////////////
  // BOOK-NOW-AB FORM LOGIC
  //////////////////////////
    
  /* BOOK-NOW-AB - FOCUS - AU - (Stable - Not Yet Required)

   null!=document.getElementById("mktoForm_2257")&& 
   isElementInViewport(document.getElementById("mktoForm_2257").addEventListener("focus",function(){mktoForm_2257_Focus()}));   
    
        function mktoForm_2257_Focus() {

            !1!==focusCounter01&&( //check counter

                    
                    
                //insert dataLayer.push here
      
                           
                
                
            focusCounter01=false) //set counter to false
            };
            
  */        

  /* BOOK-NOW-AB - FOCUS - NZ - (Stable - Not Yet Required)

    null!=document.getElementById("mktoForm_2258")&& 
    isElementInViewport(document.getElementById("mktoForm_2258").addEventListener("focus",function(){mktoForm_2258_Focus()}));   
    
         function mktoForm_2258_Focus() {

             !1!==focusCounter02&&( //check counter

                    
                    
                //insert dataLayer.push here
                     
                           
                
                
            focusCounter02=false) //set counter to false

            };
  */
  // BOOK-NOW-AB - INPUT - AU - GOLDEN VERSION!!!

    null!=document.getElementById("mktoForm_2257")&&!1!==inputCounter01&&
    isElementInViewport(document.getElementById("mktoForm_2257").addEventListener("input",function(){mktoForm_2257_Input()}));   
    
         function mktoForm_2257_Input() {                 

                    dataLayer.push({
                      'event': 'productAdd',
                        'ecommerce': {
                           'currencyCode':currencyByRegion,
                           'add': {
                                'actionField': {'list': undefined},
                                'products': {
                                    'name': 'Book Consultation',
                                    'id': '10001',
                                    'price': '',
                                    'brand': 'Jenny Craig',
                                    'category': 'lead',
                                    'quantity': 1,
                                    'variant': ''
                                    }
                                
                            }
                        }
                    });//end push   


                inputCounter01 = false;
             //set counter to false

            
         }
    
  // BOOK-NOW-AB - INPUT - NZ 

    null!=document.getElementById("mktoForm_2258")&&!1!==inputCounter02&&
    isElementInViewport(document.getElementById("mktoForm_2258").addEventListener("input",function(){mktoForm_2258_Input()}));   
    
         function mktoForm_2258_Input() {                 

                    dataLayer.push({
                      'event': 'productAdd',
                        'ecommerce': {
                           'currencyCode':currencyByRegion,
                           'add': {
                                'actionField': {'list': undefined},
                                'products': {
                                    'name': 'Book Consultation',
                                    'id': '10001',
                                    'price': '',
                                    'brand': 'Jenny Craig',
                                    'category': 'lead',
                                    'quantity': 1,
                                    'variant': ''
                                    }
                                
                            }
                        }
                    });//end push   


                inputCounter02 = false;
             //set counter to false

            
         }
    
  // BOOK-NOW-AB - SUBMIT - AU 

    null!=document.getElementById("mktoForm_2257")&& 
    isElementInViewport(document.getElementById("mktoForm_2257").addEventListener("submit",function(){mktoForm_2257_Submit()}));   
    
         function mktoForm_2257_Submit() {

             dataLayer.push({
                'event': 'checkout',
                 'ecommerce': {
                     'currencyCode': currencyByRegion,
                     'checkout': {
                         'actionField': {'step': 1, 'option': ''},
                         'products': [{
                            'name': 'Book Consultation',
                             'id': '10001',
                             'price': '',
                             'brand': 'Jenny Craig',
                             'category': 'lead',
                             'quantity': 1,
                             'variant': ''
                         }]
                     }
                 }
             });//end push
                    
                

        };
    
  // BOOK-NOW-AB - SUBMIT - NZ 

    null!=document.getElementById("mktoForm_2258")&& 
    isElementInViewport(document.getElementById("mktoForm_2258").addEventListener("submit",function(){mktoForm_2258_Submit()}));   
    
         function mktoForm_2258_Submit() {
                    
                dataLayer.push({
                'event': 'checkout',
                 'ecommerce': {
                     'currencyCode': currencyByRegion,
                     'checkout': {
                         'actionField': {'step': 1, 'option': ''},
                         'products': [{
                            'name': 'Book Consultation',
                             'id': '10001',
                             'price': '',
                             'brand': 'Jenny Craig',
                             'category': 'lead',
                             'quantity': 1,
                             'variant': ''
                         }]
                     }
                 }
             });//end push
                
                

        };


  ////////////////////////////////
  // BOOK-NOW FORM LOGIC (CONTROL)
  ////////////////////////////////

  /* BOOK-NOW - FOCUS - AU - (Stable - Not Yet Required)

   null!=document.getElementById("mktoForm_2259")&& 
   isElementInViewport(document.getElementById("mktoForm_2259").addEventListener("focus",function(){mktoForm_2259_Focus()}));   
    
        function mktoForm_2259_Focus() {

            !1!==focusCounter03&&( //check counter

                    
                    
                //insert dataLayer.push here
      
                           
                
                
            focusCounter03=false) //set counter to false
            };
    */

  /* BOOK-NOW - FOCUS - NZ - (Stable - Not Yet Required)

    null!=document.getElementById("mktoForm_2260")&& 
    isElementInViewport(document.getElementById("mktoForm_2260").addEventListener("focus",function(){mktoForm_2260_Focus()}));   
    
         function mktoForm_2260_Focus() {

             !1!==focusCounter04&&( //check counter

                    
                    
                //insert dataLayer.push here
                     
                           
                
                
            focusCounter04=false) //set counter to false

            };
    */
  // BOOK-NOW - INPUT - AU 

    null!=document.getElementById("mktoForm_2259")&&!1!==inputCounter03&&
    isElementInViewport(document.getElementById("mktoForm_2259").addEventListener("input",function(){mktoForm_2259_Input()}));   
    
         function mktoForm_2259_Input() {                 

                    dataLayer.push({
                      'event': 'productAdd',
                        'ecommerce': {
                           'currencyCode':currencyByRegion,
                           'add': {
                                'actionField': {'list': undefined},
                                'products': {
                                    'name': 'Book Consultation',
                                    'id': '10001',
                                    'price': '',
                                    'brand': 'Jenny Craig',
                                    'category': 'lead',
                                    'quantity': 1,
                                    'variant': ''
                                    }
                                
                            }
                        }
                    });//end push   


                inputCounter03 = false;
             //set counter to false

            
         }

  // BOOK-NOW - INPUT - NZ 

    null!=document.getElementById("mktoForm_2260")&&!1!==inputCounter04&&
    isElementInViewport(document.getElementById("mktoForm_2260").addEventListener("input",function(){mktoForm_2260_Input()}));   
    
         function mktoForm_2260_Input() {                 

                    dataLayer.push({
                      'event': 'productAdd',
                        'ecommerce': {
                           'currencyCode':currencyByRegion,
                           'add': {
                                'actionField': {'list': undefined},
                                'products': {
                                    'name': 'Book Consultation',
                                    'id': '10001',
                                    'price': '',
                                    'brand': 'Jenny Craig',
                                    'category': 'lead',
                                    'quantity': 1,
                                    'variant': ''
                                    }
                                
                            }
                        }
                    });//end push   


                inputCounter04 = false;
             //set counter to false

            
         }
    
  // BOOK-NOW - SUBMIT - AU 

    null!=document.getElementById("mktoForm_2259")&& 
    isElementInViewport(document.getElementById("mktoForm_2259").addEventListener("submit",function(){mktoForm_2259_Submit()}));   
    
         function mktoForm_2259_Submit() {

             dataLayer.push({
                'event': 'checkout',
                 'ecommerce': {
                     'currencyCode': currencyByRegion,
                     'checkout': {
                         'actionField': {'step': 1, 'option': ''},
                         'products': [{
                            'name': 'Book Consultation',
                             'id': '10001',
                             'price': '',
                             'brand': 'Jenny Craig',
                             'category': 'lead',
                             'quantity': 1,
                             'variant': ''
                         }]
                     }
                 }
             });//end push
                    
                

        };
    
  // BOOK-NOW - SUBMIT - NZ 

    null!=document.getElementById("mktoForm_2260")&& 
    isElementInViewport(document.getElementById("mktoForm_2260").addEventListener("submit",function(){mktoForm_2260_Submit()}));   
    
         function mktoForm_2260_Submit() {

             dataLayer.push({
                'event': 'checkout',
                 'ecommerce': {
                     'currencyCode': currencyByRegion,
                     'checkout': {
                         'actionField': {'step': 1, 'option': ''},
                         'products': [{
                            'name': 'Book Consultation',
                             'id': '10001',
                             'price': '',
                             'brand': 'Jenny Craig',
                             'category': 'lead',
                             'quantity': 1,
                             'variant': ''
                         }]
                     }
                 }
             });//end push
                
                

        };
    

  //////////////////////////////////////////
  // START-TODAY (REQUEST A CALL) FORM LOGIC 
  //////////////////////////////////////////

  /* START-TODAY - FOCUS - AU - (Stable - Not Yet Required)

   null!=document.getElementById("mktoForm_1579")&& 
   isElementInViewport(document.getElementById("mktoForm_1579").addEventListener("focus",function(){mktoForm_1579_Focus()}));   
    
        function mktoForm_1579_Focus() {

            !1!==focusCounter05&&( //check counter

                    
                    
                //insert dataLayer.push here
      
                           
                
                
            focusCounter05=false) //set counter to false
            };

  */
  /* START-TODAY - FOCUS - NZ - (Stable - Not Yet Required)

    null!=document.getElementById("mktoForm_1626")&& 
    isElementInViewport(document.getElementById("mktoForm_1626").addEventListener("focus",function(){mktoForm_1626_Focus()}));   
    
         function mktoForm_1626_Focus() {

             !1!==focusCounter06&&( //check counter

                    
                    
                //insert dataLayer.push here
                     
                           
                
                
            focusCounter06=false) //set counter to false

            };
   */

  // START-TODAY - INPUT - AU 

    
    null!=document.getElementById("mktoForm_1579")&&!1!==inputCounter05&&
    isElementInViewport(document.getElementById("mktoForm_1579").addEventListener("input",function(){mktoForm_1579_Input()}));   
    
         function mktoForm_1579_Input() {                 

                    dataLayer.push({
                      'event': 'productAdd',
                        'ecommerce': {
                           'currencyCode':currencyByRegion,
                           'add': {
                                'actionField': {'list': undefined},
                                'products': {
                                    'name': 'Request Call',
                                    'id': '20001',
                                    'price': '',
                                    'brand': 'Jenny Craig',
                                    'category': 'lead',
                                    'quantity': 1,
                                    'variant': ''
                                    }
                                
                            }
                        }
                    });//end push   


                inputCounter05 = false;
             //set counter to false

            
         }

    
  // START-TODAY - INPUT - NZ 

    null!=document.getElementById("mktoForm_1626")&&!1!==inputCounter06&&
    isElementInViewport(document.getElementById("mktoForm_1626").addEventListener("input",function(){mktoForm_1626_Input()}));   
    
         function mktoForm_1626_Input() {                 

                    dataLayer.push({
                      'event': 'productAdd',
                        'ecommerce': {
                           'currencyCode':currencyByRegion,
                           'add': {
                                'actionField': {'list': undefined},
                                'products': {
                                    'name': 'Request Call',
                                    'id': '20001',
                                    'price': '',
                                    'brand': 'Jenny Craig',
                                    'category': 'lead',
                                    'quantity': 1,
                                    'variant': ''
                                    }
                                
                            }
                        }
                    });//end push   


                inputCounter06 = false;
             //set counter to false

            
         }
    
  // START-TODAY - SUBMIT - AU 

    null!=document.getElementById("mktoForm_1579")&& 
    isElementInViewport(document.getElementById("mktoForm_1579").addEventListener("submit",function(){mktoForm_1579_Submit()}));   
    
         function mktoForm_1579_Submit() {

            dataLayer.push({
                'event': 'checkout',
                 'ecommerce': {
                     'currencyCode': currencyByRegion,
                     'checkout': {
                         'actionField': {'step': 1, 'option': ''},
                         'products': [{
                            'name': 'Request Call',
                             'id': '20001',
                             'price': '',
                             'brand': 'Jenny Craig',
                             'category': 'lead',
                             'quantity': 1,
                             'variant': ''
                         }]
                     }
                 }
             });//end push
        };
    
  // START-TODAY - SUBMIT - NZ 

    null!=document.getElementById("mktoForm_1626")&& 
    isElementInViewport(document.getElementById("mktoForm_1626").addEventListener("submit",function(){mktoForm_1626_Submit()}));   
    
         function mktoForm_1626_Submit() {
        
             dataLayer.push({
                'event': 'checkout',
                 'ecommerce': {
                     'currencyCode': currencyByRegion,
                     'checkout': {
                         'actionField': {'step': 1, 'option': ''},
                         'products': [{
                            'name': 'Request Call',
                             'id': '20001',
                             'price': '',
                             'brand': 'Jenny Craig',
                             'category': 'lead',
                             'quantity': 1,
                             'variant': ''
                         }]
                     }
                 }
             });//end push


        };

  //////////////////////////////////////////
  // START-TODAY (REQUEST A CALL) FORM LOGIC 
  //////////////////////////////////////////

   /* START-TODAY - FOCUS - AU - (Stable - Not Yet Required)

   null!=document.getElementById("mktoForm_1579")&& 
   isElementInViewport(document.getElementById("mktoForm_1579").addEventListener("focus",function(){mktoForm_1579_Focus()}));   
    
        function mktoForm_1579_Focus() {

            !1!==focusCounter05&&( //check counter

                    
                    
                //insert dataLayer.push here
      
                           
                
                
            focusCounter05=false) //set counter to false
            };

   */

   /* START-TODAY - FOCUS - NZ - (Stable - Not Yet Required)

    null!=document.getElementById("mktoForm_1626")&& 
    isElementInViewport(document.getElementById("mktoForm_1626").addEventListener("focus",function(){mktoForm_1626_Focus()}));   
    
         function mktoForm_1626_Focus() {

             !1!==focusCounter06&&( //check counter

                    
                    
                //insert dataLayer.push here
                     
                           
                
                
            focusCounter06=false) //set counter to false

            };
    */

  ///////////////////////////////
  // SUBSCRIBE-INSPIRE FORM LOGIC 
  ///////////////////////////////

   /* SUBSCRIBE-INSPIRE - FOCUS - AU/NZ - (Stable - Not Yet Required)

   null!=document.getElementById("mktoForm_1589")&& 
   isElementInViewport(document.getElementById("mktoForm_1589").addEventListener("focus",function(){mktoForm_1589_Focus()}));   
    
        function mktoForm_1589_Focus() {

            !1!==focusCounter07&&( //check counter

                    
                    
                //insert dataLayer.push here
      
                           
                
                
            focusCounter07=false) //set counter to false
            };
   */
    
  // SUBSCRIBE-INSPIRE - INPUT - AU/NZ 

    null!=document.getElementById("mktoForm_1589")&&!1!==inputCounter07&&
    isElementInViewport(document.getElementById("mktoForm_1589").addEventListener("input",function(){mktoForm_1589_Input()}));   
    
         function mktoForm_1589_Input() {                 

                    dataLayer.push({
                      'event': 'productAdd',
                        'ecommerce': {
                           'currencyCode':currencyByRegion,
                           'add': {
                                'actionField': {'list': undefined},
                                'products': {
                                    'name': 'GetInspired Subscribe',
                                    'id': '60001',
                                    'price': '',
                                    'brand': 'Jenny Craig',
                                    'category': 'lead',
                                    'quantity': 1,
                                    'variant': ''
                                    }
                                
                            }
                        }
                    });//end push   


                inputCounter07 = false;
             //set counter to false

            
         }

    
  // SUBSCRIBE-INSPIRE - SUBMIT - AU/NZ 

    null!=document.getElementById("mktoForm_1589")&& 
    isElementInViewport(document.getElementById("mktoForm_1589").addEventListener("submit",function(){mktoForm_1589_Submit()}));   
    
         function mktoForm_1589_Submit() {
             
             dataLayer.push({
                'event': 'checkout',
                 'ecommerce': {
                     'currencyCode': currencyByRegion,
                     'checkout': {
                         'actionField': {'step': 1, 'option': ''},
                         'products': [{
                            'name': 'GetInspired Subscribe',
                             'id': '60001',
                             'price': '',
                             'brand': 'Jenny Craig',
                             'category': 'lead',
                             'quantity': 1,
                             'variant': ''
                         }]
                     }
                 }
             });//end push
    

        };
    
//global form tracking end-function    
};//global form tracking end-function



