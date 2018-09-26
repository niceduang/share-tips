requirejs.config({
    paths: {
        jquery: '../../lib/jquery.min',
        dialog: '../../lib/dialog',
        game: './game'
    }
});
define(['jquery', 'dialog', 'game'], ($, dia, game) => {
    $(() => {
        let num = 10;
        $('#box').text(`$ in ... ${num}`);
        dia.show(`dialog show ... ${num}`);
        game.start(`game start ... ${num}`);
        $('input').on('click', () => {
            num++;
            dia.show(`dialog show ... ${num}`);
            game.start(`game start ... ${num}`);
        });
    });
});