import Process from './process'

export const htmlProcess = (html, name, preUrl, processCB, resultCB) => {
    const process = new Process(html, name, preUrl)
    processCB('Remove Empty <span> tag with id=[OSC_H].');
    process.removeNoDataSpan();
    processCB('Remove unUse &nbsp; with tag <p>，<h*>.');
    process.removeUnUserNbsp();
    processCB('Modify Naming Class.');
    process.modifyClassNaming();
    processCB('Modify Img tag alt name.');
    process.modifyImgAlt();
    processCB('Update Img to server.');
    //process.updateImg(()=>{});//TODO
    const index = process.generateIndex();
    resultCB(process.getHtml(), index)
}

