// Code your solution here
function findMatching(listOfNames,name){

    return listOfNames.filter(e => e.toLowerCase()==name.toLowerCase())

}
function fuzzyMatch(listOfNames,name) {

    return listOfNames.filter(e=> e.charAt(0) == name.charAt(0))
}


function matchName(listOfNames,name){

    return listOfNames.filter(e=> e.name == name)
}