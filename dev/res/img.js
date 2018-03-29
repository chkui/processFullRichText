import shapImg from './bg/shap.png'
import wfcWeChatImg from './icon/wfc-wechat.jpg'


/**
 * 必须区别业务图片和图标的差异。
 * 图标是一些固定的小图片，由开发人员嵌入到页面中。一般我们通过Tag.Icon标签转换成base64来使用
 * 图片由用于上传，一般比较大。一般我们通过Tag.Img标签直接引入外部路径来使用。
 */

/**
 * 全局图标。
 * 使用说明：
 *
 * //首先通过import在这里引入图标
 * import myImg from './img/myImg.svg'
 *
 * //然后将引入的图标设定到img对象中
 * const img = {
 *    //其他图标.....
 *    myImg:myImg
 * }
 *
 * //在业务代码中通过Tag.Icon标签来使用图标
 * import Tag from 'component/tag'
 * <Tag.Icon src="myImg" />
 *
 * @type {{}}
 */
const img = {
    'shap-Img':shapImg, //about us页面使用的方框背景图标
    'wfc-wechat-img':wfcWeChatImg
}

module.exports = img

//window && (window["__REN__ECE"] = img);//模拟css等效果，将图片输出到全局||||||| .r4434
