let cmdLinesArr = null;
let tlmLinesArr = null; 

async function searchSuggest(input){
    let ArrOne = await searchCMDandTLM(input,"cmd","COMMAND");
    let ArrTwo = await searchCMDandTLM(input,"tlm","TELEMETRY");
    return  { cmdArr : ArrOne , tlmArr : ArrTwo }
}

async function searchCMDandTLM(txt,fileName,keyWord){
    let suggArr = [];
    let linesArr = null;
    if( !cmdLinesArr || !tlmLinesArr ){
        let file = await fetch(`./cmd_tlm/${fileName}.txt`);
        file = await file.text();
        linesArr = file.split("\n");
        if(keyWord=="TELEMETRY") {
            tlmLinesArr = linesArr ;
        }
        else {
            cmdLinesArr = linesArr ;
        }
    }
    else {
        linesArr = fileName == "cmd" ? cmdLinesArr : tlmLinesArr ;
    }
    const pattern = new RegExp(`${txt}`);
    linesArr.map( (line) =>{
        try {
            let lineArr = line.match(/"[^"]*"|\S+/g).map(item => item.replace(/^"|"$/g, ''));
            if( lineArr[0]==keyWord && pattern.test(lineArr[2])){
                suggArr.push( lineArr[2] );
            }
        }
        catch(err){
            // console.log("error");
        }
        // TELEMETRY COMMAND
    });
    return suggArr;
}

export default searchSuggest;