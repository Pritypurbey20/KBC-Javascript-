function que_list(){
    question_list = [
        "1)How many continents are there?",             
        "2)What is the capital of India?",            
        "3)NG mei kaun se course padhaya jaata hai?"
    ]
    return question_list
}
var que = que_list()

function opt_list(){
    option_list = [
                ["1.Four", "2.Nine", "3.Seven", "4.Eight"],
                ["1.Chandigarh", "2.Bhopal", "3.Chennai", "4.Delhi"],
                ["1.Software Engineering", "2.Counseling", "3.Tourism", "4.Agriculture"]
            ]
            return option_list
}
var ope = opt_list()

function answer_list(){
    ans_list=[3, 4, 1]
    return ans_list
}
var answer=answer_list()

function lifeline(){
    option_list1=[["1.Nine","2.Seven"],["1.Delhi","2.Chennai"],["1.Software Engineering","2.Counseling"]]
    return option_list1
}
var life=lifeline()

function answer_list1(){
    ans_list =[2,1,1]
    return ans_list
}
var answer1=answer_list1()


var sum = 0
var i = 0
var index = 1
var count = 1                                                              

const n = require("readline-sync")

while (i<que.length){
    console.log(que[i])
    var j = 0
    var index1 = 1
    while (j<ope[i].length){
        console.log(ope[i][j])
        index1++
        j++
    }
    if (count<=1){
        var lifeline2 = n.question("Do you want to use lifeline??(yes/no): ")
        if (lifeline2=="yes"){
            var k = 0
            var index3 = 1
            while (k<life[i].length){
                console.log(life[i][k])
                index3++
                k++
            }
            var num = n.question("Enter your answer: ")
            if (num==answer1[i]){
                sum = sum+20000
                console.log("Congrats!! Your answer is correct..You won",sum)
            }else{
                console.log("Sorry!! Your answer is incorrect..You won",sum)
                break 
            }
            count++
        }else{
            var num = n.question("Enter your answer: ")
            if (num==answer[i]){
                sum = sum+200000
                console.log("Congrats!!Your answer is correct..You won",sum)
            }else{
                console.log("Sorry!!Your answer is incorrect..You won",sum)
                break
            }
        }
    }else{
        var num = n.question("Enter your answer: ")
        if(num==answer[i]){
            sum = sum + 200000
            console.log("Congrats !! Your answer is correct..You won",sum)
        }else{
            console.log("Sorry!! Your answer is incorrect..You won",sum)
            break
        }
    }
    index++
    i++
}console.log("Thanks for playing.")
