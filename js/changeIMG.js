window.addEventListener('load',function(){//全部加載完後再執行
    let left=document.querySelector('.prev');
    let right=document.querySelector('.next');
    let focus=document.querySelector('.focus');

    //鼠標移到上面顯示箭頭
    focus.addEventListener('mouseover',function(){
        left.style.display='block';
        right.style.display='block';
        clearInterval(timer);
        timer=null;//清除定時器變量
    })
    focus.addEventListener('mouseout',function(){
        left.style.display='none';
        right.style.display='none';
        timer=setInterval(function(){
            //手動調用事件
            right.click();
        },3000);
    })
    
    //動態生成小圈圈
    let ul=focus.querySelector('ul');
    let ol=focus.querySelector('ol');
    var imgW=focus.offsetWidth;//圖片寬度
    

    for(let i=0;i<ul.children.length;i++){
        //創建小li(小圈圈)
        let li=this.document.createElement('li');
        //紀錄圓圈索引號
        li.setAttribute('index',i);
        //將小li插入到ol裡
        ol.appendChild(li);
        //綁定點擊排他事件
        li.addEventListener('click',function(){
            //幹掉所有人
            for(let i=0;i<ol.children.length;i++){
                ol.children[i].className="";
            }
            //留下自己
            this.className="select";
            //點擊圓圈移動圖片 移動的是ul
            //ul的移動距離:圓圈索引號*圖片寬度
            
            //獲得當前圓圈索引號
            let liindex=this.getAttribute('index');
            num=liindex;
            circle=liindex;
            animate(ul,-liindex*imgW);
        })
    }
    //預設第一個li設為current
    ol.children[0].className='select';
    //克隆第一張圖放到最後
    let first=ul.children[0].cloneNode(true);
    ul.appendChild(first);

    //點擊右側按鈕滾動
    var num=0;
    var circle=0;//小圓圈顏色
    var flag=true;
    right.addEventListener('click',function(){
        if(flag){
            flag=false;//關節流閥

        //如果走到最後(克隆的第一張) num=0
        //不做動畫回到第一張 再跳到第二張
        if(num==ul.children.length-1){
            num=0;
            ul.style.left=0;
        }
        num++;
        //ul的移動距離:圓圈索引號*圖片寬度
        animate(ul,-imgW*num,function(){
            flag=true;//動畫跑完才開水
        });
        //點右側按鈕小圓圈一起變
        circle++;
        //如果circle=3代表走到克隆的那張了
        if(circle==ol.children.length){
            circle=0;
        }
        circleChange();
    }
    })
    //左側按鈕
    left.addEventListener('click',function(){
        if(flag){
            flag=false;
        //假如走到第一張 要跳回最後一張
        if(num==0){
            num=ul.children.length-1;
            ul.style.left= -num*imgW+'px';
        }
        num--;
        animate(ul,-imgW*num,function(){
            flag=true;
        });
        circle--;
        
        if(circle<0){
            circle=ol.children.length-1;
        }
        circleChange();
        }
    })

    //圈圈變化
    function circleChange(){
        //排他
        for(let i=0;i<ol.children.length;i++){
            ol.children[i].className="";
        }
        //留下自己
        ol.children[circle].className="select";
    }
   
    var timer=setInterval(function(){
        //手動調用事件
        right.click();
    },3000);

})

