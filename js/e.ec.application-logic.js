//Setting up
window.onload = function() {
    addListeners();
};

//Define Event Listeners

function addListeners(){
  document.getElementById("e-ec-testButtonA").addEventListener('click', simulateProductClick, false);
  document.getElementById("e-ec-testButtonB").addEventListener('click', simulateCheckoutComplete, false);
}

//Simulating Product Click
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

//Simulating Checkout Complete
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
