function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cO7ThWz6j/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}