import React from 'react'
import ReactDOM from 'react-dom/client'

      var obj=new Date()
      var day=obj.getDay()
alert(day)
if(hr<=12){
document.write("good morning")
}else if(hr>=12.5){
    document.write("good afternoon")
}else if(hr>5){
    document.write("good eveing")
}else if(day==4){
    document.write("thurday")
}else if(day==5){
    document.write("friday")
}else if(day==6){
    document.write("saturday")
}
else if(day==7){
    document.write("sunday")

}

     
   
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<>

<h2>{hr}</h2>
 </>
)
    