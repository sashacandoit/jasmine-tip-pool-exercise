describe("Payments test with set up and teardown", function(){
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it("should add a new payment to allPayments on submitPaymentInfo()", function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    })

    it("should not add a new payment on submitPaymentInfo() if input is empty", function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        submitPaymentInfo()

        expect(Object.keys(allPayments).length).toEqual(0);
    })

    it("should update paymentTable with appendPaymentTable()", function() {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        
        appendPaymentTable(curPayment);

        let curTableData = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTableData.length).toEqual(3);
        expect(curTableData[0].innerText).toEqual("$100");
        expect(curTableData[1].innerText).toEqual("$20");
        expect(curTableData[2].innerText).toEqual("20%");
    })

    

      afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
      });

})
