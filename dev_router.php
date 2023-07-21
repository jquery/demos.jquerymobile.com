<?php
/**
 * Router for the php cli-server built-in webserver.
 *
 * This is not meant to run in production.
 */

if ( PHP_SAPI !== 'cli-server' ) {
	die( "Forbidden" );
}

$rootDir = $_SERVER['DOCUMENT_ROOT'] ?? null;
$urlPath = $_SERVER['REQUEST_URI'] ?? null;
if ( $rootDir === null || $urlPath === null ) {
	// Let built-in server handle error.
	return false;
}

// Simulate Apache `DirectoryIndex index.html index.php`
$file = $rootDir . $urlPath;
if ( basename( $urlPath ) !== ''
	&& is_readable( $file )
	&& is_dir( $file )
	&& is_readable( $file . '/index.html' )
) {
	readfile( $file . '/index.html' );
	return true;
}

// Let built-in server handle regular PHP files and static files.
return false;
