
//budget controller
var budgetController = (function(){
 //some code
 var Expense = function(id,description,value){
     this.id = id;
     this.description = description;
     this.value = value,
     this.percentage = -1;
 }

Expense.prototype.calculatePercentage = function(inc){
    if(inc > 0){
        this.percentage = Math.round((this.value/inc) * 100);
    } else {
        this.percentage = -1;
    }
}
Expense.prototype.getPercentage = function(){
    return this.percentage;
}

 var Income = function(id,description,value){
    this.id = id;
    this.description = description;
    this.value = value
}

var calculateTotal = function(type){
    var sum = 0;
    data.allItems[type].forEach(function(current){
        sum +=current.value;
    })
    data.total[type] = sum;
}

var data = {
    allItems:{
        exp:[],
        inc:[]
    },
    total:{
        exp:0,
        inc:0
    },
    budget:0,
    percentage:-1
}

return {
    addItem: function(type,des,val){
        var newItem,ID;
        if(data.allItems[type].length > 0){
            ID = data.allItems[type][data.allItems[type].length-1].id + 1;
        } else {
            ID = 0;
        }
        
        if(type ==='exp'){
            newItem = new Expense(ID,des,val);
        } else if(type ==='inc'){
            newItem = new Income(ID,des,val);
        }
        data.allItems[type].push(newItem);

        return newItem;
    },
    deleteItem:function(type,id){
        var index,ids;
        var ids = data.allItems[type].map(function(current){
            return current.id;
        })

        index = ids.indexOf(id);
        if(index !== -1){
            data.allItems[type].splice(index,1);
        }

    },
    calculateBudget:function(){
        //caluculate income and expensed
        calculateTotal('exp');
        calculateTotal('inc');
        //calculate income - expenses
        data.budget = data.total.inc - data.total.exp;
        //calculate percentage
        if(data.total.inc > 0){
            data.percentage = Math.round(100 * (data.total.exp / data.total.inc));
        } else {
            data.percentage = -1;
        }
    },
    calculatePercentages:function(){
        data.allItems.exp.forEach(function(cur){
            cur.calculatePercentage(data.total.inc);
        })
    },
    getPercentages:function(){
        var allPerc = data.allItems.exp.map(function(cur){
            return cur.getPercentage();
        });
        return allPerc;
    },
    getBudget:function(){
        return {
            budget:data.budget,
            totalInc:data.total.inc,
            totalExp:data.total.exp,
            percentage:data.percentage
        }
    },
    testing:function(){
        return data;
    }
}

})();

