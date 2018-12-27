var color_b1 = 255;
var color_b2 = 255;
var color_b3 = 255;
var color_brigate = [];
var triangle_points = [];
var x_line = 0;
var x_line_proces = 0;
var y_line = 0;
var column_line=0;
var triangle_id = 0;
var max_height = 500;
var max_width = 500;
var triangle_color_func;
var canvasElement = document.querySelector("#mycanvas");
var context = canvasElement.getContext("2d");
var point;

	function convert_to_hex(c) {
		var hex_color = c.toString(16);
		return hex_color.length == 1 ? "0" + hex_color : hex_color;
}

	function rgbToHex(a_color, b_color, c_color) {
		return "#" + convert_to_hex(a_color) + convert_to_hex(b_color) + convert_to_hex(c_color);
}
 

	function MaxMinRandom(min, max){
	return Math.round(Math.random() * (max-min)+min);	
	}
	
	function generate_colors(a){
		color_b1 = Math.round(color_b1 - (color_b1 * 1 /100));
		color_b2 = Math.round(color_b2 - (color_b2 * 1 /100));
		color_b3 = Math.round(color_b3 - (color_b3 * 1 /100));
		
		color_brigate[a] = [color_b1, color_b2, color_b3];
		return color_brigate[a];
	}
	
	
	function generate_triangle_point_x(){
		
		if (x_line == max_width){
			x_line = 0;
		} else {
			x_line = x_line_proces + MaxMinRandom(-100, 100);
		}
		
		if (x_line >= max_width){
			x_line = max_width;
		}
		
		return x_line;
	}
	
	function generate_triangle_point_y(){

		if (y_line == max_height){
			y_line = 0;
		} else {
			y_line = y_line + MaxMinRandom(-100, 100);
		}

		if (y_line >= max_height){
			y_line = max_height;
			x_line_proces = x_line_proces + MaxMinRandom(-100, 100);			
		}		

		return y_line;
	}
	
	function generate_triangle(a_x, a_y, b_x, b_y, c_x, c_y, line_color, triangle_color, line_width){
		context.beginPath();
		context.moveTo(a_x, a_y);
		context.lineTo(b_x, b_y);
		context.lineTo(c_x, c_y);
		context.closePath();
		
		context.lineWidth = line_width;
		context.strokeStyle = line_color; 
		context.stroke();
		
		context.fillStyle = triangle_color; 
		context.fill();
		
	}
	



function run_triangle(){

//	for (xxx = 0; xxx <= 120; xxx++){
		//while(y_line != max_height && x_line != max_width){
			//triangle_points.push = ([x_line, y_line]);
			
			if (x_line == 0 && y_line < max_height){
				x_line = 0;
				generate_triangle_point_y();				
			} else {
				generate_triangle_point_x();
				generate_triangle_point_y();
			} 

	
			/*
			for (a_triangle_set = 0; a_triangle_set <= aa.length; aa++){
				triangle_points[a_triangle_set] = (aa[a_triangle_set]);
			} */
			
			//triangle_points[xxx] = (point);
			//console.log(column_line, x_line, y_line);		
			//}
			
		for (x_proces = 0; x_proces < 700; x_proces++){
			generate_colors(triangle_id);
			
			x_a = x_proces * 2  + MaxMinRandom(-50, 70);
			x_b = x_proces * 2  + MaxMinRandom(-50, 70);
			x_c = x_proces * 2  + MaxMinRandom(-50, 70);
			for (triangles = 0; triangles < 30; triangles++){
				
			y_a = triangles + triangles* + MaxMinRandom(-50, 70);
			y_b = y_a + MaxMinRandom(-50, 70);
			y_c = y_a + MaxMinRandom(-50, 70);
			//console.log(a,b,c);
			//triangle_color_func = rgbToHex(color_brigate[triangle_id][0], color_brigate[triangle_id][1], color_brigate[triangle_id][2]);
			
			if ( x_a < 100){
				triangle_color_func = '#ffae32';
			} else if (x_a < 200){
				triangle_color_func = '#FF9A00';
			} else if (x_a < 300){
				triangle_color_func = '#FF9613';
			} else if (x_a < 400){
				triangle_color_func = '#FF9225';
			} else if (x_a < 500){
				triangle_color_func = '#FF8D38';
			} else if (x_a < 600){
				triangle_color_func = '#FF894A';
			} else if (x_a < 700){
				triangle_color_func = '#FF855D';
			} else if (x_a < 800){
				triangle_color_func = '#FF816F';
			} else if (x_a < 900){
				triangle_color_func = '#FF7D82';
			}else if (x_a < 1000){
				triangle_color_func = '#FF7994';
			}else if (x_a < 1100){
				triangle_color_func = '#FF74A7';
			}else if (x_a < 1200){
				triangle_color_func = '#FF70B9';
			}else if (x_a < 1300){
				triangle_color_func = '#FF6CCC';
			} else { triangle_color_func = '#FF6CCC'}  
			
			generate_triangle(	x_a,
								y_a,
								x_b,
								y_b,
								x_c,
								y_c,
								'#ffffff',
								triangle_color_func, 
								0);
		
			
		}
		triangle_id++;
	}
}


run_triangle();

