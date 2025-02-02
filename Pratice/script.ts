function checkDay() {

    let day: string = prompt("Enter Any Number Between 1 To 7") || "";

       let dayNumber:number = Number(day);

    switch (dayNumber) {
        case 1:
            console.log("It's Monday");
                break;
    
        case 2:
            console.log("It's tuesday");
                break;
    
        case 3:
            console.log("It's Wednesday");
                break;
    
        case 4:
            console.log("It's Thursday");
              break;

        case 5:
            console.log("It's Friday");
                break;
    

        case 6:
            console.log("It's Saturday");
                break;
    
        case 7:
            console.log("It's Sunday");
                break;
    
        default:
            console.log(`${day} It's Not A Day`);
            
    }
}


function CheckMonthDays() {
        
    let inputMoth:any = prompt("Enter Month Or Month Number") || "";

    inputMoth = inputMoth.toLowerCase();

    // If User Input 1 Or January


    switch  (inputMoth) {

            case"january":
                case'1':
                     console.log("January: Have 31 Days");
        
        break;
    

    // If User Input 2 Or February

        case "february" :
            case "2" :
                console.log("February: have 29 Days In 2025 Year");
        break;
    
    
      // If User Input 3 Or March 

        case "march":
            case "3" :
                console.log("March: have 31 Days");
                     break;


 // If User Input 4 Or April

        case "april":
             case "4":
                 console.log("April: have 30 Days");
                    break;

    // If User Input 5 Or May

            case "may":
                case "5":
                    console.log("May: have 31 Days");
                         break;

     //If User Input 6 Or June

            case "june":
                case "6":
                    console.log("June: have 30 Days");
                        break;
                            

     // If User Input 7 Or July

            case "july":
                case "7":
                    console.log("July: have 31 Days");
                         break;                        


     // If User Input 8 Or August

            case "august":
                case "8":
                    console.log("August: have 31 Days");
                    break;


     // If User Input 9 Or September

            case "september":
                case "9":
                    console.log("September: have 30 Days");
                        break;
                

     // IF User Input 10 Or October

            case "october":
                case "10":
                    console.log("October: have 31 Days");
                         break;
                        


     // If User Input November Or 11

            case "november":
                 case "11":
                     console.log("November: Have 30 Days");
                        break;
                        

      // IF User Input December OR 12

            case  "december":
                case "12":
                    console.log("December: have 31 Days");
                          break;                        


      // If No Condition Match Then

            default:
                console.log(`It Isn't A Number:  ${inputMoth}`);
                

}
}



// Write A Function That Calculate The Bill Amount Based On Units And User Type
// base Unit rate is 40rs
// tax if unit is 0 to 200 , 1.5%
// tax if unit is 200 to 500 , 5.5%
// tax if unit is 500+ , 10.5%
// if costumer is Wapda Employee give them 100 units free every month



function billCalculator(){

    let userUnits:string = prompt("Enter Your Units") || "";

    let userInfo : string = prompt(`type "Y" For Wapda Employee And Type "N" For Not A Wapda Employee `) || "";

    let billAmount:number = Number(userUnits)


    if (userInfo.toLowerCase() === "y" && billAmount <= 100) {
        console.log(`Your Bill Amount Is 0`);

    }

    else if (userInfo.toLowerCase() === "y" && billAmount >= 100 && billAmount < 200) {
        let calculateBill:number = (billAmount - 100) * 40 /0.015;
        console.log(`Your Bill Amount Is ${Math.ceil(calculateBill)}`);
        
    }
        else if (userInfo.toLowerCase() === "y" && billAmount >= 200 && billAmount < 500) {
        let calculateBill:number = (billAmount - 100) * 40 /0.055;
        console.log(`Your Bill Amount Is ${Math.ceil(calculateBill)}`);
        }

              else if (userInfo.toLowerCase() === "y" && billAmount >= 500) {
        let calculateBill:number = (billAmount - 100) * 40 /0.105;
        console.log(`Your Bill Amount Is ${Math.ceil(calculateBill)}`);
        }



    else if (userInfo.toLowerCase() === "n" && billAmount >= 1 && billAmount < 200) {
        let calculateBill:number = (billAmount * 40) / 0.015;
        console.log(`Your Bill Amount Is ${Math.ceil(calculateBill)}`);
    }



    else if (userInfo.toLowerCase() === "n" && billAmount >= 200 && billAmount < 500) {
        let calculateBill:number = (billAmount * 40) / 0.055;
        console.log(`Your Bill Amount Is ${Math.ceil(calculateBill)}}`);
    }


    else if (userInfo.toLowerCase() === "n" && billAmount > 500) {
        let calculateBill:number = (billAmount * 40) / 0.105;
        console.log(`Your Bill Amount Is ${Math.ceil(calculateBill)}`);
    }

        else {
            console.log("Invalid Input");
            
        }


}billCalculator();