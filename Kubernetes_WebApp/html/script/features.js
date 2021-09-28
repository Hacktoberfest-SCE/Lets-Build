function op() {
        var xhr = new XMLHttpRequest();
        i=document.getElementById("box1").value
        xhr.open("GET","http://192.168.43.85/cgi-bin/code.py?x="+i,true);
        xhr.send();

        xhr.onload=function(){
            var output = xhr.responseText;
        document.getElementById('output').innerHTML = output;
        }
    }


function ld1(name , image) {
        var xhr = new XMLHttpRequest();
        name=document.getElementById("depl-l").value
        image=document.getElementById("depl-img").value

        xhr.open("GET",`http://192.168.43.85/cgi-bin/launchdeploy.py?deployname=${name}&deployimage=${image}`,true);
        xhr.send();

        xhr.onload=function(){
            var output = xhr.responseText;
        document.getElementById('output').innerHTML = output;
        }
    }


function dscale(name , num) {
        var xhr = new XMLHttpRequest();
        name=document.getElementById("d-scale").value
        no=document.getElementById("scale-num").value

        xhr.open("GET",`http://192.168.43.85/cgi-bin/scaledeploy.py?deploy_name=${name}&replicas=${no}`,true);
        xhr.send();

        xhr.onload=function(){
            var output = xhr.responseText;
        document.getElementById('output').innerHTML = output;
        }
    }

    function exposeDeploy1(name , image) {
        var xhr = new XMLHttpRequest();
        name=document.getElementById("exp-name").value
        port=document.getElementById("exp-port").value

        xhr.open("GET",`http://192.168.43.85/cgi-bin/exposedeploy.py?expose_deployname=${name}&expose_port=${port}`,true);
        xhr.send();

        xhr.onload=function(){
            var output = xhr.responseText;
        document.getElementById('output').innerHTML = output;
        }
    }



function listPods() {
    var xhr = new XMLHttpRequest();
    i = "kubectl get pods"
    xhr.open("GET", "http://192.168.43.85/cgi-bin/code.py?x="+i,true);
    xhr.send();
    xhr.onload = function() {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}
function listDeploy(){
    var xhr = new XMLHttpRequest();
    i = "kubectl get deploy"
    xhr.open("GET", "http://192.168.43.85/cgi-bin/code.py?x="+i,true);
    xhr.send();
    xhr.onload = function() {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}
function listSvc(){
    var xhr = new XMLHttpRequest();
    i = "kubectl get svc"
    xhr.open("GET", "http://192.168.43.85/cgi-bin/code.py?x="+i,true);
    xhr.send();
    xhr.onload = function() {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}
function delRes(){
    var xhr = new XMLHttpRequest();
    i = "kubectl delete all --all"
    xhr.open("GET", "http://192.168.43.85/cgi-bin/code.py?x="+i,true);
    xhr.send();
    xhr.onload = function() {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}
