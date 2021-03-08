async function buttonClick(){

 let queryloc = document.querySelector('#lock').value

 let ul = document.querySelector('#zone')
 if(queryloc){
  ul.innerHTML = ''
 }

 const url = "https://fr.wikipedia.org/w/api.php?action=opensearch&search="+ queryloc +"&format=json&origin=*"

 const init = {
   method: 'GET',
   mode: 'cors'
 }

  try{
   let response = await fetch(url,init)

   if(response.ok){
    let data = await response.json()
 
    for(var i=0; i<data[1].length; i++){
     let li = document.createElement('li')
     let a =  document.createElement('a')
     let d =  document.createElement('div')
     let p =  document.createElement('p')
    
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
     
   }else{
     alert('Erreur')
   }

  }catch{
     alert('Erreur')
  }
  
  
}






