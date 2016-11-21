
Spry.Utils.addLoadListener(function() {

	function createFlower(context ,n ,dx ,dy,size,length)
	{
		//开始创建路径
		context.beginPath();
		context.moveTo(dx,dy + size);
		var dig =2*Math.PI/n;
		for(var i=1;i<n+1;i++)
		{
			//计算控制点的坐标
			var ctrlX=Math.sin((i-0.5)*dig)*length+dx;
			var ctrlY=Math.cos((i-0.5)*dig)*length+dy;
			//计算结束点的坐标
			var x=Math.sin(i*dig)*size+dx;
			var y=Math.cos(i*dig)*size+dy;
			//绘制二次曲线
			context.quadraticCurveTo(ctrlX,ctrlY,x,y);
		}
		context.closePath();
	}
	//定义每个雪花的初始位置
	snowPos=[
		/*{x:20,y:4},
		{x:60,y:4},
		{x:100,y:4},
		{x:140,y:4},
		{x:180,y:4},
		{x:220,y:4},
		{x:260,y:4},
		{x:300,y:4},
		{x:340,y:4},
		{x:380,y:4},*/
		//{x:200,y:0},
		{x:110,y:10},
		//{x:220,y:0},
	];
	function fall(context)
	{
		//设置采用黑色作为填充色
		context.fillStyle="#000";
		//填充矩形
		context.fillRect(10 ,10,220, 400);
		//设置采用白色作为填充色
		context.fillStyle="red";
		for(var i=0,len=snowPos.length;i<len;i++)
		{
			//保存当前绘图状态
			context.save();
			//平移系统坐标
			context.translate(snowPos[i].x,snowPos[i].y);
			//旋转坐标系统
			//context.rotate((Math.random()*6-3)*Math.PI/10);//旋转
			//var k=prompt("输入你要的速度");
			snowPos[i].y+=Math.random()*15;//调整下落速度
			if(snowPos[i].y>400)
			{
				snowPos[i].y=10;
			}
			//创建并绘制雪花
			createFlower(context,4,4,4,4,10);
			context.fill();
			//恢复绘图状态
			context.restore();
		}
	}
	//获取canvas元素对应的DOM对象
	var canvas=document.getElementById('mc');
	//获取canvas上绘图的CanvasRenderingContext2D对象
	var ctx=canvas.getContext('2d');
	setInterval("fall(ctx);",200);
	
	


});
