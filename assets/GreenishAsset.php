<?php
namespace softhem\asset;

use yii\web\AssetBundle;

/**
 * AdminLte AssetBundle
 * @since 0.1
 */
class GreenishAsset extends AssetBundle
{
    public $sourcePath = '@vendor/softhem/web/greenish';
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
