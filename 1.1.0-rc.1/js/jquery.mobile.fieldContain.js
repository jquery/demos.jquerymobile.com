(function( $, undefined ) {

$.fn.fieldcontain = function( options ) {
	return this.addClass( "ui-field-contain ui-body ui-br" );
};

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){
	$( ":jqmData(role='fieldcontain')", e.target ).jqmEnhanceable().fieldcontain();
});

})( jQuery );
