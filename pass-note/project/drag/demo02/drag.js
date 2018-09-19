/**
 * jQuery Drag v1.0
 *
 * @author Dymyw <dymayongwei@163.com>
 * @since 2014-08-04
 * @version 2014-08-06
 */

(function($) {
    /**
     * plugin definition
     *
     * @param {object} configs
     * @returns {object}
     */
    $.fn.drag = function(configs) {
        var defaults = {
            // selector or selector_string
            handler: null,

            // in the parent node
            areaLimit: false,
            // in the rectangle, relative to the current position
            areaLimitBox: {available: false, x: null, y: null},

            // callback api
            onMove: $.noop,
            onDrop: $.noop
        };

        if ('object' === typeof configs) {
            return this.each(function() {
                var $drag = $(this);

                $drag.options = $.extend({}, defaults, configs);
                var handler = $drag.options.handler ? $drag.options.handler : $drag;
                    handler = ('string' === typeof handler) ? $(handler) : handler;

                // area limit, in the parent node
                var parentWidth = $drag.parent().is('body') ? $(window).width() : $drag.parent().width();
                var parentHeight = $drag.parent().is('body') ? $(window).height() : $drag.parent().height();
                var limitX = parentWidth - $drag.width();
                var limitY = parentHeight - $drag.height();

                var divDefaultPosition = [parseInt($drag.css('left')), parseInt($drag.css('top'))],
                    dragStart = false,
                    divStartPosition = [],
                    mouseStartPosition = [];

                // handler event
                handler.on('mouseover', function() {
                    $(this).css('cursor', 'move');
                }).on('mousedown', function(e) {
                    e.preventDefault();

                    dragStart = true;
                    mouseStartPosition = [e.pageX, e.pageY];
                    divStartPosition = [parseInt($drag.css('left')), parseInt($drag.css('top'))];
                });

                // mousemove & mouseup
                $(document).on('mousemove', {e: $drag}, function(s) {
                    s.preventDefault();

                    if (dragStart) {
                        var left = divStartPosition[0] + s.pageX - mouseStartPosition[0];
                        var top = divStartPosition[1] + s.pageY - mouseStartPosition[1];

                        // area limit, in the parent node
                        if ($drag.options.areaLimit) {
                            left = left < 0 ? 0 : left;
                            left = left > limitX ? limitX : left;
                            top = top < 0 ? 0 : top;
                            top = top > limitY ? limitY : top;
                        }

                        // in the rectangle
                        if ($drag.options.areaLimitBox.available) {
                            var limitBoxX = $drag.options.areaLimitBox.x,
                                limitBoxY = $drag.options.areaLimitBox.y;
                            left = (left > (divDefaultPosition[0] + limitBoxX)) ? (divDefaultPosition[0] + limitBoxX) : left;
                            left = (left < (divDefaultPosition[0] - limitBoxX)) ? (divDefaultPosition[0] - limitBoxX) : left;
                            top  = (top  > (divDefaultPosition[1] + limitBoxY)) ? (divDefaultPosition[1] + limitBoxY) : top;
                            top  = (top  < (divDefaultPosition[1] - limitBoxY)) ? (divDefaultPosition[1] - limitBoxY) : top;
                        }

                        $drag.css({
                            left: left + 'px',
                            top: top + 'px'
                        });

                        $drag.options.onMove(s.data.e);
                    }
                }).on('mouseup', {e: $drag}, function(s) {
                    dragStart = false;

                    $drag.options.onDrop(s.data.e);
                });
            });
        }
    };
})(jQuery);