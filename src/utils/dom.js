export  function getElemPos(obj){
    var pos = {"top":0, "left":0};
     if (obj.offsetParent){
       while (obj.offsetParent){
         pos.top += obj.offsetTop;
         pos.left += obj.offsetLeft;
         obj = obj.offsetParent;
       }
     }else if(obj.x){
       pos.left += obj.x;
     }else if(obj.x){
       pos.top += obj.y;
     }
     return {x:pos.left, y:pos.top};
}

export function objIsNull(obj) {
	return obj === void 0;
}


export function jumpAnchor(anchorName) {
  // 找到锚点
  var anchorElement = document.getElementById(anchorName);
  // 如果对应id的锚点存在，就跳转到锚点
  if (anchorElement) {
    anchorElement.scrollIntoView();
  }
}


// export function getElemPos(obj){
//     var pos = {"top":0, "left":0};
//      if (obj.offsetParent){
//        while (obj.offsetParent){
//          pos.top += obj.offsetTop;
//          pos.left += obj.offsetLeft;
//          obj = obj.offsetParent;
//        }
//      }else if(obj.x){
//        pos.left += obj.x;
//      }else if(obj.x){
//        pos.top += obj.y;
//      }
//      return {x:pos.left, y:pos.top};
// }
