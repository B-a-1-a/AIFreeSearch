const google = document.getElementsByClassName("M8OgIe")
const bing = document.getElementsByClassName("b_ans b_top b_topborder")


let elements = google.length > 0 ? google : bing;
while (elements.length > 0) {
    elements[0].remove();
}

// M8OgIe - Google
// b_ans b_top b_topborder - Bing