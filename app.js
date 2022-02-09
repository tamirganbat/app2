// //IFEE

// // private encapsulation
// var uiController = (function(){
//     // pricate data
//     var x=100;
//     //private function
//     function add(y){
//         return x+y;
//     }

//     return{
//         publicAdd:function(a){

//         }
//     }
// })();

// // private function
// // private data
// // private encapsulation

// var financeController=(function(){
//     console.log("D");
// })();

// var appController=(function(uiController, fnController){
//     uiController.add(50);
  
// })(uiController,financeController);

// //IFEE

/*** Endees ehelj baina */

// delgetstei ajillah controller
var uiController = (function(){
    var DOMstrings={
        inputType:".add__type",
        inputDescription:".add__description",
        inputValue:".add__value",
        addBtn:".add__btn"
    }


    return {
        getInput:function(){
            return{
              type:document.querySelector(DOMstrings.inputType).value, 
              description: document.querySelector(DOMstrings.inputDescription).value,
              value:document.querySelector(DOMstrings.inputValue).value,
            };
        },

        getDOMstrings:function(){
            return DOMstrings;
        }
    };

})();

// sanhuutei ajillah controller

var financeController=(function(){

    var Income=function(id,description, value){
        this.id=id;
        this.description=description;
        this.value=value;
    };
    
    var Expense=function(id, description, value){
        this.id=id;
        this.description=description;
        this.value=value;

    };

    var data={
        allItems:{
            inc:[],
            exp:[]
        },

        totals:{
            inc=0,
            exp:0
        }
        
    }

})();

//programmin holbogch controller

var appController=(function(uiController, fnController){

    
    var ctrlAddItem=function(){
        //1. oguulah ugugdliig ddelgetsees awna
        
        console.log(uiController.getInput());
        //2. olj awsan ogogdluudee web deeree tohiroh hesegt ni gargah
        //3. Olj awsan ogogdluudee delgetsin tohiroh hesegt ni gargana
        //4. tosviig tootsoolnogd
        //5. etssiin uldegdel, tootsoot delgetsend gargana
    };
    
    var setupEventListeners=function(){

        var DOM=uiController.getDOMstrings();

        document.querySelector(DOM.addBtn).addEventListener('click', function(){
            ctrlAddItem();
        });
        document.addEventListener('keypress', function(event){
            if(event.keyCode===13 || event.which===13){
                ctrlAddItem();
            }
    
        });

    };
    return{
        init:function(){
            console.log("App has started...")
        }
    };
    
    
  
})(uiController,financeController);


appController.init();
