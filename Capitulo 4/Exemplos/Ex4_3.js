        // solicita o número e repete a leitura enquanto inválido
        do {
            var num = Number(prompt("Número: "));
            if (num == 0 || isNaN(num)) {
            alert("Digite um número válido...");
            }
            } while (num == 0 || isNaN(num));
            // declara e inicializa variável que irá exibir pares
            var pares = "Pares entre 1 e " + num + ": ";
            // isola o primeiro par (para evitar última vírgula)
            if (num > 1) {
            pares = pares + "2";
            }
            // laço para acumular pares (inicia em 4, pois o 2 já foi atribuído)
            for (var i = 4; i <= num; i = i + 2) {
            pares = pares + ", " + i;
            }
            // exibe lista dos números pares
            alert(pares);