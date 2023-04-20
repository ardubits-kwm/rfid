// ArduBits Serial MP3 blocks supporting Catalex Serial MP3 1.0

let idnum = 0
//% weight=100 color=#64C800 icon="\u272a" block="MP3"
namespace RFID {


    //% blockId=INIT_RFID block="初始化ID射频卡 RX|%rx TX|%tx"
    //% group = "rfid" weight=70 
    export function initRFID(rx: SerialPin, tx: SerialPin):void {
        serial.redirect(rx as number,tx as number,BaudRate.BaudRate9600)
    }


    //% blockId=READ_ID_NUM block="ID射频卡读取卡号"
    //% group = "rfid" weight=71
    export function readidNum(): number {
        const readiddata = serial.readBuffer(6)
        if (readiddata.length > 5){
            if ((readiddata[0]^readiddata[1]^readiddata[2]^readiddata[3]^readiddata[4])==readiddata[5]){
                idnum = readiddata[1]*4294967296 + readiddata[2]*65536 + readiddata[3]*256 + readiddata[4]
            }
        }else{
            idnum = 0
        }
        return idnum       
    }
    

}
