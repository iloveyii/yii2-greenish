<?php
namespace softhem\assets;

use yii\web\AssetBundle;

/**
 * Greenish AssetBundle
 * @since 1.0.0
 */
class GreenishAsset extends AssetBundle
{
    public $sourcePath = '@vendor/softhem/yii2-greenish/web';
    public $css = [
        'css/animate.css',
        'css/normalize.min.css',
        'css/templatemo_style.css',
        'css/templatemo_misc.css',
    ];
    public $js = [
        'js/main.js',
        'js/plugins.js',
    ];
    public $depends = [
        'rmrevin\yii\fontawesome\AssetBundle',
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
        'yii\bootstrap\BootstrapPluginAsset',
    ];

}
