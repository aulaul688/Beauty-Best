
        //臉
        const y10=landmarks[10].y*canvasElement.height;//頭部頂點
        const y151=landmarks[151].y*canvasElement.height; //頭部第二點
        const y152=landmarks[152].y*canvasElement.height;//下巴
        const x139=landmarks[139].x*canvasElement.width;//右額
        const x368=landmarks[368].x*canvasElement.width;//左額
        const x137=landmarks[137].x*canvasElement.width;//右顴骨
        const x366=landmarks[366].x*canvasElement.width;//左顴骨
        const x135=landmarks[135].x*canvasElement.width;//右下顎
        const x364=landmarks[364].x*canvasElement.width;//左下顎
        //線
        const green=(y10-y151)+(y10-y152);
        const orange=x368-x139;
        const blue=x366-x137;
        const purple=x364-x135;

        

      //眼
        //右眼角
        const x190=landmarks[190].x*canvasElement.width;
        const x243=landmarks[243].x*canvasElement.width;
        const x112=landmarks[112].x*canvasElement.width;
        const y190=landmarks[190].y*canvasElement.height;
        const y243=landmarks[243].y*canvasElement.height;
        const y112=landmarks[112].y*canvasElement.height;
        //左眼角
        const x398=landmarks[398].x*canvasElement.width;
        const x341=landmarks[341].x*canvasElement.width;
        const x463=landmarks[463].x*canvasElement.width;
        const y398=landmarks[398].y*canvasElement.height;
        const y341=landmarks[341].y*canvasElement.height;
        const y463=landmarks[463].y*canvasElement.height;

        const y130=landmarks[130].y*canvasElement.height;//右眼尾
        const y359=landmarks[359].y*canvasElement.height;//左眼尾

        const x27=landmarks[27].x*canvasElement.width;//右眼高
        const x23=landmarks[23].x*canvasElement.width;//右眼低
        const y257=landmarks[257].y*canvasElement.height;//左眼高
        const y253=landmarks[253].y*canvasElement.height;//左眼低
        //右眼角
        const right = getAngle({
          x: x398 - x463,
          y: y398 - y463,
        }, {
          x: x341 - x463,
          y: y341 - y463,
        });
        //左眼角
        const left = getAngle({
          x: x190 - x243,
          y: y190 - y243,
        }, {
          x: x112 - x243,
          y: y112 - y243,
        });

        //right
        if(right<45){//A
          if(y130>y243){//A
            if((x359-x463)<(y257-y253)*2){//B
              console.log('右桃花眼');
            }else{//A
              console.log('右丹鳳眼');
            }
          }else{//B
            if(y130>y243){//A
              if((x359-x463)<(y257-y253)*2){//B
                console.log('右下垂眼');
              }else{//A
                console.log('右柳葉眼');
              }
            }
          }
        }else{//B
          if(y130>y243){//A
            if((x359-x463)<(y257-y253)*2){//B
              console.log('右瑞鳳眼');
            }else{//A
              console.log('右杏仁眼');
            }
          }else{//B
            if(y130>y243){//A
              if((x359-x463)<(y257-y253)*2){//B
                console.log('杏仁眼');
              }else{//A
                console.log('下垂眼');
              }
            }
          }
        }
        //left
        if(left<45){//A
          if(y130>y243){//A
            if((x359-x463)<(y257-y253)*2){//B
              console.log('右桃花眼');
            }else{//A
              console.log('右丹鳳眼');
            }
          }else{//B
            if(y130>y243){//A
              if((x359-x463)<(y257-y253)*2){//B
                console.log('右下垂眼');
              }else{//A
                console.log('右柳葉眼');
              }
            }
          }
        }else{//B
          if(y130>y243){//A
            if((x359-x463)<(y257-y253)*2){//B
              console.log('右瑞鳳眼');
            }else{//A
              console.log('右杏仁眼');
            }
          }else{//B
            if(y130>y243){//A
              if((x359-x463)<(y257-y253)*2){//B
                console.log('杏仁眼');
              }else{//A
                console.log('下垂眼');
              }
            }
          }
        }

      //嘴
        //標準寬
        const x130=landmarks[130].x*canvasElement.width;
        const x359=landmarks[359].x*canvasElement.width;
        const lipr=x243-(x243-x130)/4;
        const lipl=x463+(x359-x463)/4;
        const lipW=lipl-lipr;
        //唇寬
        const x61=landmarks[61].x*canvasElement.width;//右
        const x291=landmarks[291].x*canvasElement.width;//左
        //唇厚
        const liph=lipw/2;//標準唇厚
        const y0=landmarks[0].y*canvasElement.height;//唇峰
        const y84=landmarks[84].x*canvasElement.height;//唇底
        //有無唇峰
        const x0=landmarks[0].x*canvasElement.width;
        const x37=landmarks[37].x*canvasElement.width;
        const x267=landmarks[267].x*canvasElement.width;
        const y37=landmarks[37].y*canvasElement.height;
        const y267=landmarks[267].y*canvasElement.height;
        
        const liphip= getAngle({
          x: x37 - x0,
          y: y37 - y0,
        }, {
          x: x267 - x0,
          y: y267 - y0,
        });

        

      //鼻
        //寬度
        const noseW=x463-x243;//標準寬
        const x48=landmarks[48].x*canvasElement.width;
        const x278=landmarks[278].x*canvasElement.width; 
        const nosew=x278-x48;
        //長短
        const noseH=green/3;//標準長
        const y6=landmarks[6].y*canvasElement.height;
        const y94=landmarks[94].y*canvasElement.height;
        const noseh=y6-y94;
        
        
        
        
          return;//跳出迴圈
        
        
    