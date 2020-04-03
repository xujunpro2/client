import viewerHelper from "@/utils/viewHelper";
import { BimiViewer, ProductState } from "@/assets/js/bim/bim";

var MessageUtil = function(){}
MessageUtil.prototype.doMessage = function(message)
{
    var type = message.type;
    console.info(message);
    switch(type)
    {
        case 'bimi_transparent':
            this.bimi_setRenderingMode(message.enable);
            break;
        case 'bimi_pick':
            this.bimi_pickProduct(message.productIds);
            break;
        case 'bimi_zoomTo':
            this.bimi_zoomTo(message.productId);
            break;
        case 'bimi_defineColor':
            this.bimi_defineColor(message.colorId,message.rgba);
            break;
        case 'bimi_setProductColor':
            this.bimi_setProductColor(message.colorId,message.productIds);
            break;    
        case 'bimi_resetProductDefatulColor':
            this.bimi_resetProductDefatulColor(message.productIds);
            break;
        default:
            break;
    }
}
//设置模型是否透明
MessageUtil.prototype.bimi_setRenderingMode = function(transparent)
{
    var bimi = viewerHelper.getViewer();
    transparent? bimi.renderingMode = "x-ray":bimi.renderingMode = "normal";
}
//设置选中构件
MessageUtil.prototype.bimi_pickProduct = function(productIds)
{
    var bimi = viewerHelper.getViewer();
    bimi.resetStates();
    bimi.setState(ProductState.HIGHLIGHTED,productIds);	
}
//设置定位某构件
MessageUtil.prototype.bimi_zoomTo = function(productId)
{
    var bimi = viewerHelper.getViewer();
    bimi.zoomTo(productId);
    bimi.setCameraTarget(productId);
}
//定义构件颜色,注意构件颜色设置要先定义才行,colorId 为 1-224,rgba是个数组[r, g, b, a]
MessageUtil.prototype.bimi_defineColor = function(colorId,rgba)
{
    var bimi = viewerHelper.getViewer();
    bimi.defineStyle(colorId, rgba); 
}
//设置构件颜色,可以传构件ID数组
MessageUtil.prototype.bimi_setProductColor = function(colorId,productIds)
{
    var bimi = viewerHelper.getViewer();
    bimi.setStyle(colorId, productIds);
}
//reset构件颜色，参数是构件ID数组
MessageUtil.prototype.bimi_resetProductDefatulColor = function(productIds)
{
    var bimi = viewerHelper.getViewer();
    bimi.setStyle(ProductState.UNSTYLED, productIds );
}
export default MessageUtil;