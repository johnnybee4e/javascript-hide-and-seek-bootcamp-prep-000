function getFirstSelector(selector) {
  var element = document.querySelector(selector)
  return element
}

function nestedTarget() {
  var divElement = document.querySelector('div#nested div.target')
  return divElement
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for(var i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children

    for(var j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild(){
  let node = document.querySelector('div#grand-node')
  let nextNode = node.children[0]

  while(nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
    return node
  }
