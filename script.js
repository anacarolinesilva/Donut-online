function placeOrder(){
    form.submit();
  }
  
  function calcOrder(){
    const TAXRATE = 0.09;
    const DONUTPRICE = 0.5;
  var cake = parseInt(document.getElementById("cake").value) ;
  var glaze = parseInt(document.getElementById("glaze").value);
       if(isNaN(cake)){
         cake = 0;
       }
        if(isNaN(glaze)){
          glaze = 0;
        }
  var subtotal = (cake + glaze) * DONUTPRICE;
  var tax = subtotal * TAXRATE;
  var time = ((cake + glaze)/4)+10;
  var total = subtotal + tax;
   
    document.getElementById("subtotal").value = subtotal.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
    document.getElementById("time").value = time.toFixed(0) + "min";
    document.getElementById("tax").value = tax.toFixed(2);
  }
  