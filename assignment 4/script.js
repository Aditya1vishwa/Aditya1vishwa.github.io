var names =new Array();

names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[0]="Jason";
names[3]="jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[8]="jim";

for (var i=0;i< names.length;i++){
    if(names[i].charAt(0)=='j'||names[i].charAt(0)=='J'){
        console.log("Goodbye"+names[i])}
    else{console.log("Hello"+names[i])}}
