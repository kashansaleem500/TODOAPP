
var getul = document.getElementById('ul')
function abc(){
    var a = document.getElementById('inp')
    var li = document.createElement('li')
    var litext = document.createTextNode(a.value)
    li.appendChild(litext)
    getul.appendChild(li)
    a.value = ''
    var delbtn = document.createElement('button')
    var delbtnText = document.createTextNode('Delete')
    delbtn.appendChild(delbtnText)
    li.appendChild(delbtn)
    delbtn.setAttribute('onclick','dee(this)')
    var editbtn = document.createElement('Button')
    var editbtnText = document.createTextNode('Edit')
    editbtn.appendChild(editbtnText)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick','edfun(this)')
    // document.getElementById('ab').disabled = true
    delbtn.setAttribute('class','btn btn-warning bta')
    editbtn.setAttribute('class','btn btn-info bta')
    // if (inp.value == ''){
    //     li.style.display='none'
    // }
    // else if(inp.value == a.value){
    //     li.style.display.show = a.value
    // }
    
}

function deall(){
    getul.innerHTML = ''
        // document.getElementById('ab').disabled = false
}

function dee(e){
    e.parentNode.remove()
}

function edfun(e){
    var a = prompt('Enter Edit Value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
}







