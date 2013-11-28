<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package _popmatik
 */

/**
 * Add theme support for Infinite Scroll.
 * See: http://jetpack.me/support/infinite-scroll/
 */
function _popmatikjetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'footer'    => 'page',
	) );
}
add_action( 'after_setup_theme', '_popmatikjetpack_setup' );
