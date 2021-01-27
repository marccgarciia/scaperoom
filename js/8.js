function pantalla8() {
    var a = document.getElementById('p15').value
    var b = document.getElementById('p16').value

    if (a == 'wingardium leviosa' && b == 'gato') {
        return true
    } else {
        alert('¡Inténtalo de nuevo Muggle!')
        return false
    }
}