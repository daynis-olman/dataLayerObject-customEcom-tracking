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
DOM ELEMENT-ID                  | Impression Function Name               |  Click Function Name
-----------------------------------------------------------------------------------------------------------------  

HomeA-CTA-Hero-BookConsultation | xHomeA_CTA_Hero_BookConsultation_IMPSN | xHomeA_CTA_Hero_BookConsultation_CLK
X-Impression X-Click

HomeA-CTA-Hero-RequestCall      | xHomeA_CTA_Hero_RequestCall_IMPSN      | xHomeA_CTA_Hero_RequestCall_CLK
X-Impression X-Click

HomeA-Body-BookConsultation     | xHomeA_Body_BookConsultation_IMPSN     | xHomeA_Body_BookConsultation_CLK
X-Impression X-Click

HomeA-Body-RequestCall          | xHomeA_Body_RequestCall_IMPSN          | xHomeA_Body_RequestCall_CLK
X-Impression X-Click

HomeA-Body-FAQ                  | xHomeA_Body_FAQ_IMPSN                  | xHomeA_Body_FAQ_CLK
X-Impression X-Click

HomeA-Body-FindCentre           | xHomeA_Body_FindCentre_IMPSN           | xHomeA_Body_FindCentre_CLK
X-Impression X-Click

-----------------------------------------------------------------------------------------------------------------
HOME-B
-----------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                    | Impression Function Name                  | Click Function Name
-----------------------------------------------------------------------------------------------------------------  

HomeB-Body-BookConsultation       | xHomeB_Body_BookConsultation_IMPSN        | xHomeB_Body_BookConsultation_CLK
X-Impression X-Click

HomeB-Body-RequestCall            | xHomeB_Body_RequestCall_IMPSN             | xHomeB_Body_RequestCall_CLK
X-Impression X-Click

HomeB-Body-FindCentre             | xHomeB_Body_FindCentre_IMPSN              | xHomeB_Body_FindCentre_CLK
X-Impression X-Click

HomeB-Body-FAQ                    | xHomeB_Body_FAQ_IMPSN                     | xHomeB_Body_FAQ_CLK
X-Impression X-Click

HomeB-Mob-Body-BookConsultation   | xHomeB_Mob_Body_BookConsultation_IMPSN    | xHomeB_Mob_Body_BookConsultation_CLK
X-Impression X-Click

HomeB-Mob-Body-RequestCall        | xHomeB_Mob_Body_RequestCall_IMPSN         | HomeB_Mob_Body_RequestCall_CLK
X-Impression X-Click
  
HomeB-Mob-Body-FindCentre         | xHomeB_Mob_Body_FindCentre_IMPSN          | xHomeB_Mob_Body_FindCentre_CLK
X-Impression X-Click

HomeB-Mob-Body-FAQ                | xHomeB_Mob_Body_FAQ_IMPSN                 | xHomeB_Mob_Body_FAQ_CLK
X-Impression X-Click

-----------------------------------------------------------------------------------------------------------------
GLOBAL HEADER
-----------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                       | Impression Function Name                 | Click Function Name
-----------------------------------------------------------------------------------------------------------------  

GlobalHeader-CTA-StartNowOrange      | xGlobalHeader_CTA_StartNowOrange_IMPSN   | xGlobalHeader_CTA_StartNowOrange_CLK
X-Impression X-Click

GlobalHeader-CTA-ClickToCall         | xGlobalHeader_CTA_ClickToCall_IMPSN      | xGlobalHeader_CTA_ClickToCall_CLK
X-Impression X-Click

GlobalHeader-CTA-StartLiveChat       | xGlobalHeader_CTA_StartLiveChat_IMPSN    | xGlobalHeader_CTA_StartLiveChat_CLK
X-Impression X-Click

-----------------------------------------------------------------------------------------------------------------
GLOBAL FOOTER
-----------------------------------------------------------------------------------------------------------------
DOM ELEMENT-ID                       | Impression Function Name                  | Click Function Name
-----------------------------------------------------------------------------------------------------------------  

