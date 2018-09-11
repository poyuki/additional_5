module.exports = function check(str, bracketsConfig) {
    let checkArray=[],res=true,leftReg='\\((?:[^)(]+|\\([^)',rightReg='(]*\\))\\)*';

    bracketsConfig.forEach((el,index)=>{
        let regExp=`\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}(?:[^)(]+|\\${el[0]}[^)(]*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]})*\\${el[1]}`;
        let f=str.search(regExp);
        let t;
        let r=true;

        while(r){
            t=str.replace(new RegExp(regExp),'');
            if(t.indexOf(regExp)===-1){
                r=false
            }

        }
        if(f===-1/*||t.indexOf(el[0])!==-1||t.indexOf(el[1])!==-1*/) res=false;
    });

    return res;
};
