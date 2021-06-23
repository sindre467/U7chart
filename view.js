var contentDiv = document.getElementById('content');

    show();
    function show() {
      let svgInnerHtml = "";
      for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
      }
      contentDiv.innerHTML = `
        <svg id="chart" width="590" viewBox="0 0 60 60"> ${svgInnerHtml}
        </svg><br/>
        valgt stolpe: <i>${chosenBar !== undefined ? chosenBar : ""}</i>
        <div id="error" style="color: red; font-size: 18px">
        ${error}
        <br/>  
             Verdi: <input type="number" min="1" max="10" 
             oninput="inputValue=this.value" value="${inputValue}" />
             <br>
             <button onclick="addBar()">Legg til stolpe</button> <br>
             <button ${chosenBar !== undefined ? "" : "disabled"} 

             onclick="removeBar()">remove</button> 
             <br>

             <button
             ${unavailableBars} 
             onclick="editBar()">Edit</button> <br>
             <br/>
         </div>
             `;
     }
     function createBar(number, barNo) {
      const width = 7;
      const spacing = 2;
      let x = (barNo - 1) * (width + spacing);
      let height = number * 10;
      let y = 60 - height;
      let color = calcColor(1, 90, barNo);
      let stroke = chosenBar === barNo ? 'stroke: grey' : "";
      return `<rect   x="${x}" y="${y}"
                     width="${width}" 
                   height="${height}"
                    style="${stroke}"
                      fill="${color}"
           onclick="selectB(${barNo})"></rect>`;
    }
    function calcColor(min, max, val) {
        var minHue = 240, maxHue = 10;
        var curPercent = (val - min) / (max - min);
        var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",10%,50%)";
        return colString;

    }

  
