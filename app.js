function buttonClick(){
let queryloc = document.querySelector('#lock').value
const url = "https://fr.wikipedia.org/w/api.php?action=opensearch&search="+ queryloc +"&format=json&origin=*"

 const init = {
   method: 'GET',
   mode: 'cors'
 }

 fetch(url,init)
    .then(response => response.json()).then(data => {
      for(var i=0; i<data[1].length; i++){
       var ul = document.querySelector('#zone')
       var li = document.createElement('li')
       var a =  document.createElement('a')
       var d =  document.createElement('div')
       var p =  document.createElement('p')

       d.classList.add('green')

       a.href = data[3][i]
       a.innerHTML = data[1][i]
       d.innerHTML = data[3][i]
       p.innerHTML = data[2][i]

       li.appendChild(a)
       li.appendChild(d)
       li.appendChild(p)

       ul.appendChild(li)
       
      }
    })
}


