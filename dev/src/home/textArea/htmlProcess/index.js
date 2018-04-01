import Process from './process'

export const htmlProcess = (html, processCB, resultCB) => {
    const process = new Process(html)
    processCB('Process Empty <span> tag with id=[OSC_H]');
    process.removeNoDataSpan();
    processCB('Process unUse &nbsp; with tag <p>');
    process.removeUnUserNbsp();
    resultCB(process.getHtml())
}

