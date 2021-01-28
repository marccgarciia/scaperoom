function val_1() {
    var a = document.getElementById('val-1').value
    var b = document.getElementById('val-2').value
    if (a == '9 3/4' && b == 'sombrero seleccionador') {
        return true
    } else {
        alert('¡Inténtalo de nuevo Muggle!')
        return false
    }
}