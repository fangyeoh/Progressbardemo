
  // getting the values using ajax from file 
            var xhttp = new XMLHttpRequest();
			
			// ajax method for get file from sever 
            xhttp.open("GET", "http://pb-api.herokuapp.com/bars");
            xhttp.send();
			
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    
                    var data = JSON.parse(this.responseText);
					
					// create dynamic bars using for loop
					for (var i = 0; i < data.buttons.length; i++)
                    {
					
					var butt = document.createElement("button");
                    var cont = document.getElementById("but");        
					cont.appendChild(butt);  
           			butt.innerHTML = data.buttons[i];		
                    butt.setAttribute("id", "btn" + i);
					butt.setAttribute("class", "cBtn");
					butt.setAttribute("value", data.buttons[i]);
					
					butt.addEventListener('click', function () {
                    addwidth(this.value);
                    });
					
					}
                    
                    // create dynamic bars using for loop 

                    for (var i = 0; i < data.bars.length; i++)
                    {
                        var progress = document.createElement("div");
                        var cont = document.getElementById("content");
                        cont.appendChild(progress);
                        progress.setAttribute("class", "cmyprogress");
                        progress.setAttribute("id", "progress" + i);

                        var bar = document.createElement("div");
                        progress.appendChild(bar);
                        bar.setAttribute("class", "cmybar");
                        bar.setAttribute("id", "mybar" + i);
                        bar.style.width = data.bars[i] + "%";


                        var lb = document.createElement("label");
                        bar.appendChild(lb);
                        lb.setAttribute("class", "clabel");
                        lb.setAttribute("id", "label" + i);
                        lb.innerHTML = data.bars[i] + "%";
                    }

                    var ddl = document.createElement("select");                  
                    var but = document.getElementById("sel");
                    but.appendChild(ddl);
                    ddl.setAttribute("id", "ddselect");
					
					var limt = document.getElementById("limit");
					limt.setAttribute("value", data.limit); 

                // populating dropdown based on bars length
                    for (var i = 0; i < data.bars.length; i++)
                    {
                        var opt = document.createElement("option");
                        ddl.appendChild(opt);
                        opt.setAttribute("id", "ddl" + i);
                        opt.setAttribute("value", i);
                        opt.innerHTML = "#progessbar " + (1+i);
                    }

                }
           
      };

            // function for filling bar by passing value
            function addwidth(value)
            {
               // if dropdown select value is 0,1,2,3 based on that change the bar value
             
                var v = parseInt(document.getElementById("ddselect").value);
				var lim = parseInt(document.getElementById("limit").value);
                var a = document.getElementById("label"+v).innerHTML;
                                
               // add current value of bar + button current value of selected bar
                value = parseInt(value) + parseInt(a);

               // if value is greater than 100 & above change the color red            
                if (value >= 100)
                {

                    document.getElementById("mybar"+v).style.backgroundColor = "red";
                    document.getElementById("mybar"+v).style.width = "100%"; 

					if (value >= lim)
					{ 
					document.getElementById("label"+v).innerHTML = lim + "%"; 
					}
					else
					{
					document.getElementById("label"+v).innerHTML = value + "%";  
					}
                } 
                //if value is less than 100 and greater than 0 than select same green color;
                 else if (value <= 100 && value > 0)
                {
                    document.getElementById("mybar"+v).style.backgroundColor = "#4CAF50";
                    document.getElementById("mybar"+v).style.width = value + "%";
                    document.getElementById("label"+v).innerHTML = value + "%";
                } 
                // if value is less than or equal to 0 than set value and with of bar equal to 0
                  else if (value <= 0)
                {
                    document.getElementById("mybar"+v).style.width = "0%";
                    document.getElementById("label"+v).innerHTML = "0%";

                } 

            }
  
