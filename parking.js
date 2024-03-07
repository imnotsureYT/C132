img = "";

status = "";
result1 = "";
result2 = "";
result3 = "";
result4 = "";
result5 = "";

results1X = 0;
results1Y = 0;
results1W = 0;
results1H = 0;

results2X = 0;
results2Y = 0;
results2W = 0;
results2H = 0;

results3X = 0;
results3Y = 0;
results3W = 0;
results3H = 0;

results4X = 0;
results4Y = 0;
results4W = 0;
results4H = 0;

results5X = 0;
results5Y = 0;
results5W = 0;
results5H = 0;

function preload()
{
    img = loadImage('park.png');
}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw()
{
    image(img, 0, 0, 640, 480);
    text(result1, results1X, results1Y);
    text(result2, results2X, results2Y);
    text(result3, results3X, results3Y);
    text(result4, results4X, results4Y);
    text(result5, results5X, results5Y);
    canvas.center();
    stroke('#FF0000');
    fill('#FF0000');
    noFill();
    rect(results1X, results1Y, results1W, results1H);
    rect(results2X, results2Y, results2W, results2H);
    rect(results3X, results3Y, results3W, results3H);
    rect(results4X, results4Y, results4W, results4H);
    rect(results5X, results5Y, results5W, results5H);
}

function modelLoaded()
{
    console.log('Model Loaded');
    status = true;
    objectDetector.detect(img, gotResult);
}

function back()
{
    window.location = "index.html";
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else 
    {
        document.getElementById('num').innerHTML = "Currently detecting - "+results.length+" Objects";
        console.log(results);
        result1 = results[0].label;
        results1X = Math.round(results[0].x);
        results1Y = Math.round(results[0].y);
        results1W = Math.round(results[0].width);
        results1H = Math.round(results[0].height);

        result2 = results[1].label;
        results2X = Math.round(results[1].x);
        results2Y = Math.round(results[1].y);
        results2W = Math.round(results[1].width);
        results2H = Math.round(results[1].height);

        result3 = results[2].label;
        results3X = Math.round(results[2].x);
        results3Y = Math.round(results[2].y);
        results3W = Math.round(results[2].width);
        results3H = Math.round(results[2].height);

        result4 = results[3].label;
        results4X = Math.round(results[3].x);
        results4Y = Math.round(results[3].y);
        results4W = Math.round(results[3].width);
        results4H = Math.round(results[3].height);

        result5 = results[4].label;
        results5X = Math.round(results[4].x);
        results5Y = Math.round(results[4].y);
        results5W = Math.round(results[4].width);
        results5H = Math.round(results[4].height);
    }
}