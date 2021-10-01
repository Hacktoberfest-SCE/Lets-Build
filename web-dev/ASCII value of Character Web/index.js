const input = document.querySelector('.input-text');
input.addEventListener('keyup', convert);

function convert(e) {
    const input = e.target.value;
    if(input === ''){
        document.getElementById('resultadoASCII').textContent = 'XX';
        document.getElementById('resultadoBinary').textContent = '00000000';
    }else{
        const ascii = input.charCodeAt(0);
        var length = input.length,
            output = [];
        for (var i = 0; i < length; i++) {
            var bin = input[i].charCodeAt().toString(2);
            output.push(Array(8 - bin.length + 1).join("0") + bin);
        }
        const binary = output[0];
        document.getElementById('resultadoASCII').textContent = ascii;
        document.getElementById('resultadoBinary').textContent = binary;
    }
}