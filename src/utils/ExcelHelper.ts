//import xlsx

import * as Excel from 'xlsx'
import fs from 'fs'

//define test data structure

interface TestRecord{
    email:string
    pwd:string
}

//create method to read excel file

export function readExcelFile(filepath:string){

    //Read file as excel string

    const file = fs.readFileSync(filepath);

    //parse into workbook

    const workbook = Excel.read(file);

    //get first sheet

    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    //convert sheet into json

    const rawData:any[] = Excel.utils.sheet_to_json(sheet,{header:1});

    //convert raw data into TestRecord

    const records: TestRecord[] = rawData.slice(1).map((column:any)=>({
        email:column[0],
        pwd:column[1]
    }));

    return records;
}