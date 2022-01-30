function swap(imh,vid) {
	var x1 = imh.parentNode,
		x2 = vid.parentNode,
		i1,
		i2;

	if (!x1|| !x2 || x1.isEqualNode(vid) || x2.isEqualNode(imh)) return;

	for (var i = 0; i < x1.children.length; i++) {
		if (x1.children[i].isEqualNode(imh)) {
			i1 = i;
		}
	}
	for (var i = 0; i < x2.children.length; i++) {
		if (x2.children[i].isEqualNode(vid)) {
			i2 = i;
		}
	}

	if (x1.isEqualNode(x2) && i1 < i2) {
		i2++;
	}
	x1.insertBefore(vid, x1.children[i1]);
	x2.insertBefore(imh, x2.children[i2]);
}

var aNode = document.querySelector(".imh");
var bNode = document.querySelector(".vid");


        function audioremove() {
        var myobj = document.getElementById("audi");
        myobj.remove();
        }

        function myFunction() {
        const node = document.createElement("li");
        const textnode = document.createTextNode("the secret of the jungle");
        node.appendChild(textnode);
        document.getElementById("mylist").appendChild(node);}
        
        let clip = document.querySelector(".vid")
  
        clip.addEventListener("mouseover", function (e) {
            clip.play();
        })

        clip.addEventListener("mouseout", function (e) {
            clip.pause();
        })
