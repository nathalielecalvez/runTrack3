const gameContainer = document.getElementById('game');
        const message = document.getElementById('message');
        const restartButton = document.getElementById('restart');

        let tiles = [];
        const size = 3;

        function initializeGame() {
            tiles = [...Array(size * size - 1).keys()].map(i => ({ id: i + 1, image: `images/pika${i + 1}.png` }));
            tiles.push(null); // Case vide
            shuffleTiles();
            render();
            message.style.display = 'none';
            restartButton.style.display = 'none';
        }

        function shuffleTiles() {
            do {
                tiles.sort(() => Math.random() - 0.5);
            } while (!isSolvable());
        }

        function isSolvable() {
            const inversions = tiles
                .filter(tile => tile !== null)
                .reduce((acc, tile, index) => acc + tiles.slice(index + 1).filter(t => t && t.id < tile.id).length, 0);
            return inversions % 2 === 0;
        }

        function render() {
            gameContainer.innerHTML = '';
            tiles.forEach(tile => {
                const tileDiv = document.createElement('div');
                tileDiv.className = 'tile' + (tile ? '' : ' empty');
                if (tile) {
                    tileDiv.style.backgroundImage = `url(${tile.image})`;
                    tileDiv.onclick = () => moveTile(tile.id);
                }
                gameContainer.appendChild(tileDiv);
            });
        }

        function moveTile(id) {
            const emptyIndex = tiles.indexOf(null);
            const tileIndex = tiles.findIndex(t => t && t.id === id);
            if (isAdjacent(emptyIndex, tileIndex)) {
                [tiles[emptyIndex], tiles[tileIndex]] = [tiles[tileIndex], tiles[emptyIndex]];
                if (checkWin()) {
                    message.style.display = 'block';
                    restartButton.style.display = 'block';
                }
                render();
            }
        }

        function isAdjacent(emptyIndex, tileIndex) {
            const emptyRow = Math.floor(emptyIndex / size);
            const emptyCol = emptyIndex % size;
            const tileRow = Math.floor(tileIndex / size);
            const tileCol = tileIndex % size;

            return (Math.abs(emptyRow - tileRow) + Math.abs(emptyCol - tileCol)) === 1;
        }

        function checkWin() {
            return tiles.every((tile, index) => tile === null || tile.id === index + 1);
        }

        restartButton.onclick = initializeGame;

        initializeGame();