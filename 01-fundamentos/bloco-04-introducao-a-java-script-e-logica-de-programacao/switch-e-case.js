let statusCandidato = "cansado"

switch (statusCandidato){
    case "aprovado":
        console.log("Parabéns, você foi aprovado!");
        break;
    
    case "reprovado":
        console.log("Sinto muito, não foi dessa vez!")
        break;
    
    case "lista":
        console.log("Você esta na lista de espera!")
        break;
    
    default:
        console.log("Não se aplica.")
}