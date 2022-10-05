let arrayEx: string[] = ["Arman ", "Charlie ", "Brownie ", "Willi" ]


for(let i = 0; i < arrayEx.length; i++){
    console.log(i.toString())
}

for(let i = 0; i < arrayEx.length; i++){
    console.log(arrayEx[i])
}

arrayEx.forEach(function(name,index){
    console.log(name,index)
})