/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {   
    const RomantoIN = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let count = 0;
    s.split("").forEach((num, i) => {
        if(RomantoIN[num] < RomantoIN[s[i+1]]) {   //If a higher number is placed before low number.
            count -= RomantoIN[num];
        }else{ count += RomantoIN[num];}
    });
    return count;
};
