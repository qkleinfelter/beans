let bean = document.getElementById("bean");
let beans = 0;
bean.onclick = () => {
    beans++;
    if(beans > 1){
        document.getElementById("bean-counter").innerHTML = beans + " Beans.";
        document.getElementById("beans").innerHTML += "<img src=\"bean.png\" alt=\"bean\">"
    }else{
        document.getElementById("bean-counter").innerHTML = beans + " Bean.";
        document.getElementById("beans").innerHTML += "<img src=\"bean.png\" alt=\"bean\">"
    }
};
