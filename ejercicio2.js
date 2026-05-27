const metros = 2500;

if (metros <= 1000) {console.log ('ir de a pie');}
    else if (metros > 1000 && metros <= 10000) {console.log ('ir en bicicleta');}
        else if (metros > 10000 && metros <= 30000) {console.log ('ir en colectivo');}
            else if (metros > 30000 && metros <= 100000) {console.log ('ir en auto');}
                else {console.log ('ir en avión');
                }
