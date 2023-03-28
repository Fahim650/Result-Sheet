function result(){
    var _tnum = document.getElementById('tnum').value;
    var _pnum = document.getElementById('pnum').value;
    
    if(_tnum==""){
        alert("Please Provide Theory Number of Bangla 1st paper");
    }
    else if(_pnum==""){
        alert("Please Provide Practical Number of Bangla 1st paper");
    }
    var _ttnum = parseInt(_tnum) + parseInt(_pnum);
    if(80<=_ttnum && _ttnum<=100){
        document.getElementById('ttnum').value = _ttnum;
        document.getElementById('grade').value = "A+";
        document.getElementById('point').value = "5.00";
    }
    else if(70<=_ttnum && _ttnum<=79){
        document.getElementById('ttnum').value = _ttnum;
        document.getElementById('grade').value = "A";
        document.getElementById('point').value = "4.00";
    }
    else if(60<=_ttnum && _ttnum<=69){
        document.getElementById('ttnum').value = _ttnum;
        document.getElementById('grade').value = "A-";
        document.getElementById('point').value = "3.50";
    }
    else if(50<=_ttnum && _ttnum<=59){
        document.getElementById('ttnum').value = _ttnum;
        document.getElementById('grade').value = "B";
        document.getElementById('point').value = "3.00";
    }
    else if(40<=_ttnum && _ttnum<=49){
        document.getElementById('ttnum').value = _ttnum;
        document.getElementById('grade').value = "C";
        document.getElementById('point').value = "2.00";
    }
    else if(33<=_ttnum && _ttnum<=39){
        document.getElementById('ttnum').value = _ttnum;
        document.getElementById('grade').value = "D";
        document.getElementById('point').value = "1.00";
    }
    else if(0<=_ttnum && _ttnum<=32){
        document.getElementById('ttnum').value = _ttnum;
        document.getElementById('grade').value = "F";
        document.getElementById('point').value = "0.00";
    }
}
function reset(){
    document.getElementById('tnum').value = '';
    document.getElementById('pnum').value = '';
    document.getElementById('ttnum').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('point').value = '';
}
function result1(){
    var _tnum1 = document.getElementById('tnum1').value;
    var _pnum1 = document.getElementById('pnum1').value;
    
    if(_tnum1==""){
        alert("Please Provide Theory Number of Bangla 2nd paper");
    }
    else if(_pnum1==""){
        alert("Please Provide Practical Number of Bangla 2nd paper");
    }
    var _ttnum1 = parseInt(_tnum1) + parseInt(_pnum1);
    if(80<=_ttnum1 && _ttnum1<=100){
        document.getElementById('ttnum1').value = _ttnum1;
        document.getElementById('grade1').value = "A+";
        document.getElementById('point1').value = "5.00";
    }
    else if(70<=_ttnum1 && _ttnum1<=79){
        document.getElementById('ttnum1').value = _ttnum1;
        document.getElementById('grade1').value = "A";
        document.getElementById('point1').value = "4.00";
    }
    else if(60<=_ttnum1 && _ttnum1<=69){
        document.getElementById('ttnum1').value = _ttnum1;
        document.getElementById('grade1').value = "A-";
        document.getElementById('point1').value = "3.50";
    }
    else if(50<=_ttnum1 && _ttnum1<=59){
        document.getElementById('ttnum1').value = _ttnum1;
        document.getElementById('grade1').value = "B";
        document.getElementById('point1').value = "3.00";
    }
    else if(40<=_ttnum1 && _ttnum1<=49){
        document.getElementById('ttnum1').value = _ttnum1;
        document.getElementById('grade1').value = "C";
        document.getElementById('point1').value = "2.00";
    }
    else if(33<=_ttnum1 && _ttnum1<=39){
        document.getElementById('ttnum1').value = _ttnum1;
        document.getElementById('grade1').value = "D";
        document.getElementById('point1').value = "1.00";
    }
    else if(0<=_ttnum1 && _ttnum1<=32){
        document.getElementById('ttnum1').value = _ttnum1;
        document.getElementById('grade1').value = "F";
        document.getElementById('point1').value = "0.00";
    }
}
function reset1(){
    document.getElementById('tnum1').value = '';
    document.getElementById('pnum1').value = '';
    document.getElementById('ttnum1').value = '';
    document.getElementById('grade1').value = '';
    document.getElementById('point1').value = '';
}
function result2(){
    var _tnum2 = document.getElementById('tnum2').value;
    var _pnum2 = document.getElementById('pnum2').value;
    
    if(_tnum2==""){
        alert("Please Provide Theory Number of Bangla 2nd paper");
    }
    else if(_pnum2==""){
        alert("Please Provide Practical Number of Bangla 2nd paper");
    }
    var _ttnum2 = parseInt(_tnum2) + parseInt(_pnum2);
    if(80<=_ttnum2 && _ttnum2 <=100){
        document.getElementById('ttnum2').value = _ttnum2;
        document.getElementById('grade2').value = "A+";
        document.getElementById('point2').value = "5.00";
    }
    else if(70<=_ttnum2 && _ttnum2<=79){
        document.getElementById('ttnum2').value = _ttnum2;
        document.getElementById('grade2').value = "A";
        document.getElementById('point2').value = "4.00";
    }
    else if(60<=_ttnum2 && _ttnum2<=69){
        document.getElementById('ttnum2').value = _ttnum2;
        document.getElementById('grade2').value = "A-";
        document.getElementById('point2').value = "3.50";
    }
    else if(50<=_ttnum2 && _ttnum2<=59){
        document.getElementById('ttnum2').value = _ttnum2;
        document.getElementById('grade2').value = "B";
        document.getElementById('point2').value = "3.00";
    }
    else if(40<=_ttnum2 && _ttnum2<=49){
        document.getElementById('ttnum2').value = _ttnum2;
        document.getElementById('grade2').value = "C";
        document.getElementById('point2').value = "2.00";
    }
    else if(33<=_ttnum2 && _ttnum2<=39){
        document.getElementById('ttnum2').value = _ttnum2;
        document.getElementById('grade2').value = "D";
        document.getElementById('point2').value = "1.00";
    }
    else if(0<=_ttnum2 && _ttnum2<=32){
        document.getElementById('ttnum2').value = _ttnum2;
        document.getElementById('grade2').value = "F";
        document.getElementById('point2').value = "0.00";
    }
}
function reset2(){
    document.getElementById('tnum2').value = '';
    document.getElementById('pnum2').value = '';
    document.getElementById('ttnum2').value = '';
    document.getElementById('grade2').value = '';
    document.getElementById('point2').value = '';
}

