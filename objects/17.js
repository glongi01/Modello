/*
* Intensity Nivo Slider Utilies
* Copyright 2013, DotNetNuclear.com
*/
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
             ? Math.ceil(from)
             : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
}
function AlterActiveSliderImage(slider, fn) {
    var activeImgSrc = $('#' + slider + ' img.nivo-main-image').attr('src');
    $('#' + slider + ' img').each(function () {
        if (activeImgSrc == $(this).attr('src')) {
            fn($(this), slider);
            return false;
        }
    });
    var count = $('#' + slider + ' img:not(.nivo-main-image)').size();
    if (count == 1) {  $('#' + slider + ' .nivo-directionNav a').attr('style','display:none'); }
}
function ClearCaption(slider) {
    var caption = $('#' + slider + ' div.nivo-caption');
    $(caption).stop().fadeOut('slow', function () { });
    $(caption).empty();
    $(caption).unbind();
}
function ShowCaption(slider) {
    var caption = $('#' + slider + ' div.nivo-caption');
    $(caption).css('cursor', 'default');
    if ($(caption).html().length > 0) {
        $(caption).stop().fadeIn('slow', function () { });
        //Set caption link if it exists
        var capLnk = $(caption).find('a.captionLink:first');
        if ($(capLnk).length) {
            $(caption).css('cursor','pointer');
            $(caption).bind('click', function(event) {
                fnAnchorClick(event, document.getElementById($(capLnk).attr('id')));
            });
        }
    }
}
function fnSetCaptionPosition(activeImg, slider) {
    var caption = $('#' + slider + ' .nivo-caption');
    if ($(activeImg) != null) {
        var title = $(activeImg).attr('title');
        var pos = title.substring(title.lastIndexOf("_") + 1);
        $(caption).attr('class', 'nivo-caption');
        if (['top', 'left', 'right', 'bottom'].indexOf(pos) >= 0) {
            $(caption).addClass('nivo-caption-' + pos);
        }
    }
}
function fnRemoveImageLink(activeImg, slider) {
    if ($(activeImg) != null) {
        if ($(activeImg).parent().is("a")) {
            $(activeImg).unwrap();
        }
    }
}
function fnAnchorClick(event, anchorObj) {
    if (anchorObj.click) {
        anchorObj.click()
    } else if (document.createEvent) {
        if (event.target !== anchorObj) {
            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true, window,
          0, 0, 0, 0, 0, false, false, false, false, 0, null);
            var allowDefault = anchorObj.dispatchEvent(evt);
        }
    }
}
