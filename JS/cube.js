


  const position = document.getElementById('position');
  const grid_el = document.getElementById('grid');
  

  
 




const grid = () =>{
let num = 0
let xy = []
grid_el.innerHTML = ''

let row = document.getElementById('row').value;
let col = document.getElementById('col').value;

grid_el.style.gridTemplateColumns= 'repeat('+col+',50px)'
grid_el.style.gridTemplateRows='repeat('+row+',50px)'

  for(let i=0; i<row;i++)
    {
      for(let j=0; j<col;j++)
        {
          let cube = document.createElement('div')
          cube.className = "cube"
          cube.innerText = num
          grid_el.append(cube)
          num++
          xy.push(""+i+","+j+"")
        }

    }


    document.querySelectorAll("div.cube").forEach(el => el.addEventListener("click", ()=>{
     
      position.innerText = "Cube position is: " + xy[el.innerText]
    }))


}
