const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');


const btn2=document.getElementById('btn2');
//return沒用

function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  //按下按鈕開始辨識
  btn2.addEventListener("click",function(){
    //當有人臉時開始辨認
    while (results.multiFaceLandmarks) {
      //開始跑每個點
      for (const landmarks of results.multiFaceLandmarks) {
        
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
        const green=(y151-y10)+(y152-y10);
        const orange=x368-x139;
        const blue=x366-x137;
        const purple=x364-x135;
        
        if(orange==blue&&blue==green){
          console.log('方臉');
        }else if(blue>orange&&blue>purple){
          if((green<blue+20)&&(green>blue-20)){
            console.log('圓臉');
          }else if(green*3==(blue*4+30)){
            console.log('鵝蛋臉');
          }else{
            console.log('菱形臉');
          }
        }else if(orange>blue&&blue>purple){
          if(green>blue){
            console.log('瓜子臉');
          }else if((green<blue+20)&&(green>blue-20)){
            console.log('心型臉');
          }
        }else if(purple>blue&&blue>orange){
          console.log('梨型臉');
        }
        
      //眼
        //右眼角
        const x157=landmarks[157].x*canvasElement.width;
        const x243=landmarks[243].x*canvasElement.width;
        const x154=landmarks[154].x*canvasElement.width;
        const y157=landmarks[157].y*canvasElement.height;
        const y243=landmarks[243].y*canvasElement.height;
        const y154=landmarks[154].y*canvasElement.height;
        //右眼角
        const x384=landmarks[384].x*canvasElement.width;
        const x381=landmarks[381].x*canvasElement.width;
        const x463=landmarks[463].x*canvasElement.width;
        const y384=landmarks[384].y*canvasElement.height;
        const y381=landmarks[381].y*canvasElement.height;
        const y463=landmarks[463].y*canvasElement.height;

        const x130=landmarks[130].x*canvasElement.width;
        const y130=landmarks[130].y*canvasElement.height;//右眼尾
        const y359=landmarks[359].y*canvasElement.height;//左眼尾
        const x359=landmarks[359].x*canvasElement.width;
        
        const y27=landmarks[27].y*canvasElement.height;//右眼高
        const y23=landmarks[23].y*canvasElement.height;//右眼低
        const y257=landmarks[257].y*canvasElement.height;//左眼高
        const y253=landmarks[253].y*canvasElement.height;//左眼低
        
        //右眼角
        const right = getAngle({
          x: x384 - x463,
          y: y384 - y463,
        }, {
          x: x381 - x463,
          y: y381 - y463,
        });
        //左眼角
        const left = 360-getAngle({
          x: x157 - x243,
          y: y157 - y243,
        }, {
          x: x154 - x243,
          y: y154 - y243,
        });
        

        
        //right眼
        if(right<45){//A
          if(y359<y463){//A
            if((x359-x463)<((y253-y257)*2)){//B
              console.log('右桃花眼');
            }else{//A
              console.log('右丹鳳眼');
            }
          }else{//B
            if(y359<y463){//A
              if((x359-x463)<((y253-y257)*2)){//B
                console.log('右下垂眼');
              }else{//A
                console.log('右柳葉眼');
              }
            }
          }
        }else{//B
          if(y359<y463){//A
            if((x359-x463)<((y253-y257)*2)){//B
              console.log('右瑞鳳眼');
            }else{//A
              console.log('右杏仁眼');
            }
          }else{//B
            if(y359<y463){//A
              console.log('00');
              if((x359-x463)<((y253-y257)*2)){//B
                console.log('右杏仁眼');
              }else{//A
                
                console.log('右下垂眼');
              }
            }
          }
        }

        //left眼
        if(left<45){//A
          if(y130<y243){//A
            if((x130-x243)<(y23-y27)*2){//B
              console.log('左桃花眼');
            }else{//A
              console.log('左丹鳳眼');
            }
          }else{//B
            if(y130<y243){//A
              if((x130-x243)<(y23-y27)*2){//B
                console.log('左下垂眼');
              }else{//A
                console.log('左柳葉眼');
              }
            }
          }
        }else{//B
          if(y130<y243){//A
            if((x359-x463)<(y23-y27)*2){//B
              console.log('左瑞鳳眼');
            }else{//A
              console.log('左杏仁眼');
            }
          }else{//B
            if(y130<y243){//A
              if((x130-x243)<(y23-y27)*2){//B
                console.log('左仁眼');
              }else{//A
                console.log('左下垂眼');
              }
            }
          }
        }

      //嘴
        //標準寬
        
        const lipl=x243-((x243-x130)/4);
        const lipr=x463+((x359-x463)/4);
        const lipWW=lipr-lipl;
        
        //唇寬
        const x61=landmarks[61].x*canvasElement.width;//左
        const x291=landmarks[291].x*canvasElement.width;//右
        const lipw=x291-x61;
        //唇厚
        const lipHH=lipWW/2;//標準唇厚
        const y0=landmarks[0].y*canvasElement.height;//唇峰
        const y17=landmarks[17].y*canvasElement.height;//唇底
        const liph=y17-y0;
        
        //有無唇峰
        const liphip= getAngle({
          x: landmarks[37].x - landmarks[0].x,
          y: landmarks[37].y - landmarks[0].y,
        }, {
          x: landmarks[267].x - landmarks[0].x,
          y: landmarks[267].y - landmarks[0].y,
        });
        

        if(lipw<lipWW){//A
          if(liph>lipHH){//A
            if(liphip>105){
              console.log('花瓣唇');
            }else{
              console.log('葉形唇');
            }
          }else{//B
              if(liphip>105){
                console.log('M型唇');
              }else{
                console.log('葉形唇');
              }
          }
        }else{//B
          if(liph>lipHH){//A
              console.log('厚唇');
          }else{//B
              if(liphip>105){
                console.log('標準唇');
              }else{
                console.log('薄唇');
              }
          }
        }
        

      //鼻
        //寬度
        const noseW=x463-x243;//標準寬
        const x48=landmarks[48].x*canvasElement.width;
        const x278=landmarks[278].x*canvasElement.width; 
        const nosew=x278-x48;
        if(nosew<noseW+2){
          console.log('正常鼻');
        }else{
          console.log('寬鼻');
        }
        //長短
        const noseH=green/3;//標準長
        const y6=landmarks[6].y*canvasElement.height;
        const y94=landmarks[94].y*canvasElement.height;
        const noseh=y94-y6;
        if(noseh>noseH){
          console.log('長鼻');
        }else{
          console.log('短鼻');
        }

        
        console.log('end');
        break;
        
      }
     break; 
    }
    return;//跳出迴圈
  });
}

const faceMesh = new FaceMesh({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
}});
faceMesh.setOptions({
  maxNumFaces: 1,
  refineLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});

//取得角度
const getAngle = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
  const dot = x1 * x2 + y1 * y2
  const det = x1 * y2 - y1 * x2
  const angle = Math.atan2(det, dot) / Math.PI * 180
  return (angle + 360) % 360
}

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await faceMesh.send({image: videoElement});
  },
  width: 1280,
  height: 720
});
camera.start();
faceMesh.onResults(onResults);