//UI controller
var UIController = (function(){
    //some code later

    var DOMStrings = {
        inputType:'.add__type',
        inputDescription:'.add__description',
        inputValue:'.add__value',
        inputBtn:'.add__btn',
        incomeContainer:'.income__list',
        expensesContainer:'.expenses__list',
        budgetLabel:'.budget__value',
        incomeLabel:'.budget__income--value',
        expensesLabel:'.budget__expenses--value',
        percentageLabel:'.budget__expenses--percentage',
        containter:'.container',
        percentagesLabel:'.item__percentage',
        date:'.budget__title--month'
    }

    var formatNumber = function(num,type){
        var numSplit, int, dec;
        num = num.toFixed(2);
        numSplit = num.split('.');
        int = numSplit[0];
        if(int.length > 3){
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3,3);
        }
        dec = numSplit[1];

        return (type === 'exp'?'-':'+') + ' ' + int + "." + dec;
    }
    function nodeListForeEach(fields,callBack){
        for(var i = 0; i < fields.length; i++){
            callBack(fields[i], i);
        }
    }

    return {
        getInput:function(){
            return {
                type:document.querySelector(DOMStrings.inputType).value,
                description:document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },
        addItemList:function(obj,type){

            var html,newHtml,element;
            //create html string with a place hoolder in in
            if(type === 'inc'){
                element = DOMStrings.incomeContainer;
                html = `
                <div class="item clearfix" id="inc-%id%">
                <div class="item__description">%description%</div>
                <div class="right clearfix">
                    <div class="item__value">%value%</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>`  
            } else if(type === 'exp'){
                element = DOMStrings.expensesContainer;
                html = `
                        <div class="item clearfix" id="exp-%id%">
                            <div class="item__description">%description%</div>
                            <div class="right clearfix">
                                <div class="item__value">%value%</div>
                                <div class="item__percentage">21%</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>`
            }

            //fill data in the html

            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',formatNumber(obj.value,type));

            //attatch the reated html to the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
        },
        clearFields:function(){
            var fields,arrayFields;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ", " + DOMStrings.inputValue);
            // fields.forEach(function(current,index,array){
            //     current.value = "";
            // })
            // fields[0].focus();
            arrayFields = Array.prototype.slice.call(fields);
            arrayFields.forEach(function(current,index,array){
                current.value = "";
            });
            arrayFields[0].focus();
        },
        displayBudget:function(obj){

            var type;

            obj.budget >= 0 ?(type = 'inc'): (type = 'exp');

            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget,type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc,'inc');;
            document.querySelector(DOMStrings.expensesLabel).textContent = formatNumber(obj.totalExp,'exp');;

            if(obj.percentage > 0){
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage +"%";
            } else {
               document.querySelector(DOMStrings.percentageLabel).textContent = "---";
            }
        },
        displayPercentages:function(percentages){
            var fields = document.querySelectorAll(DOMStrings.percentagesLabel)
            nodeListForeEach(fields,function(current,index){
                if(percentages[index] > 0){
                    current.textContent = percentages[index] + "%";
                } else {
                    current.textContent = "---";
                }
            });
        },
        deleteListItem:function(selectorId){
            var el = document.getElementById(selectorId);
            el.parentNode.removeChild(el);
        },
        displayDate:function(){
            var now, months, month, year;
            now = new Date();
            year = now.getFullYear();
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            month = months[now.getMonth()];
            document.querySelector(DOMStrings.date).textContent = month + " " + year;
        },
        changedType:function(){
            var fields = document.querySelectorAll(
                DOMStrings.inputType + ", " +
                DOMStrings.inputDescription + ", " +
                DOMStrings.inputValue
            );
            nodeListForeEach(fields,function(cur,index){
                cur.classList.toggle('red-focus');
            })
            document.querySelector(DOMStrings.inputBtn).classList.toggle('red');
        },
        getDOMStrings:function(){
            return DOMStrings;
        }
    }

})();

//global controller
var controller = (function(budgetCtrl,UICtrl){

    var setupEventListeners = function(){

        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

        document.addEventListener('keypress',function(event){
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        })
        document.querySelector(DOM.containter).addEventListener('click',ctrDeleteItem);
        document.querySelector(DOM.inputType).addEventListener('change',UICtrl.changedType);

    }

    var updateBudget = function(){
        //1.calculate the budget
        budgetCtrl.calculateBudget();
        //2.return the budget
        var budget = budgetCtrl.getBudget();
        //3.display the budget to the UI
        UICtrl.displayBudget(budget);
    }
    var updatePercentages = function(){
        //1.caluculate percentage
        budgetController.calculatePercentages();
        //2.get percentages
        var percs = budgetController.getPercentages();
        //3.update the ui
        UICtrl.displayPercentages(percs);
    }
    var ctrlAddItem = function(){
        var input,newItem;

        // 1.get the field data

         input = UICtrl.getInput();

         if(input.description !=="" && input.value !== NaN && input.value > 0){
        //2.add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type,input.description,input.value);
        //3.add the item to the UI
        UICtrl.addItemList(newItem,input.type);

        //clearFields

        UICtrl.clearFields();

        //update and calculate the budget

        updateBudget();

        //calculate and update percentages
        updatePercentages();
       }
    }

    function ctrDeleteItem(event){
        var itemID, splitId, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemID){
            splitId = itemID.split('-');
            type = splitId[0];
            ID = parseInt(splitId[1]);
            //delete Item from data structure
            budgetCtrl.deleteItem(type,ID)
            //delete Item from the UI
            UICtrl.deleteListItem(itemID);
            //update budget controller
            updateBudget();

            //calculate and update percentages
            updatePercentages();
        }
    }

    return {
        init:function(){
            console.log("application Started");
            UICtrl.displayDate();
            UICtrl.displayBudget({
                budget:0,
                totalInc:0,
                totalExp:0,
                percentage:-1
            });
            setupEventListeners();
        }
    }

})(budgetController,UIController);

controller.init();