GlobalFooter-IconFacebook            | xGlobalFooter_IconFacebook_IMPSN          | xGlobalFooter_IconFacebook_CLK
X-Impression X-Click

GlobalFooter-IconInstagram           | xGlobalFooter_IconInstagram_IMPSN         | xGlobalFooter_IconInstagram_CLK
X-Impression X-Click

GlobalFooter-IconYouTube             | xGlobalFooter_IconYouTube_IMPSN           | xGlobalFooter_IconYouTube_CLK
X-Impression X-Click

GlobalFooter-JCAH-Delivery           | xGlobalFooter_JCAH_Delivery_IMPSN         | xGlobalFooter_JCAH_Delivery_CLK
X-Impression X-Click

GlobalFooter-IconYouTube             | xGlobalFooter_IconYouTube_IMPSN           | xGlobalFooter_IconYouTube_CLK
X-Impression X-Click

GlobalFooter-IconBlog                | xGlobalFooter_IconBlog_IMPSN              | xGlobalFooter_IconBlog_CLK
X-Impression X-Click

-----------------------------------------------------------------------------------------------------------------
CONVERSION FORMS 
-----------------------------------------------------------------------------------------------------------------
FORM #1 /book-now-ab
-----------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function    | OnFocus Function     | Submit Function             
-----------------------------------------------------------------------------------------------------------------  

mktoForm_2257 [au]    |  xmktoForm_2257_IMPSN  | xmktoForm_2257_Focus | xmktoForm_2257_Submit                
mktoForm_2258 [nz]    |  xmktoForm_2258_IMPSN  | xmktoForm_2258_Focus | xmktoForm_2258_Submit 

-----------------------------------------------------------------------------------------------------------------
FORM #2 /book-now.html
-----------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function    | OnFocus Function     | Submit Function             
-----------------------------------------------------------------------------------------------------------------  

mktoForm_2259 [au]    |  xmktoForm_2259_IMPSN  | xmktoForm_2259_Focus | xmktoForm_2259_Submit                
mktoForm_2260 [nz]    |  xmktoForm_2260_IMPSN  | xmktoForm_2260_Focus | xmktoForm_2260_Submit 

-----------------------------------------------------------------------------------------------------------------
FORM #3 /start-today.html
-----------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function    | OnFocus Function     | Submit Function             
-----------------------------------------------------------------------------------------------------------------  

mktoForm_1579 [au]    |  xmktoForm_1579_IMPSN  | xmktoForm_1579_Focus | xmktoForm_1579_Submit                
mktoForm_1626 [nz]    |  xmktoForm_1626_IMPSN  | xmktoForm_1626_Focus | xmktoForm_1626_Submit 

-----------------------------------------------------------------------------------------------------------------
FORM #4 Subscribe to Inspire Magazine
-----------------------------------------------------------------------------------------------------------------
ELEMENT-ID            | Impression Function   | OnFocus Function      | Submit Function             
-----------------------------------------------------------------------------------------------------------------  

mktoForm_1589 [au&nz] |  xmktoForm_1589_IMPSN  | xmktoForm_1589_Focus | xmktoForm_1589_Submit                

               



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

var count01 = true;     //Asset impression HomeA_CTA_Hero_BookConsultation_IMPSN
var count02 = true;     //Asset impression test #2
var count03 = true;     //Asset impression test #3
var formCount01 = true; //form impression 
var formCount02 = true; //form submit 


function checkForNewImpressions() {
    
    
   if (isElementInViewport(document.getElementById("HomeA-CTA-Hero-BookConsultation")) === true && count01 === true) {
       HomeA_CTA_Hero_BookConsultation_IMPSN();}

   if (isElementInViewport(document.getElementById("HomeA-CTA-Hero-BookConsultation")) === true && count01 === true) {
       HomeA_CTA_Hero_BookConsultation_IMPSN();}



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