function resultf(){
    var _ttnum = document.getElementById('ttnum').value
    var _ttnum1 = document.getElementById('ttnum1').value
    var _ttnum2 = document.getElementById('ttnum2').value
    var _ttnumf = parseInt(_ttnum)+parseInt(_ttnum1)+parseInt(_ttnum2)
    var _point = document.getElementById('point').value
    var _point1 = document.getElementById('point1').value
    var _point2 = document.getElementById('point2').value
    var _pointf = ((parseFloat(_point)+parseFloat(_point1)+parseFloat(_point2))/3).toFixed(2)

    if(document.getElementById('grade').value =='F' || document.getElementById('grade1').value =='F'||
    document.getElementById('grade2').value =='F' ){
        document.getElementById('ttnumf').value = _ttnumf;
        document.getElementById('gradef').value = 'F';
        document.getElementById('pointf').value = '0.00';
    }
    else{
        if(_pointf==5.00){
            document.getElementById('gradef').value = 'A+';
        }
        else if(4.00 <= _pointf && _pointf < 5.00 ){
            document.getElementById('gradef').value = 'A';
        }
        else if(3.50 <= _pointf && _pointf < 4.00){
            document.getElementById('gradef').value = 'A-';
        }
        else if(3.00 <= _pointf && _pointf < 3.50 ){
            document.getElementById('gradef').value = 'B';
        }
        else if(2.00 <= _pointf && _pointf < 3.00 ){
            document.getElementById('gradef').value = 'C';
        }
        else if(1.00 <= _pointf && _pointf < 2.00){
            document.getElementById('gradef').value = 'A';
        }
        else if(0.00 <= _pointf && _pointf < 1.00){
            document.getElementById('gradef').value = 'F';
        }

        document.getElementById('ttnumf').value = _ttnumf;
        document.getElementById('pointf').value = _pointf;
    }
}

function resetf(){
    document.getElementById('ttnumf').value = '';
    document.getElementById('gradef').value = '';
    document.getElementById('pointf').value = '';
}