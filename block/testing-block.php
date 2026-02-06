<?php
/**
 * Plugin Name: Testing Block
 */

function testing_block_register_dynamic_block() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'testing_block_register_dynamic_block' );
