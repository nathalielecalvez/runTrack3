document.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const shuffleButton = document.getElementById('shuffleButton');
    const message = document.getElementById('message');
    let emptyTile = document.querySelector('.empty');

    function shuffle() {
        let tileOrders = tiles.map((_, i) => i);
        for (let i = tileOrders.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tileOrders[i], tileOrders[j]] = [tileOrders[j], tileOrders[i]];
        }
        tiles.forEach((tile, index) => tile.style.order = tileOrders[index]);
        message.textContent = '';
        tiles.forEach(tile => tile.classList.remove('disabled'));
        message.style.color = 'black';
    }

    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            if (isAdjacent(tile, emptyTile)) {
                swapTiles(tile, emptyTile);
                emptyTile = tile;
                if (checkOrder()) {
                    message.textContent = 'Vous avez gagné';
                    message.style.color = 'green';
                    tiles.forEach(tile => tile.classList.add('disabled'));
                }
            }
        });
    });

    function swapTiles(tile1, tile2) {
        const tempOrder = tile1.style.order;
        tile1.style.order = tile2.style.order;
        tile2.style.order = tempOrder;
    }

    function isAdjacent(tile1, tile2) {
        const tile1Rect = tile1.getBoundingClientRect();
        const tile2Rect = tile2.getBoundingClientRect();
        const distance = Math.abs(tile1Rect.left - tile2Rect.left) + Math.abs(tile1Rect.top - tile2Rect.top);
        return distance === 102;
    }

    function checkOrder() {
        const correctOrder = ['tile1', 'tile2', 'tile3', 'tile4', 'tile5', 'tile6', 'tile7', 'tile8', 'tile9'];
        const currentOrder = tiles.map(tile => tile.id);
        return JSON.stringify(correctOrder) === JSON.stringify(currentOrder);
    }

    shuffleButton.addEventListener('click', shuffle);
    shuffle();
});
