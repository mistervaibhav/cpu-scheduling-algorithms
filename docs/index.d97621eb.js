let e=1;document.getElementById("priority-toggle-btn").onclick=()=>{let t=document.getElementById("priority-preference").innerText;document.getElementById("priority-preference").innerText="high"==t?"low":"high",e*=-1};let t=document.getElementById("algo");function n(){let e=document.querySelectorAll(".priority");"pnp"==t.value||"pp"==t.value?e.forEach((e=>{e.classList.remove("hide")})):e.forEach((e=>{e.classList.add("hide")}))}function r(){document.querySelectorAll("input").forEach((e=>{"number"==e.type&&(e.onchange=()=>{let t=Number(e.value),n=Number.isInteger(t);e.parentNode.classList.contains("arrival-time")||"context-switch"==e.id?e.value=!n||n&&t<0?0:t:e.value=!n||n&&t<1?1:t})}))}t.onchange=()=>{!function(){let e=document.querySelector("#time-quantum").classList;"rr"==t.value?e.remove("hide"):e.add("hide")}(),n()},r();let i=1;function l(){let e=function(){let e=1;for(let r=0;r<i;r++)t=e,n=document.querySelector(".main-table").rows[2*r+2].cells.length,e=t*n/function(e,t){for(;t;){let n=t;t=e%t,e=n}return e}(t,n);var t,n;return e}();document.querySelector("thead .process-time").setAttribute("colspan",e);let t=[],n=document.querySelector(".main-table");for(let e=0;e<i;e++){let r=n.rows[2*e+2].cells;t.push(r.length)}for(let r=0;r<i;r++){let i=n.rows[2*r+1].cells,l=n.rows[2*r+2].cells;for(let n=0;n<t[r];n++)i[n+3].setAttribute("colspan",e/t[r]),l[n].setAttribute("colspan",e/t[r])}}function o(){let e=[],t=document.querySelector(".main-table");for(let n=0;n<i;n++){let r=t.rows[2*n+2].cells;e.push(r.length)}let n=document.querySelectorAll(".add-process-btn");for(let t=0;t<i;t++)n[t].onclick=()=>{let n=document.querySelector(".main-table"),i=n.rows[2*t+1],o=n.rows[2*t+2],s=i.insertCell(e[t]+3);s.innerHTML="IO",s.classList.add("process-time"),s.classList.add("io"),s.classList.add("process-heading");let a=o.insertCell(e[t]);a.innerHTML='<input type="number" min="1" step="1" value="1">',a.classList.add("process-time"),a.classList.add("io"),a.classList.add("process-input");let c=i.insertCell(e[t]+4);c.innerHTML="CPU",c.classList.add("process-time"),c.classList.add("cpu"),c.classList.add("process-heading");let m=o.insertCell(e[t]+1);m.innerHTML='<input type="number" min="1" step="1" value="1">',m.classList.add("process-time"),m.classList.add("cpu"),m.classList.add("process-input"),e[t]+=2,l(),r()};let o=document.querySelectorAll(".remove-process-btn");for(let t=0;t<i;t++)o[t].onclick=()=>{if(e[t]>1){let n=document.querySelector(".main-table");e[t]--;let r=n.rows[2*t+1];r.deleteCell(e[t]+3);let i=n.rows[2*t+2];i.deleteCell(e[t]),e[t]--,n=document.querySelector(".main-table"),r=n.rows[2*t+1],r.deleteCell(e[t]+3),i=n.rows[2*t+2],i.deleteCell(e[t]),l()}}}o(),document.querySelector(".add-btn").onclick=()=>{!function(){i++;let e=`\n                          <td class="process-id" rowspan="2">P${i}</td>\n                          <td class="priority hide" rowspan="2"><input type="number" min="1" step="1" value="1"></td>\n                          <td class="arrival-time" rowspan="2"><input type="number" min="0" step="1" value="0"> </td>\n                          <td class="process-time cpu process-heading" colspan="">CPU</td>\n                          <td class="process-btn"><button type="button" class="add-process-btn">+</button></td>\n                          <td class="process-btn"><button type="button" class="remove-process-btn">-</button></td>\n                      `,t=document.querySelector(".main-table tbody");t.insertRow(t.rows.length).innerHTML=e,t.insertRow(t.rows.length).innerHTML='\n                           <td class="process-time cpu process-input"><input type="number" min="1" step="1" value="1"> </td>\n                      ',n(),o(),l(),r()}()},document.querySelector(".remove-btn").onclick=()=>{!function(){let e=document.querySelector(".main-table");i>1&&(e.deleteRow(e.rows.length-1),e.deleteRow(e.rows.length-1),i--),l(),r()}()};class s{constructor(){this.processId=[],this.priority=[],this.arrivalTime=[],this.processTime=[],this.processTimeLength=[],this.totalBurstTime=[],this.algorithm="",this.algorithmType="",this.timeQuantum=0,this.contextSwitch=0}}class a{constructor(){this.remainingProcessTime=[],this.remainingBurstTime=[],this.remainingTimeRunning=[],this.currentProcessIndex=[],this.start=[],this.done=[],this.returnTime=[],this.currentTime=0}}class c{constructor(){this.completionTime=[],this.turnAroundTime=[],this.waitingTime=[],this.responseTime=[],this.schedule=[],this.timeLog=[],this.contextSwitches=0,this.averageTimes=[]}}class m{constructor(){this.time=-1,this.remain=[],this.ready=[],this.running=[],this.block=[],this.terminate=[],this.move=[]}}function d(e,t){switch(e.algorithm=t,t){case"fcfs":case"sjf":case"ljf":case"pnp":case"hrrn":e.algorithmType="nonpreemptive";break;case"srtf":case"lrtf":case"pp":e.algorithmType="preemptive";break;case"rr":e.algorithmType="roundrobin"}}function u(e){for(let t=1;t<=i;t++){e.processId.push(t-1);let n=document.querySelector(".main-table").rows[2*t-1].cells,r=document.querySelector(".main-table").rows[2*t].cells;e.priority.push(Number(n[1].firstElementChild.value)),e.arrivalTime.push(Number(n[2].firstElementChild.value));let i=Number(r.length),l=[];for(let e=0;e<i;e++)l.push(Number(r[e].firstElementChild.value));e.processTime.push(l),e.processTimeLength.push(i)}e.totalBurstTime=new Array(i).fill(0),e.processTime.forEach(((t,n)=>{t.forEach(((t,r)=>{r%2==0&&(e.totalBurstTime[n]+=t)}))})),d(e,t.value),e.contextSwitch=Number(document.querySelector("#context-switch").value),e.timeQuantum=Number(document.querySelector("#tq").value)}function p(e,t){t.remainingProcessTime=e.processTime.slice(),t.remainingBurstTime=e.totalBurstTime.slice(),t.remainingTimeRunning=new Array(i).fill(0),t.currentProcessIndex=new Array(i).fill(0),t.start=new Array(i).fill(!1),t.done=new Array(i).fill(!1),t.returnTime=e.arrivalTime.slice()}function h(e){let t=e.length,n=[],r=0;for(let i=0;i<t-1;i++)e[i]!=e[i+1]&&n.push(e[r]),r=i+1;return r==t-1&&n.push(e[r]),n}function g(e,t){for(let n=0;n<i;n++)t.turnAroundTime[n]=t.completionTime[n]-e.arrivalTime[n],t.waitingTime[n]=t.turnAroundTime[n]-e.totalBurstTime[n];t.schedule=function(e){let t=[],n=e[0][0],r=e[0][1];for(let i=1;i<e.length;i++)e[i][0]==n?r+=e[i][1]:(t.push([n,r]),n=e[i][0],r=e[i][1]);return t.push([n,r]),t}(t.schedule),t.timeLog=h(t.timeLog),t.averageTimes=function(e){let t=0;e.completionTime.forEach((e=>{t+=e})),t/=i;let n=0;e.turnAroundTime.forEach((e=>{n+=e})),n/=i;let r=0;e.waitingTime.forEach((e=>{r+=e})),r/=i;let l=0;return e.responseTime.forEach((e=>{l+=e})),l/=i,[t,n,r,l]}(t)}function T(e){return new Date(0,0,0,0,e/60,e%60)}function f(e,t){let n=["remain-ready","ready-running","running-terminate","running-ready","running-block","block-ready"];e.move.forEach((e=>{document.getElementById(n[e]).style.color=t}))}function b(e,t){h(e.timeLog);let n=document.createElement("div");n.id="time-log-div",n.style.height=15*i+300+"px";let r=document.createElement("button");r.id="start-time-log",r.innerHTML="Start Time Log",n.appendChild(r),t.appendChild(n),document.querySelector("#start-time-log").onclick=()=>{timeLogStart=1;let t=document.getElementById("time-log-div"),n=document.createElement("div");n.id="time-log-output-div";let r=document.createElement("div");r.id="time-log-table-div";let i=document.createElement("p");i.id="time-log-time",n.appendChild(r),n.appendChild(i),t.appendChild(n);let l=0,o=setInterval((()=>{!function(e){let t=document.getElementById("time-log-table-div");t.innerHTML='\n    <p id = "remain-ready" class = "arrow">&rarr;</p>\n    <p id = "ready-running" class = "arrow">&#10554;</p>\n    <p id = "running-ready" class = "arrow">&#10554;</p>\n    <p id = "running-terminate" class = "arrow">&rarr;</p>\n    <p id = "running-block" class = "arrow">&rarr;</p>\n    <p id = "block-ready" class = "arrow">&rarr;</p>\n    ';let n=document.createElement("table");n.id="remain-table",n.className="time-log-table",n.createTHead().insertRow(0).insertCell(0).innerHTML="Remain";let r=n.createTBody();for(let t=0;t<e.remain.length;t++)r.insertRow(t).insertCell(0).innerHTML="P"+(e.remain[t]+1);t.appendChild(n);let i=document.createElement("table");i.id="ready-table",i.className="time-log-table",i.createTHead().insertRow(0).insertCell(0).innerHTML="Ready";let l=i.createTBody();for(let t=0;t<e.ready.length;t++)l.insertRow(t).insertCell(0).innerHTML="P"+(e.ready[t]+1);t.appendChild(i);let o=document.createElement("table");o.id="running-table",o.className="time-log-table",o.createTHead().insertRow(0).insertCell(0).innerHTML="Running";let s=o.createTBody();for(let t=0;t<e.running.length;t++)s.insertRow(t).insertCell(0).innerHTML="P"+(e.running[t]+1);t.appendChild(o);let a=document.createElement("table");a.id="block-table",a.className="time-log-table",a.createTHead().insertRow(0).insertCell(0).innerHTML="Block";let c=a.createTBody();for(let t=0;t<e.block.length;t++)c.insertRow(t).insertCell(0).innerHTML="P"+(e.block[t]+1);t.appendChild(a);let m=document.createElement("table");m.id="terminate-table",m.className="time-log-table",m.createTHead().insertRow(0).insertCell(0).innerHTML="Terminate";let d=m.createTBody();for(let t=0;t<e.terminate.length;t++)d.insertRow(t).insertCell(0).innerHTML="P"+(e.terminate[t]+1);t.appendChild(m),document.getElementById("time-log-time").innerHTML="Time : "+e.time}(e.timeLog[l]),l!=e.timeLog.length-1&&setTimeout((()=>{f(e.timeLog[l],"red"),setTimeout((()=>{f(e.timeLog[l],"black")}),600)}),200),l++,l==e.timeLog.length&&clearInterval(o),document.getElementById("calculate").onclick=()=>{clearInterval(o),document.getElementById("time-log-output-div").innerHTML="",C()}}),1e3)}}function y(e,n,r){!function(e,t){let n=document.createElement("h3");n.innerHTML="Gantt Chart",t.appendChild(n);let r=[],i=0;e.schedule.forEach((e=>{-2==e[0]?r.push(["Time","CS","grey",T(i),T(i+e[1])]):-1==e[0]?r.push(["Time","Empty","black",T(i),T(i+e[1])]):r.push(["Time","P"+e[0],"",T(i),T(i+e[1])]),i+=e[1]}));let l=document.createElement("div");l.id="gantt-chart",google.charts.load("current",{packages:["timeline"]}),google.charts.setOnLoadCallback((function(){var e=document.getElementById("gantt-chart"),t=new google.visualization.Timeline(e),n=new google.visualization.DataTable;n.addColumn({type:"string",id:"Gantt Chart"}),n.addColumn({type:"string",id:"Process"}),n.addColumn({type:"string",id:"style",role:"style"}),n.addColumn({type:"date",id:"Start"}),n.addColumn({type:"date",id:"End"}),n.addRows(r);let l="100%";i>=20&&(l=.05*i*screen.availWidth);var o={width:l,timeline:{showRowLabels:!1,avoidOverlappingGridLines:!1}};t.draw(n,o)})),t.appendChild(l)}(n,r),r.insertAdjacentHTML("beforeend","<hr>"),function(e,t){let n=document.createElement("h3");n.innerHTML="Timeline Chart",t.appendChild(n);let r=[],i=0;e.schedule.forEach((e=>{e[0]>=0&&r.push(["P"+e[0],T(i),T(i+e[1])]),i+=e[1]})),r.sort(((e,t)=>parseInt(e[0].substring(1,e[0].length))-parseInt(t[0].substring(1,t[0].length))));let l=document.createElement("div");l.id="timeline-chart",google.charts.load("current",{packages:["timeline"]}),google.charts.setOnLoadCallback((function(){var e=document.getElementById("timeline-chart"),t=new google.visualization.Timeline(e),n=new google.visualization.DataTable;n.addColumn({type:"string",id:"Process"}),n.addColumn({type:"date",id:"Start"}),n.addColumn({type:"date",id:"End"}),n.addRows(r);let l="100%";i>=20&&(l=.05*i*screen.availWidth);var o={width:l};t.draw(n,o)})),t.appendChild(l)}(n,r),r.insertAdjacentHTML("beforeend","<hr>"),function(e,t,n){let r=document.createElement("h3");r.innerHTML="Final Table",n.appendChild(r);let l=document.createElement("table");l.classList.add("final-table");let o=l.createTHead().insertRow(0);["Process","Arrival Time","Total Burst Time","Completion Time","Turn Around Time","Waiting Time","Response Time"].forEach(((e,t)=>{o.insertCell(t).innerHTML=e}));let s=l.createTBody();for(let n=0;n<i;n++){let r=s.insertRow(n),i=r.insertCell(0);i.innerHTML="P"+(n+1),i=r.insertCell(1),i.innerHTML=e.arrivalTime[n],i=r.insertCell(2),i.innerHTML=e.totalBurstTime[n],i=r.insertCell(3),i.innerHTML=t.completionTime[n],i=r.insertCell(4),i.innerHTML=t.turnAroundTime[n],i=r.insertCell(5),i.innerHTML=t.waitingTime[n],i=r.insertCell(6),i.innerHTML=t.responseTime[n]}n.appendChild(l);let a=0;e.totalBurstTime.forEach((e=>a+=e));let c=0;t.completionTime.forEach((e=>c=Math.max(c,e)));let m=document.createElement("p");m.innerHTML="CPU Utilization : "+a/c*100+"%",n.appendChild(m);let d=document.createElement("p");if(d.innerHTML="Throughput : "+i/c,n.appendChild(d),e.contextSwitch>0){let e=document.createElement("p");e.innerHTML="Number of Context Switches : "+(t.contextSwitches-1),n.appendChild(e)}}(e,n,r),r.insertAdjacentHTML("beforeend","<hr>"),b(n,r),r.insertAdjacentHTML("beforeend","<hr>"),"rr"==t.value&&(!function(e){let t=new s;u(t);let n=0;t.processTime.forEach((e=>{e.forEach(((e,t)=>{t%2==0&&(n=Math.max(n,e))}))}));let r=[[],[],[],[],[]],i=[];for(let e=1;e<=n;e++){i.push(e);let t=new s;u(t),d(t,"rr"),t.timeQuantum=e;let n=new a;p(t,n);let l=new c;w(t,n,l),g(t,l);for(let e=0;e<4;e++)r[e].push(l.averageTimes[e]);r[4].push(l.contextSwitches)}let l=document.createElement("canvas");l.id="round-robin-chart";let o=document.createElement("div");o.id="round-robin-chart-div",o.appendChild(l),e.appendChild(o),new Chart(document.getElementById("round-robin-chart"),{type:"line",data:{labels:i,datasets:[{label:"Completion Time",borderColor:"#3366CC",data:r[0]},{label:"Turn Around Time",borderColor:"#DC3912",data:r[1]},{label:"Waiting Time",borderColor:"#FF9900",data:r[2]},{label:"Response Time",borderColor:"#109618",data:r[3]},{label:"Context Switches",borderColor:"#990099",data:r[4]}]},options:{title:{display:!0,text:["Round Robin","Comparison of Completion, Turn Around, Waiting, Response Time and Context Switches","The Lower The Better"]},scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{scaleLabel:{display:!0,labelString:"Time Quantum"}}]},legend:{display:!0,labels:{fontColor:"black"}}}})}(r),r.insertAdjacentHTML("beforeend","<hr>")),function(e){let t=[[],[],[],[]];["fcfs","sjf","srtf","ljf","lrtf","rr","hrrn","pnp","pp"].forEach((e=>{let n=new s,r=new a,i=new c;u(n),d(n,e),p(n,r),w(n,r,i),g(n,i);for(let e=0;e<4;e++)t[e].push(i.averageTimes[e])}));let n=document.createElement("canvas");n.id="algorithm-chart";let r=document.createElement("div");r.id="algorithm-chart-div",r.style.height="40vh",r.style.width="80%",r.appendChild(n),e.appendChild(r),new Chart(document.getElementById("algorithm-chart"),{type:"bar",data:{labels:["FCFS","SJF","SRTF","LJF","LRTF","RR","HRRN","PNP","PP"],datasets:[{label:"Completion Time",backgroundColor:"#3366CC",data:t[0]},{label:"Turn Around Time",backgroundColor:"#DC3912",data:t[1]},{label:"Waiting Time",backgroundColor:"#FF9900",data:t[2]},{label:"Response Time",backgroundColor:"#109618",data:t[3]}]},options:{title:{display:!0,text:["Algorithm","Comparison of Completion, Turn Around, Waiting and Response Time","The Lower The Better"]},scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{scaleLabel:{display:!0,labelString:"Algorithms"}}]},legend:{display:!0,labels:{fontColor:"black"}}}})}(r)}function w(t,n,r){function i(e){let i=e.remain.filter((n=>t.arrivalTime[n]<=e.time));i.length>0&&e.move.push(0);let o=e.block.filter((t=>n.returnTime[t]<=e.time));o.length>0&&e.move.push(5);let s=i.concat(o);s.sort(((e,t)=>n.returnTime[e]-n.returnTime[t])),s.forEach((t=>{l(t,e.remain,e.ready),l(t,e.block,e.ready)})),r.timeLog.push(JSON.parse(JSON.stringify(e))),e.move=[]}function l(e,t,n){let r=t.indexOf(e);-1!=r&&t.splice(r,1),-1==n.indexOf(e)&&n.push(e)}let o=new m;o.remain=t.processId,r.timeLog.push(JSON.parse(JSON.stringify(o))),o.move=[],o.time++;let s=-1;for(;n.done.some((e=>0==e));){i(o);let a=-1;if(1==o.running.length)a=o.running[0];else if(o.ready.length>0){if("rr"==t.algorithm)a=o.ready[0],n.remainingTimeRunning[a]=Math.min(n.remainingProcessTime[a][n.currentProcessIndex[a]],t.timeQuantum);else{let l=o.ready;if(l.sort(((e,t)=>e-t)),l.sort(((r,i)=>{switch(t.algorithm){case"fcfs":return n.returnTime[r]-n.returnTime[i];case"sjf":case"srtf":return n.remainingBurstTime[r]-n.remainingBurstTime[i];case"ljf":case"lrtf":return n.remainingBurstTime[i]-n.remainingBurstTime[r];case"pnp":case"pp":return e*(t.priority[r]-t.priority[i]);case"hrrn":function l(e){let r=n.remainingBurstTime[e];return 1+(o.time-t.arrivalTime[e]-r)/r}return l(i)-l(r)}})),a=l[0],"preemptive"==t.algorithmType&&a>=0&&s>=0&&a!=s){r.schedule.push([-2,t.contextSwitch]);for(let e=0;e<t.contextSwitch;e++,o.time++)i(o);t.contextSwitch>0&&r.contextSwitches++}}l(a,o.ready,o.running),o.move.push(1),r.timeLog.push(JSON.parse(JSON.stringify(o))),o.move=[],0==n.start[a]&&(n.start[a]=!0,r.responseTime[a]=o.time-t.arrivalTime[a])}if(o.time++,-1!=a)if(r.schedule.push([a+1,1]),n.remainingProcessTime[a][n.currentProcessIndex[a]]--,n.remainingBurstTime[a]--,"rr"==t.algorithm){if(n.remainingTimeRunning[a]--,0==n.remainingTimeRunning[a]){0==n.remainingProcessTime[a][n.currentProcessIndex[a]]?(n.currentProcessIndex[a]++,n.currentProcessIndex[a]==t.processTimeLength[a]?(n.done[a]=!0,r.completionTime[a]=o.time,l(a,o.running,o.terminate),o.move.push(2)):(n.returnTime[a]=o.time+t.processTime[a][n.currentProcessIndex[a]],n.currentProcessIndex[a]++,l(a,o.running,o.block),o.move.push(4)),r.timeLog.push(JSON.parse(JSON.stringify(o))),o.move=[],i(o)):(i(o),l(a,o.running,o.ready),o.move.push(3),r.timeLog.push(JSON.parse(JSON.stringify(o))),o.move=[]),r.schedule.push([-2,t.contextSwitch]);for(let e=0;e<t.contextSwitch;e++,o.time++)i(o);t.contextSwitch>0&&r.contextSwitches++}}else if(0==n.remainingProcessTime[a][n.currentProcessIndex[a]]){if(n.currentProcessIndex[a]++,n.currentProcessIndex[a]==t.processTimeLength[a]?(n.done[a]=!0,r.completionTime[a]=o.time,l(a,o.running,o.terminate),o.move.push(2)):(n.returnTime[a]=o.time+t.processTime[a][n.currentProcessIndex[a]],n.currentProcessIndex[a]++,l(a,o.running,o.block),o.move.push(4)),r.timeLog.push(JSON.parse(JSON.stringify(o))),o.move=[],0==o.running.length){r.schedule.push([-2,t.contextSwitch]);for(let e=0;e<t.contextSwitch;e++,o.time++)i(o);t.contextSwitch>0&&r.contextSwitches++}s=-1}else"preemptive"==t.algorithmType&&(l(a,o.running,o.ready),o.move.push(3),r.timeLog.push(JSON.parse(JSON.stringify(o))),o.move=[],s=a);else r.schedule.push([-1,1]),s=-1;r.timeLog.push(JSON.parse(JSON.stringify(o)))}r.schedule.pop()}function C(){let e=document.getElementById("output");e.innerHTML="";let t=new s,n=new a,r=new c;u(t),p(t,n),w(t,n,r),g(t,r),y(t,r,e)}document.getElementById("calculate").onclick=()=>{C()};
//# sourceMappingURL=index.d97621eb.js.map
