function have_collided(div1, div2){

    var x1 = div1.offset().left, 
    y1 = div1.offset().top, 
    h1 = div1.outerHeight(true),
    w1 = div1.outerWidth(true),
    b1 = y1 +h1,
    r1 = x1+w1;


    var x2 = div2.offset().left, 
    y2 = div2.offset().top, 
    h2 = div2.outerHeight(true),
    w2 = div2.outerWidth(true),
    b2 = y2 +h2,
    r2 = x2+w2;

    if( b1 < y2 || y1> b2 || r1<x2 || x1> r2) return false;

    return true;


}

