export function printDiv(divName) {
    let w=window.open();
    var printContents = document.getElementById(divName).innerHTML;
    w.document.write(printContents);
    w.print();
    w.close();
}