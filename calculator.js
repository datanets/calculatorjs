function logger(output) {
  document.getElementById("log").innerHTML +=
    "> " + output + "<br>";
}

function output(output, field) {
  document.getElementById(field).value = output;
}

function collisionCircles() {
  var c1 = new Object();
  c1.x = parseFloat(document.getElementById("ccx1").value);
  c1.y = parseFloat(document.getElementById("ccy1").value);
  c1.r = parseFloat(document.getElementById("ccr1").value);
  
  var c2 = new Object();
  c2.x = parseFloat(document.getElementById("ccx2").value);
  c2.y = parseFloat(document.getElementById("ccy2").value);
  c2.r = parseFloat(document.getElementById("ccr2").value);
  
  cxdiff = c1.x-c2.x;
  cydiff = c1.y-c2.y;
  
  var distance = Math.pow(cxdiff, 2) + Math.pow(cydiff, 2);
  
  var sumRadiiSquared = parseFloat(c1.r) + parseFloat(c2.r);
  sumRadiiSquared = Math.pow(sumRadiiSquared,2);
  
  var result = "not colliding";
  if (distance == sumRadiiSquared) {
    result = "colliding";
  }
  
  console.log(c1);
  console.log(c2);
  console.log(distance);
  console.log(sumRadiiSquared);
  console.log(result);
  output(result, "cc_output");
}

function collisionRectangles2D() {
  var c1 = new Object();
  c1.x = parseFloat(document.getElementById("crx1").value);
  c1.y = parseFloat(document.getElementById("cry1").value);
  c1.h = parseFloat(document.getElementById("crh1").value);
  c1.w = parseFloat(document.getElementById("crw1").value);
  
  var c2 = new Object();
  c2.x = parseFloat(document.getElementById("crx2").value);
  c2.y = parseFloat(document.getElementById("cry2").value);
  c2.h = parseFloat(document.getElementById("crh2").value);
  c2.w = parseFloat(document.getElementById("crw2").value);

  var result = "not colliding";
  
  // if (x<px+pw and x+w>px and y<py+ph and y+h>py)
  if ((c1.x < (c2.x + c2.w)) && ((c1.x + c1.w) > c2.x) && (c1.y < (c2.y + c2.h)) && ((c1.y + c1.h) > c2.y)) {
    result = "colliding";
  }
  
  console.log(c1);
  console.log(c2);
  console.log(result);
  output(result, "cr_output");
}

function collisionRectangles3D() {
  var c1 = new Object();
  c1.x = parseFloat(document.getElementById("cr3dx1").value);
  c1.y = parseFloat(document.getElementById("cr3dy1").value);
  c1.h = parseFloat(document.getElementById("cr3dh1").value);
  c1.w = parseFloat(document.getElementById("cr3dw1").value);
  c1.lx1 = parseFloat(document.getElementById("cr3dlx11").value);
  c1.lx2 = parseFloat(document.getElementById("cr3dlx21").value);
  
  var c2 = new Object();
  c2.x = parseFloat(document.getElementById("cr3dx2").value);
  c2.y = parseFloat(document.getElementById("cr3dy2").value);
  c2.h = parseFloat(document.getElementById("cr3dh2").value);
  c2.w = parseFloat(document.getElementById("cr3dw2").value);
  c2.lx1 = parseFloat(document.getElementById("cr3dlx12").value);
  c2.lx2 = parseFloat(document.getElementById("cr3dlx22").value);
  
  var result = "not colliding";
  
  // for now this basically just checks z-index "x1, x2" of the length of each given rectangle
  if (
  ((c1.x < (c2.x + c2.w)) && ((c1.x + c1.w) > c2.x) && (c1.y < (c2.y + c2.h)) && ((c1.y + c1.h) > c2.y) && (c1.lx1 <= c2.lx1) && (c1.lx2 >= c2.lx1)) || 
  ((c1.x < (c2.x + c2.w)) && ((c1.x + c1.w) > c2.x) && (c1.y < (c2.y + c2.h)) && ((c1.y + c1.h) > c2.y) && (c1.lx1 <= c2.lx1) && (c1.lx2 >= c2.lx2)) ||
  ((c1.x < (c2.x + c2.w)) && ((c1.x + c1.w) > c2.x) && (c1.y < (c2.y + c2.h)) && ((c1.y + c1.h) > c2.y) && (c2.lx1 <= c1.lx1) && (c2.lx2 >= c1.lx1)) || 
  ((c1.x < (c2.x + c2.w)) && ((c1.x + c1.w) > c2.x) && (c1.y < (c2.y + c2.h)) && ((c1.y + c1.h) > c2.y) && (c2.lx1 <= c1.lx1) && (c2.lx2 >= c1.lx2))
  ) {
    result = "colliding";
  }
  
  console.log(c1);
  console.log(c2);
  console.log(result);
  output(result, "cr3_output");
}
