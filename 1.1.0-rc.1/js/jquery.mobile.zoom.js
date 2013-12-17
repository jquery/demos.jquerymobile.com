( function( $ ) {
	var	meta = $( "meta[name=viewport]" ),
        initialContent = meta.attr( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1, user-scalable=no",
        enabledZoom = initialContent + ",maximum-scale=10, user-scalable=yes";
	
	$.mobile.zoom = $.extend( {}, {
		enabled: true,
		locked: false,
		disable: function( lock ) {
			if( !$.mobile.zoom.locked ){
	        	meta.attr( "content", disabledZoom );
	        	$.mobile.zoom.enabled = false;
				$.mobile.zoom.locked = lock || false;
			}
		},
		enable: function( unlock ) {
			if( !$.mobile.zoom.locked || unlock ){
		        meta.attr( "content", enabledZoom );
		        $.mobile.zoom.enabled = true;
				$.mobile.zoom.locked = false;
			}
		},
		restore: function() {
	        meta.attr( "content", initialContent );
	        $.mobile.zoom.enabled = true;
		}
	});

}( jQuery ));
