let btnSubmit = document.querySelector('#btn2');
btnSubmit.onclick = (event) => {
    event.preventDefault();

    let nameOfOrg = document.querySelector('#nameOfOrg').value;
    let position = document.querySelector('#position').value;
    let SalaryPerMonth = document.querySelector('#SalaryPerMonth').value;
    let SalaryForLast = document.querySelector('#SalaryForLast').value;
    let BuyingPhone = document.querySelector('#BuyingPhone').value;
    let CostOfGoods = document.querySelector('#CostOfGoods').value;
    let QuantityOGoods = document.querySelector('#QuantityOGoods').value;
    let TotalLoanAmount= document.querySelector('#TotalLoanAmount').value;
    let LoanType = document.querySelector('#LoanType').value;
    let CreditTerm = document.querySelector('#CreditTerm').value;
    let PickupPoint = document.querySelector('#PickupPoint').value;


    let object = {
        nameOfOrg:nameOfOrg,
        position: position,
        SalaryPerMonth: SalaryPerMonth,
        SalaryForLast:SalaryForLast,
        BuyingPhone: BuyingPhone,
        CostOfGoods:CostOfGoods,
        QuantityOGoods:QuantityOGoods,
        TotalLoanAmount: TotalLoanAmount,
        LoanType:LoanType,
        CreditTerm: CreditTerm,
        PickupPoint: PickupPoint
    }
    console.log(object)
}