
/*Chapter 2 Summary

    Comments are ignored by programs, making the program easier to read/understand
    Data types = basic building blocks of all JS programs
        Types: strings, symbols, numbers, booleans, undefined, and null
        Non-primitive data types have type of 'object'
            arrays, functions, and objects
    Variables point to values stored in memory using 'const' or 'let' operator
        Values are assigned using '='
    Strings and numbers have several methods to provide info about them
    Symbols are unique, immutable values
    Boolean = true xor false
        Only 7 values in Javascript are false, known as 'falsy' values
    Data types can be converted into other data types
    Type coercion = when JS converts one data type into another to perform an operation
    Logical operators are used to check if compound statements are true or false
    Values are comparable to see if they're greater, less than, or equal to others

    Next chapter: data structures, logic, and loops

*/



//The notes below were from following along, but it's all comments and only works in terminal
    //enter 'node' to properly boot up terminal for JS code


//Command:                  //Output:

console.log(typeof 'hello')              //string
console.log(typeof 10)                   //number
console.log(typeof true)                 //boolean
console.log(typeof { ninja: 'turtle' })  //object
console.log(typeof [ 1, 2, 3 ])          //object
console.log(3 + 5)                       //8


// <-- short comment tag (1 line only)
/* <-- large comment tags --> */

const message = 'Hello World!';
//alert(message)                            //alert does not work in the V.S. environment
//Output: Hello World!
//Note: Constant variables cannot be modified


{
// this is a block containing 2 statements
const message = 'Hello!';
//alert(message);
}


//values can be modified inside blocks, example:
let b = 2;
{ b = 4; console.log(b) }
//<< 4
//now:
console.log(b)
//<< 4

//print statement in terminal:
console.log('this is a sentence')


//Global variables can be changed in or out of blocks
let y = 5;
console.log(y)
{
    y = y * y;
    y = y - 2;
}
console.log(y)


//example of comparing two numbers (with a bit of string operations)
const str1 = 'Fragile';
const str2 = 'Madness'
const u = str1.length;
const v = str2.length;
if (u < v) {
    console.log('U is less than V')
}
else if (u > v) {
    console.log('U is greater than V')
}
else {
    console.log('U is equal to V')
}
//output: U is equal to V



/*BackSlashes
The backslash is used to escape special characters in strings such as:
    Single quote marks \'
    Double quote marks \"
    End of line \n
    Carriage return \r
    Tab \t 
*/

/*List of reserved words:
abstract, 
await, 
boolean
break
byte
case
catch
char
class
const
continue
debugger
default
delete
do
double
else
enum
export
extends
false
final
finally
float
for
function
goto
if
implements
import
in instanceof
int
interface
let
long
native
new
null
package
private
protected
public
return
short
static
super
switch
synchronized
this
throw
throws
transient
true
try
typeof
var
volatile
void
while
with
yield
*/
