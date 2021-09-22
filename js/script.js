var data = [
    ['PATH11','DKI Jakarta',500,300,10],
    ['PATH14','Banten',400,200,20],
    ['PATH12','Jawa Barat',300,100,6],
    ['PATH13','Jawa Tengah',300,200,7],
    ['PATH16','Yogyakarta',100,50,8],
    ['PATH15','Jawa Timur',400,200,10],
  ];



 function showData(){
    var listdata = document.getElementById("item");

    //clear list barang
    listdata.innerHTML = "";
    var table_awal = "<tr><th>Region</th><th>Infected</th><th>Recover</th><th>Death</th></tr>";
    listdata.innerHTML += table_awal;


    //print list data on page
    for(let i=0;i<data.length;i++){
    
        var region  = "<tr><td>"+data[i][1]+"</td>";
        var infected  = "<td>"+data[i][2]+" People</td>";
        var recover = "<td>"+data[i][3]+" People</td>";
        var death = "<td>"+data[i][4]+" People</td></tr>";
        var item = region+infected+recover+death;          
                   
        listdata.innerHTML += item;
        }
    }


showData();