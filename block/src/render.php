<?php
/**
 * Dynamic block render callback
 */

$attributes = wp_parse_args(
    $attributes,
    [
        'title' => $attributes['title'],
        'content' => $attributes['content'],
        'buttonText' => $attributes['buttonText'],
        'buttonUrl' => $attributes['buttonUrl'],
    ]
);

ob_start();
?>
<div class="wp-block-my-plugin-dynamic-hello">
    <?php echo esc_html( $attributes['title'] ); ?>
    <?php echo esc_html( $attributes['content'] ); ?>
    <?php echo esc_html( $attributes['buttonText'] ); ?>
    <?php echo esc_html( $attributes['buttonUrl'] ); ?>
</div>
<?php
return ob_get_clean();