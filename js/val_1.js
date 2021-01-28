function val_1() {
    var a = document.getElementById('val-1').value
    var b = document.getElementById('val-2').value
    if (a == 'lord voldemort' && b == 'tios') {
        return true
    } else {
        alert('¡Inténtalo de nuevo Muggle!')
        return false
    }
}