


window.onload = function(event) {
    console.log(event);
    var height = window.innerHeight;
    console.log(height);
    var wraperHeight  = event.currentTarget.frames.document.body.childNodes[1].clientHeight;
    console.log(wraperHeight);
    var footerHeight = event.currentTarget.frames.document.body.childNodes[3].clientHeight;
    console.log(footerHeight);
    var delta = height - (wraperHeight+footerHeight);

    if (delta > 0 ) {
      document.querySelector('.footer').style.marginTop = delta + "px";
    }
};


window.addEventListener("resize", function() {
  var height = window.innerHeight;
  console.log(height);
  var wraperHeight  = event.currentTarget.frames.document.body.childNodes[1].clientHeight;
  console.log(wraperHeight);
  var footerHeight = event.currentTarget.frames.document.body.childNodes[3].clientHeight;
  console.log(footerHeight);
  var delta = height - (wraperHeight+footerHeight);

  if (delta > 0 ) {
    document.querySelector('.footer').style.marginTop = delta + "px";
  }
});
