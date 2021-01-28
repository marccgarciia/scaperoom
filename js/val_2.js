function val_1() {
    var a = document.getElementById('val-1').value
    var b = document.getElementById('val-2').value
    if (a == 'lechuza' && b == 'gryffindor') {
        return true
    } else {
        alert('¡Inténtalo de nuevo Muggle!')
        return false
    }
}