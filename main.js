/* setting initial values for cart in menu and providing an array to collect the summation of
all products value */
let initCartValue = 0;
var holdarr = [];
let orderbtns = document.getElementsByClassName("order");
let imgs = document.getElementsByClassName("tableimg");
let counterbtns = document.getElementsByClassName("counters");

/* to assess the user order input values of each product */
trackCart = () => {
    counted = 0;

    for (let index = 0; index < counterbtns.length; index++) {
        counted += Number(document.getElementById("product" + index).value);
    }

    document.querySelector('#cartitems').innerHTML = Number(counted);
    holdarr.push(Number(counted));
};

// setting default values on page load
function defaultMode() {
    document.querySelector('#cartitems').innerHTML = initCartValue;

    for (let index = 0; index < counterbtns.length; index++) {
        counterbtns[index].value = 0;
        counterbtns[index].onkeyup = () => { trackCart(); };
    }

    console.log('started');
}


//to add dynamic id attribute to product elements and fires on page load
function addId() {

    for (i = 0; i < counterbtns.length; i++) {
        counterbtns[i].setAttribute('id', 'product' + i);
        orderbtns[i].setAttribute('id', 'orderbtn' + i);
        imgs[i].setAttribute('id', 'img' + i);
    }
}


//to display total items in cart to the user when cart is ckicked on menu
function checkCartItems() {
    /* let orderedval = (typeof(holdarr[holdarr.length - 1]) == Number) ? Number(holdarr[holdarr.length - 1]) : 0;
    console.log(orderedval); */
    if ((holdarr[holdarr.length - 1]) == undefined) {
        document.getElementById('myModal3').style.display = 'block';
        document.getElementById('allcart').innerHTML = 0;
        document.getElementById('proceed').style.display = 'none';
        document.getElementById('checkoutbtn').style.display = 'none';
        //alert('you have added 0 items to cart');
    } else {
        document.getElementById('myModal3').style.display = 'block';
        document.getElementById('allcart').innerHTML = Number(holdarr[holdarr.length - 1]);
        document.getElementById('proceed').style.display = 'block';
        document.getElementById('checkoutbtn').style.display = 'block';

        //alert('you have added ' + holdarr[holdarr.length - 1] + ' items to cart');
    }
}

document.getElementById('cartmenu').addEventListener('click', checkCartItems); //adds click event to cartmenu and fires checkCartItems method

//adding orders to cart
function addOrders(e) {
    for (let i = 0; i < orderbtns.length; i++) {
        orderbtns[i].addEventListener("click", (e) => {
            console.log(e.target.id);

            btnpos = document.getElementById(e.target.id);
            if (btnpos.getAttribute('id') == orderbtns[i].getAttribute('id')) {
                console.log(i);
                document.getElementById('orderunit').innerHTML = Number(counterbtns[i].value);
                document.getElementById('orderitem').setAttribute('src', imgs[i].getAttribute('src'));
                document.getElementById('myModal2').style.display = 'block';
            }
        });
    }
}
document.querySelector('#submitmsg').style.display = 'none';

//to respond to user on review message submission by dislaying the feedback message in html
function submitmsg() {
    document.querySelector('#reviewform').style.display = 'none';
    document.querySelector('#submitmsg').style.display = 'block';
}

//loading functions when the  hpme page loads
window.addEventListener("load", function() {
    addOrders();
    defaultMode();
    addId();
});