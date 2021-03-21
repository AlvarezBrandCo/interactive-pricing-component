var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});


document.getElementById("slider").oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + value + '%, #eaeefb ' + value + '%, #eaeefb 100%)'
};

function getSliderVal() {
  var val = document.getElementById("slider").value * 10;
  if (document.getElementById("toggle").checked) {
    var discount = val * .75;
    return document.getElementById("price").innerHTML = formatter.format(discount);
  }
  else {
    return document.getElementById("price").innerHTML = formatter.format(val);
  }
}

getSliderVal(document.getElementById("price").innerHTML = document.getElementById("slider").value)

function resize() {
  if (window.innerWidth > 475) {
    document.getElementById("discount-tag").innerHTML = "25% discount"
  }
  else {
    document.getElementById("discount-tag").innerHTML = "-25%"
  }
}
resize();
