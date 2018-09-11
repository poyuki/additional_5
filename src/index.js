module.exports = function check(str, bracketsConfig) {
    let checkArray=[],res=true,leftReg='\\((?:[^)(]+|\\([^)',rightReg='(]*\\))\\)*';

    bracketsConfig.forEach((el,index)=>{
        /*let regExp=`\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}[^)(]*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]}`;
        let f=str.search(regExp);
        let t;
        let r=true;

        while(r){
            t=str.replace(new RegExp(regExp),'');
            if(t.indexOf(regExp)===-1){
                r=false
            }

        }
        if(f===-1||t.indexOf(el[0])!==-1||t.indexOf(el[1])!==-1) res=false;*/


        checkArray[index]=[[],[]];
        let temp1=true,temp2=true;
        if(el[0]!==el[1]) {
            while (temp1) {
                checkArray[index][0].push(str.indexOf(el[0]));
                str = str.replace(el[0], '');
                if (str.indexOf(el[0]) === -1) temp1 = false;
            }
            while (temp2) {
                checkArray[index][1].push(str.indexOf(el[1]));
                str = str.replace(el[1], '');
                if (str.indexOf(el[1]) === -1) temp2 = false;
            }
            if ((checkArray[index][0].length !== checkArray[index][1].length&&el[0]!==el[1])
                ||checkArray[index][0].length%2!==0&&el[0]===el[1]) {
                res = false;
            }
        }
    });

    return res;
};
