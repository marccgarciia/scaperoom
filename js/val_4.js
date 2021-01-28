function val_1() {
    var a = document.getElementById('p4_1').value
    var b = document.getElementById('p4_2').value
    if (a == '11' && b == 'ron y hermione') {
        return true
    } else {
        alert('¡Inténtalo de nuevo Muggle!')
        return false
    }
}