function animate(obj,target,callback){//封裝起來 傳作用對象及停止目標
    let timer=setInterval(function(){//設定時器
        //設減緩的步數
        let step=(obj.offsetLeft-target)/10;
        if(step>0){
            step=Math.ceil(step);
        }else{
            step=Math.floor(step);
        }
        
        if(obj.offsetLeft==target){//設停止條件
            //停止動畫(定時器)
            clearInterval(timer);
            if(callback){
                callback();//回調函數 動畫做完才執行 沒要用可傳1
            }
        }
        //緩動動畫:(目標值-現在值)/10
        obj.style.left = obj.offsetLeft - step +'px';//獲取當前位置+移動距離
    },10);//相隔時間
    
}

//step最後停止的大小要靠試的試出來(0.5)
//也可以將step設成整數Math.ceil