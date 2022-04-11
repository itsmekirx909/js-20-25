//chap 21-25

// Q1
// var firstName = prompt('Enter first name')
// var lastName = prompt('Enter last name')
// var fullName = firstName + ' ' + lastName

// alert('Welcome ' + fullName )

// Q2
// var favMob = prompt('Your favourite phone model')

// alert('My favourite phone is ' + favMob + '\n' + 'Length of string is: ' + favMob.length)

// Q3
// var string = 'Pakistani'
// alert('String = ' + string + '\nIndex of "n": ' + string.indexOf('n') )

// Q4
// var string = 'Hello World'
// alert('String = ' + string + '\nLast index of "l": ' + string.lastIndexOf('l') )

// Q5
// var string = 'Pakistani'
// alert('String = ' + string + '\nCharacter at 3rd index: ' + string.charAt(3) )

// Q6
// var firstName = prompt('Enter first name')
// var lastName = prompt('Enter last name')
// var fullName = firstName.concat(lastName)

// alert('Welcome ' + fullName )

// Q7
// var first = 'Hyderabad'
// var second = 'Islam'

// var final = second.concat(first.slice(5))
// alert('String = ' + first + '\nAfter replacement: ' + final )

// Q8
// var message = 'Ali and Sami are best friends. They play cricket and football together.';

// for(var i = 0 ; i < message.length ; i++){
//     if(message.slice(i , i+3) == 'and'){
//         msg = message.slice(0 , i) + '&' + message.slice(i +3)
//     }

// }
// alert(msg)

// Q9
// var num = '472'
// document.write('Value: ' + num + '<br/>' + 'Type: ' + typeof num + '<br/><br/>')

// var num1 = Number(num)
// document.write('Value: ' + num1 + '<br/>' + 'Type: ' + typeof num1)

// Q10
// var inp = prompt('Enter input');
// var cap = inp.toUpperCase()
// alert('User input: ' + inp + '\nUpper case: ' + cap)

// Q11
// var inp = prompt('Enter input');
// var firstCap = inp.charAt(0).toUpperCase()
// var cap = firstCap + inp.slice(1)
// alert('User input: ' + inp + '\nUpper case: ' + cap)

// Q12
// var num = 35.36
// var string = num.toString()
// alert('First number: ' + num + '\nResult: ' + string.replace('.' , ''))

// Q13
// var name = prompt('Enter name')
// var isTrue = false

// for (var i = 0; i < name.length; i++) {
//     if (username.slice(i, i + 1) == String.fromCharCode(33)) {
//         alert('Invalid username')
//         isTrue = true
//     }
// }
// if(isTrue == false){
//     alert('Welcome')
// }

// Q14
// var arr = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties']
// var userInp = prompt('Welcome! What do you want')
// var userInpCap = userInp.toLowerCase()

// var ifTrue= false
// for(i = 0 ; i < arr.length ; i++){
//     if(userInpCap === arr[i]){
//         alert(arr[i] + ' is availabe at ' + i + ' index')
//         var ifTrue= true
//     }
// }
// if(ifTrue == false){
//     alert('Not found')
// }

// Q15

// Q16
// var string = 'University of Karachi'
// var arr = string.split('')
// console.log(arr)

// Q17
// var userInp = prompt('Enter input')
// var last = userInp.slice(-1)
// alert('Last character of input: ' + last)

// Q18
