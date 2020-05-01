// x = 2D array of sudoku 3x9 <!--
// Example
//[ [ 5, 3, 4, 6, 7, 8, 9, 1, 2 ],
//   [ 6, 7, 2, 1, 9, 5, 3, 4, 8 ],
//   [ 1, 9, 8, 3, 4, 2, 5, 6, 7 ],
//   [ 8, 5, 9, 7, 6, 1, 4, 2, 3 ],
//   [ 4, 2, 6, 8, 5, 3, 7, 9, 1 ],
//   [ 7, 1, 3, 2, 9, 4, 8, 5, 6 ],
//   [ 9, 6, 1, 5, 3, 7, 2, 8, 4 ],
//   [ 2, 8, 7, 4, 1, 9, 6, 3, 5 ],
//   [ 3, 4, 5, 2, 8, 6, 1, 7, 9 ] ]
//
//         ^ returns False
//          or
//
//[ [ 1, 5, 2, 4, 6, 9, 3, 7, 8 ],
//   [ 7, 8, 9, 2, 1, 3, 4, 5, 6 ],
//   [ 4, 3, 6, 5, 8, 7, 2, 9, 1 ],
//   [ 6, 1, 3, 8, 7, 2, 5, 4, 9 ],
//   [ 9, 7, 4, 1, 5, 6, 8, 2, 3 ],
//   [ 8, 2, 5, 9, 3, 4, 1, 6, 7 ],
//   [ 5, 6, 7, 3, 4, 8, 9, 1, 2 ],
//   [ 2, 4, 8, 6, 9, 1, 7, 3, 5 ],
//   [ 3, 9, 1, 7, 2, 5, 6, 8, 4 ] ]
//
//          ^ returns True
//
//
// -->
function sudokuValidator(x) {
    let g = [];
    let l = [];
    let a = [];
    var y = x.every((a)=>a.reduce((b,c)=>b + c) == 45)
    for(let p = 0; p < 9; p+= 3 ){g.push(x.map((y)=> y.slice(p,(p + 3))))}
    g = g.map((t)=> (t.map((h)=> h.reduce((total, num)=> total + num))))
    for(let q = 0; q < 3; q++){
        for(let w = 0; w < 9; w+= 3){
            l.push(((g[q].slice(w,(w+3)).reduce((totals, np)=>  totals + np)) == 45 ? true:false))
        }
    }
    for(let i = 0; i < 9;  i++){
        let count = 0
        for(let r = 0; r < 9;  r++){
            count += x[r][i]
        }
        a.push(count)
    }
    return (y == true ? ((l.every((z)=> z == true)) == true ? (a.every((b)=> b == 45) == true ? true:false):false):false)
}