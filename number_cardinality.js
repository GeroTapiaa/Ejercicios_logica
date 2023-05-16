function number_cardinality(n) {
    return n % 10 === 0 ? 'zero' :
           n % 10 === 5 ? 'five' :
           n % 2 === 0 ? 'even' : 'odd'

}
console.log(number_cardinality(25));