function pantalla7() {
    var a = document.getElementById('p13').value
    var b = document.getElementById('p14').value

    if (a == 'mandragoras' && b == 'branquialgas') {
        return true
    } else {
        alert('¡Inténtalo de nuevo Muggle!')
        return false
    }
}