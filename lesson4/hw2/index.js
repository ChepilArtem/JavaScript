let m = 1;
let n = 10;
let result = 0;

for( m; m <= n; m++ ){
    if( m % 2 ){
    result += m;
    } else 
        if ( m % 3 ) {
        result -= m;
    } else 
        if ( m % 4 ) {
        result * m;
    } else if ( m % 5 ) {
        console.log(result);
    }
}

