/*
export function printDiv(divName) {
    let w = window.open();
    var printContents = document.getElementById(divName).innerHTML;
    w.document.write(printContents);
    w.print();
    w.close();
}*/

export function printDisv(divName) {
    let printContents = document.getElementById(divName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
    window.close();
}

export function printDiv(elem)
{
    let mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><body >');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}