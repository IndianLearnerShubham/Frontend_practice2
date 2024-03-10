
    function Sal() {
        salary = document.getElementById("Salary").valueAsNumber;
        var HRA=parseFloat(salary)*0.1
        var Com=parseFloat(salary)*0.12
        var PF=parseFloat(salary)*0.07
        var netsal=salary-(HRA+Com+PF)
        
        document.getElementById("demo").innerHTML="HRA="+HRA+'<br>'+"Commission="+Com+'<br>'+"PF="+PF+'<br>'+"Net salary="+netsal

    }
