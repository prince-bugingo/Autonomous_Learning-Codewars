/*
Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" */

function calculateTip(amount, rating) {
    let capitalized = rating.toUpperCase();
    
    switch (capitalized) {
        case  'TERRIBLE':
        return amount*0/100;
            break;

            case  'POOR':
            return amount*5/100;
                break;

                case 'GOOD':
                return amount*10/100;
                    break;

                    case  'GREAT':
                    return amount*15/100;
                        break;

                        case 'EXCELLENT':
                        return amount*20/100;
                            break;
    
        default:
            return "Rating not recognised";
            break;
    }
    
}

console.log(calculateTip(26, "Excellent"));