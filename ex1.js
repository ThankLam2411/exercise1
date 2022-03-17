var arr=[1,3,4,5,6,9,21,34,12];
var arr1=arr.filter((arrItem)=> (arrItem % 2 === 0))
var arr2=arr.filter((arrItem)=> (arrItem % 2 === 1))

// 1.
console.log('cau1:day chan',arr1);
console.log('cau1:day le',arr2);

// 2.
console.log('cau 2',arr1.reduce((total,value)=> (total+ value),0))

// 3.
var arr3= arr.map((arrItem)=> {
     if(arrItem % 2 == 0) arrItem++
     return arrItem
}
)
console.log('cau3',arr3)

// 4.
function check(string, str){
    for(let value of string.split(' ')){
        if (value == str) return true
        else return false
    }
}
console.log('cau4',check('string1 string2 string10', 'string8'))

// 5.
function chuan(string){
    var newStr = string.toLowerCase().split(' ');
    for (var i=0; i<newStr.length; i++){
        newStr[i]= newStr[i][0].toUpperCase() + newStr[i].slice(1)
       }
    return newStr.join(' ')
    }
    var result =chuan('choCon choSam')
console.log('cau5',result)

// 6.
function reverseArr([x,...arr]) {
    if(x !==undefined){
        return [...reverseArr(arr),x]

    }
    return []
    
}
console.log('cau6',reverseArr([1,2,3,4]))

// 7.
let obj = {a: 1, b:{a:2}, c:{a:3}};
let {a, b, c}= obj;
console.log('cau7',a,b.a,c.a)

// 8.
// const replaceStr=( s1, s2, string)=>{
//     const currStr= string.replaceAll(s1, s2);
//     return currStr
// }
// console.log('cau8',replaceStr( 'str', 'char','string1, string2, string3'))

// 9.
function Fibonacci(f0,f1,n){ 
    var fn= f0+f1;
    // if(n<0) return -1;
    // else if (n == 0) return f0;
    // else if (n==1) return f1;
    // else {
        for(var i =3; i<=n; i++){
            f0=f1;
            f1= fn;
            fn = f0 + f1;

            
        }

    // }
    return fn;

}
console.log('cau9: fibonacci',Fibonacci(3,4,4))

// 10.
function soNguyenTo(x){ 
    if(x<2) return false;
    for(var i=2; i<= x/2; i++){
        if(x%i ==0) return false;
        else return true;
    }
}
function cau10(n){
    var arr = [];
    for(i=0; i<n; i++){
        if(i == 1||i == 2){
            arr.push(i)
        }
        else if(soNguyenTo(i)==true){
            arr.push(i)
        }
    }
    return arr

}
console.log('cau10',cau10(10))

// 11.
function phanTichThuaSo(n){
    for(var i =2; i<=n; i++){
        while (n%i == 0 ){
            n /= i;
            console.log(i,'*')
        } 
    }
}
console.log('cau11',phanTichThuaSo(24))
// 12.
function cau12(arr,x){
    for(var i=0; i<arr.length; i++){
        if(!!arr[x-1]) return true;
        else return false;
    }
}
console.log('cau12',cau12([1,2,3,4,5,6,7,8,9,10], 10))

// 13.
function soNhiPhan(n){
    const stack=[];
    while(n>0){
        stack.push(n%2);
        n=Math.floor(n/2)
    }
    while(stack.length===0){
        stack.pop()
    }
    return stack.reverse().join('');
}
console.log('cau13 so nhi phan', soNhiPhan(12))


function soBatPhan(n){
    let ketqua ="";

    while (n > 0) {
        ketqua += `${n % 8}`;
        n = Math.floor(n / 8);
      }
      return ketqua.split("").reverse().join("");

}
// const soBatPhan=(n)=> ()
console.log('cau13: so bat phan', soBatPhan(12))
// cau 14
function cau14(x){
    var newStr = x.toString().split('')
    var compare = newStr[0];
    var count = 1;
    var result=''
    for(var i=1; i<newStr.length; i++){
            if (compare == newStr[i]){
                count++                
            }else{
                result= result + `${count}${compare}`;
                compare = newStr[i];
                count = 1
            }
            if(i==newStr.length-1){
                result= result +`${count}${newStr[i]}`

            }
    }
    return result;
}
console.log('cau14:',cau14(122344111))
// cau 15
function UCLN(a, b){
    if(a==0||b==0) return a+b;
    while (a!=b){
        if(a>b){
            a = a-b
        }
        else b = b-a
    }
    return a;
}
function BCNN(a,b){
    return a*b /UCLN(a,b)
}
console.log('cau15: UCLN', UCLN(15,25))
console.log('cau15: BCNN', BCNN(15,25))

