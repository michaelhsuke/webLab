/**
 * Created by xuke on 2016/1/14.
 */
var x = require('./foo');
if (typeof x.a == 'function') {
    x.a.call(null, 10, 20);
    //x.a.apply(null, [2, 3]);
}
//console.log(x.a);